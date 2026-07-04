//! ZSA (Zcash Shielded Assets) support for the Orchard protocol.
//!
//! This module provides note encryption for 84-byte compact notes,
//! which include the 32-byte `asset_desc_hash`.
//!
//! **NOTE:** ZSA is an alpha feature. This entire module can be deleted
//! without affecting the rest of the orchard crate.

mod domain;

pub use domain::OrchardZSADomain;
