window.BENCHMARK_DATA = {
  "lastUpdate": 1783130577844,
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
      }
    ]
  }
}