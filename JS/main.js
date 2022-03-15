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
let currentTrack;
let trackIdValue = 0;
const player = new Audio();
function play() {
    // player.src = data[trackIdValue].url;
    playPauseEl.classList.remove('fa-play','fa');
    playPauseEl.classList.add('fa-pause','fa');
    player.play();
}
function pause() {
    player.pause();
    playPauseEl.classList.remove('fa-pause','fa');
    playPauseEl.classList.add('fa-play','fa');
}
function chooseTrack() {
        player.src = data[trackIdValue].url;
        posterEl.innerHTML = `<img src =${data[trackIdValue].poster}>`;
        titleEl.innerHTML = `${data[trackIdValue].title}`;
        authorEl.innerHTML = `${data[trackIdValue].author}`;
        // -----------------------------------------------------------------
        let alltracksArr = document.querySelectorAll('.playlist-item');
        for (const item of alltracksArr) {
        if (item.classList.contains('playing-track')) {
        item.classList.remove('playing-track');
        }
        // -----------------------------------------------------------------
        currentTrack = document.querySelector(`p[data-trackid='${trackIdValue}']`);
        currentTrack.classList.add('playing-track');   
}    
    console.log(currentTrack.textContent);
}

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
            chooseTrack();
            play();
        });
    }
}
generatePlaylist();
chooseTrack();//if you want to have empty player in the beginning move this function somewhere else
// -----------
playlistEl.addEventListener('click', function (e) {
    let playTracksArr = document.querySelectorAll('.playlist-item');
for (const item of playTracksArr) {
    if (item !== e.target) {
        item.classList.remove('playing-track');
    } else {
        item.classList.add('playing-track');
   }
}
});
// =================
playPauseEl.addEventListener('click', function () {
    if (player.paused) {
        play();
    } else {
        pause();
    }
});
prevEl.addEventListener('click', function () {
    if (typeof (trackIdValue) === typeof ('')) {
        trackIdValue = Number(trackIdValue);
    }
    console.log(trackIdValue);
    console.log(typeof(trackIdValue));
    if (trackIdValue <= 0) {
        trackIdValue = data.length-1;
    } else {
      trackIdValue -= 1;  
    }
    
    console.log(trackIdValue);
        chooseTrack(); 
        play();
});
nextEl.addEventListener('click', function () {
    if (typeof (trackIdValue) === typeof ('')) {
        trackIdValue = Number(trackIdValue);
    }
    console.log(trackIdValue);
    console.log(typeof(trackIdValue));
    if (trackIdValue >= data.length - 1) {
        trackIdValue = 0;
    } else {
        trackIdValue += 1;
    }
    console.log(trackIdValue);
        chooseTrack();
        play();

});
// ==============Volume====================
let volumeRef = document.querySelector('#volume');
volumeRef.addEventListener('change', function (e) {
player.volume = e.target.value/100;
});
// ===============Playback===================
const playbackEl = document.querySelector('#playback');
console.log(playbackEl.value);
playbackEl.addEventListener('change', function () {
    player.currentTime = playbackEl.value;
    console.log(player.currentTime);
});
