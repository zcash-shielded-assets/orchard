#![cfg(feature = "zsa")]

use ff::{Field, PrimeField};
use group::{Group, GroupEncoding};
use incrementalmerkletree::{Marking, Retention};
use orchard::{
    builder::{Builder, BundleType},
    bundle::BundleVersion,
    circuit::{OrchardCircuitVersion, ProvingKey},
    keys::{FullViewingKey, Scope, SpendingKey},
    note::{AssetBase, ExtractedNoteCommitment, NoteVersion, RandomSeed, Rho},
    tree::{MerkleHashOrchard, MerklePath},
    value::NoteValue,
    Note,
};
use pasta_curves::pallas;
use rand::{rngs::OsRng, RngCore};
use shardtree::{store::memory::MemoryShardStore, ShardTree};

fn single_leaf_witness(cmx: &ExtractedNoteCommitment) -> (MerkleHashOrchard, MerklePath) {
    let leaf = MerkleHashOrchard::from_cmx(cmx);
    let mut tree: ShardTree<MemoryShardStore<MerkleHashOrchard, u32>, 32, 16> =
        ShardTree::new(MemoryShardStore::empty(), 100);
    tree.append(
        leaf,
        Retention::Checkpoint {
            id: 0,
            marking: Marking::Marked,
        },
    )
    .expect("single leaf can be appended");
    let root = tree
        .root_at_checkpoint_id(&0)
        .expect("tree read succeeds")
        .expect("checkpoint has a root");
    let position = tree
        .max_leaf_position(None)
        .expect("tree read succeeds")
        .expect("tree has a leaf");
    let path = tree
        .witness_at_checkpoint_id(position, &0)
        .expect("tree read succeeds")
        .expect("marked leaf has a witness");
    (root, path.into())
}

#[test]
fn split_pczt_proof_verifies() {
    let mut rng = OsRng;
    let sk = SpendingKey::from_bytes([1; 32])
        .into_option()
        .expect("fixed test spending key is valid");
    let fvk = FullViewingKey::from(&sk);
    let recipient = fvk.address_at(0u32, Scope::External);
    let asset = loop {
        let point = pallas::Point::random(&mut rng);
        if let Some(asset) = AssetBase::from_bytes(&point.to_bytes()).into_option() {
            if !bool::from(asset.is_zatoshi()) {
                break asset;
            }
        }
    };
    let rho = Rho::from_bytes(&pallas::Base::random(&mut rng).to_repr())
        .into_option()
        .expect("a field element is a valid rho");
    let note = loop {
        let mut bytes = [0; 32];
        rng.fill_bytes(&mut bytes);
        if let Some(rseed) = RandomSeed::from_bytes(bytes, &rho).into_option() {
            if let Some(note) = Note::from_parts(
                recipient,
                NoteValue::from_raw(1_000_000),
                asset,
                rho,
                rseed,
                NoteVersion::V3ZSA,
            )
            .into_option()
            {
                break note;
            }
        }
    };
    let cmx = ExtractedNoteCommitment::from(note.commitment());
    let (root, path) = single_leaf_witness(&cmx);
    let bundle_version = BundleVersion::orchard_zsa();
    let mut builder = Builder::<orchard::zsa::OrchardZSADomain>::new(
        BundleType::DEFAULT_ZSA,
        bundle_version,
        bundle_version.default_flags(),
        root.into(),
    )
    .expect("ZSA builder configuration is valid");
    builder
        .add_spend(fvk, note, path)
        .expect("the witness matches the anchor");
    for _ in 0..2 {
        builder
            .add_output(
                None,
                recipient,
                NoteValue::from_raw(500_000),
                asset,
                [0; 512],
            )
            .expect("ZSA output is valid");
    }

    let (mut pczt, _) = builder
        .build_for_pczt(&mut rng)
        .expect("ZSA PCZT builds");
    assert_eq!(pczt.actions().len(), 2);
    assert_eq!(
        pczt.actions()
            .iter()
            .filter(|action| action.spend().rseed_split_note().is_some())
            .count(),
        1
    );

    let pk = ProvingKey::build(OrchardCircuitVersion::ZsaFixed);
    pczt.create_proof(&pk, rng)
        .expect("the split-note proof verifies locally");
}
