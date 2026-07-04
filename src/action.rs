use core::fmt;
use core::ops::Not as _;

use group::{Group as _, GroupEncoding as _};
use memuse::DynamicUsage;
use pasta_curves::pallas;
use subtle::CtOption;
use zcash_note_encryption::Domain;

use crate::{
    note::{ExtractedNoteCommitment, Nullifier, Rho, TransmittedNoteCiphertext},
    primitives::redpallas::{self, SpendAuth},
    value::ValueCommitment,
};

/// An action applied to the global ledger.
///
/// `D` is the note encryption domain that determines ciphertext sizes.
#[derive(Debug, Clone)]
pub struct Action<A, D: Domain = crate::note_encryption::OrchardDomain> {
    nf: Nullifier,
    rk: redpallas::VerificationKey<SpendAuth>,
    cmx: ExtractedNoteCommitment,
    encrypted_note: TransmittedNoteCiphertext<D>,
    cv_net: ValueCommitment,
    authorization: A,
}

impl<A, D: Domain> Action<A, D> {
    /// Constructs an `Action` from its constituent parts.
    pub fn from_parts(
        nf: Nullifier,
        rk: redpallas::VerificationKey<SpendAuth>,
        cmx: ExtractedNoteCommitment,
        encrypted_note: TransmittedNoteCiphertext<D>,
        cv_net: ValueCommitment,
        authorization: A,
    ) -> Result<Self, ActionFromPartsError> {
        if rk.is_identity() {
            return Err(ActionFromPartsError::IdentityRk);
        }
        Option::<()>::from(
            pallas::Point::from_bytes(&encrypted_note.epk_bytes)
                .and_then(|p| CtOption::new((), p.is_identity().not())),
        )
        .ok_or(ActionFromPartsError::InvalidEpk)?;
        Ok(Action { nf, rk, cmx, encrypted_note, cv_net, authorization })
    }

    /// Returns the nullifier of the note being spent.
    pub fn nullifier(&self) -> &Nullifier { &self.nf }
    /// Returns the randomized verification key for the note being spent.
    pub fn rk(&self) -> &redpallas::VerificationKey<SpendAuth> { &self.rk }
    /// Returns the commitment to the new note being created.
    pub fn cmx(&self) -> &ExtractedNoteCommitment { &self.cmx }
    /// Returns the encrypted note ciphertext.
    pub fn encrypted_note(&self) -> &TransmittedNoteCiphertext<D> { &self.encrypted_note }
    /// Returns the rho value for the note being created.
    pub fn rho(&self) -> Rho { Rho::from_nf_old(self.nf) }
    /// Returns the net value commitment.
    pub fn cv_net(&self) -> &ValueCommitment { &self.cv_net }
    /// Returns the authorization for this action.
    pub fn authorization(&self) -> &A { &self.authorization }
    /// Transitions this action from one authorization state to another.
    pub fn map<U>(self, step: impl FnOnce(A) -> U) -> Action<U, D> {
        Action { nf: self.nf, rk: self.rk, cmx: self.cmx, encrypted_note: self.encrypted_note, cv_net: self.cv_net, authorization: step(self.authorization) }
    }
    /// Transitions this action from one authorization state to another, fallibly.
    pub fn try_map<U, E>(self, step: impl FnOnce(A) -> Result<U, E>) -> Result<Action<U, D>, E> {
        Ok(Action { nf: self.nf, rk: self.rk, cmx: self.cmx, encrypted_note: self.encrypted_note, cv_net: self.cv_net, authorization: step(self.authorization)? })
    }
}

impl<D: Domain> DynamicUsage for Action<redpallas::Signature<SpendAuth>, D> {
    fn dynamic_usage(&self) -> usize { 0 }
    fn dynamic_usage_bounds(&self) -> (usize, Option<usize>) { (0, Some(0)) }
}

/// Errors that can occur when constructing an `Action` from its parts.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[non_exhaustive]
pub enum ActionFromPartsError {
    /// `rk` is the identity point.
    IdentityRk,
    /// `epk_bytes` does not encode a non-identity Pallas point.
    InvalidEpk,
}

impl fmt::Display for ActionFromPartsError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            ActionFromPartsError::IdentityRk => write!(f, "an Orchard action with identity `rk` is not valid"),
            ActionFromPartsError::InvalidEpk => write!(f, "an Orchard action's `epk` is not a valid non-identity Pallas point"),
        }
    }
}

impl core::error::Error for ActionFromPartsError {}
