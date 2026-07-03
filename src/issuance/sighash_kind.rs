//! Sighash kind types for ZSA issuance bundles.

/// Sighash kind for ZSA issuance bundles.
#[derive(Debug, Clone, Eq, PartialEq)]
pub enum IssuanceSighashKind {
    /// The "default" sighash for issuance data.
    AllEffecting,
}
