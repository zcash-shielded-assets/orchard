//! Sighash kind types for ZSA issuance bundles.

use crate::issuance::auth::IssueAuthSig;

/// Sighash kind for ZSA issuance bundles.
#[derive(Debug, Clone, Eq, PartialEq)]
pub enum IssueSighashKind {
    /// The "default" sighash for issuance data.
    AllEffecting,
}

/// A BIP-340-style issuance authorization signature.
#[derive(Debug, Clone)]
pub struct BIP340IssueAuthSig {
    sig: IssueAuthSig,
    sighash_kind: IssueSighashKind,
}

impl BIP340IssueAuthSig {
    /// Creates a new BIP340 issuance authorization signature.
    pub fn new(sighash_kind: IssueSighashKind, sig: IssueAuthSig) -> Self {
        Self { sig, sighash_kind }
    }
    /// Returns the sighash kind.
    pub fn sighash_kind(&self) -> &IssueSighashKind { &self.sighash_kind }
    /// Returns the underlying signature.
    pub fn sig(&self) -> &IssueAuthSig { &self.sig }
    /// Encodes the full signature.
    pub fn encode(&self) -> &[u8] { &self.sig.0 }
}
