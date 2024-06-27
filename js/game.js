let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
};

window.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        keyboard.SPACE = true;
    } else if (e.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    } else if (e.code == 'ArrowLeft') {
        keyboard.LEFT = true;
    } else if (e.code == 'ArrowUp') {
        keyboard.UP = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code == 'Space') {
        keyboard.SPACE = false;
    } else if (e.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    } else if (e.code == 'ArrowLeft') {
        keyboard.LEFT = false;
    } else if (e.code == 'ArrowUp') {
        keyboard.UP = false;
    }
});