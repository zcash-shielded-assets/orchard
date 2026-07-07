//! Reference keys for ZSA issuance notes.
use crate::{address::Address, keys::SpendingKey};

/// Raw bytes of the reference recipient address.
pub const RAW_REFERENCE_RECIPIENT: [u8; 43] = [
    204, 54, 96, 25, 89, 33, 59, 107, 12, 219, 150, 167, 92, 23, 195, 166, 104, 169, 127, 13, 106,
    140, 92, 225, 100, 165, 24, 234, 155, 169, 165, 14, 167, 81, 145, 253, 134, 27, 15, 241, 14,
    98, 176,
];

/// Reference keys for issuance notes.
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub struct ReferenceKeys;

impl ReferenceKeys {
    /// Returns the reference spending key (all zeros).
    pub fn sk() -> SpendingKey {
        SpendingKey::from_bytes([0; 32]).unwrap()
    }
    /// Returns the pre-derived reference recipient address.
    pub fn recipient() -> Address {
        Address::from_raw_address_bytes(&RAW_REFERENCE_RECIPIENT).unwrap()
    }
}
