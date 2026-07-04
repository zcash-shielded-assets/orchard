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

mod domain;
#[cfg(feature = "zsa")]
pub mod issuance;
pub mod burn;
pub mod commitments;
#[cfg(feature = "circuit")]
pub mod circuit;

pub use domain::OrchardZSADomain;
