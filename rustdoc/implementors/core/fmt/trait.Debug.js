(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: CanonicalDeserialize + CanonicalSerialize,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + AffineCurve&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.OpeningProof.html\" title=\"struct commitment_dlog::commitment::OpeningProof\">OpeningProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::OpeningProof"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::srs::SRS"]}];
implementors["kimchi"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/alphas/struct.Alphas.html\" title=\"struct kimchi::alphas::Alphas\">Alphas</a>&lt;F&gt;","synthetic":false,"types":["kimchi::alphas::Alphas"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/alphas/struct.MustConsumeIterator.html\" title=\"struct kimchi::alphas::MustConsumeIterator\">MustConsumeIterator</a>&lt;I, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::alphas::MustConsumeIterator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/argument/enum.ArgumentType.html\" title=\"enum kimchi::circuits::argument::ArgumentType\">ArgumentType</a>","synthetic":false,"types":["kimchi::circuits::argument::ArgumentType"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::constraints::LookupConstraintSystem"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::constraints::ConstraintSystem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/constraints/enum.GateError.html\" title=\"enum kimchi::circuits::constraints::GateError\">GateError</a>","synthetic":false,"types":["kimchi::circuits::constraints::GateError"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Column.html\" title=\"enum kimchi::circuits::expr::Column\">Column</a>","synthetic":false,"types":["kimchi::circuits::expr::Column"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Variable.html\" title=\"struct kimchi::circuits::expr::Variable\">Variable</a>","synthetic":false,"types":["kimchi::circuits::expr::Variable"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.ConstantExpr.html\" title=\"enum kimchi::circuits::expr::ConstantExpr\">ConstantExpr</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::expr::ConstantExpr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.CacheId.html\" title=\"struct kimchi::circuits::expr::CacheId\">CacheId</a>","synthetic":false,"types":["kimchi::circuits::expr::CacheId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Op2.html\" title=\"enum kimchi::circuits::expr::Op2\">Op2</a>","synthetic":false,"types":["kimchi::circuits::expr::Op2"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Expr.html\" title=\"enum kimchi::circuits::expr::Expr\">Expr</a>&lt;C&gt;","synthetic":false,"types":["kimchi::circuits::expr::Expr"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.PolishToken.html\" title=\"enum kimchi::circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::expr::PolishToken"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Linearization.html\" title=\"struct kimchi::circuits::expr::Linearization\">Linearization</a>&lt;E&gt;","synthetic":false,"types":["kimchi::circuits::expr::Linearization"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi::circuits::gate::CurrOrNext\">CurrOrNext</a>","synthetic":false,"types":["kimchi::circuits::gate::CurrOrNext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.LocalPosition.html\" title=\"struct kimchi::circuits::gate::LocalPosition\">LocalPosition</a>","synthetic":false,"types":["kimchi::circuits::gate::LocalPosition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateType.html\" title=\"enum kimchi::circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["kimchi::circuits::gate::GateType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.LookupsUsed.html\" title=\"enum kimchi::circuits::gate::LookupsUsed\">LookupsUsed</a>","synthetic":false,"types":["kimchi::circuits::gate::LookupsUsed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateLookupTable.html\" title=\"enum kimchi::circuits::gate::GateLookupTable\">GateLookupTable</a>","synthetic":false,"types":["kimchi::circuits::gate::GateLookupTable"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::gate::CircuitGate"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.CombinedEntry.html\" title=\"struct kimchi::circuits::polynomials::lookup::CombinedEntry\">CombinedEntry</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomials::lookup::CombinedEntry"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/polynomials/lookup/struct.UncombinedEntry.html\" title=\"struct kimchi::circuits::polynomials::lookup::UncombinedEntry\">UncombinedEntry</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::polynomials::lookup::UncombinedEntry"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/scalars/struct.RandomOracles.html\" title=\"struct kimchi::circuits::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt;","synthetic":false,"types":["kimchi::circuits::scalars::RandomOracles"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/circuits/wires/struct.Wire.html\" title=\"struct kimchi::circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["kimchi::circuits::wires::Wire"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"kimchi/error/enum.ProofError.html\" title=\"enum kimchi::error::ProofError\">ProofError</a>","synthetic":false,"types":["kimchi::error::ProofError"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi/index/struct.Index.html\" title=\"struct kimchi::index::Index\">Index</a>&lt;G&gt;","synthetic":false,"types":["kimchi::index::Index"]}];
implementors["kimchi_visu"] = [{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"kimchi_visu/struct.Witness.html\" title=\"struct kimchi_visu::Witness\">Witness</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: AffineCurve,&nbsp;</span>","synthetic":false,"types":["kimchi_visu::Witness"]}];
implementors["mina_signer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"mina_signer/keypair/enum.KeypairError.html\" title=\"enum mina_signer::keypair::KeypairError\">KeypairError</a>","synthetic":false,"types":["mina_signer::keypair::KeypairError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mina_signer/keypair/struct.Keypair.html\" title=\"struct mina_signer::keypair::Keypair\">Keypair</a>","synthetic":false,"types":["mina_signer::keypair::Keypair"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"mina_signer/pubkey/enum.PubKeyError.html\" title=\"enum mina_signer::pubkey::PubKeyError\">PubKeyError</a>","synthetic":false,"types":["mina_signer::pubkey::PubKeyError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mina_signer/pubkey/struct.PubKey.html\" title=\"struct mina_signer::pubkey::PubKey\">PubKey</a>","synthetic":false,"types":["mina_signer::pubkey::PubKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mina_signer/signature/struct.Signature.html\" title=\"struct mina_signer::signature::Signature\">Signature</a>","synthetic":false,"types":["mina_signer::signature::Signature"]}];
implementors["o1_utils"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"o1_utils/field_helpers/enum.FieldHelpersError.html\" title=\"enum o1_utils::field_helpers::FieldHelpersError\">FieldHelpersError</a>","synthetic":false,"types":["o1_utils::field_helpers::FieldHelpersError"]}];
implementors["ocaml_gen"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ocaml_gen/struct.Env.html\" title=\"struct ocaml_gen::Env\">Env</a>","synthetic":false,"types":["ocaml_gen::Env"]}];
implementors["oracle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"oracle/poseidon/enum.SpongeState.html\" title=\"enum oracle::poseidon::SpongeState\">SpongeState</a>","synthetic":false,"types":["oracle::poseidon::SpongeState"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSpongeParams"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"oracle/sponge/struct.ScalarChallenge.html\" title=\"struct oracle::sponge::ScalarChallenge\">ScalarChallenge</a>&lt;F&gt;","synthetic":false,"types":["oracle::sponge::ScalarChallenge"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()