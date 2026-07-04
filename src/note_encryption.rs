//! In-band secret distribution for Orchard bundles.
//!
//! Implements `Domain` for `OrchardDomain` (52-byte compact notes, vanilla / Ironwood).
//! ZSA note encryption lives in the `zsa` module.

use alloc::vec::Vec;
use core::fmt;

use blake2b_simd::{Hash, Params};
use group::ff::PrimeField;
use zcash_note_encryption::{
    note_bytes::NoteBytesData, note_bytes::NoteBytes, BatchDomain, Domain, EphemeralKeyBytes,
    OutPlaintextBytes, OutgoingCipherKey, ShieldedOutput, OUT_PLAINTEXT_SIZE,
};

use crate::{
    action::Action,
    keys::{
        DiversifiedTransmissionKey, Diversifier, EphemeralPublicKey, EphemeralSecretKey,
        OutgoingViewingKey, PreparedEphemeralPublicKey, PreparedIncomingViewingKey, SharedSecret,
    },
    note::{AssetBase, ExtractedNoteCommitment, Nullifier, RandomSeed, Rho},
    shared::{
        COMPACT_NOTE_SIZE_VANILLA, MEMO_SIZE, NOTE_DIVERSIFIER_OFFSET, NOTE_RSEED_OFFSET,
        NOTE_VALUE_OFFSET, NOTE_VERSION_BYTE_V2, NOTE_VERSION_OFFSET,
    },
    value::{NoteValue, ValueCommitment},
    Address, Note,
};

// ---------------------------------------------------------------------------
// Vanilla note sizes
// ---------------------------------------------------------------------------

/// Vanilla note plaintext size.
const NOTE_PLAINTEXT_SIZE: usize = COMPACT_NOTE_SIZE_VANILLA + MEMO_SIZE; // 564

/// Vanilla encrypted note ciphertext size.
const ENC_CIPHERTEXT_SIZE: usize = NOTE_PLAINTEXT_SIZE + 16; // 580

// ---------------------------------------------------------------------------
// PRF-OCK
// ---------------------------------------------------------------------------

const PRF_OCK_ORCHARD_PERSONALIZATION: &[u8; 16] = b"Zcash_Orchardock";

/// Defined in [Zcash Protocol Spec § 5.4.2: Pseudo Random Functions][concreteprfs].
///
/// [concreteprfs]: https://zips.z.cash/protocol/nu5.pdf#concreteprfs
pub(crate) fn prf_ock_orchard(
    ovk: &OutgoingViewingKey,
    cv: &ValueCommitment,
    cmx_bytes: &[u8; 32],
    ephemeral_key: &EphemeralKeyBytes,
) -> OutgoingCipherKey {
    OutgoingCipherKey(
        Params::new()
            .hash_length(32)
            .personal(PRF_OCK_ORCHARD_PERSONALIZATION)
            .to_state()
            .update(ovk.as_ref())
            .update(&cv.to_bytes())
            .update(cmx_bytes)
            .update(ephemeral_key.as_ref())
            .finalize()
            .as_bytes()
            .try_into()
            .unwrap(),
    )
}

// ---------------------------------------------------------------------------
// Note plaintext parsing
// ---------------------------------------------------------------------------

fn orchard_parse_note_plaintext_without_memo<F>(
    domain: &OrchardDomain,
    plaintext: &[u8],
    get_pk_d: F,
) -> Option<(Note, Address)>
where
    F: FnOnce(&Diversifier) -> DiversifiedTransmissionKey,
{
    if plaintext.first() != Some(&NOTE_VERSION_BYTE_V2) {
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

    let rseed = Option::from(RandomSeed::from_bytes(
        plaintext[NOTE_RSEED_OFFSET..COMPACT_NOTE_SIZE_VANILLA]
            .try_into()
            .unwrap(),
        &domain.rho,
    ))?;

    let pk_d = get_pk_d(&diversifier);
    let recipient = Address::from_parts(diversifier, pk_d);
    let note = Note::from_parts(recipient, value, AssetBase::zatoshi(), domain.rho, rseed).into_option()?;

    Some((note, recipient))
}

// ---------------------------------------------------------------------------
// OrchardDomain
// ---------------------------------------------------------------------------

/// Orchard-specific note encryption logic for 52-byte compact notes (vanilla / Ironwood).
#[derive(Debug, Clone)]
pub struct OrchardDomain {
    /// A parameter needed to generate the nullifier.
    pub rho: Rho,
}

impl memuse::DynamicUsage for OrchardDomain {
    fn dynamic_usage(&self) -> usize {
        self.rho.dynamic_usage()
    }

    fn dynamic_usage_bounds(&self) -> (usize, Option<usize>) {
        self.rho.dynamic_usage_bounds()
    }
}

impl OrchardDomain {
    /// Constructs a domain that can be used to trial-decrypt this action's output note.
    pub fn for_action<T>(act: &Action<T>) -> Self {
        Self { rho: act.rho() }
    }

    /// Constructs a domain that can be used to trial-decrypt a PCZT action's output note.
    pub fn for_pczt_action(act: &crate::pczt::Action) -> Self {
        Self {
            rho: Rho::from_nf_old(act.spend().nullifier),
        }
    }

    /// Constructs a domain that can be used to trial-decrypt this compact action's output note.
    pub fn for_compact_action(act: &CompactAction) -> Self {
        Self { rho: act.rho() }
    }

    /// Constructs a domain from a rho.
    #[cfg(test)]
    pub(crate) fn for_rho(rho: Rho) -> Self {
        Self { rho }
    }
}

impl Domain for OrchardDomain {
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
    type CompactNotePlaintextBytes = NoteBytesData<COMPACT_NOTE_SIZE_VANILLA>;
    type CompactNoteCiphertextBytes = NoteBytesData<COMPACT_NOTE_SIZE_VANILLA>;

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

    fn kdf(
        secret: Self::SharedSecret,
        ephemeral_key: &EphemeralKeyBytes,
    ) -> Self::SymmetricKey {
        secret.kdf_orchard(ephemeral_key)
    }

    fn note_plaintext_bytes(
        note: &Self::Note,
        memo: &Self::Memo,
    ) -> Self::NotePlaintextBytes {
        let mut np = [0; NOTE_PLAINTEXT_SIZE];
        np[NOTE_VERSION_OFFSET] = NOTE_VERSION_BYTE_V2;
        np[NOTE_DIVERSIFIER_OFFSET..NOTE_VALUE_OFFSET]
            .copy_from_slice(note.recipient().diversifier().as_array());
        np[NOTE_VALUE_OFFSET..NOTE_RSEED_OFFSET]
            .copy_from_slice(&note.value().to_bytes());
        np[NOTE_RSEED_OFFSET..COMPACT_NOTE_SIZE_VANILLA]
            .copy_from_slice(note.rseed().as_bytes());
        np[COMPACT_NOTE_SIZE_VANILLA..].copy_from_slice(memo);
        NoteBytesData(np)
    }

    fn derive_ock(
        ovk: &Self::OutgoingViewingKey,
        cv: &Self::ValueCommitment,
        cmstar_bytes: &Self::ExtractedCommitmentBytes,
        ephemeral_key: &EphemeralKeyBytes,
    ) -> OutgoingCipherKey {
        prf_ock_orchard(ovk, cv, cmstar_bytes, ephemeral_key)
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
        plaintext: &Self::CompactNotePlaintextBytes,
    ) -> Option<(Self::Note, Self::Recipient)> {
        orchard_parse_note_plaintext_without_memo(self, plaintext.as_ref(), |diversifier| {
            DiversifiedTransmissionKey::derive(ivk, diversifier)
        })
    }

    fn parse_note_plaintext_without_memo_ovk(
        &self,
        pk_d: &Self::DiversifiedTransmissionKey,
        plaintext: &Self::CompactNotePlaintextBytes,
    ) -> Option<(Self::Note, Self::Recipient)> {
        orchard_parse_note_plaintext_without_memo(self, plaintext.as_ref(), |_| *pk_d)
    }

    fn split_plaintext_at_memo(
        &self,
        plaintext: &Self::NotePlaintextBytes,
    ) -> Option<(Self::CompactNotePlaintextBytes, Self::Memo)> {
        let (compact, memo) = plaintext.as_ref().split_at(COMPACT_NOTE_SIZE_VANILLA);
        Some((
            Self::CompactNotePlaintextBytes::from_slice(compact)?,
            memo.try_into().ok()?,
        ))
    }

    fn extract_pk_d(
        out_plaintext: &OutPlaintextBytes,
    ) -> Option<Self::DiversifiedTransmissionKey> {
        DiversifiedTransmissionKey::from_bytes(out_plaintext.0[0..32].try_into().unwrap()).into()
    }

    fn extract_esk(
        out_plaintext: &OutPlaintextBytes,
    ) -> Option<Self::EphemeralSecretKey> {
        EphemeralSecretKey::from_bytes(out_plaintext.0[32..OUT_PLAINTEXT_SIZE].try_into().unwrap())
            .into()
    }
}

impl BatchDomain for OrchardDomain {
    fn batch_kdf<'a>(
        items: impl Iterator<Item = (Option<Self::SharedSecret>, &'a EphemeralKeyBytes)>,
    ) -> Vec<Option<Self::SymmetricKey>> {
        let (shared_secrets, ephemeral_keys): (Vec<_>, Vec<_>) = items.unzip();

        SharedSecret::batch_to_affine(shared_secrets)
            .zip(ephemeral_keys)
            .map(|(secret, ephemeral_key)| {
                secret.map(|dhsecret| SharedSecret::kdf_orchard_inner(dhsecret, ephemeral_key))
            })
            .collect()
    }
}

/// Implementation of in-band secret distribution for Orchard bundles.
pub type OrchardNoteEncryption = zcash_note_encryption::NoteEncryption<OrchardDomain>;

// ---------------------------------------------------------------------------
// ShieldedOutput impls
// ---------------------------------------------------------------------------

impl<T> ShieldedOutput<OrchardDomain> for Action<T, OrchardDomain> {
    fn ephemeral_key(&self) -> EphemeralKeyBytes {
        EphemeralKeyBytes(self.encrypted_note().epk_bytes)
    }

    fn cmstar_bytes(&self) -> <OrchardDomain as Domain>::ExtractedCommitmentBytes {
        self.cmx().to_bytes()
    }

    fn enc_ciphertext(&self) -> Option<&<OrchardDomain as Domain>::NoteCiphertextBytes> {
        Some(&self.encrypted_note().enc_ciphertext)
    }

    fn enc_ciphertext_compact(&self) -> <OrchardDomain as Domain>::CompactNoteCiphertextBytes {
        let enc = self.encrypted_note().enc_ciphertext.as_ref();
        let mut compact = [0u8; COMPACT_NOTE_SIZE_VANILLA];
        let end = enc.len().min(COMPACT_NOTE_SIZE_VANILLA);
        compact[..end].copy_from_slice(&enc[..end]);
        NoteBytesData(compact)
    }
}

impl ShieldedOutput<OrchardDomain> for crate::pczt::Action {
    fn ephemeral_key(&self) -> EphemeralKeyBytes {
        EphemeralKeyBytes(self.output.encrypted_note.epk_bytes)
    }

    fn cmstar_bytes(&self) -> <OrchardDomain as Domain>::ExtractedCommitmentBytes {
        self.output.cmx.to_bytes()
    }

    fn enc_ciphertext(&self) -> Option<&<OrchardDomain as Domain>::NoteCiphertextBytes> {
        Some(&self.output.encrypted_note.enc_ciphertext)
    }

    fn enc_ciphertext_compact(&self) -> <OrchardDomain as Domain>::CompactNoteCiphertextBytes {
        let mut compact = [0u8; COMPACT_NOTE_SIZE_VANILLA];
        let enc = self.output.encrypted_note.enc_ciphertext.as_ref();
        let end = enc.len().min(COMPACT_NOTE_SIZE_VANILLA);
        compact[..end].copy_from_slice(&enc[..end]);
        NoteBytesData(compact)
    }
}

// ---------------------------------------------------------------------------
// CompactAction
// ---------------------------------------------------------------------------

/// A compact Action for light clients, always 52-byte encrypted note.
#[derive(Clone)]
pub struct CompactAction {
    nullifier: Nullifier,
    cmx: ExtractedNoteCommitment,
    ephemeral_key: EphemeralKeyBytes,
    enc_ciphertext: NoteBytesData<COMPACT_NOTE_SIZE_VANILLA>,
}

impl fmt::Debug for CompactAction {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_tuple("CompactAction").finish()
    }
}

impl<T> From<&Action<T, OrchardDomain>> for CompactAction {
    fn from(action: &Action<T, OrchardDomain>) -> Self {
        CompactAction {
            nullifier: *action.nullifier(),
            cmx: *action.cmx(),
            ephemeral_key: EphemeralKeyBytes(action.encrypted_note().epk_bytes),
            enc_ciphertext: NoteBytesData::from_slice(
                &action.encrypted_note().enc_ciphertext.as_ref()[..COMPACT_NOTE_SIZE_VANILLA],
            )
            .unwrap(),
        }
    }
}

impl ShieldedOutput<OrchardDomain> for CompactAction {
    fn ephemeral_key(&self) -> EphemeralKeyBytes {
        EphemeralKeyBytes(self.ephemeral_key.0)
    }

    fn cmstar_bytes(&self) -> <OrchardDomain as Domain>::ExtractedCommitmentBytes {
        self.cmx.to_bytes()
    }

    fn enc_ciphertext(&self) -> Option<&<OrchardDomain as Domain>::NoteCiphertextBytes> {
        None
    }

    fn enc_ciphertext_compact(&self) -> <OrchardDomain as Domain>::CompactNoteCiphertextBytes {
        self.enc_ciphertext
    }
}

impl CompactAction {
    /// Create a CompactAction from its constituent parts
    pub fn from_parts(
        nullifier: Nullifier,
        cmx: ExtractedNoteCommitment,
        ephemeral_key: EphemeralKeyBytes,
        enc_ciphertext: NoteBytesData<COMPACT_NOTE_SIZE_VANILLA>,
    ) -> Self {
        Self {
            nullifier,
            cmx,
            ephemeral_key,
            enc_ciphertext,
        }
    }

    /// Returns the nullifier of the note being spent.
    pub fn nullifier(&self) -> Nullifier {
        self.nullifier
    }

    /// Returns the commitment to the new note being created.
    pub fn cmx(&self) -> ExtractedNoteCommitment {
        self.cmx
    }

    /// Obtains the [`Rho`] value that was used to construct the new note being created.
    pub fn rho(&self) -> Rho {
        Rho::from_nf_old(self.nullifier)
    }
}

/// Utilities for constructing test data.
#[cfg(feature = "test-dependencies")]
pub mod testing {
    use rand::RngCore;
    use zcash_note_encryption::{note_bytes::NoteBytes, Domain, NoteEncryption};

    use crate::{
        keys::OutgoingViewingKey,
        note::{ExtractedNoteCommitment, Nullifier, RandomSeed, Rho},
        shared::{COMPACT_NOTE_SIZE_VANILLA, MEMO_SIZE, NOTE_VERSION_OFFSET},
        value::NoteValue,
        Address, Note,
    };

    use super::{CompactAction, OrchardDomain, OrchardNoteEncryption};

    /// Creates a fake `CompactAction` paying the given recipient the specified value.
    ///
    /// Returns the `CompactAction` and the new note.
    pub fn fake_compact_action<R: RngCore>(
        rng: &mut R,
        nf_old: Nullifier,
        recipient: Address,
        value: NoteValue,
        ovk: Option<OutgoingViewingKey>,
    ) -> (CompactAction, Note) {
        let rho = Rho::from_nf_old(nf_old);
        let rseed = {
            loop {
                let mut bytes = [0; 32];
                rng.fill_bytes(&mut bytes);
                let rseed = RandomSeed::from_bytes(bytes, &rho);
                if rseed.is_some().into() {
                    break rseed.unwrap();
                }
            }
        };
        let note = Note::from_parts(recipient, value, rho, rseed).unwrap();
        let encryptor = OrchardNoteEncryption::new(ovk, note, [0u8; MEMO_SIZE]);
        let cmx = ExtractedNoteCommitment::from(note.commitment());
        let ephemeral_key = OrchardDomain::epk_bytes(encryptor.epk());
        let enc_ciphertext = encryptor.encrypt_note_plaintext();

        (
            CompactAction::from_parts(
                nf_old,
                cmx,
                ephemeral_key,
                NoteBytesData::from_slice(&enc_ciphertext.as_ref()[..COMPACT_NOTE_SIZE_VANILLA])
                    .unwrap(),
            ),
            note,
        )
    }
}
