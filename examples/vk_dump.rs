fn main() {
    let vk = orchard::circuit::VerifyingKey::build_zsa();
    std::fs::write("/tmp/vk_015.txt", vk.pinned()).unwrap();
    println!("wrote 0.15 VK");
}
