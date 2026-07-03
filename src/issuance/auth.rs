//! Issuance authorization logic for Zcash Shielded Assets (ZSA).

use alloc::vec::Vec;

/// Marker type for ZSA Schnorr-based issuance authorization.
#[derive(Debug, Clone)]
pub struct ZSASchnorr;

/// The issuance validating key for ZSA.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct IssueValidatingKey<A> {
    bytes: [u8; 32],
    _phantom: core::marker::PhantomData<A>,
}

impl<A> IssueValidatingKey<A> {
    /// Creates a key from its byte representation.
    pub fn from_bytes(bytes: [u8; 32]) -> Self {
        Self { bytes, _phantom: core::marker::PhantomData }
    }
    /// Encodes the key as bytes.
    pub fn encode(&self) -> Vec<u8> { self.bytes.to_vec() }
    /// Decodes a key from a byte slice.
    pub fn decode(bytes: &[u8]) -> Result<Self, ()> {
        if bytes.len() != 32 { return Err(()); }
        let mut arr = [0u8; 32];
        arr.copy_from_slice(bytes);
        Ok(Self::from_bytes(arr))
    }
}

/// An issuance authorization signature.
#[derive(Debug, Clone)]
pub struct IssueAuthSig(pub Vec<u8>);

impl IssueAuthSig {
    /// Creates a new signature.
    pub fn new(bytes: Vec<u8>) -> Self { Self(bytes) }
    /// Encodes the signature as bytes.
    pub fn encode(&self) -> &[u8] { &self.0 }
    /// Decodes a signature from a byte slice.
    pub fn decode(bytes: &[u8]) -> Result<Self, ()> {
        Ok(Self(bytes.to_vec()))
    }
}
