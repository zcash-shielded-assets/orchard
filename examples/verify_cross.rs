use orchard::circuit::{CircuitInstance, VerifyingKey, Instance};
use orchard::Proof;

fn main() {
    // 0.14 proof hex from the test run
    let proof_hex = std::env::args().nth(1).expect("need proof hex");
    let proof_bytes = hex::decode(&proof_hex).expect("decode");
    let proof = Proof::new(proof_bytes);
    
    let vk = VerifyingKey::build_zsa();
    
    // Reconstruct instances from the 0.14 dump
    // Action 0:
    let anchor = orchard::tree::Anchor::from_bytes([
        0x0e, 0x99, 0x2b, 0x2d, 0xd2, 0xd9, 0x8a, 0x47,
        0x6c, 0x0b, 0xe2, 0x64, 0xd0, 0x2e, 0xd4, 0x14,
        0x49, 0x54, 0xba, 0x58, 0x19, 0x9b, 0x99, 0x1c,
        0xca, 0x6e, 0x09, 0x4f, 0x9e, 0x29, 0x64, 0x13,
    ]).unwrap();
    
    // ... this is too painful to reconstruct
    
    println!("VK pinned: {}", vk.pinned());
    println!("Proof len: {}", proof.as_ref().len());
    println!("verify with zero instances: {:?}", proof.verify(&vk, &[]));
}
