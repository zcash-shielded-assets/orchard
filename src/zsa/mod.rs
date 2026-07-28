//! ZSA (Zcash Shielded Assets) support for the Orchard protocol.
//!
//! This module provides:
//! - `OrchardZSADomain` — 84-byte compact note encryption
//! - `issuance` — asset issuance
//! - `burn` — burn validation
//! - `commitments` — ZSA-specific bundle hash calculations
//! - `circuit` — ZSA action circuit
//!
//! **WARNING**: This is an alpha feature. The entire `zsa` module can be
//! deleted without affecting the vanilla / Ironwood paths.

#[cfg(feature = "zsa")]
pub mod burn;
#[cfg(feature = "zsa-circuit")]
pub mod circuit;
#[cfg(feature = "zsa")]
pub mod commitments;
mod domain;
#[cfg(feature = "zsa")]
pub mod flavor;
#[cfg(feature = "zsa")]
pub mod issuance;
pub(crate) mod reference_keys;

pub use domain::OrchardZSADomain;
