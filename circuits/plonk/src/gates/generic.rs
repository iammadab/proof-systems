/*****************************************************************************************************************

This source file implements Plonk generic constraint gate primitive.

Constraint vector format:

    ql: left input selector
    qr: right input selector
    qo: output selector
    qm: multiplication selector
    qc: constant selector

*****************************************************************************************************************/

use algebra::Field;
use crate::gate::{CircuitGate, GateType};

impl<F: Field> CircuitGate<F>
{
    pub fn create_generic
    (
        l: (usize, usize),
        r: (usize, usize),
        o: (usize, usize),
        ql: F,
        qr: F,
        qo: F,
        qm: F,
        qc: F,
    ) -> Self
    {
        CircuitGate
        {
            typ: GateType::Generic,
            l,
            r,
            o,
            c: vec!
            [
                ql,
                qr,
                qo,
                qm,
                qc,
            ]
        }
    }

    pub fn verify_generic(&self, witness: &Vec<F>) -> bool
    {
        self.typ == GateType::Generic &&
        (
            self.ql() * &witness[self.l.0] +
            &(self.qr() * &witness[self.r.0]) +
            &(self.qo() * &witness[self.o.0]) +
            &(self.qm() * &witness[self.l.0] * &witness[self.r.0]) +
            &self.qc()
        ).is_zero()
    }

    pub fn ql(&self) -> F {if self.typ == GateType::Generic {self.c[0]} else {F::zero()}}
    pub fn qr(&self) -> F {if self.typ == GateType::Generic {self.c[1]} else {F::zero()}}
    pub fn qo(&self) -> F {if self.typ == GateType::Generic {self.c[2]} else {F::zero()}}
    pub fn qm(&self) -> F {if self.typ == GateType::Generic {self.c[3]} else {F::zero()}}
    pub fn qc(&self) -> F {if self.typ == GateType::Generic {self.c[4]} else {F::zero()}}
}