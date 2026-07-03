//! Issuance authorization logic for Zcash Shielded Assets (ZSA).

use alloc::vec::Vec;

/// Marker type for ZSA Schnorr-based issuance authorization.
#[derive(Debug, Clone)]
pub struct ZSASchnorr;

/// The issuance validating key for ZSA.
#[derive(Debug, Clone)]
pub struct IssueValidatingKey<A> {
    /// The underlying key material.
    bytes: [u8; 32],
    /// Phantom data for the authorization scheme.
    _phantom: core::marker::PhantomData<A>,
}

impl<A> IssueValidatingKey<A> {
    /// Creates a new issue validating key from its byte representation.
    pub fn from_bytes(bytes: [u8; 32]) -> Self {
        Self {
            bytes,
            _phantom: core::marker::PhantomData,
        }
    }

    /// Returns the byte representation of this key.
    pub fn encode(&self) -> Vec<u8> {
        self.bytes.to_vec()
    }

    /// Decodes an issue validating key from a byte slice.
    pub fn decode(bytes: &[u8]) -> Result<Self, ()> {
        if bytes.len() != 32 {
            return Err(());
        }
        let mut arr = [0u8; 32];
        arr.copy_from_slice(bytes);
        Ok(Self::from_bytes(arr))
    }
}

/// An issuance authorization signature.
#[derive(Debug, Clone)]
pub struct IssueAuthSig(pub Vec<u8>);
