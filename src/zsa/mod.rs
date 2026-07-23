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

pub mod domain;
#[cfg(feature = "zsa")]
pub mod issuance;
#[cfg(feature = "zsa")]
pub mod burn;
#[cfg(feature = "zsa")]
pub mod commitments;
pub mod circuit;
pub(crate) mod reference_keys;
#[cfg(feature = "zsa")]
pub mod flavor;

pub use domain::OrchardZSADomain;
