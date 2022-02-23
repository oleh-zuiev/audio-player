const data = [
    {
        url: './songs/1.mp3',
        title: 'Thriller',
        author: 'Michael Jackson',
        poster: './images/album.jpg',
        // active:false,
    },
    {
        url: './songs/2.mp3',
        title: 'They dont care about us',
        author: 'Michael Jackson',
        poster: './images/album.jpg',
        // active:false,
    },
    {
        url: './songs/3.mp3',
        title: 'Helios',
        author: 'Latexfauna',
        poster: './images/helios.jpg',
        // active:false,
    },

];
// =========================
const player = new Audio();
function play() {
    player.play();
}
function pause() {
    player.pause();
}
let trackIdValue = 0;
let currentTrack;
player.src = data[trackIdValue].url;

// ==============controls===========
const prevEl = document.querySelector('.js-prev');
const playPauseEl = document.querySelector('.js-playPause');
const nextEl = document.querySelector('.js-next');

// -------------------------
const posterEl = document.querySelector('.poster');
const titleEl = document.querySelector('.title');
const authorEl = document.querySelector('.author');
const playlistEl = document.querySelector('.playlist');

// =========================
function generatePlaylist() {   
    for (let i = 0; i < data.length; i += 1){
        let newTrack = document.createElement('p');
        newTrack.classList.add('playlist-item');
        newTrack.setAttribute('data-trackid', i);
        newTrack.innerHTML = `${data[i].author}-${data[i].title}`;
        playlistEl.append(newTrack);
        // --------
        newTrack.addEventListener('click', function (e) {
            trackIdValue = e.target.getAttribute('data-trackid');
            player.src = data[trackIdValue].url;
            posterEl.innerHTML = `<img src =${data[trackIdValue].poster}>`;
            titleEl.innerHTML = `${data[trackIdValue].title}`;
            authorEl.innerHTML = `${data[trackIdValue].author}`;

            // data[trackIdValue] = true;
            console.log(trackIdValue);
            play();
            // console.log('eig');
            // if (player.paused) {
            // console.log(player.currentSrc);
            // }
        });
    }
}
generatePlaylist();
// -----------
// const playListTrackItem = document.querySelector('.playlist-item');
// if (playListTrackItem.hasAttribute('data-trackid',trackIdValue)) {
//     console.log(playListTrackItem);
// }
playlistEl.addEventListener('click', function (e) {
    // let checkAttribute = e.target.getAttribute('data-trackid');
    const playTracksArr = document.querySelectorAll('.playlist-item');
for (const item of playTracksArr) {
    if (item !== e.target) {
        item.classList.remove('playing-track');
    } else {
        item.classList.add('playing-track');
   }
}
});
// ----------тест с удалением класса
// const playTracksArr = document.querySelectorAll('.playlist-item');
// for (const item of playTracksArr) {
//     item.addEventListener('click', function (e) {
//         if (item.classList.contains('playing-track')) {
//             item.classList.remove('playing-track');
//         } else {
//             e.target.classList.add('playing-track');
//         }
//     });
// }
// =================
playPauseEl.addEventListener('click', function () {
    if (player.paused) {
        play();
    } else {
        pause();
    }
});
prevEl.addEventListener('click', function () {
    if (trackIdValue > 0) {
        trackIdValue -= 1;
        player.src = data[trackIdValue].url;
        posterEl.innerHTML = `<img src =${data[trackIdValue].poster}>`;
        titleEl.innerHTML = `${data[trackIdValue].title}`;
        authorEl.innerHTML = `${data[trackIdValue].author}`;
    }
    play();
});
nextEl.addEventListener('click', function () {
    if (trackIdValue < data.length) {
        trackIdValue += 1;
        player.src = data[trackIdValue].url;
        posterEl.innerHTML = `<img src =${data[trackIdValue].poster}>`;
        titleEl.innerHTML = `${data[trackIdValue].title}`;
        authorEl.innerHTML = `${data[trackIdValue].author}`;
        play();
    }
});
// console.log(player.paused);
// console.log(data.length);
// if (!player.paused) {
//     console.log(player.currentSrc);
//     console.log('eig');
// }
// console.dir(player);