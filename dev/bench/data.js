window.BENCHMARK_DATA = {
  "lastUpdate": 1783140659990,
  "repoUrl": "https://github.com/zcash-shielded-assets/orchard",
  "entries": {
    "Orchard Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de37f1cdbcff53e5ab26a485d058bf8c41bd5626",
          "message": "Merge pull request #328 from zcash/release-0.1.0\n\nRelease 0.1.0",
          "timestamp": "2022-05-11T00:05:04+01:00",
          "tree_id": "324bc3f9556eaaa818ac438fd0b9cc283e17a7c0",
          "url": "https://github.com/zcash/orchard/commit/de37f1cdbcff53e5ab26a485d058bf8c41bd5626"
        },
        "date": 1652225089357,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 4857861122,
            "range": "± 71667115",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 4806370052,
            "range": "± 25223232",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 6846933148,
            "range": "± 30191351",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 8894090130,
            "range": "± 32810080",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 41323752,
            "range": "± 855174",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 41205365,
            "range": "± 509068",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 46165883,
            "range": "± 1317441",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 50159316,
            "range": "± 8203884",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1317079,
            "range": "± 4192",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 165717,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1314046,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 168781331,
            "range": "± 51810",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 25912834,
            "range": "± 17450",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2923277,
            "range": "± 1651",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 25873279,
            "range": "± 16732",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2879646,
            "range": "± 1851",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 129525905,
            "range": "± 339536",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 14554521,
            "range": "± 7564",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 128390326,
            "range": "± 44923",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 14327243,
            "range": "± 9714",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 258982563,
            "range": "± 118605",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 29075555,
            "range": "± 15369",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 258507780,
            "range": "± 448378",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 28635284,
            "range": "± 6284",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 617257,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 684808,
            "range": "± 432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "Jack Grigg",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17f835d06587f2cd69ef5931bce371d57848e524",
          "message": "Merge pull request #474 from zcash/release-0.12.0\n\norchard 0.12.0",
          "timestamp": "2025-12-05T17:11:44Z",
          "tree_id": "873cade7725160afc8d56a7146cc4033df64d3d2",
          "url": "https://github.com/hhanh00/orchard/commit/17f835d06587f2cd69ef5931bce371d57848e524"
        },
        "date": 1765365679368,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2682913898,
            "range": "± 195171449",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2676129576,
            "range": "± 2699331",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3864448133,
            "range": "± 18154082",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5027254210,
            "range": "± 32892833",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 21047151,
            "range": "± 148330",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 21045828,
            "range": "± 398664",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 24632490,
            "range": "± 187707",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 27739785,
            "range": "± 277397",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1479171,
            "range": "± 9344",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 125459,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1476558,
            "range": "± 7373",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1343071922,
            "range": "± 523930",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 15635647,
            "range": "± 23635",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2126926,
            "range": "± 3252",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 15613165,
            "range": "± 25644",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2091614,
            "range": "± 5779",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 78117146,
            "range": "± 138426",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 10579503,
            "range": "± 14754",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 78011387,
            "range": "± 99152",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 10404821,
            "range": "± 13993",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 156267242,
            "range": "± 1278686",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 21147568,
            "range": "± 30244",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 155998090,
            "range": "± 155870",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 20800805,
            "range": "± 31344",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 461492,
            "range": "± 10321",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 488038,
            "range": "± 1808",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "955a1e31b6e7cbd70c2f62c3563a896f9b7c3dcc",
          "message": "Add ZSA note encryption domain on top of upstream orchard\n\n- Depend on zcash_note_encryption zsa-domain branch (generic Domain trait)\n- Add shared.rs with size constants and note layout helpers\n- Update note_encryption.rs to use generic Domain trait with associated types\n- Update TransmittedNoteCiphertext to use NoteBytesData<580>\n- Add zsa module with OrchardZSADomain (84-byte compact notes)\n- zsa module is cfg-gated behind \"zsa\" feature, deletable without side effects\n- No OrchardDomain<Pr> — both Domain impls are concrete structs",
          "timestamp": "2026-07-04T08:54:44+08:00",
          "tree_id": "cdac250d0329c44bdc3593f7b9274c2ff62ec0a9",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/955a1e31b6e7cbd70c2f62c3563a896f9b7c3dcc"
        },
        "date": 1783127240740,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2732215186,
            "range": "± 22013155",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2728385483,
            "range": "± 24846214",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3914525015,
            "range": "± 21724647",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5115272384,
            "range": "± 13174447",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22089086,
            "range": "± 182179",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22198741,
            "range": "± 210811",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25651371,
            "range": "± 288260",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 28900264,
            "range": "± 161897",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1586065,
            "range": "± 34049",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 135498,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1584009,
            "range": "± 6584",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1422483428,
            "range": "± 6611777",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 16752759,
            "range": "± 24025",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2288830,
            "range": "± 4264",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16730696,
            "range": "± 45240",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2247916,
            "range": "± 15287",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 83735082,
            "range": "± 242665",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11374466,
            "range": "± 14092",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 83568607,
            "range": "± 1269845",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11165786,
            "range": "± 215775",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 167349468,
            "range": "± 151318",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22723246,
            "range": "± 27244",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 167069136,
            "range": "± 2132122",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22317259,
            "range": "± 59807",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 488550,
            "range": "± 1294",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522928,
            "range": "± 22505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "b32db00a1ade5e6c015af25d595e4a0365a8fe64",
          "message": "Domain-tied note types: TransmittedNoteCiphertext, Action, Bundle\n\n- TransmittedNoteCiphertext<D: Domain> — ciphertext size from Domain\n- Action<A, D: Domain> — defaults to OrchardDomain\n- Bundle<T, V, D: Domain = OrchardDomain> — defaults to OrchardDomain\n- Main Bundle impl (decrypt, hash) restricted to OrchardDomain\n- D bound satisfied by any zcash_note_encryption::Domain impl\n- Also add zsa/ module with issuance, burn, commitments, circuit",
          "timestamp": "2026-07-04T09:28:50+08:00",
          "tree_id": "7b3c067986562429d085d114475ce91ca37248ed",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/b32db00a1ade5e6c015af25d595e4a0365a8fe64"
        },
        "date": 1783129282253,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2776315249,
            "range": "± 216128608",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2731743541,
            "range": "± 8978403",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3909294244,
            "range": "± 23504499",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5133214434,
            "range": "± 28459804",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22329268,
            "range": "± 214712",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22416900,
            "range": "± 155681",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25636632,
            "range": "± 294399",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 29216893,
            "range": "± 606109",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1579304,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134241,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1577752,
            "range": "± 19206",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1415118161,
            "range": "± 5342848",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 16699452,
            "range": "± 287655",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2286466,
            "range": "± 3124",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16677026,
            "range": "± 21529",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2245710,
            "range": "± 20756",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 83439313,
            "range": "± 115004",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11373875,
            "range": "± 241087",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 83324267,
            "range": "± 71954",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11170458,
            "range": "± 12077",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 166827072,
            "range": "± 178660",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22734352,
            "range": "± 104710",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 166614935,
            "range": "± 136570",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22320630,
            "range": "± 31248",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 489544,
            "range": "± 27541",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522485,
            "range": "± 6974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "623ae5ef83647b530f47d1add8267d5e4803014f",
          "message": "Add AssetBase to Note\n\n- Add note/asset_base.rs with AssetBase type (pallas::Point wrapper)\n- Add ZATOSHI_ASSET_BASE_V_BYTES, ZSA_ASSET_BASE_PERSONALIZATION constants\n- Note::from_parts now takes 5 args (asset added after value)\n- All callers updated to use AssetBase::zatoshi() for vanilla notes",
          "timestamp": "2026-07-04T09:34:57+08:00",
          "tree_id": "1a4e0b75d2293c90aada60ee1c1a4f3a7026bb85",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/623ae5ef83647b530f47d1add8267d5e4803014f"
        },
        "date": 1783129644936,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2760381885,
            "range": "± 20340703",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2732309184,
            "range": "± 19919072",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3895462764,
            "range": "± 32437594",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5120400710,
            "range": "± 11224745",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22166282,
            "range": "± 169646",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22053266,
            "range": "± 148278",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25592565,
            "range": "± 209193",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 28981736,
            "range": "± 201413",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1609351,
            "range": "± 11044",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134097,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1605691,
            "range": "± 5511",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1414926989,
            "range": "± 2562558",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 16977195,
            "range": "± 41690",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2282550,
            "range": "± 16958",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16958167,
            "range": "± 38170",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2240261,
            "range": "± 27572",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 84834302,
            "range": "± 100623",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11357819,
            "range": "± 20325",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 84788653,
            "range": "± 723742",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11146251,
            "range": "± 19940",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 169758520,
            "range": "± 509217",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22697897,
            "range": "± 265619",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 169500825,
            "range": "± 159256",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22279982,
            "range": "± 278886",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 488974,
            "range": "± 4946",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522107,
            "range": "± 767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "d964903c70db8bf1e2b8578868cdd6d4952da8d1",
          "message": "Complete ZSA integration: AssetBase, issuance, burn, circuit\n\n- AssetBase in Note, Note::asset() accessor\n- NoteValue::add, Note::new_issue_note, Note::update_rho_for_issuance_note\n- rho_for_issuance_note function\n- reference_keys and flavor modules\n- zsa-circuit feature for ZSA circuit (separate from zsa feature)\n- All ZSA modules behind #[cfg(feature = \"zsa\")] or zsa-circuit\n- Fixed import paths in moved zsa/ files\n- Added [patch.crates-io] for zcash_spec fork",
          "timestamp": "2026-07-04T09:51:20+08:00",
          "tree_id": "c74342bed042eefdefe736f2c0045e6c58845212",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/d964903c70db8bf1e2b8578868cdd6d4952da8d1"
        },
        "date": 1783130576185,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2640242644,
            "range": "± 11551165",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2621933997,
            "range": "± 6919331",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3767897553,
            "range": "± 40653522",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4897131600,
            "range": "± 17058760",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 20936143,
            "range": "± 259595",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20930693,
            "range": "± 100981",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 23848510,
            "range": "± 110038",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 26998580,
            "range": "± 240692",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1326744,
            "range": "± 15546",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 108320,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1325709,
            "range": "± 8850",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1150991291,
            "range": "± 954819",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 13985685,
            "range": "± 50598",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 1856741,
            "range": "± 3886",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 13960284,
            "range": "± 36028",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 1817980,
            "range": "± 15534",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 69898790,
            "range": "± 89274",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 9161219,
            "range": "± 13090",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 69770196,
            "range": "± 123910",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 9019385,
            "range": "± 20400",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 139762599,
            "range": "± 218576",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 18268821,
            "range": "± 360024",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 139487212,
            "range": "± 909826",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 17976216,
            "range": "± 115625",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 396112,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 428900,
            "range": "± 423",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "a7f5f2b24910cac6a2267e8a502921888a0572fe",
          "message": "ZSA circuit stub, fix zsa build\n\n- zsa-circuit feature gates the ZSA circuit (TODO)\n- All non-circuit ZSA code compiles with --features zsa\n- Default build (no zsa) unaffected",
          "timestamp": "2026-07-04T09:58:08+08:00",
          "tree_id": "ed295a57d352d4eb6e49177612a3e7493c958caf",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/a7f5f2b24910cac6a2267e8a502921888a0572fe"
        },
        "date": 1783131040920,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2731626845,
            "range": "± 24346537",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2730599003,
            "range": "± 6414835",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3939151074,
            "range": "± 17053063",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5132233937,
            "range": "± 36340936",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22075718,
            "range": "± 288227",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22173610,
            "range": "± 569498",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25492861,
            "range": "± 204450",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 28925493,
            "range": "± 205646",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1612495,
            "range": "± 12639",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134174,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1609150,
            "range": "± 10391",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1414479610,
            "range": "± 3261575",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 17015672,
            "range": "± 317459",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2284995,
            "range": "± 4226",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16996021,
            "range": "± 46592",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2243732,
            "range": "± 3066",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 85033627,
            "range": "± 388499",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11362328,
            "range": "± 18165",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 84918958,
            "range": "± 401084",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11159243,
            "range": "± 39914",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 170032391,
            "range": "± 377044",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22718664,
            "range": "± 39599",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 169782845,
            "range": "± 200710",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22306133,
            "range": "± 44830",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 489075,
            "range": "± 6125",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522092,
            "range": "± 930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "8d36f7d659b18b81c4c9b54dca3136bb4f6a4edb",
          "message": "ZSA port complete — all features compile\n\n- Default (Ironwood/zsa): clean\n- zsa feature (note encryption, issuance, burn): clean\n- zsa-circuit feature (proof generation stub): clean\n- Circuit infrastructure ported: OrchardCircuit trait, Witnesses,\n  AdditionalZsaWitnesses, derive_nullifier, value_commit_orchard\n- Full ZSA circuit implementation from zsa2 branch marked TODO;\n  requires ZSA-patched halo2 for complete constraints",
          "timestamp": "2026-07-04T10:15:59+08:00",
          "tree_id": "a0ce0b424444a03877a66782819d968dd4387754",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/8d36f7d659b18b81c4c9b54dca3136bb4f6a4edb"
        },
        "date": 1783132087136,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2570890765,
            "range": "± 13289780",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2566852184,
            "range": "± 9972298",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3705094501,
            "range": "± 10480623",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4812558370,
            "range": "± 31939311",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 20716601,
            "range": "± 245792",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20553497,
            "range": "± 173453",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 23781142,
            "range": "± 615459",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 26685147,
            "range": "± 245428",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1514527,
            "range": "± 4221",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 124719,
            "range": "± 2187",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1511437,
            "range": "± 24408",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1324363364,
            "range": "± 5837780",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 15976629,
            "range": "± 38665",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2114157,
            "range": "± 11070",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 15935062,
            "range": "± 61756",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2079471,
            "range": "± 3685",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 79759213,
            "range": "± 138736",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 10511122,
            "range": "± 61627",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 79630254,
            "range": "± 224090",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 10337387,
            "range": "± 22133",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 159550831,
            "range": "± 178459",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 21013382,
            "range": "± 22465",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 159205009,
            "range": "± 257869",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 20663874,
            "range": "± 85010",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 453915,
            "range": "± 2232",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 490452,
            "range": "± 2545",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "5602d90b0b87cabf73bfdce907f70bf433d30f3c",
          "message": "Use ZSA fork of halo2, adapt circuit types\n\n- All builds use ZSA-forked halo2 from zcash-shielded-assets\n- Default and --features zsa compile cleanly\n- zsa-circuit has 66 adaptation errors in zsa/circuit.rs\n  (type mismatches between ZSA circuit and our Config types)",
          "timestamp": "2026-07-04T10:25:11+08:00",
          "tree_id": "5220db00afc2e608b28e5c62af91fb802e46fd1d",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/5602d90b0b87cabf73bfdce907f70bf433d30f3c"
        },
        "date": 1783132618480,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2650239473,
            "range": "± 16296277",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2647390199,
            "range": "± 5038689",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3783013235,
            "range": "± 13724343",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4925561060,
            "range": "± 32941435",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 21065184,
            "range": "± 215393",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20907009,
            "range": "± 97528",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 24198162,
            "range": "± 119055",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 26984841,
            "range": "± 193971",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1335505,
            "range": "± 17792",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 108480,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1332827,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1153329516,
            "range": "± 797805",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 14075308,
            "range": "± 42331",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 1859854,
            "range": "± 12280",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 14043473,
            "range": "± 18586",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 1819764,
            "range": "± 14447",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 70374454,
            "range": "± 98315",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 9174777,
            "range": "± 27537",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 70221474,
            "range": "± 508186",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 9029911,
            "range": "± 11747",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 140691000,
            "range": "± 112129",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 18290005,
            "range": "± 49332",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 140367275,
            "range": "± 173915",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 18007181,
            "range": "± 26128",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 396696,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 429319,
            "range": "± 493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "785be61197a02bebc52e681e64a38ffda31c3ec3",
          "message": "Fix Config field visibility, add chip constructors for zsa-circuit\n\n- Make all Config fields pub(crate)\n- Add zsa_ecc_chip, zsa_add_chip, zsa_poseidon_chip etc. methods\n- All method names prefixed with zsa_ to avoid gadget.rs conflicts\n- Default and --features zsa clean\n- zsa-circuit: 15 remaining type mismatches in zsa/circuit.rs",
          "timestamp": "2026-07-04T10:45:47+08:00",
          "tree_id": "cbed38ab9c80b35974b25c209ed951c63777e0f2",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/785be61197a02bebc52e681e64a38ffda31c3ec3"
        },
        "date": 1783133899708,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2768413165,
            "range": "± 23628703",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2766828009,
            "range": "± 10135824",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3938384215,
            "range": "± 7568624",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5128792915,
            "range": "± 36157905",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22159908,
            "range": "± 149247",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22112445,
            "range": "± 236717",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25661763,
            "range": "± 228527",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 28965432,
            "range": "± 219085",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1616058,
            "range": "± 4997",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134098,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1608765,
            "range": "± 5504",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1434880084,
            "range": "± 627104",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 17032783,
            "range": "± 80528",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2289977,
            "range": "± 7037",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 17004441,
            "range": "± 65157",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2248178,
            "range": "± 3075",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 85110611,
            "range": "± 133668",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11385691,
            "range": "± 11933",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 84963587,
            "range": "± 65537",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11180247,
            "range": "± 15191",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 170120110,
            "range": "± 134249",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22752526,
            "range": "± 38480",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 169870800,
            "range": "± 179572",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22346089,
            "range": "± 35898",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 489373,
            "range": "± 4204",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522422,
            "range": "± 1021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "fd75bb1c24cfb7a2864a28c0c84129c3c2340085",
          "message": "Separate ZsaConfig from vanilla Config\n\n- ZSA circuit gets its own ZsaConfig using PallasLookupRangeCheck4_5BConfig\n- Vanilla Config unchanged (retains LookupRangeCheckConfig)\n- Chip constructor methods on ZsaConfig, not on vanilla Config\n- Default and --features zsa clean\n- zsa-circuit: 12 remaining errors in zsa/circuit.rs",
          "timestamp": "2026-07-04T10:53:15+08:00",
          "tree_id": "98ba39f00e95e9edb066d7050fa150ec2f243cc8",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/fd75bb1c24cfb7a2864a28c0c84129c3c2340085"
        },
        "date": 1783134353735,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2768736896,
            "range": "± 21021346",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2771622073,
            "range": "± 14417658",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3944312519,
            "range": "± 10389957",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5117157129,
            "range": "± 26172553",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22122084,
            "range": "± 166047",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 22013368,
            "range": "± 174984",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25570390,
            "range": "± 311347",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 28896029,
            "range": "± 564296",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1612544,
            "range": "± 9371",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134197,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1609465,
            "range": "± 9032",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1408155125,
            "range": "± 4895156",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 17021467,
            "range": "± 43215",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2285661,
            "range": "± 4850",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16995313,
            "range": "± 43233",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2244768,
            "range": "± 10824",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 85077019,
            "range": "± 1281989",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11372525,
            "range": "± 209041",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 84918988,
            "range": "± 146364",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11161539,
            "range": "± 81708",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 170108654,
            "range": "± 1939868",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22728527,
            "range": "± 258698",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 169790294,
            "range": "± 1039560",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22325263,
            "range": "± 567051",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 489181,
            "range": "± 5103",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522068,
            "range": "± 2031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "2ef797894be7abaeeca3dd19e029f842232db869",
          "message": "Separate ZsaConfig, fix construct visibility\n\n- ZsaConfig uses vanilla LookupRangeCheckConfig (not PallasLookupRangeCheck4_5BConfig)\n- AddChip::construct is now pub(crate)\n- ZsaNoteCommitParams defined in zsa/circuit.rs\n- 12 remaining type mismatches in configure function\n- Default and --features zsa clean",
          "timestamp": "2026-07-04T11:01:49+08:00",
          "tree_id": "d42389513f115e0319bb458a670b4d5ac3b161f6",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/2ef797894be7abaeeca3dd19e029f842232db869"
        },
        "date": 1783134839382,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2610783118,
            "range": "± 17564177",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2600052208,
            "range": "± 15360468",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3720068934,
            "range": "± 19724803",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4844041410,
            "range": "± 40913149",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 20580079,
            "range": "± 500291",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20593258,
            "range": "± 160566",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 23612801,
            "range": "± 146560",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 26894060,
            "range": "± 229369",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1515227,
            "range": "± 10768",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 124725,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1512429,
            "range": "± 9499",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1320774018,
            "range": "± 1865399",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 15970461,
            "range": "± 24420",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2112880,
            "range": "± 22908",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 15948070,
            "range": "± 29625",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2078105,
            "range": "± 2482",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 79834639,
            "range": "± 179279",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 10513401,
            "range": "± 191604",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 79759386,
            "range": "± 224171",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 10341127,
            "range": "± 39540",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 159677690,
            "range": "± 243999",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 21005886,
            "range": "± 50619",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 159397374,
            "range": "± 94848",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 20672900,
            "range": "± 61055",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 453264,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 489861,
            "range": "± 2591",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "f98a0e7138aceba7db2e727b41add179b87e07e4",
          "message": "Generic NoteCommitConfig, ZsaConfig uses PallasLookupRangeCheck4_5BConfig\n\n- NoteCommitConfig<Lookup> generic to support ZSA halo2 types\n- ZsaConfig stores chip configs with PallasLookupRangeCheck4_5BConfig\n- Explicit Lookup on EccChip::construct and NoteCommitChip::configure calls\n- Default and --features zsa clean\n- zsa-circuit: 8 remaining gadget function signature mismatches",
          "timestamp": "2026-07-04T11:07:52+08:00",
          "tree_id": "8bd3b480e98a5ca3859c52d1684249db8fc5e359",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/f98a0e7138aceba7db2e727b41add179b87e07e4"
        },
        "date": 1783135207824,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2595074526,
            "range": "± 21649660",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2587400026,
            "range": "± 9228902",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3737982816,
            "range": "± 51061799",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 4835528707,
            "range": "± 26774039",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 20655348,
            "range": "± 194366",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 20666649,
            "range": "± 175966",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 23973753,
            "range": "± 162066",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 27019384,
            "range": "± 294628",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1512952,
            "range": "± 11583",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 124854,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1508511,
            "range": "± 37703",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1328249833,
            "range": "± 3753002",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 15942302,
            "range": "± 37173",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2115383,
            "range": "± 4077",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 15896045,
            "range": "± 44571",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2080602,
            "range": "± 2772",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 79709908,
            "range": "± 134373",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 10523959,
            "range": "± 13507",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 79495837,
            "range": "± 199780",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 10353353,
            "range": "± 204879",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 159424582,
            "range": "± 307351",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 21060215,
            "range": "± 42397",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 158991909,
            "range": "± 196240",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 20688784,
            "range": "± 30860",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 453030,
            "range": "± 7988",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 490241,
            "range": "± 2162",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "committer": {
            "email": "hanh425@gmail.com",
            "name": "Hanh Huynh Huu",
            "username": "hhanh00"
          },
          "distinct": true,
          "id": "70c11aed82db21cb6e9017a5c0b46c6f1d8ae749",
          "message": "ZSA circuit uses LookupRangeCheckConfig consistently\n\n- Match vanilla circuit's lookup type throughout ZSA circuit\n- ZsaConfig fields, methods, configure all use LookupRangeCheckConfig\n- 6 remaining errors: commit_ivk/note_commit gadget signatures\n- Default and --features zsa clean",
          "timestamp": "2026-07-04T12:38:20+08:00",
          "tree_id": "6cdb74b0464b05d409998bca1d89087958066e12",
          "url": "https://github.com/zcash-shielded-assets/orchard/commit/70c11aed82db21cb6e9017a5c0b46c6f1d8ae749"
        },
        "date": 1783140659133,
        "tool": "cargo",
        "benches": [
          {
            "name": "proving/bundle/1",
            "value": 2766681497,
            "range": "± 23251223",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/2",
            "value": 2770686263,
            "range": "± 7706101",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/3",
            "value": 3960350290,
            "range": "± 54173006",
            "unit": "ns/iter"
          },
          {
            "name": "proving/bundle/4",
            "value": 5108945379,
            "range": "± 19143564",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/1",
            "value": 22181780,
            "range": "± 155557",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/2",
            "value": 21956164,
            "range": "± 168063",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/3",
            "value": 25649106,
            "range": "± 244878",
            "unit": "ns/iter"
          },
          {
            "name": "verifying/bundle/4",
            "value": 29036431,
            "range": "± 265771",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/valid",
            "value": 1609488,
            "range": "± 7257",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/invalid",
            "value": 134195,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "note-decryption/compact-valid",
            "value": 1605053,
            "range": "± 32350",
            "unit": "ns/iter"
          },
          {
            "name": "compact-note-decryption/invalid",
            "value": 1415353452,
            "range": "± 3820395",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/10",
            "value": 16990616,
            "range": "± 18112",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/10",
            "value": 2286955,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/10",
            "value": 16954341,
            "range": "± 23952",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/10",
            "value": 2246329,
            "range": "± 9954",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/50",
            "value": 84884456,
            "range": "± 322526",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/50",
            "value": 11363522,
            "range": "± 14706",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/50",
            "value": 84700080,
            "range": "± 393390",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/50",
            "value": 11164019,
            "range": "± 234680",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/valid/100",
            "value": 169748433,
            "range": "± 1166253",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/invalid/100",
            "value": 22718486,
            "range": "± 342564",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-valid/100",
            "value": 169423063,
            "range": "± 314217",
            "unit": "ns/iter"
          },
          {
            "name": "batch-note-decryption/compact-invalid/100",
            "value": 22309634,
            "range": "± 47859",
            "unit": "ns/iter"
          },
          {
            "name": "derive_fvk",
            "value": 488738,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "default_address",
            "value": 522227,
            "range": "± 1121",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}