//! Issuance logic for Zcash Shielded Assets (ZSA).

use alloc::vec::Vec;
use nonempty::NonEmpty;

pub mod auth;
pub mod sighash_kind;

pub use auth::{IssueAuthSig, IssueValidatingKey, ZSASchnorr};
pub use sighash_kind::{BIP340IssueAuthSig, IssueSighashKind};

/// A bundle of issuance actions.
#[derive(Debug, Clone)]
pub struct IssueBundle<T: IssueAuth> {
    ik: IssueValidatingKey<ZSASchnorr>,
    actions: NonEmpty<IssueAction>,
    authorization: T,
}

/// Flags for an issuance action.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct IssuanceFlags {
    finalize: bool,
}

impl IssuanceFlags {
    /// Construct issuance flags.
    pub(crate) const fn from_parts(finalize: bool) -> Self {
        Self { finalize }
    }
    /// Whether this action finalizes the asset.
    pub const fn finalize(&self) -> bool { self.finalize }
    /// Serialize to a byte.
    pub fn to_byte(&self) -> u8 { if self.finalize { 1 } else { 0 } }
}

/// A single issuance action.
#[derive(Debug, Clone)]
pub struct IssueAction {
    asset_desc_hash: Vec<u8>,
    notes: Vec<crate::Note>,
    flags: IssuanceFlags,
}

impl IssueAction {
    /// Creates a new `IssueAction`.
    pub fn new_with_flags(
        asset_desc_hash: Vec<u8>,
        notes: Vec<crate::Note>,
        flags: IssuanceFlags,
    ) -> Option<Self> { Some(Self { asset_desc_hash, notes, flags }) }
    /// Returns the asset description hash.
    pub fn asset_desc_hash(&self) -> &[u8] { &self.asset_desc_hash }
    /// Returns the notes for this action.
    pub fn notes(&self) -> &[crate::Note] { &self.notes }
    /// Returns the flags.
    pub fn flags(&self) -> IssuanceFlags { self.flags }
}

/// Trait for issuance authorization states.
pub trait IssueAuth: core::fmt::Debug + Clone {}

/// Effects-only issuance (no authorization data).
#[derive(Debug, Clone)]
pub struct EffectsOnly;
impl IssueAuth for EffectsOnly {}

/// Signed/authorized issuance.
#[derive(Debug, Clone)]
pub struct Signed {
    signature: BIP340IssueAuthSig,
}
impl Signed {
    /// Creates a new `Signed` authorization.
    pub fn new(signature: BIP340IssueAuthSig) -> Self { Self { signature } }
    /// Returns the signature.
    pub fn signature(&self) -> &BIP340IssueAuthSig { &self.signature }
}
impl IssueAuth for Signed {}

impl<T: IssueAuth> IssueBundle<T> {
    /// Constructs an `IssueBundle` from its parts.
    pub fn from_parts(
        ik: IssueValidatingKey<ZSASchnorr>,
        actions: NonEmpty<IssueAction>,
        authorization: T,
    ) -> Self { Self { ik, actions, authorization } }
    /// Returns the issuer key.
    pub fn issuer(&self) -> &IssueValidatingKey<ZSASchnorr> { &self.ik }
    /// Returns the issuer key (alias).
    pub fn ik(&self) -> &IssueValidatingKey<ZSASchnorr> { &self.ik }
    /// Returns the actions.
    pub fn actions(&self) -> &NonEmpty<IssueAction> { &self.actions }
    /// Returns the authorization.
    pub fn authorization(&self) -> &T { &self.authorization }
    /// Returns the number of actions.
    pub fn num_actions(&self) -> usize { self.actions.len() }
}

#[cfg(any(test, feature = "test-dependencies"))]
/// Test utilities for issuance bundles.
pub mod testing {
    use super::*;
    use proptest::prelude::*;
    prop_compose! {
        /// Generates an arbitrary signed issue bundle.
        pub fn arb_signed_issue_bundle(n_actions: usize)(
            actions in proptest::collection::vec(arb_issue_action(), n_actions.max(1)..=n_actions.max(1))
        ) -> IssueBundle<Signed> {
            let ik = IssueValidatingKey::from_bytes([0u8; 32]);
            let actions = NonEmpty::from_vec(actions).unwrap();
            let sig = BIP340IssueAuthSig::new(Vec::new(), IssueSighashKind::AllEffecting);
            IssueBundle { ik, actions, authorization: Signed::new(sig) }
        }
    }
    fn arb_issue_action() -> impl Strategy<Value = IssueAction> {
        proptest::collection::vec(proptest::num::u8::ANY, 1..100)
            .prop_map(|bytes| IssueAction::new_with_flags(bytes, Vec::new(), IssuanceFlags::from_parts(false)))
    }
}
