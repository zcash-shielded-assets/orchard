//! Issuance commitment hash functions for Zcash Shielded Assets (ZSA).

use blake2b_simd::{Hash as Blake2bHash, Params};

/// Personalization for ZSA issuance bundle transaction ID commitment.
const ZCASH_ORCHARD_ISSUANCE_HASH_PERSONALIZATION: &[u8; 16] = b"ZTxIdOrcIssuancH";

/// Computes the transaction-ID commitment for an issuance bundle.
pub fn hash_issue_bundle_txid_data() -> Blake2bHash {
    Params::new()
        .hash_length(32)
        .personal(ZCASH_ORCHARD_ISSUANCE_HASH_PERSONALIZATION)
        .to_state()
        .finalize()
}

/// Computes the authorizing-data commitment for an issuance bundle.
pub fn hash_issue_bundle_auth_data() -> Blake2bHash {
    Params::new()
        .hash_length(32)
        .personal(ZCASH_ORCHARD_ISSUANCE_HASH_PERSONALIZATION)
        .to_state()
        .finalize()
}
