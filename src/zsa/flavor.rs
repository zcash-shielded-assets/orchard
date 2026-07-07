//! Orchard protocol flavor types (Vanilla and ZSA).

/// The standard Vanilla Orchard protocol flavor.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct OrchardVanilla;

/// The ZSA (Zcash Shielded Assets) Orchard protocol flavor.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct OrchardZSA;
