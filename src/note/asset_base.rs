//! Asset base types for Zcash Shielded Assets (ZSA).

use core::cmp::Ordering;
use core::hash::{Hash, Hasher};
use group::{Group, GroupEncoding};
use pasta_curves::{arithmetic::CurveExt, pallas};
use subtle::{Choice, ConstantTimeEq, CtOption};

use crate::constants::fixed_bases::{VALUE_COMMITMENT_PERSONALIZATION, ZATOSHI_ASSET_BASE_V_BYTES};

#[cfg(test)]
use rand_core::CryptoRngCore;

#[cfg(feature = "zsa-issuance")]
use {
    crate::constants::fixed_bases::ZSA_ASSET_BASE_PERSONALIZATION,
    crate::issuance::auth::{IssueValidatingKey, ZSASchnorr},
    alloc::vec::Vec,
    blake2b_simd::{Hash as Blake2bHash, Params},
};

/// Asset Identifier
#[cfg(feature = "zsa-issuance")]
#[derive(Debug)]
pub enum AssetId<'a> {
    /// Version V0 of AssetId
    V0 {
        /// Issue validating Key
        ik: &'a IssueValidatingKey<ZSASchnorr>,
        /// Asset description hash
        asset_desc_hash: &'a [u8; 32],
    },
}

#[cfg(feature = "zsa-issuance")]
impl<'a> AssetId<'a> {
    /// Generates a new V0 AssetId.
    pub fn new_v0(ik: &'a IssueValidatingKey<ZSASchnorr>, asset_desc_hash: &'a [u8; 32]) -> Self {
        AssetId::V0 {
            ik,
            asset_desc_hash,
        }
    }

    /// Encoding the Asset Identifier, as defined in [ZIP 227][assetidentifier].
    ///
    /// [assetidentifier]: https://zips.z.cash/zip-0227.html#specification-asset-identifier-asset-digest-and-asset-base
    fn encode_asset_id(&self) -> Vec<u8> {
        match self {
            AssetId::V0 {
                ik,
                asset_desc_hash,
            } => {
                let issuer = ik.encode();
                let mut asset_id = Vec::with_capacity(1 + issuer.len() + asset_desc_hash.len());
                asset_id.push(0u8); // version
                asset_id.extend(issuer);
                asset_id.extend_from_slice(&asset_desc_hash[..]);
                asset_id
            }
        }
    }

    /// Derives the Asset Digest for this ZSA asset.
    ///
    /// Defined in [ZIP-227: Issuance of Zcash Shielded Assets][assetdigest].
    ///
    /// [assetdigest]: https://zips.z.cash/zip-0227#asset-digests
    fn asset_digest(&self) -> Blake2bHash {
        Params::new()
            .hash_length(64)
            .personal(ZSA_ASSET_DIGEST_PERSONALIZATION)
            .to_state()
            .update(&self.encode_asset_id())
            .finalize()
    }
}

/// Personalization for the ZSA asset digest generator
#[cfg(feature = "zsa-issuance")]
pub const ZSA_ASSET_DIGEST_PERSONALIZATION: &[u8; 16] = b"ZSA-Asset-Digest";

/// An asset identifier for Zcash Shielded Assets.
///
/// `AssetBase::zatoshi()` represents the canonical ZEC asset.
/// Custom assets are derived from an [`AssetId`].
#[derive(Clone, Copy, Debug, Eq)]
pub struct AssetBase(pallas::Point);

impl PartialOrd for AssetBase {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for AssetBase {
    fn cmp(&self, other: &Self) -> Ordering {
        self.0.to_bytes().cmp(&other.0.to_bytes())
    }
}

impl AssetBase {
    /// Deserialize the AssetBase from a byte array.
    ///
    /// Returns `None` if the byte encoding is invalid or if it corresponds
    /// to the identity point.
    pub fn from_bytes(bytes: &[u8; 32]) -> CtOption<Self> {
        pallas::Point::from_bytes(bytes)
            .and_then(|asset| CtOption::new(AssetBase(asset), !asset.is_identity()))
    }

    /// Serialize the AssetBase to its canonical byte representation.
    pub fn to_bytes(self) -> [u8; 32] {
        self.0.to_bytes()
    }

    /// Asset base for zatoshi (ZEC), maintains backward compatibility with Orchard untyped notes.
    pub fn zatoshi() -> Self {
        AssetBase(pallas::Point::hash_to_curve(
            VALUE_COMMITMENT_PERSONALIZATION,
        )(&ZATOSHI_ASSET_BASE_V_BYTES))
    }

    /// Creates a custom AssetBase from an [`AssetId`].
    ///
    /// # Panics
    ///
    /// Panics if the derived AssetBase is the identity point (negligible probability).
    #[cfg(feature = "zsa-issuance")]
    #[allow(non_snake_case)]
    pub fn custom(asset_id: &AssetId<'_>) -> Self {
        let asset_digest = asset_id.asset_digest();
        let asset_base =
            pallas::Point::hash_to_curve(ZSA_ASSET_BASE_PERSONALIZATION)(asset_digest.as_bytes());

        assert!(
            bool::from(!asset_base.is_identity()),
            "The Asset Base is the identity point, which is invalid."
        );

        AssetBase(asset_base)
    }

    /// The base point used in value commitments.
    pub fn cv_base(&self) -> pallas::Point {
        self.0
    }

    /// Whether this asset base represents zatoshi (ZEC).
    pub fn is_zatoshi(&self) -> Choice {
        self.0.ct_eq(&Self::zatoshi().0)
    }

    /// Generates a random non-identity Pallas point for testing.
    #[cfg(test)]
    pub(crate) fn random(rng: &mut impl CryptoRngCore) -> Self {
        loop {
            let random_point = pallas::Point::random(&mut *rng);
            if bool::from(random_point.is_identity()) {
                continue;
            }
            return Self(random_point);
        }
    }
}

impl Hash for AssetBase {
    fn hash<H: Hasher>(&self, h: &mut H) {
        h.write(&self.to_bytes());
        let _ = h.finish();
    }
}

impl PartialEq for AssetBase {
    fn eq(&self, other: &Self) -> bool {
        bool::from(self.0.ct_eq(&other.0))
    }
}

/// Generators for property testing.
#[cfg(any(test, feature = "test-dependencies"))]
#[cfg_attr(docsrs, doc(cfg(feature = "test-dependencies")))]
pub mod testing {
    use super::AssetBase;

    use proptest::prelude::*;

    use crate::constants::fixed_bases::ZSA_ASSET_BASE_PERSONALIZATION;
    use group::Group;
    use pasta_curves::{arithmetic::CurveExt, pallas};

    prop_compose! {
        /// Generate a random AssetBase for testing.
        pub fn arb_asset_base()(p in prop::array::uniform32(prop::num::u8::ANY)) -> AssetBase {
            // Try up to 10 random points; fallback to zatoshi.
            for _ in 0..10 {
                let point = pallas::Point::hash_to_curve(ZSA_ASSET_BASE_PERSONALIZATION)(&p);
                if bool::from(!point.is_identity()) {
                    return AssetBase(point);
                }
            }
            AssetBase::zatoshi()
        }
    }
}
