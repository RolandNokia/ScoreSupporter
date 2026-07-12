// ==========================================
// 🎼 1. すべての楽曲マスターデータ（フォルダ別に管理）
// ==========================================
const songDatabase = {
    // 【RomanianFolkDances フォルダ】
    "RomanianFolkDances": {
        "ルーマニア民族舞踊": {
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
        }
    },
    // 【Chorus フォルダ】
    "Chorus": {
        "はるかなあなた": {
            pages: [
                "images/Chorus/はるかなあなた/はるかなあなた1.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた2.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた3.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた4.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた5.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた6.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた7.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた8.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた9.jpg",
                "images/Chorus/はるかなあなた/はるかなあなた10.jpg",
            ]
        },
        "月の砂漠": {
            pages: [
                "images/Chorus/月の砂漠/月の砂漠1.jpg", 
                "images/Chorus/月の砂漠/月の砂漠2.jpg",
                "images/Chorus/月の砂漠/月の砂漠3.jpg",
                "images/Chorus/月の砂漠/月の砂漠4.jpg",
                "images/Chorus/月の砂漠/月の砂漠5.jpg",
                "images/Chorus/月の砂漠/月の砂漠6.jpg",
                "images/Chorus/月の砂漠/月の砂漠7.jpg",
                "images/Chorus/月の砂漠/月の砂漠8.jpg",
                "images/Chorus/月の砂漠/月の砂漠9.jpg",
                "images/Chorus/月の砂漠/月の砂漠10.jpg",
                "images/Chorus/月の砂漠/月の砂漠11.jpg",
                "images/Chorus/月の砂漠/月の砂漠12.jpg",
            ]
        },
                "青い眼の人形": {
            pages: [
                "images/Chorus/青い眼の人形/青い眼の人形1.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形2.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形3.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形4.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形5.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形6.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形7.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形8.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形9.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形10.jpg",
                "images/Chorus/青い眼の人形/青い眼の人形11.jpg",
            ]
        },
                "揺籃のうた": {
            pages: [
                "images/Chorus/揺籃のうた/揺籃のうた1.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた2.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた3.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた4.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた5.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた6.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた7.jpg",
                "images/Chorus/揺籃のうた/揺籃のうた8.jpg",
            ]
        },
                "めぐる春": {
            pages: [
                "images/Chorus/めぐる春/めぐる春1.jpg",
                "images/Chorus/めぐる春/めぐる春2.jpg",
                "images/Chorus/めぐる春/めぐる春3.jpg",
            ]
        },
                "しゃぼん玉": {
            pages: [
                "images/Chorus/しゃぼん玉/しゃぼん玉1.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉2.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉3.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉4.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉5.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉6.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉7.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉8.jpg",
                "images/Chorus/しゃぼん玉/しゃぼん玉9.jpg",
            ]
        },
                "二つの雨のうた": {
            pages: [
                "images/Chorus/二つの雨のうた/二つの雨のうた1.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた2.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた3.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた4.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた5.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた6.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた7.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた8.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた9.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた10.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた11.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた12.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた13.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた14.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた15.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた16.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた17.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた18.jpg",
                "images/Chorus/二つの雨のうた/二つの雨のうた19.jpg",
            ]
        },
                "樹氷の街": {
            pages: [
                "images/Chorus/樹氷の街/樹氷の街1.jpg",
                "images/Chorus/樹氷の街/樹氷の街2.jpg",
                "images/Chorus/樹氷の街/樹氷の街3.jpg",
                "images/Chorus/樹氷の街/樹氷の街4.jpg",
                "images/Chorus/樹氷の街/樹氷の街5.jpg",
                "images/Chorus/樹氷の街/樹氷の街6.jpg",
                "images/Chorus/樹氷の街/樹氷の街7.jpg",
                "images/Chorus/樹氷の街/樹氷の街8.jpg",
                "images/Chorus/樹氷の街/樹氷の街9.jpg",
                "images/Chorus/樹氷の街/樹氷の街10.jpg",
            ]
        },
        "いい日旅立ち": {
            pages: [
                "images/Chorus/いい日旅立ち/いい日旅立ち1.jpg",
                "images/Chorus/いい日旅立ち/いい日旅立ち2.jpg",
                "images/Chorus/いい日旅立ち/いい日旅立ち3.jpg",
                "images/Chorus/いい日旅立ち/いい日旅立ち4.jpg",
                "images/Chorus/いい日旅立ち/いい日旅立ち5.jpg",
                "images/Chorus/いい日旅立ち/いい日旅立ち6.jpg",
            ]
        },
                "希望": {
            pages: [
                "images/Chorus/希望/希望1.jpg",
                "images/Chorus/希望/希望2.jpg",
                "images/Chorus/希望/希望3.jpg",
                "images/Chorus/希望/希望4.jpg",
                "images/Chorus/希望/希望5.jpg",
                "images/Chorus/希望/希望6.jpg",
                "images/Chorus/希望/希望7.jpg",
                "images/Chorus/希望/希望8.jpg",
                "images/Chorus/希望/希望9.jpg",
                "images/Chorus/希望/希望10.jpg",
                "images/Chorus/希望/希望11.jpg",
                "images/Chorus/希望/希望12.jpg",
            ]
        },
                "星に祈りを": {
            pages: [
                "images/Chorus/星に祈りを/星に祈りを1.jpg",
                "images/Chorus/星に祈りを/星に祈りを2.jpg",
                "images/Chorus/星に祈りを/星に祈りを3.jpg",
                "images/Chorus/星に祈りを/星に祈りを4.jpg",
                "images/Chorus/星に祈りを/星に祈りを5.jpg",
                "images/Chorus/星に祈りを/星に祈りを6.jpg",
                "images/Chorus/星に祈りを/星に祈りを7.jpg",
                "images/Chorus/星に祈りを/星に祈りを8.jpg",
                "images/Chorus/星に祈りを/星に祈りを9.jpg",
                "images/Chorus/星に祈りを/星に祈りを10.jpg",
                "images/Chorus/星に祈りを/星に祈りを11.jpg",
                "images/Chorus/星に祈りを/星に祈りを12.jpg",
            ]
        },




    }
};

// ==========================================
// 📅 2. プレイリストの設定（フォルダ名に関係なく、曲名で指定できます）
// ==========================================
const playlistsData = {
    "たんぽぽ2026秋": ["いい日旅立ち","しゃぼん玉","はるかなあなた","めぐる春","希望","月の砂漠","樹氷の街","星に祈りを","青い眼の人形","二つの雨のうた","揺籃のうた"]
};

// ==========================================
// ⚙️ アプリの制御ロジック
// ==========================================
let currentSetList = []; 
let currentSongIndex = 0;
let currentPageIndex = 0;

const menuContainer = document.getElementById('menu-container');
const scoreContainer = document.getElementById('score-container');
const scoreImage = document.getElementById('score-image');
const pageInfo = document.getElementById('page-info');
const btnBack = document.getElementById('btn-back');
const btnPagePrev = document.getElementById('btn-page-prev');
const btnPageNext = document.getElementById('btn-page-next');

// メニュー画面の生成（フォルダ単位でアコーディオンのように開閉する仕組み）
// メニュー画面の生成（フォルダもプレイリストもタップで展開する仕組み）
function createMenu() {
    const songSection = document.getElementById('section-songs');
    const playlistSection = document.getElementById('section-playlists');
    
    songSection.innerHTML = '';
    playlistSection.innerHTML = '';

    // ① 通常のフォルダ別楽曲リストの生成
    Object.keys(songDatabase).forEach(folderName => {
        const folderLi = document.createElement('li');
        folderLi.textContent = `📁 ${folderName}`;
        folderLi.style.fontWeight = 'bold';
        folderLi.style.background = '#1a1a1a';
        folderLi.style.color = '#00ffcc'; // フォルダはミントグリーン
        
        const subUl = document.createElement('ul');
        subUl.style.paddingLeft = '20px';
        subUl.style.display = 'none';

        folderLi.addEventListener('click', (e) => {
            if (e.target === folderLi) {
                subUl.style.display = subUl.style.display === 'none' ? 'block' : 'none';
            }
        });

        const songsInFolder = songDatabase[folderName];
        Object.keys(songsInFolder).forEach(songName => {
            const songLi = document.createElement('li');
            songLi.textContent = `🎵 ${songName}`;
            songLi.style.background = '#333333';
            songLi.addEventListener('click', (e) => {
                e.stopPropagation();
                startPerformance([songName], 0);
            });
            subUl.appendChild(songLi);
        });

        songSection.appendChild(folderLi);
        songSection.appendChild(subUl);
    });

    // ② 【アップデート】プレイリストの生成（タップで曲名リストを展開）
    Object.keys(playlistsData).forEach(playlistName => {
        const playlistLi = document.createElement('li');
        playlistLi.textContent = `📋 ${playlistName}`;
        playlistLi.style.fontWeight = 'bold';
        playlistLi.style.background = '#1a1a1a';
        playlistLi.style.color = '#ffcc00'; // プレイリストはオレンジ・黄色系で見やすく
        
        const subUl = document.createElement('ul');
        subUl.style.paddingLeft = '20px';
        subUl.style.display = 'none'; // 最初は閉じておく

        // プレイリスト名をクリックしたら中身を開閉
        playlistLi.addEventListener('click', (e) => {
            if (e.target === playlistLi) {
                subUl.style.display = subUl.style.display === 'none' ? 'block' : 'none';
            }
        });

        // プレイリストに入っている曲をループで追加
        const songNamesInPlaylist = playlistsData[playlistName];
        songNamesInPlaylist.forEach((songName, index) => {
            const songLi = document.createElement('li');
            // 何曲目かわかりやすいように「1. 曲名」という表記にします
            songLi.textContent = `${index + 1}. ${songName}`;
            songLi.style.background = '#333333';
            songLi.addEventListener('click', (e) => {
                e.stopPropagation(); // 親要素の開閉イベントをストップ
                
                // 💡 リスト全体（songNamesInPlaylist）を渡しつつ、
                // クリックされた位置（index）から演奏をスタートさせます！
                startPerformance(songNamesInPlaylist, index);
            });
            subUl.appendChild(songLi);
        });

        playlistSection.appendChild(playlistLi);
        playlistSection.appendChild(subUl);
    });
}

// 演奏開始（プレイリストやサブメニューから曲名を探し出す処理）
function startPerformance(songNamesList, startIndex) {
    currentSetList = songNamesList.map(name => {
        // 全てのフォルダから該当する曲名を探す
        let foundSong = null;
        Object.keys(songDatabase).forEach(folder => {
            if (songDatabase[folder][name]) {
                foundSong = songDatabase[folder][name];
            }
        });

        if (!foundSong) {
            console.error(`曲名「${name}」が見つかりません。`);
            return { title: name, pages: [] };
        }
        return { title: name, pages: foundSong.pages };
    });

    if (currentSetList.length === 0 || currentSetList[0].pages.length === 0) {
        alert("楽譜データが見つかりません。");
        return;
    }

    currentSongIndex = startIndex;
    currentPageIndex = 0;
    updatePage();

    menuContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
}



// ページとボタンの更新
function updatePage() {
    const currentSong = currentSetList[currentSongIndex];
    if (!currentSong) return;

    scoreImage.src = currentSong.pages[currentPageIndex];
    
    // 画面上部のインフォメーション表示
    const setInfo = currentSetList.length > 1 ? ` (${currentSongIndex + 1}/${currentSetList.length}曲目)` : '';
    pageInfo.textContent = `【${currentSong.title}】 ${currentPageIndex + 1} / ${currentSong.pages.length} ${setInfo}`;

    // --- ボタンの文字と役割の制御 ---
    // 左ボタン
    if (currentPageIndex === 0) {
        if (currentSongIndex > 0) {
            btnPagePrev.textContent = "前の曲へ";
            btnPagePrev.classList.remove('disabled');
        } else {
            btnPagePrev.textContent = "（最初の曲）";
            btnPagePrev.classList.add('disabled');
        }
    } else {
        btnPagePrev.textContent = "前の頁";
        btnPagePrev.classList.remove('disabled');
    }

    // 右ボタン
    if (currentPageIndex === currentSong.pages.length - 1) {
        if (currentSongIndex < currentSetList.length - 1) {
            btnPageNext.textContent = "次の曲へ";
            btnPageNext.classList.remove('disabled');
        } else {
            btnPageNext.textContent = "（最後の曲）";
            btnPageNext.classList.add('disabled');
        }
    } else {
        btnPageNext.textContent = "次の頁";
        btnPageNext.classList.remove('disabled');
    }
}

// 譜めくり・曲間移動処理
function handleNext() {
    const currentSong = currentSetList[currentSongIndex];
    if (!currentSong) return;

    if (currentPageIndex < currentSong.pages.length - 1) {
        currentPageIndex++;
        updatePage();
    } else if (currentSongIndex < currentSetList.length - 1) {
        currentSongIndex++;
        currentPageIndex = 0;
        updatePage();
    }
}

function handlePrev() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePage();
    } else if (currentSongIndex > 0) {
        currentSongIndex--;
        currentPageIndex = currentSetList[currentSongIndex].pages.length - 1;
        updatePage();
    }
}

// イベント登録
btnPageNext.addEventListener('click', handleNext);
btnPagePrev.addEventListener('click', handlePrev);
document.getElementById('tap-right').addEventListener('click', handleNext);
document.getElementById('tap-left').addEventListener('click', handlePrev);

btnBack.addEventListener('click', () => {
    scoreContainer.classList.add('hidden');
    menuContainer.classList.remove('hidden');
});

// 初期化
createMenu();