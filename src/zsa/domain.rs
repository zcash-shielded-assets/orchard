//! ZSA-specific note encryption domain for 84-byte compact notes.
//!
//! In ZSA, the compact note layout is:
//! ```text
//! [0]:        version (0x03)
//! [1..12]:    diversifier (11)
//! [12..20]:   value (8)
//! [20..52]:   rseed (32)
//! [52..84]:   asset_desc_hash (32)
//! [84..596]:  memo (512)
//! ```
//!
//! **WARNING**: This is an alpha feature. The module can be deleted without
//! affecting the vanilla / Ironwood paths.

use blake2b_simd::Hash;
use group::ff::PrimeField;
use zcash_note_encryption::{
    note_bytes::NoteBytes, note_bytes::NoteBytesData, BatchDomain, Domain, EphemeralKeyBytes,
    OutPlaintextBytes, OutgoingCipherKey, ShieldedOutput, OUT_PLAINTEXT_SIZE,
};

use crate::{
    keys::{
        DiversifiedTransmissionKey, Diversifier, EphemeralPublicKey, EphemeralSecretKey,
        OutgoingViewingKey, PreparedEphemeralPublicKey, PreparedIncomingViewingKey, SharedSecret,
    },
    note::{AssetBase, ExtractedNoteCommitment, Note, RandomSeed, Rho},
    shared::{
        COMPACT_NOTE_SIZE_VANILLA, COMPACT_NOTE_SIZE_ZSA, MEMO_SIZE, NOTE_DIVERSIFIER_OFFSET,
        NOTE_RSEED_OFFSET, NOTE_VALUE_OFFSET, NOTE_VERSION_BYTE_V3, NOTE_VERSION_OFFSET,
        ZSA_ASSET_SIZE,
    },
    value::{NoteValue, ValueCommitment},
    Address,
};

// ---------------------------------------------------------------------------
// ZSA note sizes
// ---------------------------------------------------------------------------

/// ZSA note plaintext size.
const NOTE_PLAINTEXT_SIZE: usize = COMPACT_NOTE_SIZE_ZSA + MEMO_SIZE; // 596

/// ZSA encrypted note ciphertext size.
const ENC_CIPHERTEXT_SIZE: usize = NOTE_PLAINTEXT_SIZE + 16; // 612

// ---------------------------------------------------------------------------
// Note plaintext parsing (ZSA)
// ---------------------------------------------------------------------------

fn parse_note_plaintext<F>(
    rho: Rho,
    plaintext: &[u8],
    get_validated_pk_d: F,
) -> Option<(Note, Address)>
where
    F: FnOnce(&Diversifier) -> Option<DiversifiedTransmissionKey>,
{
    if plaintext.first() != Some(&NOTE_VERSION_BYTE_V3) {
        return None;
    }

    let diversifier = Diversifier::from_bytes(
        plaintext[NOTE_DIVERSIFIER_OFFSET..NOTE_VALUE_OFFSET]
            .try_into()
            .unwrap(),
    );

    let value = NoteValue::from_bytes(
        plaintext[NOTE_VALUE_OFFSET..NOTE_RSEED_OFFSET]
            .try_into()
            .unwrap(),
    );

    let rseed = RandomSeed::from_bytes(
        plaintext[NOTE_RSEED_OFFSET..COMPACT_NOTE_SIZE_VANILLA]
            .try_into()
            .unwrap(),
        &rho,
    )
    .into_option()?;

    let asset_bytes: [u8; ZSA_ASSET_SIZE] = plaintext
        [COMPACT_NOTE_SIZE_VANILLA..COMPACT_NOTE_SIZE_ZSA]
        .try_into()
        .ok()?;
    let asset = AssetBase::from_bytes(&asset_bytes).into_option()?;

    let pk_d = get_validated_pk_d(&diversifier)?;
    let recipient = Address::from_parts(diversifier, pk_d);

    let note = Note::from_parts(
        recipient,
        value,
        asset,
        rho,
        rseed,
        crate::NoteVersion::V3ZSA,
    )
    .into_option()?;

    Some((note, recipient))
}

// ---------------------------------------------------------------------------
// OrchardZSADomain
// ---------------------------------------------------------------------------

/// Orchard ZSA note encryption domain (84-byte compact notes).
#[derive(Debug, Clone)]
pub struct OrchardZSADomain {
    /// A parameter needed to generate the nullifier.
    pub rho: Rho,
}

impl OrchardZSADomain {
    /// Constructs the ZSA note-encryption domain for an action.
    pub fn for_action<T>(action: &crate::action::Action<T, Self>) -> Self {
        Self {
            rho: Rho::from_bytes(&action.nullifier().to_bytes())
                .into_option()
                .expect("an action nullifier is a canonical base-field element"),
        }
    }
}

impl memuse::DynamicUsage for OrchardZSADomain {
    fn dynamic_usage(&self) -> usize {
        self.rho.dynamic_usage()
    }
    fn dynamic_usage_bounds(&self) -> (usize, Option<usize>) {
        self.rho.dynamic_usage_bounds()
    }
}

impl Domain for OrchardZSADomain {
    type EphemeralSecretKey = EphemeralSecretKey;
    type EphemeralPublicKey = EphemeralPublicKey;
    type PreparedEphemeralPublicKey = PreparedEphemeralPublicKey;
    type SharedSecret = SharedSecret;
    type SymmetricKey = Hash;
    type Note = Note;
    type Recipient = Address;
    type DiversifiedTransmissionKey = DiversifiedTransmissionKey;
    type IncomingViewingKey = PreparedIncomingViewingKey;
    type OutgoingViewingKey = OutgoingViewingKey;
    type ValueCommitment = ValueCommitment;
    type ExtractedCommitment = ExtractedNoteCommitment;
    type ExtractedCommitmentBytes = [u8; 32];
    type Memo = [u8; MEMO_SIZE];

    type NotePlaintextBytes = NoteBytesData<NOTE_PLAINTEXT_SIZE>;
    type NoteCiphertextBytes = NoteBytesData<ENC_CIPHERTEXT_SIZE>;
    type CompactNotePlaintextBytes = NoteBytesData<COMPACT_NOTE_SIZE_ZSA>;
    type CompactNoteCiphertextBytes = NoteBytesData<COMPACT_NOTE_SIZE_ZSA>;

    fn derive_esk(note: &Self::Note) -> Option<Self::EphemeralSecretKey> {
        Some(note.esk())
    }

    fn get_pk_d(note: &Self::Note) -> Self::DiversifiedTransmissionKey {
        *note.recipient().pk_d()
    }

    fn prepare_epk(epk: Self::EphemeralPublicKey) -> Self::PreparedEphemeralPublicKey {
        PreparedEphemeralPublicKey::new(epk)
    }

    fn ka_derive_public(
        note: &Self::Note,
        esk: &Self::EphemeralSecretKey,
    ) -> Self::EphemeralPublicKey {
        esk.derive_public(note.recipient().g_d())
    }

    fn ka_agree_enc(
        esk: &Self::EphemeralSecretKey,
        pk_d: &Self::DiversifiedTransmissionKey,
    ) -> Self::SharedSecret {
        esk.agree(pk_d)
    }

    fn ka_agree_dec(
        ivk: &Self::IncomingViewingKey,
        epk: &Self::PreparedEphemeralPublicKey,
    ) -> Self::SharedSecret {
        epk.agree(ivk)
    }

    fn kdf(secret: Self::SharedSecret, ephemeral_key: &EphemeralKeyBytes) -> Self::SymmetricKey {
        secret.kdf_orchard(ephemeral_key)
    }

    fn note_plaintext_bytes(note: &Self::Note, memo: &Self::Memo) -> Self::NotePlaintextBytes {
        let mut np = [0; NOTE_PLAINTEXT_SIZE];
        np[NOTE_VERSION_OFFSET] = NOTE_VERSION_BYTE_V3;
        np[NOTE_DIVERSIFIER_OFFSET..NOTE_VALUE_OFFSET]
            .copy_from_slice(note.recipient().diversifier().as_array());
        np[NOTE_VALUE_OFFSET..NOTE_RSEED_OFFSET].copy_from_slice(&note.value().to_bytes());
        np[NOTE_RSEED_OFFSET..COMPACT_NOTE_SIZE_VANILLA].copy_from_slice(note.rseed().as_bytes());
        np[COMPACT_NOTE_SIZE_VANILLA..COMPACT_NOTE_SIZE_ZSA]
            .copy_from_slice(&note.asset().to_bytes());
        np[COMPACT_NOTE_SIZE_ZSA..].copy_from_slice(memo);
        NoteBytesData(np)
    }

    fn derive_ock(
        ovk: &Self::OutgoingViewingKey,
        cv: &Self::ValueCommitment,
        cmstar_bytes: &Self::ExtractedCommitmentBytes,
        ephemeral_key: &EphemeralKeyBytes,
    ) -> OutgoingCipherKey {
        crate::note_encryption::prf_ock_orchard(ovk, cv, cmstar_bytes, ephemeral_key)
    }

    fn outgoing_plaintext_bytes(
        note: &Self::Note,
        esk: &Self::EphemeralSecretKey,
    ) -> OutPlaintextBytes {
        let mut op = [0; OUT_PLAINTEXT_SIZE];
        op[..32].copy_from_slice(&note.recipient().pk_d().to_bytes());
        op[32..].copy_from_slice(&esk.0.to_repr());
        OutPlaintextBytes(op)
    }

    fn epk_bytes(epk: &Self::EphemeralPublicKey) -> EphemeralKeyBytes {
        epk.to_bytes()
    }

    fn epk(ephemeral_key: &EphemeralKeyBytes) -> Option<Self::EphemeralPublicKey> {
        EphemeralPublicKey::from_bytes(&ephemeral_key.0).into()
    }

    fn cmstar(note: &Self::Note) -> Self::ExtractedCommitment {
        note.commitment().into()
    }

    fn parse_note_plaintext_without_memo_ivk(
        &self,
        ivk: &Self::IncomingViewingKey,
        plaintext: &[u8],
    ) -> Option<(Self::Note, Self::Recipient)> {
        parse_note_plaintext(self.rho, plaintext, |diversifier| {
            Some(DiversifiedTransmissionKey::derive(ivk, diversifier))
        })
    }

    fn parse_note_plaintext_without_memo_ovk(
        &self,
        pk_d: &Self::DiversifiedTransmissionKey,
        plaintext: &[u8],
    ) -> Option<(Self::Note, Self::Recipient)> {
        parse_note_plaintext(self.rho, plaintext, |_| Some(*pk_d))
    }

    fn split_plaintext_at_memo(
        &self,
        plaintext: &Self::NotePlaintextBytes,
    ) -> Option<(Self::CompactNotePlaintextBytes, Self::Memo)> {
        let (compact, memo) = plaintext.as_ref().split_at(COMPACT_NOTE_SIZE_ZSA);
        Some((
            Self::CompactNotePlaintextBytes::from_slice(compact)?,
            memo.try_into().ok()?,
        ))
    }

    fn extract_pk_d(out_plaintext: &OutPlaintextBytes) -> Option<Self::DiversifiedTransmissionKey> {
        DiversifiedTransmissionKey::from_bytes(out_plaintext.0[0..32].try_into().unwrap()).into()
    }

    fn extract_esk(out_plaintext: &OutPlaintextBytes) -> Option<Self::EphemeralSecretKey> {
        EphemeralSecretKey::from_bytes(out_plaintext.0[32..OUT_PLAINTEXT_SIZE].try_into().unwrap())
            .into()
    }
}

impl BatchDomain for OrchardZSADomain {
    fn batch_kdf<'a>(
        items: impl Iterator<Item = (Option<Self::SharedSecret>, &'a EphemeralKeyBytes)>,
    ) -> alloc::vec::Vec<Option<Self::SymmetricKey>> {
        let (shared_secrets, ephemeral_keys): (alloc::vec::Vec<_>, alloc::vec::Vec<_>) =
            items.unzip();

        SharedSecret::batch_to_affine(shared_secrets)
            .zip(ephemeral_keys)
            .map(|(secret, ephemeral_key)| {
                secret.map(|dhsecret| SharedSecret::kdf_orchard_inner(dhsecret, ephemeral_key))
            })
            .collect()
    }
}

impl<T> ShieldedOutput<OrchardZSADomain> for crate::action::Action<T, OrchardZSADomain> {
    fn ephemeral_key(&self) -> EphemeralKeyBytes {
        EphemeralKeyBytes(self.encrypted_note().epk_bytes)
    }

    fn cmstar(&self) -> &ExtractedNoteCommitment {
        self.cmx()
    }

    fn cmstar_bytes(&self) -> <OrchardZSADomain as Domain>::ExtractedCommitmentBytes {
        self.cmx().to_bytes()
    }

    fn enc_ciphertext(&self) -> Option<&<OrchardZSADomain as Domain>::NoteCiphertextBytes> {
        Some(&self.encrypted_note().enc_ciphertext)
    }

    fn enc_ciphertext_compact(&self) -> <OrchardZSADomain as Domain>::CompactNoteCiphertextBytes {
        let enc = self.encrypted_note().enc_ciphertext.as_ref();
        let mut compact = [0u8; COMPACT_NOTE_SIZE_ZSA];
        let end = enc.len().min(COMPACT_NOTE_SIZE_ZSA);
        compact[..end].copy_from_slice(&enc[..end]);
        NoteBytesData(compact)
    }
}
