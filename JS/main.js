const data = [
    // {
    //     url: './songs/1.mp3',
    //     title: 'Thriller',
    //     author: 'Michael Jackson',
    //     poster: './images/album.jpg',
    // },
    {
        url: './songs/2.mp3',
        title: 'They don\'t care about us',
        author: 'Michael Jackson',
        poster: './images/album.jpg',
    },
    {
        url: './songs/3.mp3',
        title: 'Helios',
        author: 'Latexfauna',
        poster: './images/helios.jpg',
    },
     {
        url: './songs/4.mp3',
        title: 'Aloe',
        author: 'Latexfauna',
        poster: './images/aloe.jpg',
    },
    {
        url: './songs/5.mp3',
        title: 'Kungfu',
        author: 'Latexfauna',
        poster: './images/kungfu.jpg',
    },
    {
        url: './songs/6.mp3',
        title: 'Odyssey',
        author: 'Latexfauna',
        poster: './images/odyssey.jpg',
    },
     {
        url: './songs/7.mp3',
        title: 'Bounty',
        author: 'Latexfauna',
        poster: './images/bounty.jpg',
    },

];
// =========================
let currentTrack;
let trackIdValue = 0;
let duration;
// let currentTime;
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
// =====================controls=====================
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
    
    if (trackIdValue <= 0) {
        trackIdValue = data.length-1;
    } else {
      trackIdValue -= 1;  
    }
    
        chooseTrack(); 
        play();
});
nextEl.addEventListener('click', function () {
    if (typeof (trackIdValue) === typeof ('')) {
        trackIdValue = Number(trackIdValue);
    }
    
    if (trackIdValue >= data.length - 1) {
        trackIdValue = 0;
    } else {
        trackIdValue += 1;
    }
        chooseTrack();
        play();

});
// ==============Volume====================
let volumeRef = document.querySelector('#volume');
volumeRef.addEventListener('change', function (e) {
player.volume = e.target.value/100;
});
// ===============Playback===================
// -----get duration of track-------
player.addEventListener('durationchange', function () {
    duration = player.duration;
});

// ----------------------------------
const playbackEl = document.querySelector('#playback');

player.addEventListener('timeupdate', function () {
    playbackEl.value = player.currentTime * 100 / duration;
});
playbackEl.addEventListener('input', function () {
    pause();
    if (player.paused) {
    player.currentTime = playbackEl.value*duration/100;
    }
    play();
});

// playbackEl.addEventListener('change', function () {
//     player.currentTime = playbackEl.value;
// });
// ==============switch to next track===============
player.addEventListener('ended', function () {
     if (typeof (trackIdValue) === typeof ('')) {
        trackIdValue = Number(trackIdValue);
    }
    if (trackIdValue >= data.length - 1) {
        trackIdValue = 0;
    } else {
        trackIdValue += 1;
    }
        chooseTrack();
        play();
    
});