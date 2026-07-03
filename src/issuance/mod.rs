//! Issuance logic for Zcash Shielded Assets (ZSA).
//!
//! This module defines structures and methods for creating, authorizing, and verifying
//! issuance bundles, which introduce new shielded assets into the Orchard protocol.

use alloc::vec::Vec;

pub mod auth;
pub mod sighash_kind;

/// A bundle of issuance actions.
///
/// An `IssueBundle` introduces new assets into the ZSA protocol.
/// It has its own authorization path, separate from the main Orchard [`Bundle`](crate::Bundle).
#[derive(Debug, Clone)]
pub struct IssueBundle<A> {
    /// The issuance actions.
    actions: Vec<IssueAction>,
    /// Authorization data.
    authorization: A,
}

/// A single issuance action.
#[derive(Debug, Clone)]
pub struct IssueAction {
    /// Asset description for the issued asset.
    pub asset_desc: Vec<u8>,
}

/// Marker for an unauthorized issuance bundle.
#[derive(Debug, Clone)]
pub struct Unauthorized;

/// Marker for an authorized issuance bundle.
#[derive(Debug, Clone)]
pub struct Authorized;

impl<A> IssueBundle<A> {
    /// Returns the issuance actions.
    pub fn actions(&self) -> &[IssueAction] {
        &self.actions
    }
}
