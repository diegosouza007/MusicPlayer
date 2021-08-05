// Getting DOM references from the index page

const skipForward = document.getElementById('skip-forward');
const fastForward = document.getElementById('fast-forward');
const skipBack = document.getElementById('skip-back');
const progress = document.getElementById('progress');
const repeat = document.getElementById('repeat');
const rewind = document.getElementById('rewind');
const volume = document.getElementById('volume');
const music = document.getElementById('music');
const play = document.getElementById('play');

// Adding event listenners for the actions buttons

fastForward.addEventListener('click', fastForwardMusic);
repeat.addEventListener('click', activeLoopMusic);
volume.addEventListener('click', changeVolume);
rewind.addEventListener('click', rewindMusic);
play.addEventListener('click', playMusic);

// Array with the songs playlist

const playlist = [{
        name: "Superhero",
        band: "Unknown Brain (feat. Chris Linton)",
        released: "2016",
        file: "./assets/songs/Unknown-Brain-Superhero-_feat.-Chris-Linton_-_NCS-Release_.ogg",
        image: "./assets/img/thumbnails/unkown-brain-super-hero.webp"
    },
    {
        name: "On & On (feat. Daniel Levi) [NCS Release]",
        band: "Cartoon",
        released: "2015",
        file: "./assets/songs/Cartoon-On-On-feat-Daniel-Levi-NCS-Release.ogg",
        image: "./assets/img/thumbnails/cartoon-on-on.webp"
    },
    {
        name: "We Are [NCS Release]",
        band: "Jo Cohen & Sex Whales",
        released: "2016",
        file: "./assets/songs/Jo-Cohen-Sex-Whales-We-Are-NCS-Release.ogg",
        image: "./assets/img/thumbnails/We-Are-Jo-Cohen.webp"
    },
    {
        name: "Cradles [NCS Release]",
        band: "Sub Urban",
        released: "2019",
        file: "./assets/songs/Sub-Urban-Cradles-NCS-Release.ogg",
        image: "./assets/img/thumbnails/Sub-Urban-Cradles.webp"
    },
    {
        name: "Heroes Tonight [NCS Release]",
        band: "Janji feat Johnning",
        released: "2015",
        file: "./assets/songs/Janji-Heroes-Tonight-feat-Johnning-NCS-Release.ogg",
        image: "./assets/img/thumbnails/janji-heroes.webp"
    }
]

// ========== Global variables ========== //

// Player status (paused or playing)

let isMusicPlaying = false;

// Repeat button status

let isRepeatEnable = false;

// Default volume value

let volumeRate = 1.0;

// Playlist track index to control musics play order

let track = 0;

// ========== Player functions ========== //

// Play/Pause the music

function playMusic() {

    if (play.getAttribute('src') == './assets/img/buttons/play-circle.svg') {
        play.setAttribute('src', './assets/img/buttons/pause-circle.svg');
        play.setAttribute('title', 'Pausar');
    } else {
        play.setAttribute('src', './assets/img/buttons/play-circle.svg');
        play.setAttribute('title', 'Reproduzir');
    }

    if (!isMusicPlaying) {
        music.play();
    } else {
        music.pause();
    }

    isMusicPlaying = !isMusicPlaying;
}

// Accelerate music speed rate

function fastForwardMusic() {
    music.playbackRate += 0.25;
}

// Decrease music speed rate
function rewindMusic() {
    music.playbackRate -= 0.25;
}

// Change the volume of the music

function changeVolume() {
    switch (volumeRate) {
        case 1.0:
            volumeRate = 0.7;
            music.volume = volumeRate;
            volume.setAttribute('src', './assets/img/buttons/volume-1.svg');
            break;
        case 0.7:
            volumeRate = 0.4;
            music.volume = volumeRate;
            volume.setAttribute('src', './assets/img/buttons/volume.svg');
            break;
        case 0.4:
            volumeRate = 0;
            music.volume = volumeRate;
            volume.setAttribute('src', './assets/img/buttons/volume-x.svg');
            break;
        default:
            volumeRate = 1.0;
            music.volume = volumeRate;
            volume.setAttribute('src', './assets/img/buttons/volume-2.svg');
            break;
    }
}

// Update the current time progress

music.addEventListener("timeupdate", function() {

    let duration = (music.duration / 60).toFixed(2).replace('.', ':');
    let timer = musicProgressTimer();

    progress.innerHTML = `${timer} / ${duration}`;
});

function musicProgressTimer() {

    let progress = Math.round(music.currentTime);
    let currentProgress = "";

    //...

    return progress;
}

// Salt to the next music

function nextMusic() {
    // ...
}

// Return to the previously music

function previousMusic() {
    // ...
}

// Enable/Disable loop music

function activeLoopMusic() {
    if (!isRepeatEnable) {
        music.loop = true;
        repeat.setAttribute('src', './assets/img/buttons/repeat-active.svg');
    } else {
        music.loop = false;
        repeat.setAttribute('src', './assets/img/buttons/repeat.svg');
    }
    isRepeatEnable = !isRepeatEnable;
}