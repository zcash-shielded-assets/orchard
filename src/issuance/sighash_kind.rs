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
pub struct BIP340IssueAuthSig {
    /// The signature bytes.
    sig: Vec<u8>,
    /// The sighash kind.
    sighash_kind: IssueSighashKind,
}

impl BIP340IssueAuthSig {
    /// Creates a new BIP340 issuance authorization signature.
    pub fn new(sig: Vec<u8>, sighash_kind: IssueSighashKind) -> Self {
        Self { sig, sighash_kind }
    }

    /// Returns the sighash kind.
    pub fn sighash_kind(&self) -> &IssueSighashKind {
        &self.sighash_kind
    }

    /// Returns the signature bytes.
    pub fn sig(&self) -> &[u8] {
        &self.sig
    }

    /// Returns the encoded signature.
    pub fn encode(&self) -> &[u8] {
        &self.sig
    }
}
