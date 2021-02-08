/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b393dc25a9a990b9e83f14ecbe8617a8"
  },
  {
    "url": "accumulate/index.html",
    "revision": "6c8f9968812fe4faa4509a1e30037f41"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a4db6c84a7e6f17546ad0ada556b8c6c"
  },
  {
    "url": "assets/css/0.styles.c70d6292.css",
    "revision": "ca03663104fc8c9dab0a17e3e32929e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e936dfc9.js",
    "revision": "b365409fd2cba7661a4d452821d08d58"
  },
  {
    "url": "assets/js/3.f693702d.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.2bf9374a.js",
    "revision": "18cf410483c45bf839135a74c9939f2a"
  },
  {
    "url": "assets/js/5.053e51c6.js",
    "revision": "efe375d49d25758c06e874d052537511"
  },
  {
    "url": "assets/js/6.895c9ded.js",
    "revision": "480e90f17965ec85079f13ef9a3aa018"
  },
  {
    "url": "assets/js/7.f5377f80.js",
    "revision": "4f06051541855034cac021eae5300e90"
  },
  {
    "url": "assets/js/8.cc112f1e.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.80de411a.js",
    "revision": "5963b18105b9e7fb6569f2de263eb056"
  },
  {
    "url": "guide.html",
    "revision": "46376ccf822de47ae31f4f768c6f0391"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "0ce721d3862ce43e40598d3e81144712"
  },
  {
    "url": "others/index.html",
    "revision": "75823b28aa191128685f85c49ee6c40f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
