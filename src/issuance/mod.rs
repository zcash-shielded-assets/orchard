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
    /// The issuer validating key.
    ik: IssueValidatingKey<ZSASchnorr>,
    /// The issuance actions.
    actions: NonEmpty<IssueAction>,
    /// Authorization data.
    authorization: T,
}

/// A single issuance action.
#[derive(Debug, Clone)]
pub struct IssueAction {
    /// Asset description
    pub asset_desc: Vec<u8>,
}

/// Trait for issuance authorization states.
pub trait IssueAuth: core::fmt::Debug + Clone {}

/// Effects-only issuance (no authorization data).
#[derive(Debug, Clone)]
pub struct EffectsOnly;
impl IssueAuth for EffectsOnly {}

/// Signed/authorized issuance.
#[derive(Debug, Clone)]
pub struct Signed;
impl IssueAuth for Signed {}

impl<T: IssueAuth> IssueBundle<T> {
    /// Returns the issuance actions.
    pub fn actions(&self) -> &NonEmpty<IssueAction> {
        &self.actions
    }

    /// Returns the issuer validating key.
    pub fn issuer(&self) -> &IssueValidatingKey<ZSASchnorr> {
        &self.ik
    }

    /// Returns the authorization.
    pub fn authorization(&self) -> &T {
        &self.authorization
    }

    /// Returns the number of actions.
    pub fn num_actions(&self) -> usize {
        self.actions.len()
    }
}

/// Test utilities.
#[cfg(any(test, feature = "test-dependencies"))]
pub mod testing {
    use super::*;
    use proptest::prelude::*;

    prop_compose! {
        pub fn arb_signed_issue_bundle(n_actions: usize)(
            actions in proptest::collection::vec(arb_issue_action(), n_actions.max(1)..=n_actions.max(1))
        ) -> IssueBundle<Signed> {
            let ik = IssueValidatingKey::from_bytes([0u8; 32]);
            let actions = NonEmpty::from_vec(actions).unwrap();
            IssueBundle { ik, actions, authorization: Signed }
        }
    }

    fn arb_issue_action() -> impl Strategy<Value = IssueAction> {
        proptest::collection::vec(proptest::num::u8::ANY, 1..100)
            .prop_map(|asset_desc| IssueAction { asset_desc })
    }
}
