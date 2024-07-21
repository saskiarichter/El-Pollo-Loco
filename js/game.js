let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;


function startGame() {
    initLevel(); // from level1.js
    canvas = document.getElementById('canvas');
    canvas.classList.remove('hidden');
    let startscreen = document.getElementById('startscreen');
    startscreen.classList.add('hidden');
    world = new World(canvas, keyboard);

    canvas.addEventListener('click', (event) => {
        fullScreen(canvas, world, event);
        restartGame(canvas, world, event);
        goHome(canvas, world, event);
    });
}

function insideButton(position, rect) {
    return position.x > rect.x &&
        position.x < rect.x + rect.width &&
        position.y < rect.y + rect.height &&
        position.y > rect.y
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function restartGame(canvas, world, event) {
    let mousePosition = getMousePosition(canvas, event);
    if (insideButton(mousePosition, world.restartButton[0])) {
        startGame();
    }
}

function goHome(canvas, world, event) {
    let mousePosition = getMousePosition(canvas, event);
    if (insideButton(mousePosition, world.homeButton[0])) {
        canvas.classList.add('hidden');
        let startscreen = document.getElementById('startscreen');
        startscreen.classList.remove('hidden');
    }
}

function fullScreen(canvas, world, event) {
    let container = document.getElementById('fullscreenContainer');
    let mousePosition = getMousePosition(canvas, event);
    if (insideButton(mousePosition, world.fullScreenButton)) {
        if (fullscreen == false) {
            enterFullscreen(container);
            fullscreen = true;
            console.log('Fullscreen now', fullscreen);
        } else if(fullscreen == true) {
            exitFullscreen();
            fullscreen = false;
            console.log('Fullscreen off', fullscreen);
        }
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

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

function openImprint() {
    let home = document.getElementById('home');
    home.classList.add('hidden');
    let imprint = document.getElementById('imprint');
    imprint.classList.remove('hidden');
}

function closeImprint() {
    let home = document.getElementById('home');
    home.classList.remove('hidden');
    let imprint = document.getElementById('imprint');
    imprint.classList.add('hidden');
}


