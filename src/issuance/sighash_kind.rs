//! Sighash kind types for ZSA issuance bundles.

use alloc::vec::Vec;

/// Sighash kind for ZSA issuance bundles.
#[derive(Debug, Clone, Eq, PartialEq)]
pub enum IssueSighashKind {
    /// The "default" sighash for issuance data.
    AllEffecting,
}

/// A BIP-340-style issuance authorization signature.
#[derive(Debug, Clone)]
pub struct BIP340IssueAuthSig(pub Vec<u8>);
