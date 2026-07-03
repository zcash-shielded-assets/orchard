//! Sighash kinds for the Orchard protocol, used for sighash versioning.

/// The kind of data that a sighash commits to.
#[derive(Debug, Clone, Eq, PartialEq)]
pub enum OrchardSighashKind {
    /// The "default" sighash that commits to all effecting data of the transaction.
    AllEffecting,
}

/// An Orchard signature together with its `OrchardSighashKind`.
#[derive(Debug, Clone, Eq, PartialEq)]
pub struct OrchardSig<T> {
    /// The sighash kind.
    sighash_kind: OrchardSighashKind,
    /// The underlying signature.
    sig: T,
}

impl<T> OrchardSig<T> {
    /// Constructs an `OrchardSig` from its constituent parts.
    pub fn new(sighash_kind: OrchardSighashKind, sig: T) -> Self {
        Self { sighash_kind, sig }
    }

    /// Returns the `OrchardSighashKind` of the signature.
    pub fn sighash_kind(&self) -> &OrchardSighashKind {
        &self.sighash_kind
    }

    /// Returns the underlying signature.
    pub fn sig(&self) -> &T {
        &self.sig
    }
}
