//! Common gadgets and functions used in the Orchard circuit.

use ff::Field;
use pasta_curves::pallas;

use super::{commit_ivk::CommitIvkChip, note_commit::NoteCommitChip, Config};
use crate::{
    constants::{OrchardCommitDomains, OrchardFixedBases, OrchardHashDomains},
    note::AssetBase,
};
use halo2_gadgets::{
    ecc::chip::EccChip,
    poseidon::Pow5Chip as PoseidonChip,
    sinsemilla::{chip::SinsemillaChip, merkle::chip::MerkleChip},
    utilities::{cond_swap::CondSwapChip, lookup_range_check::PallasLookupRangeCheck},
};
use halo2_proofs::{
    circuit::{AssignedCell, Chip, Layouter, Value},
    plonk::{self, Advice, Assigned, Column},
};

pub(in crate::circuit) mod add_chip;

impl<Lookup: PallasLookupRangeCheck> Config<Lookup> {
    pub(super) fn add_chip(&self) -> add_chip::AddChip {
        add_chip::AddChip::construct(self.add_config.clone())
    }

    pub(super) fn commit_ivk_chip(&self) -> CommitIvkChip {
        CommitIvkChip::construct(self.commit_ivk_config.clone())
    }

    pub(super) fn ecc_chip(&self) -> EccChip<OrchardFixedBases, Lookup> {
        EccChip::construct(self.ecc_config.clone())
    }

    pub(super) fn sinsemilla_chip_1(
        &self,
    ) -> SinsemillaChip<OrchardHashDomains, OrchardCommitDomains, OrchardFixedBases, Lookup> {
        SinsemillaChip::construct(self.sinsemilla_config_1.clone())
    }

    pub(super) fn sinsemilla_chip_2(
        &self,
    ) -> SinsemillaChip<OrchardHashDomains, OrchardCommitDomains, OrchardFixedBases, Lookup> {
        SinsemillaChip::construct(self.sinsemilla_config_2.clone())
    }

    pub(super) fn merkle_chip_1(
        &self,
    ) -> MerkleChip<OrchardHashDomains, OrchardCommitDomains, OrchardFixedBases, Lookup> {
        MerkleChip::construct(self.merkle_config_1.clone())
    }

    pub(super) fn merkle_chip_2(
        &self,
    ) -> MerkleChip<OrchardHashDomains, OrchardCommitDomains, OrchardFixedBases, Lookup> {
        MerkleChip::construct(self.merkle_config_2.clone())
    }

    pub(super) fn poseidon_chip(&self) -> PoseidonChip<pallas::Base, 3, 2> {
        PoseidonChip::construct(self.poseidon_config.clone())
    }

    pub(super) fn note_commit_chip_new(&self) -> NoteCommitChip<Lookup> {
        NoteCommitChip::construct(self.new_note_commit_config.clone())
    }

    pub(super) fn note_commit_chip_old(&self) -> NoteCommitChip<Lookup> {
        NoteCommitChip::construct(self.old_note_commit_config.clone())
    }

    pub(super) fn cond_swap_chip(&self) -> CondSwapChip<pallas::Base> {
        CondSwapChip::construct(self.merkle_config_1.cond_swap_config().clone())
    }
}

/// An instruction set for adding two circuit words (field elements).
#[cfg_attr(feature = "unstable-voting-circuits", visibility::make(pub))]
pub(in crate::circuit) trait AddInstruction<F: Field>: Chip<F> {
    /// Constraints `a + b` and returns the sum.
    fn add(
        &self,
        layouter: impl Layouter<F>,
        a: &AssignedCell<F, F>,
        b: &AssignedCell<F, F>,
    ) -> Result<AssignedCell<F, F>, plonk::Error>;
}

/// Witnesses the given value in a standalone region.
///
/// Usages of this helper are technically superfluous, as the single-cell region is only
/// ever used in equality constraints. We could eliminate them with a
/// [write-on-copy abstraction](https://github.com/zcash/halo2/issues/334).
#[cfg_attr(feature = "unstable-voting-circuits", visibility::make(pub))]
pub(in crate::circuit) fn assign_free_advice<F: Field, V: Copy>(
    mut layouter: impl Layouter<F>,
    column: Column<Advice>,
    value: Value<V>,
) -> Result<AssignedCell<V, F>, plonk::Error>
where
    for<'v> Assigned<F>: From<&'v V>,
{
    layouter.assign_region(
        || "load private",
        |mut region| region.assign_advice(|| "load private", column, 0, || value),
    )
}

/// Witnesses is_zatoshi_asset.
pub(in crate::circuit) fn assign_is_zatoshi_asset<F: Field>(
    layouter: impl Layouter<F>,
    column: Column<Advice>,
    asset: Value<AssetBase>,
) -> Result<AssignedCell<pasta_curves::Fp, F>, plonk::Error>
where
    Assigned<F>: for<'v> From<&'v pasta_curves::Fp>,
{
    assign_free_advice(
        layouter,
        column,
        asset.map(|asset| {
            if bool::from(asset.is_zatoshi()) {
                pallas::Base::one()
            } else {
                pallas::Base::zero()
            }
        }),
    )
}

/// `ValueCommit^Orchard` from [Section 5.4.8.3 Homomorphic Pedersen commitments (Sapling and Orchard)].
///
/// [Section 5.4.8.3 Homomorphic Pedersen commitments (Sapling and Orchard)]: https://zips.z.cash/protocol/protocol.pdf#concretehomomorphiccommit
pub(crate) fn value_commit_orchard<
    EccChip: EccInstructions<
        pallas::Affine,
        FixedPoints = OrchardFixedBases,
        Var = AssignedCell<pallas::Base, pallas::Base>,
    >,
>(
    mut layouter: impl Layouter<pallas::Base>,
    ecc_chip: EccChip,
    v: ScalarFixedShort<pallas::Affine, EccChip>,
    rcv: ScalarFixed<pallas::Affine, EccChip>,
) -> Result<Point<pallas::Affine, EccChip>, plonk::Error> {
    // commitment = [v] ValueCommitV
    let (commitment, _) = {
        let value_commit_v = FixedPointShort::from_inner(ecc_chip.clone(), ValueCommitV.into());
        value_commit_v.mul(layouter.namespace(|| "[v] ValueCommitV"), v)?
    };

    // blind = [rcv] ValueCommitR
    let (blind, _rcv) = {
        let value_commit_r = OrchardFixedBasesFull::ValueCommitR;
        let value_commit_r = FixedPoint::from_inner(ecc_chip, value_commit_r);

        // [rcv] ValueCommitR
        value_commit_r.mul(layouter.namespace(|| "[rcv] ValueCommitR"), rcv)?
    };

    // [v] ValueCommitV + [rcv] ValueCommitR
    commitment.add(layouter.namespace(|| "cv"), &blind)
}

/// Witnesses split_flag.
pub(in crate::circuit) fn assign_split_flag<F: Field>(
    layouter: impl Layouter<F>,
    column: Column<Advice>,
    split_flag: Value<bool>,
) -> Result<AssignedCell<pasta_curves::Fp, F>, plonk::Error>
where
    Assigned<F>: for<'v> From<&'v pasta_curves::Fp>,
{
    assign_free_advice(
        layouter,
        column,
        split_flag.map(|split_flag| {
            if split_flag {
                pallas::Base::one()
            } else {
                pallas::Base::zero()
            }
        }),
    )
}

/// `DeriveNullifier` from [Section 4.16: Note Commitments and Nullifiers].
///
/// [Section 4.16: Note Commitments and Nullifiers]: https://zips.z.cash/protocol/protocol.pdf#commitmentsandnullifiers
#[allow(clippy::too_many_arguments)]
pub(crate) fn derive_domain_nullifier<
    PoseidonChip: PoseidonSpongeInstructions<pallas::Base, poseidon::P128Pow5T3, ConstantLength<2>, 3, 2>,
    AddChip: AddInstruction<pallas::Base>,
    EccChip: EccInstructions<
        pallas::Affine,
        FixedPoints = OrchardFixedBases,
        Var = AssignedCell<pallas::Base, pallas::Base>,
    >,
>(
    mut layouter: impl Layouter<pallas::Base>,
    poseidon_chip_1: PoseidonChip,
    poseidon_chip_2: PoseidonChip,
    add_chip: AddChip,
    ecc_chip: EccChip,
    domain: AssignedCell<pallas::Base, pallas::Base>,
    rho: AssignedCell<pallas::Base, pallas::Base>,
    psi: &AssignedCell<pallas::Base, pallas::Base>,
    cm: &Point<pallas::Affine, EccChip>,
    nk: AssignedCell<pallas::Base, pallas::Base>,
) -> Result<X<pallas::Affine, EccChip>, plonk::Error> {
    // domain_rho = poseidon_hash(domain, rho)
    let domain_rho = {
        let poseidon_message = [rho, domain];
        let poseidon_hasher =
            PoseidonHash::init(poseidon_chip_1, layouter.namespace(|| "Poseidon init"))?;
        poseidon_hasher.hash(
            layouter.namespace(|| "Poseidon hash (domain, rho)"),
            poseidon_message,
        )
    }?;

    // hash = poseidon_hash(nk, domain_rho)
    let hash = {
        let poseidon_message = [nk, domain_rho];
        let poseidon_hasher =
            PoseidonHash::init(poseidon_chip_2, layouter.namespace(|| "Poseidon init"))?;
        poseidon_hasher.hash(
            layouter.namespace(|| "Poseidon hash (nk, domain_rho)"),
            poseidon_message,
        )
    }?;

    // Add hash output to psi.
    // `scalar` = poseidon_hash(nk, rho) + psi.
    let scalar = add_chip.add(
        layouter.namespace(|| "scalar = poseidon_hash(nk, rho) + psi"),
        &hash,
        psi,
    )?;

    // Multiply scalar by NullifierK
    // `product` = [poseidon_hash(nk, rho) + psi] NullifierK.
    //
    let product = {
        let nullifier_k = FixedPointBaseField::from_inner(ecc_chip, NullifierK);
        nullifier_k.mul(
            scalar,
        )?
    };

    // Add cm to multiplied fixed base to get nf
    // cm + [poseidon_output + psi] NullifierK
    cm.add(layouter.namespace(|| "nf"), &product)
        .map(|res| res.extract_p())
}

pub(crate) use crate::circuit::commit_ivk::gadgets::commit_ivk;
#[cfg_attr(feature = "unstable-voting-circuits", visibility::make(pub))]
pub(in crate::circuit) use crate::circuit::note_commit::gadgets::note_commit;
