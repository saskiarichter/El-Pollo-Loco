let canvas;
let world;
let keyboard = new Keyboard();

function init() {

};

function startGame() {
    let canvas = document.getElementById('canvas');
    canvas.classList.remove('hidden');
    let menu = document.getElementById('menu');
    menu.classList.add('hidden');
    world = new World(canvas, keyboard);
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

function showNavigation(){
    let navigation = document.getElementById('navigation');
    navigation.classList.remove('hidden');
    let menu = document.getElementById('menu');
    menu.classList.add('hidden');
}

function closeNavigation(){
    let navigation = document.getElementById('navigation');
    navigation.classList.add('hidden');
    let menu = document.getElementById('menu');
    menu.classList.remove('hidden');
}
