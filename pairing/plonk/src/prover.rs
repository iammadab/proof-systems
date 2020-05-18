/********************************************************************************************

This source file implements prover's zk-proof primitive.

*********************************************************************************************/

use rand_core::RngCore;
use algebra::{Field, PairingEngine, UniformRand};
use oracle::rndoracle::{ProofError};
use ff_fft::{DensePolynomial, SparsePolynomial, Evaluations};
use commitment_pairing::commitment::Utils;
pub use super::index::Index;
use oracle::sponge::FqSponge;
use crate::plonk_sponge::FrSponge;

#[derive(Clone)]
pub struct ProverProof<E: PairingEngine>
{
    // polynomial commitments
    pub a_comm: E::G1Affine,
    pub b_comm: E::G1Affine,
    pub c_comm: E::G1Affine,
    pub z_comm: E::G1Affine,
    pub tlow_comm: E::G1Affine,
    pub tmid_comm: E::G1Affine,
    pub thgh_comm: E::G1Affine,

    // batched commitment opening proofs
    pub proof1: E::G1Affine,
    pub proof2: E::G1Affine,

    // polynomial evaluations
    pub evals : ProofEvaluations<E::Fr>,

    // public part of the witness
    pub public: Vec<E::Fr>
}

impl<E: PairingEngine> ProverProof<E>
{
    // This function constructs prover's zk-proof from the witness & the Index against URS instance
    //     witness: computation witness
    //     index: Index
    //     RETURN: prover's zk-proof
    pub fn create
        <EFqSponge: FqSponge<E::Fq, E::G1Affine, E::Fr>,
         EFrSponge: FrSponge<E::Fr>,
        >
    (
        witness: &Vec::<E::Fr>,
        index: &Index<E>,
        rng: &mut dyn RngCore
    ) -> Result<Self, ProofError>
    {
        let n = index.cs.domain.size();
        let mut oracles = RandomOracles::<E::Fr>::zero();
        let mut evals = ProofEvaluations::<E::Fr>::zero();

        let mut a = Evaluations::<E::Fr>::from_vec_and_domain(index.cs.gates.iter().map(|gate| witness[gate.l]).collect(), index.cs.domain).interpolate();
        let mut b = Evaluations::<E::Fr>::from_vec_and_domain(index.cs.gates.iter().map(|gate| index.cs.r*&witness[gate.r]).collect(), index.cs.domain).interpolate();
        let mut c = Evaluations::<E::Fr>::from_vec_and_domain(index.cs.gates.iter().map(|gate| index.cs.o*&witness[gate.o]).collect(), index.cs.domain).interpolate();

        // query the blinders
        let bl = (0..9).map(|_| E::Fr::rand(rng)).collect::<Vec<_>>();

        a += &SparsePolynomial::from_coefficients_slice(&[(0, bl[1]), (1, bl[0])]).mul(&index.cs.domain.vanishing_polynomial()).into();
        b += &SparsePolynomial::from_coefficients_slice(&[(0, bl[3]), (1, bl[2])]).mul(&index.cs.domain.vanishing_polynomial()).into();
        c += &SparsePolynomial::from_coefficients_slice(&[(0, bl[5]), (1, bl[4])]).mul(&index.cs.domain.vanishing_polynomial()).into();

        // commit to the a, b, c wire values
        let a_comm = index.urs.get_ref().commit(&a)?;
        let b_comm = index.urs.get_ref().commit(&b)?;
        let c_comm = index.urs.get_ref().commit(&c)?;

        // the transcript of the random oracle non-interactive argument
        let mut fq_sponge = EFqSponge::new(index.fq_sponge_params.clone());

        // absorb the public a, b, c polycommitments into the argument
        fq_sponge.absorb_g(&[a_comm, b_comm, c_comm]);

        // sample beta, gamma oracles
        oracles.beta = fq_sponge.challenge();
        oracles.gamma = fq_sponge.challenge();

        // compute permutation polynomial

        let mut denominators = (1..n).map
        (
            |j|
                (witness[index.cs.gates[j].l] + &(index.cs.sigma[0][j] * &oracles.beta) + &oracles.gamma) *&
                (witness[index.cs.gates[j].r] + &(index.cs.sigma[1][j] * &oracles.beta) + &oracles.gamma) *&
                (witness[index.cs.gates[j].o] + &(index.cs.sigma[2][j] * &oracles.beta) + &oracles.gamma)
        ).collect::<Vec<_>>();
        algebra::fields::batch_inversion::<E::Fr>(&mut denominators);

        let mut coeffs = (1..n).map
        (
            |j|
                (witness[index.cs.gates[j].l] + &(index.cs.sid[j] * &oracles.beta) + &oracles.gamma) *&
                (witness[index.cs.gates[j].r] + &(index.cs.sid[j] * &oracles.beta * &index.cs.r) + &oracles.gamma) *&
                (witness[index.cs.gates[j].o] + &(index.cs.sid[j] * &oracles.beta * &index.cs.o) + &oracles.gamma)
        ).collect::<Vec<_>>();
        (1..coeffs.len()).for_each(|i| {let x = coeffs[i-1]; coeffs[i] *= &(x * &denominators[i])});
        coeffs.insert(0, E::Fr::one());
        
        let z = &Evaluations::<E::Fr>::from_vec_and_domain(coeffs, index.cs.domain).interpolate() +
            &SparsePolynomial::from_coefficients_slice(&[(0, bl[8]), (1, bl[7]), (2, bl[6])]).mul(&index.cs.domain.vanishing_polynomial()).into();

        // commit to z
        let z_comm = index.urs.get_ref().commit(&z)?;

        // absorb the z commitment into the argument and query alpha
        fq_sponge.absorb_g(&[z_comm]);
        oracles.alpha = fq_sponge.challenge();
        let alpsq = oracles.alpha.square();

        // compute public input polynomial
        let public = witness[0..index.cs.public].to_vec();
        let p = Evaluations::<E::Fr>::from_vec_and_domain(public.clone(), index.cs.domain).interpolate();

        // compute quotient polynomial

        let t1 =
            &(&(&(&(&(&a*&(&b*&index.qm)) +
            &(&a*&index.ql)) +
            &(&b*&index.qr)) +
            &(&c*&index.qo)) +
            &p) +
            &index.qc;
        let t2 =
            (&(&(&(&a + &DensePolynomial::from_coefficients_slice(&[oracles.gamma,oracles. beta])) *
            &(&b + &DensePolynomial::from_coefficients_slice(&[oracles.gamma, oracles.beta*&index.cs.r]))) *
            &(&c + &DensePolynomial::from_coefficients_slice(&[oracles.gamma, oracles.beta*&index.cs.o]))) *
            &z).scale(oracles.alpha);
        let t3 =
            (&(&(&(&(&a + &DensePolynomial::from_coefficients_slice(&[oracles.gamma])) + &index.sigma[0]) *
            &(&(&b + &DensePolynomial::from_coefficients_slice(&[oracles.gamma])) + &index.sigma[1])) *
            &(&(&c + &DensePolynomial::from_coefficients_slice(&[oracles.gamma])) + &index.sigma[2])) *
            &DensePolynomial::from_coefficients_vec(z.coeffs.iter().skip(1).zip(index.cs.sid.evals.iter()).
                map(|(z, w)| *z * &w).collect::<Vec<_>>())).scale(oracles.alpha);
        let t4 =
            &(&z - &DensePolynomial::from_coefficients_slice(&[E::Fr::one()])) * 
            &DensePolynomial::from_coefficients_vec(vec![alpsq; n]);

        let (t, r) = (&(&(&t1 + &t2) - &t3) + &t4).divide_by_vanishing_poly(index.cs.domain).
            map_or(Err(ProofError::PolyDivision), |s| Ok(s))?;
        if r.is_zero() == false {return Err(ProofError::PolyDivision)}

        // split t to fit to the commitment
        let tlow = DensePolynomial::from_coefficients_slice(&t.coeffs[0..n]);
        let tmid = DensePolynomial::from_coefficients_slice(&t.coeffs[n..n*2]);
        let thgh = DensePolynomial::from_coefficients_slice(&t.coeffs[n*2..]);

        // commit to tlow, tmid, thgh
        let tlow_comm = index.urs.get_ref().commit(&tlow)?;
        let tmid_comm = index.urs.get_ref().commit(&tmid)?;
        let thgh_comm = index.urs.get_ref().commit(&thgh)?;

        // absorb the polycommitments into the argument and sample zeta
        fq_sponge.absorb_g(&[tlow_comm, tmid_comm, thgh_comm]);
        oracles.zeta = fq_sponge.challenge();
        let zeta2 = oracles.zeta.pow(&[index.cs.domain.size]);
        let zeta3 = zeta2.pow(&[index.cs.domain.size]);

        // compute linearisation polynomial

        evals.a = a.evaluate(oracles.zeta);
        evals.b = b.evaluate(oracles.zeta);
        evals.c = c.evaluate(oracles.zeta);
        evals.sigma1 = index.sigma[0].evaluate(oracles.zeta);
        evals.sigma2 = index.sigma[1].evaluate(oracles.zeta);
        evals.z = z.evaluate(oracles.zeta * &index.cs.domain.group_gen);

        let r1 =
            &(&(&(&index.qm.scale(evals.a*&evals.b) +
            &index.ql.scale(evals.a)) +
            &index.qr.scale(evals.b)) +
            &index.qo.scale(evals.c)) +
            &index.qc;
        let r2 =
            z.scale
            (
                (evals.a + &(oracles.beta * &evals.z) + &oracles.gamma) *
                &(evals.b + &(oracles.beta * &index.cs.r * &evals.z) + &oracles.gamma) *
                &(evals.c + &(oracles.beta * &index.cs.o * &evals.z) + &oracles.gamma) *
                &oracles.alpha
            );
        let r3 =
            index.sigma[2].scale
            (
                (evals.a + &(oracles.beta * &evals.sigma1) + &oracles.gamma) *
                &(evals.b + &(oracles.beta * &evals.sigma2) + &oracles.gamma) *
                &(oracles.beta * &evals.z * &oracles.alpha)
            );
        let r4 = z.scale(alpsq);
        let r = &(&(&r1 + &r2) - &r3) + &r4;
        evals.r = r.evaluate(oracles.zeta);

        // query opening scaler challenge
        oracles.v = fq_sponge.challenge();

        Ok(Self
        {
            a_comm,
            b_comm,
            c_comm,
            z_comm,
            tlow_comm,
            tmid_comm,
            thgh_comm,
            proof1: index.urs.get_ref().open
            (
                vec!
                [
                    &(&(&tlow + &tmid.scale(zeta2)) + &thgh.scale(zeta3)),
                    &r,
                    &a,
                    &b,
                    &c,
                    &index.sigma[0],
                    &index.sigma[1],
                ],
                oracles.v,
                oracles.zeta
            )?,
            proof2: index.urs.get_ref().open(vec![&z], oracles.v, oracles.zeta * &index.cs.domain.group_gen)?,
            evals,
            public
        })
    }
}

#[derive(Clone)]
pub struct ProofEvaluations<Fr> {
    pub a: Fr,
    pub b: Fr,
    pub c: Fr,
    pub sigma1: Fr,
    pub sigma2: Fr,
    pub r: Fr,
    pub z: Fr,
}

impl<F: Field> ProofEvaluations<F>
{
    pub fn zero () -> Self
    {
        Self
        {
            a: F::zero(),
            b: F::zero(),
            c: F::zero(),
            sigma1: F::zero(),
            sigma2: F::zero(),
            r: F::zero(),
            z: F::zero(),
        }
    }
}

pub struct RandomOracles<F: Field>
{
    pub beta: F,
    pub gamma: F,
    pub alpha: F,
    pub zeta: F,
    pub v: F,
}

impl<F: Field> RandomOracles<F>
{
    pub fn zero () -> Self
    {
        Self
        {
            beta: F::zero(),
            gamma: F::zero(),
            alpha: F::zero(),
            zeta: F::zero(),
            v: F::zero(),
        }
    }
}