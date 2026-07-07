//! Orchard sighash kind as specified in [ZIP-246].
//!
//! [ZIP-246]: https://zips.z.cash/zip-0246

/// The type of Orchard data that is signed.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum OrchardSighashKind {
    /// The signer commits to all effecting data in the transaction.
    AllEffecting,
}
