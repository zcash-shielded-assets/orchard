//! Burn validation for Zcash Shielded Assets (ZSA).
//!
//! This module defines types and functions for validating that assets
//! intended for burning are properly accounted for in a bundle.

use alloc::vec::Vec;
use crate::note::AssetBase;
use crate::value::NoteValue;

/// Represents the set of assets and amounts to be burned in a ZSA bundle.
#[derive(Debug, Clone, Default)]
pub struct Burn {
    /// The list of (asset, amount) pairs to burn.
    entries: Vec<(AssetBase, NoteValue)>,
}

impl Burn {
    /// Creates a new empty burn set.
    pub fn new() -> Self {
        Self { entries: Vec::new() }
    }

    /// Creates a burn set from a list of (asset, amount) pairs.
    pub fn from_entries(entries: Vec<(AssetBase, NoteValue)>) -> Self {
        Self { entries }
    }

    /// Returns the list of burn entries.
    pub fn entries(&self) -> &[(AssetBase, NoteValue)] {
        &self.entries
    }

    /// Consumes self and returns the burn entries.
    pub fn into_entries(self) -> Vec<(AssetBase, NoteValue)> {
        self.entries
    }
}

