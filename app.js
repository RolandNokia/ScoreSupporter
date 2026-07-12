// 楽譜データの定義（以前整理したフォルダ構成のままでOKです）
const songData = [
    {
        title: "RomanianFolkDances",
        pages: [
            "images/RomanianFolkDances/RomanianFolkDances1.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances2.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances3.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances4.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances5.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances6.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances7.jpg", 
            "images/RomanianFolkDances/RomanianFolkDances8.jpg"
        ]
    },
    {
        title: "ノクターン Op.9-2",
        pages: [
            "images/Nocturne/nocturne_1.png", 
            "images/Nocturne/nocturne_2.png"
        ]
    }
];

let currentSong = null;
let currentPageIndex = 0;

// DOMの取得
const menuContainer = document.getElementById('menu-container');
const scoreContainer = document.getElementById('score-container');
const songList = document.getElementById('song-list');
const scoreImage = document.getElementById('score-image');
const pageInfo = document.getElementById('page-info');
const btnBack = document.getElementById('btn-back');

// 新しいボタンの取得
const btnPagePrev = document.getElementById('btn-page-prev');
const btnPageNext = document.getElementById('btn-page-next');

// 1. メニューの生成
songData.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => loadSong(index));
    songList.appendChild(li);
});

// 2. 曲の読み込み
function loadSong(index) {
    currentSong = songData[index];
    currentPageIndex = 0;
    updatePage();
    menuContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
}

// 3. ページ更新
function updatePage() {
    if (!currentSong) return;
    scoreImage.src = currentSong.pages[currentPageIndex];
    pageInfo.textContent = `${currentPageIndex + 1} / ${currentSong.pages.length}`;
}

// 4. 譜めくりロジック
function nextPage() {
    if (currentSong && currentPageIndex < currentSong.pages.length - 1) {
        currentPageIndex++;
        updatePage();
    }
}

// 前へ戻るロジック
function prevPage() {
    if (currentSong && currentPageIndex > 0) {
        currentPageIndex--;
        updatePage();
    }
}

// ボタンにイベントを登録
btnPageNext.addEventListener('click', nextPage);
btnPagePrev.addEventListener('click', prevPage);

// 画面の左右エリアをタップしてもめくれるように残しておきます
document.getElementById('tap-right').addEventListener('click', nextPage);
document.getElementById('tap-left').addEventListener('click', prevPage);

// 戻るボタンの挙動
btnBack.addEventListener('click', () => {
    scoreContainer.classList.add('hidden');
    menuContainer.classList.remove('hidden');
});