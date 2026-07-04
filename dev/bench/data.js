window.BENCHMARK_DATA = {
  "lastUpdate": 1783127241806,
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
      }
    ]
  }
}