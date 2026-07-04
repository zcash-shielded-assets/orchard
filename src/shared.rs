//! Shared constants and helpers for Orchard note encryption.
//!
//! Used by both `OrchardDomain` (vanilla / Ironwood, 52-byte compact notes)
//! and `OrchardZSADomain` (ZSA, 84-byte compact notes).

/// Vanilla (and Ironwood) compact note size: version + diversifier + value + rseed.
pub const COMPACT_NOTE_SIZE_VANILLA: usize = 1 + 11 + 8 + 32; // 52

/// ZSA asset desc hash size.
pub const ZSA_ASSET_SIZE: usize = 32;

/// ZSA compact note size: vanilla fields + asset_desc_hash.
pub const COMPACT_NOTE_SIZE_ZSA: usize = COMPACT_NOTE_SIZE_VANILLA + ZSA_ASSET_SIZE; // 84

/// Note plaintext version byte for V2/V5 transactions.
pub const NOTE_VERSION_BYTE_V2: u8 = 0x02;

/// Note plaintext version byte for V6/ZSA transactions.
pub const NOTE_VERSION_BYTE_V3: u8 = 0x03;

/// Memo size.
pub const MEMO_SIZE: usize = 512;

// Offsets within the compact note plaintext (shared between vanilla and ZSA).
pub(crate) const NOTE_VERSION_OFFSET: usize = 0;
pub(crate) const NOTE_DIVERSIFIER_OFFSET: usize = 1;
pub(crate) const NOTE_VALUE_OFFSET: usize = 12;
pub(crate) const NOTE_RSEED_OFFSET: usize = 20;
