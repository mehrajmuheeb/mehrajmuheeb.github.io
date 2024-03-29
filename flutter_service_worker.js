'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b9bf4763b96d2addc45147576366336a",
".git/config": "6cdcf78f44a177d5705090ad5016bd9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "d19f7d86ddac26c32e91bb8a42e63340",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20ae69b39e756ccce7ac0a701388cfe7",
".git/logs/refs/heads/master": "20ae69b39e756ccce7ac0a701388cfe7",
".git/logs/refs/remotes/origin/HEAD": "25f0f93f3b0936e3961725afd8308c68",
".git/logs/refs/remotes/origin/master": "f702fc912b9b742799926868fb3fc73f",
".git/objects/04/76bb20d8d22eb84e62fe3fc10b2d1b1efe469b": "89b4c50a69a8fbce103c20e09ad2ddbb",
".git/objects/06/e79cf339017f74ee1fee96c27217126a7c3dbf": "79cd086d68d5ac4de443d57f053b9b8d",
".git/objects/07/379bddc78c5591a65aab12b2a2173a7d61f581": "67e7109898f9d01f673aa4d9a168059e",
".git/objects/10/7a400e0b894675b0283c1ad8721d4431832c4d": "6b3895dfaed6b5db34de4d0c8dceb097",
".git/objects/12/445101d0be0c8fad3bb0d290a4d1c2be90de87": "8473c49b261b173b34af061690971916",
".git/objects/12/553104a47cc499d9f86b16cc5703f73aa0c815": "da95cb66fea307d189508d68390d13bb",
".git/objects/13/528064550efda4c4ee48b54cd9a8a7f2feb390": "b7760997052770d0a6a786d5f7d8acda",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/c19404bc6df0bd78f8db86d958c449b2c7c92d": "dc6f1590727980d3a2e4a31fbfddb589",
".git/objects/15/d8019f2c26ab8754d23880f68de8d8df958b12": "286059a47ff28eb0f75eec11efc039df",
".git/objects/16/bfeb12deab1be5214ac55acc8dfeef31b832e3": "bfb9a6f9b4997c511b583f6ab0fd895c",
".git/objects/16/e9d2984a2368f68625ceed1f1796bb0bd9f783": "b956bb6f810de61522c2a1c2edc98e85",
".git/objects/19/593cfd109241bb2c26d8cdabb5b446718de3f9": "9394614f3b5fa64e2b4e770c59aae41b",
".git/objects/1a/85356654f1228a0f87f97474cfd1d402bd519d": "bb3e81407ef43327be5ca1a95c1023c4",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/cdb0205c4b00eeb27260122d17670e6ba2eabe": "7cf60e93ec9a1cfb2d201066d17ad8d6",
".git/objects/22/8e189e374bd91be79de8a27cc5b6133861e489": "6ea45ad7490380f141b68b9892ff61b7",
".git/objects/22/ba238ecde739e0618ffec5e1d59a6f3e75d588": "3a395b2ea9e80f5e4dfef05faf3d657b",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/26/72ef7e4671ce93169d0c7789c29b5a7a6f0e17": "0ee180ab7c17cf0446c91ccb37f034c2",
".git/objects/2a/05c2d1c8dfc1bc9f9e6967985e4a1eade7eabb": "e70e4bd1fd51e871f28606e6ff106c7d",
".git/objects/2a/e4f1fa90f51823b8d7c7cb683c1e8a20af64dc": "332a79834fde8bbd86743236a7e9f813",
".git/objects/2d/0038e7d4f04f9ea8898a02c57188ae9a04bd08": "d4b13365337013501f56f4543ad09c67",
".git/objects/2d/c28c0df28d4a317d8e6526b84d8e8df4412fe5": "44b54c10252245ebbe27f015cf8765a6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/8c2a0e5b4394c306573d0a42775b558627a43d": "950d98123563e7e741a037d9e1fb6492",
".git/objects/39/1cb1643d9e08709927d6782cfee22669bbf3b8": "9ee66df9e36efe19ff948e9263a794c4",
".git/objects/3f/0fc14c4ed775ade179c141270c2256135c4301": "a12953969da8ce338a4a8dc0a8c8ec1d",
".git/objects/42/0b300aa267abf18bc976acd7dbdc8db859d561": "74b0d59dc0d508ef0bf4ce256b026da7",
".git/objects/44/bebaf5cc19160dcf00c62905b0e03fcc21f920": "49cd68e363a91f11d856202ab0ed60a2",
".git/objects/46/172d0c3f462a3d4ef1249447aedbe4e4d2702a": "13ed454815d4de97adcffaed64b7f832",
".git/objects/46/83fc2379173dcbe84a4d86d6c0466d03559f7f": "14a9816870c85435b54d492a9cebb1d7",
".git/objects/4c/2049961f81cef441915be452e9853983d0276b": "477746af835b8d7aab043527edd98a57",
".git/objects/4c/4d341f9aee3ef4affdcc618e6242480411a120": "7a5e8e3f7533f053493e323e34c923a4",
".git/objects/50/6574d0daf94fd5a159918a0366fa1e456e8636": "18f429568f066d1eba6dbac23e84f298",
".git/objects/57/340168df52046f02d2f388c221c165fe266705": "a2bbb779b4fc8e55cb4b72e47afb519a",
".git/objects/57/68c70324e81a36d4e07e1be20bec49310af2e3": "ddf0f394ccd2c87adae5452c8c092313",
".git/objects/5a/788a5393ddc1bb2fc0cb6d8e1a571e5af6caf6": "b9459a40f710893367b1d65d1cd44590",
".git/objects/5b/a80f84ee3796820e65c6e9c22c7524722e7b5e": "f660147a55b9d8846e4c4b306e87d0de",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/28fdd61487cb40da14df52dde0a9d7ae04d7da": "a109a9a73b03605c6012906231763be9",
".git/objects/5d/f55023a21a32a0852112109597f8512ef5cf66": "6432baa8c50d8346d22dfb85771b0fdd",
".git/objects/5e/91e42c068655f924d4ee8de754fe7ed80bc56c": "dd57b91c4abdb190a74f2b2141485a3c",
".git/objects/5f/3febff076214c6b0b59c574965fd486204c603": "358f6ab0b2e630a1c78e35bbc694a1d1",
".git/objects/67/1ae64a8018feb48ec9bac687b557e1234c0def": "65d9d5a83166f999be0532a3e5201829",
".git/objects/68/66d68f0e0211ea4d4a919f62f3984acab9cc87": "abac2095a8f4e4b993b6018ac6f40d6e",
".git/objects/68/8acf9396cd7635ee48faf39054e7af1a80366e": "8391d806fc58feda3698e974383386e8",
".git/objects/69/92e47aa4f5f1565aaf5aff24826a4a675f0574": "77b9fb88914b9f884429a7784f59c31b",
".git/objects/6a/9be00388a52bad604731a50b4756d207bb38ec": "0a57150bef22c702cd542d86c917ec28",
".git/objects/6a/f726347fa5dc610ce46d2ea2f7c053a55f0caf": "c754c24b599e58833434c4e82acec20d",
".git/objects/6e/ba6028c46c292b5f3816788ce8b916f3c46d5d": "d59f424efc34438e81662ed6b5cffcf2",
".git/objects/6f/856183e67481181e02fb79b49e84b0e99b6d29": "7953223d2e5692f327f0847b5f40e740",
".git/objects/70/5d29aad203b9561c7fc743874940fa2af5740b": "91779837a2e0aef8a20af8ac444208bb",
".git/objects/75/e31c3b7298c0e2e2666e41bb28a604efb02b15": "1bff6c59b11c9c3faed421d01a4a2bd6",
".git/objects/77/84f9bcfcfc8e79811b66faa8271083d3d6159d": "747fd586bc596d70d1c5c5e7244843cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/bde53a21d1c64a169180f2cda9dbeadeb570de": "fd1e3f678f1f5d24d3b9b768a4df763d",
".git/objects/7d/2547b4d7b9127cfb4a7963a8b66cdf0b119a6a": "7558eb799361bf0876bc677c11cf4152",
".git/objects/7e/5269f98f60b389ad0030ca023fa3708fe149c4": "e771f167ff2cc340adfe8245233db9ca",
".git/objects/84/0b06caabf8d80d072d850ee721e738ea80e5e5": "eac316050da182e1e97ae21402d49825",
".git/objects/84/0ff31912625d3d7129a69df54f1d4d3bf1a526": "7255bb2b7cb49c4e4e83ce916c81877c",
".git/objects/87/7a77be69873163a91b90232070ce0beab25971": "11aed95919258942db65f0c288fefb9b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3ae76e9efb21af93abb6db4d38709a327552d0": "e46d5ce2473783242278237ae4548401",
".git/objects/90/adf1cbc8bff4d966634b2b75be8d0e306e3754": "4808c2f78a14b6bee13876a3072a40f0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/a4/f3bbb74d10994d0d7805cfae6a6812ec410927": "6a8ce6ac90cf72b921eea68afe06626f",
".git/objects/a7/6e149c4de72b50dcfae3dacfe3a42b32b89ea7": "ed3384a7b5978fcb98c2385c08f23b79",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/deddb1a8ad775f389d6f093ee7b692545711ca": "9b31a80ce2828e348d885183acaedd2b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/1a08caa054d39386ac4f279d2d87b14d545c88": "500558537e05253e2ff88536f1270d6f",
".git/objects/ac/09fe4e931ebec5c605011852c2f4d4c643a7df": "dc89c95ecb550ea2a1d0fa8ba028bc68",
".git/objects/ae/25893884d5165ff073becba402a2a51998afc4": "0b0cfab85abb2c568ef4c8c71faa33c7",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b5/285538caec30376caef38d7ece817b1158f256": "32c5d54a2c5f5bce8a4a70af0fcf002c",
".git/objects/b5/2f682c174fc17996dabc19e144b79c25fdcb77": "ad32fe7482219e9d077ee8ae92939c0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/55ea34e9a0d3f4590dee84a1544702add12572": "36bdda142cf4292347dcc39cf09c01c8",
".git/objects/bd/cf7298dbc34b2206465aaad14e301fd7e5e7c7": "b189f5ba01b13f9e0bd5a5bf28d00e8b",
".git/objects/c3/fe112799bf78848670f33e79f4a3d32ce7dc83": "813c5caa900e3792b1d8e336fbab5dd4",
".git/objects/c9/3c50d16a9c2d4ef9adab7b6e4acb381723efbd": "c1c11ead3ac9e5352157413811ecaef2",
".git/objects/ca/55c04e229086839eeda705180dfe3e3397cb44": "3db266475e3ccbf6b701d10d360489e9",
".git/objects/d2/8277611b72f5694a9de97d0f94d015fd8ba3d3": "ecdd7fa1c558e7b1f96a494c50f69f9a",
".git/objects/d2/e4fc2f903d31b77f9a31fb216722aff07ded60": "dde5cb24d64b2d381197f48467c90fee",
".git/objects/d5/10afb5c0e1df659b62ea3d1cd92b2d553640d7": "13e7bcc1d9632d666fae661e34ff392d",
".git/objects/d7/4440e6411bcb75ae5abe7ea6f0875d4fa29186": "199b5b9979bc393de0b654b665a2f3af",
".git/objects/db/6540af166722b1dc94b6c3f7f823f948aaf352": "229a136d881b99eb3f78c025390815a6",
".git/objects/e1/4f47065dc7c883fc12edd6626cd8a3c7498bad": "736aa1490b1daa9cb3ed4aa7f9774faf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/b38d6cb69aa34b2f8c21a231f09029942d7dfa": "a81cd7bdbedbc8bf78ba711cbd53515b",
".git/objects/f7/1b3dce6ffaaa64f5c95f4baf1654f5c55b22cd": "15af87081bfa7730a7ae3acde1e05ef5",
".git/objects/f7/c32e50406eee40ca2e09d12e8cd23743dcf2df": "8fb1253dad0e5888b776cfea97e7d587",
".git/objects/f8/45639b112890ed2eece1ad53bf5ea01e8ee371": "f0ea6c6f9b4aef53d11d86053a31bd60",
".git/objects/fb/f077167d577904f5808eff8dbba69ab103d4ee": "d12b742128ec071a93004c2acec89149",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/755d875c5e7ef47c5e114619e849c69084de9d": "8317d934accaa764955808aca307b300",
".git/objects/ff/11a4fbdb20caefb8f53636a9510ee14ca6f2b4": "33cffd1cb5563e3ddbe5184f39569cfc",
".git/objects/ff/37e153953e685a0dd77a8186eaba478b23c9b7": "56c7c2a499a4dc7f97ff48b986c52f2f",
".git/packed-refs": "df68377002a42262bf61d06854c6a89c",
".git/refs/heads/master": "edee1c0d3b7e2e000a3172d070cf9235",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "edee1c0d3b7e2e000a3172d070cf9235",
"assets/AssetManifest.json": "3c4dc037a99c83a14cef57de17b2fb7a",
"assets/assets/fonts/BalsamiqSans-Bold.ttf": "ed3ff13e6453434370d0d0a9f4ebc734",
"assets/assets/fonts/BalsamiqSans-Regular.ttf": "d0e0c9d174a9cec8f1383ebd7bf51b31",
"assets/assets/images/avatar.png": "03614329b954e05bf87d4e33b9198589",
"assets/assets/images/avatar_welcome.png": "15caf31a9106f0208a409888ee3fdd85",
"assets/assets/images/dancing_potato.gif": "58a480dfe5778ab5ec0907be8f64600f",
"assets/assets/images/developer.gif": "3e2631cb49e9f49f4497fb14690496aa",
"assets/assets/images/instagram.png": "67227b614514fe41e5003f384d507cc7",
"assets/assets/images/linkedin.png": "31b6569ae901d56795a4955d60008a63",
"assets/assets/images/programmer.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/assets/images/twitter.png": "600873b87c3afef04d9f1691e5c2d43b",
"assets/FontManifest.json": "299ee0ab83ee9b67eec15144b46d6865",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8e54b14edb9d1c09acd38d75423146ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a43c8a45341291d8c96a1ba1533576e7",
"/": "a43c8a45341291d8c96a1ba1533576e7",
"main.dart.js": "73fa91b8cb7a00557f0070103f5a2670",
"manifest.json": "19735880c9a2d76e493a12fce34a64f0",
"version.json": "528c9bfe9e33880a8e82174291e7037b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
