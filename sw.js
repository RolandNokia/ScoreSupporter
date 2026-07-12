const CACHE_NAME = 'score-app-cache-v1';

// 🔒 オフライン時にも絶対に読み込みたいファイル・楽譜画像の全リスト
const urlsToCache = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  
  // 🎵 RomanianFolkDances フォルダ (全8枚)
  'images/RomanianFolkDances/RomanianFolkDances1.jpg',
  'images/RomanianFolkDances/RomanianFolkDances2.jpg',
  'images/RomanianFolkDances/RomanianFolkDances3.jpg',
  'images/RomanianFolkDances/RomanianFolkDances4.jpg',
  'images/RomanianFolkDances/RomanianFolkDances5.jpg',
  'images/RomanianFolkDances/RomanianFolkDances6.jpg',
  'images/RomanianFolkDances/RomanianFolkDances7.jpg',
  'images/RomanianFolkDances/RomanianFolkDances8.jpg',
  
  // 🎵 Chorus / はるかなあなた (全10枚)
  'images/Chorus/はるかなあなた/はるかなあなた1.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた2.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた3.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた4.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた5.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた6.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた7.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた8.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた9.jpg',
  'images/Chorus/はるかなあなた/はるかなあなた10.jpg',

  // 🎵 Chorus / 月の砂漠 (全12枚)
  'images/Chorus/月の砂漠/月の砂漠1.jpg',
  'images/Chorus/月の砂漠/月の砂漠2.jpg',
  'images/Chorus/月の砂漠/月の砂漠3.jpg',
  'images/Chorus/月の砂漠/月の砂漠4.jpg',
  'images/Chorus/月の砂漠/月の砂漠5.jpg',
  'images/Chorus/月の砂漠/月の砂漠6.jpg',
  'images/Chorus/月の砂漠/月の砂漠7.jpg',
  'images/Chorus/月の砂漠/月の砂漠8.jpg',
  'images/Chorus/月の砂漠/月の砂漠9.jpg',
  'images/Chorus/月の砂漠/月の砂漠10.jpg',
  'images/Chorus/月の砂漠/月の砂漠11.jpg',
  'images/Chorus/月の砂漠/月の砂漠12.jpg',

  // 🎵 Chorus / 青い眼の人形 (全11枚)
  'images/Chorus/青い眼の人形/青い眼の人形1.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形2.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形3.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形4.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形5.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形6.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形7.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形8.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形9.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形10.jpg',
  'images/Chorus/青い眼の人形/青い眼の人形11.jpg',

  // 🎵 Chorus / 揺籃のうた (全8枚)
  'images/Chorus/揺籃のうた/揺籃のうた1.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた2.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた3.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた4.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた5.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた6.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた7.jpg',
  'images/Chorus/揺籃のうた/揺籃のうた8.jpg',

  // 🎵 Chorus / めぐる春 (全3枚)
  'images/Chorus/めぐる春/めぐる春1.jpg',
  'images/Chorus/めぐる春/めぐる春2.jpg',
  'images/Chorus/めぐる春/めぐる春3.jpg',

  // 🎵 Chorus / しゃぼん玉 (全9枚)
  'images/Chorus/しゃぼん玉/しゃぼん玉1.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉2.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉3.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉4.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉5.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉6.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉7.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉8.jpg',
  'images/Chorus/しゃぼん玉/しゃぼん玉9.jpg',

  // 🎵 Chorus / 二つの雨のうた (全19枚)
  'images/Chorus/二つの雨のうた/二つの雨のうた1.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた2.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた3.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた4.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた5.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた6.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた7.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた8.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた9.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた10.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた11.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた12.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた13.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた14.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた15.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた16.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた17.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた18.jpg',
  'images/Chorus/二つの雨のうた/二つの雨のうた19.jpg',

  // 🎵 Chorus / 樹氷の街 (全10枚)
  'images/Chorus/樹氷の街/樹氷の街1.jpg',
  'images/Chorus/樹氷の街/樹氷の街2.jpg',
  'images/Chorus/樹氷の街/樹氷の街3.jpg',
  'images/Chorus/樹氷の街/樹氷の街4.jpg',
  'images/Chorus/樹氷の街/樹氷の街5.jpg',
  'images/Chorus/樹氷の街/樹氷の街6.jpg',
  'images/Chorus/樹氷の街/樹氷の街7.jpg',
  'images/Chorus/樹氷の街/樹氷の街8.jpg',
  'images/Chorus/樹氷の街/樹氷の街9.jpg',
  'images/Chorus/樹氷の街/樹氷の街10.jpg',

  // 🎵 Chorus / いい日旅立ち (全6枚)
  'images/Chorus/いい日旅立ち/いい日旅立ち1.jpg',
  'images/Chorus/いい日旅立ち/いい日旅立ち2.jpg',
  'images/Chorus/いい日旅立ち/いい日旅立ち3.jpg',
  'images/Chorus/いい日旅立ち/いい日旅立ち4.jpg',
  'images/Chorus/いい日旅立ち/いい日旅立ち5.jpg',
  'images/Chorus/いい日旅立ち/いい日旅立ち6.jpg',

  // 🎵 Chorus / 希望 (全12枚)
  'images/Chorus/希望/希望1.jpg',
  'images/Chorus/希望/希望2.jpg',
  'images/Chorus/希望/希望3.jpg',
  'images/Chorus/希望/希望4.jpg',
  'images/Chorus/希望/希望5.jpg',
  'images/Chorus/希望/希望6.jpg',
  'images/Chorus/希望/希望7.jpg',
  'images/Chorus/希望/希望8.jpg',
  'images/Chorus/希望/希望9.jpg',
  'images/Chorus/希望/希望10.jpg',
  'images/Chorus/希望/希望11.jpg',
  'images/Chorus/希望/希望12.jpg',

  // 🎵 Chorus / 星に祈りを (全12枚)
  'images/Chorus/星に祈りを/星に祈りを1.jpg',
  'images/Chorus/星に祈りを/星に祈りを2.jpg',
  'images/Chorus/星に祈りを/星に祈りを3.jpg',
  'images/Chorus/星に祈りを/星に祈りを4.jpg',
  'images/Chorus/星に祈りを/星に祈りを5.jpg',
  'images/Chorus/星に祈りを/星に祈りを6.jpg',
  'images/Chorus/星に祈りを/星に祈りを7.jpg',
  'images/Chorus/星に祈りを/星に祈りを8.jpg',
  'images/Chorus/星に祈りを/星に祈りを9.jpg',
  'images/Chorus/星に祈りを/星に祈りを10.jpg',
  'images/Chorus/星に祈りを/星に祈りを11.jpg',
  'images/Chorus/星に祈りを/星に祈りを12.jpg'
];

// インストール時に全ファイルを端末キャッシュに保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン時は通信せず、キャッシュから即座にファイルを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});