fn main() {
    let vk = orchard::circuit::VerifyingKey::build_zsa();
    println!("{}", vk.pinned());
}
