let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;
let music = new Audio('audio/game-music.mp3');
let mutedMusic = false;
let mutedSound = false;
let mobile;
let settings;
let startscreen;

/**
 * shows and hides container & sets game
 */
function startGame() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('hidden');
    mobile = document.getElementById('mobile-buttons');
    mobile.classList.remove('hidden');
    settings = document.getElementById('settings');
    settings.classList.remove('hidden');
    startscreen = document.getElementById('startscreen');
    startscreen.classList.add('hidden');
    setGame();
    setButtons(canvas, mobile, settings, startscreen);
}

/**
 * creates a new world and plays music
 */
function setGame(){
    initLevel(); // from level1.js
    if (mutedMusic == false) {
        music.currentTime = 0;
        music.play();
    }
    world = new World(canvas, keyboard, mutedMusic, music, mutedSound);
}

/**
 * calls all functions for buttons
 * 
 * @param {element} canvas - html element for canvas
 * @param {element} mobile - html element for mobile buttons
 * @param {element} settings - html element for settings
 * @param {element} startscreen - html element for startscreen
 */
function setButtons(canvas, mobile, settings, startscreen) {
    setMobileButtons();
    fullScreen();
    muteMusic();
    muteSounds();
    restartGame();
    goHome(canvas, mobile, settings, startscreen);
}

/**
 * calls all functions for mobile buttons
 */
function setMobileButtons() {
    setLeftBtn();
    setRightBtn();
    setJumpBtn();
    setThrowBtn();
}

/**
 * sets touch-event for mobile button to walk left
 */
function setLeftBtn() {
    let btnLeft = document.getElementById('btnLeft');

    btnLeft.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    btnLeft.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

/**
 * sets touch-event for mobile button to walk right
 */
function setRightBtn() {
    let btnRight = document.getElementById('btnRight');

    btnRight.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    btnRight.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

/**
 * sets touch-event for mobile button to jump
 */
function setJumpBtn() {
    let btnJump = document.getElementById('btnJump');
    btnJump.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    btnJump.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
}

/**
 * sets touch-event for mobile button to throw a bottle
 */
function setThrowBtn() {
    let btnThrow = document.getElementById('btnThrow');
    btnThrow.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    btnThrow.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}

/**
 * sets click-event for fullscreen button
 */
function fullScreen() {
    let container = document.getElementById('fullscreenContainer');
    let fullScreenButton = document.getElementById('fullscreenBtn');

    fullScreenButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (fullscreen == false) {
            enterFullscreen(container);
            fullscreen = true;
        } else if (fullscreen == true) {
            exitFullscreen();
            fullscreen = false;
        }
    });
}

/**
 * opens fullscreen
 * 
 * @param {element} element - html element for fullscreen
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * closes fullscreen
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * sets click-event for music button
 */
function muteMusic() {
    let musicButton = document.getElementById('musicBtn');

    musicButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (musicIsNotMuted()) {
            stopMusic(musicButton);
        } else {
            playMusic(musicButton);
        }
    });
}

/**
 * checks if music is not muted
 * 
 * @returns {boolean} true if music is not muted, otherwise false
 */
function musicIsNotMuted() {
    return mutedMusic == false
}

/**
 * unmutes music
 * 
 * @param {element} musicButton - html element for music button
 */
function playMusic(musicButton) {
    musicButton.src = 'img/10_icons/music-weiß.svg';
    music.play();
    mutedMusic = false;
}

/**
 * mutes music
 * 
 * @param {element} musicButton - html element for music button
 */
function stopMusic(musicButton) {
    musicButton.src = 'img/10_icons/music-off-weiß.svg';
    music.pause();
    mutedMusic = true;
}

/**
 * sets click-event for sound button
 */
function muteSounds() {
    let soundButton = document.getElementById('soundBtn');

    soundButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (soundIsNotMuted()) {
            stopSounds(soundButton);
            console.log('sound aus')
        } else {
            playSounds(soundButton);
            console.log('sound an')
        }
    });
}

/**
 * checks if sound is not muted
 * 
 * @returns {boolean} true if sound is not muted, otherwise false
 */
function soundIsNotMuted() {
    return world.mutedSound == false
}

/**
 * unmutes sound
 * 
 * @param {element} soundButton - html element for sound button
 */
function playSounds(soundButton) {
    soundButton.src = 'img/10_icons/sound-weiß.svg';
    world.mutedSound = false;
    mutedSound = false;
}

/**
 * mutes sound 
 * 
 * @param {element} soundButton - html element for sound button
 */
function stopSounds(soundButton) {
    soundButton.src = 'img/10_icons/sound-off-weiß.svg';
    world.mutedSound = true;
    mutedSound = true;
}

/**
 * starts a new game
 */
function restartGame() {
    let restartButton = document.getElementById('restartBtn');

    restartButton.addEventListener('click', (e) => {
        e.preventDefault();
        world = null;
        setGame();
        let gameoverButtons = document.getElementById('gameover-buttons');
        gameoverButtons.classList.add('hidden');
    });
}

/**
 * sets click-event for home button to show the startscreen and hide other elements.
 * 
 * @param {element} canvas - html element for canvas
 * @param {element} mobile - html element for mobile buttons
 * @param {element} settings - html element for settings
 * @param {element} startscreen - html element for startscreen
 */
function goHome(canvas, mobile, settings, startscreen) {
    let homeButton = document.getElementById('homeBtn');
    let gameoverButtons = document.getElementById('gameover-buttons');

    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        canvas.classList.add('hidden');
        mobile.classList.add('hidden');
        settings.classList.add('hidden');
        startscreen.classList.remove('hidden');
        gameoverButtons.classList.add('hidden');
    });
}

/**
 * sets a key property to true when a key is pressed
 */
window.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        keyboard.SPACE = true;
    } else if (e.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    } else if (e.code == 'ArrowLeft') {
        keyboard.LEFT = true;
    } else if (e.code == 'ArrowUp') {
        keyboard.UP = true;
    } else if (e.code == 'KeyD') {
        keyboard.D = true;
    }
})

/**
 * sets a key property to false when a key is released
 */
window.addEventListener('keyup', (e) => {
    if (e.code == 'Space') {
        keyboard.SPACE = false;
    } else if (e.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    } else if (e.code == 'ArrowLeft') {
        keyboard.LEFT = false;
    } else if (e.code == 'ArrowUp') {
        keyboard.UP = false;
    } else if (e.code == 'KeyD') {
        keyboard.D = false;
    }
})

/**
 * opens imprint page
 */
function openImprint() {
    let home = document.getElementById('home');
    home.classList.add('hidden');
    let imprint = document.getElementById('imprint');
    imprint.classList.remove('hidden');
}

/**
 * closes imprint page
 */
function closeImprint() {
    let home = document.getElementById('home');
    home.classList.remove('hidden');
    let imprint = document.getElementById('imprint');
    imprint.classList.add('hidden');
}