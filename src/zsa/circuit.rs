//! ZSA action circuit (proving and verification).
//!
//! Reuses the vanilla Orchard circuit configuration for all chips
//! (ECC, Poseidon, Sinsemilla, Merkle). ZSA-specific constraints
//! for asset enforcement are added via additional gates.
//!
//! TODO(zsa): implement the full ZSA circuit as specified in ZIP-226.
//! The ZSA circuit lives in a separate module to avoid modifying the
//! Ironwood production circuit. See zcash-shielded-assets/orchard
//! (zsa2 branch, circuit_zsa.rs) for the full implementation.
