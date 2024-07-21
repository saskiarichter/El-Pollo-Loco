class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    endboss = new Endboss();
    throwableObjects = [];
    sounds = [];
    text = [];
    level = level1;
    restartButton = [];
    homeButton = [];
    fullScreenButton = new Button ('img/10_icons/fullscreen-weiß.svg', 685, 15, 20, 20);
    musicButton = new Button('img/10_icons/music-weiß.svg', 685, 45, 20, 20);
    soundButton = new Button('img/10_icons/sound-weiß.svg', 685, 75, 20, 20);
    music = new Audio('audio/game-music.mp3');
    mutedMusic = false;
    mutedSound = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.music.play();
        canvas.addEventListener('click', (event) => {
            this.muteAudio(event);
        });
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    draw() {
        this.emptyCanvas();

        this.ctx.translate(this.camera_x, 0);
        // -- space for movable objects ---
        this.drawObjectsOnCanvas(this.level.backgrounds);
        this.drawObjectsOnCanvas(this.level.clouds);
        this.drawObjectsOnCanvas(this.level.bottles);
        this.drawObjectsOnCanvas(this.level.coins);
        this.drawOnCanvas(this.character);
        this.drawOnCanvas(this.endboss);
        this.drawObjectsOnCanvas(this.level.enemies);
        this.drawObjectsOnCanvas(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        // -- space for fixed objects ---
        this.drawOnCanvas(this.level.lifebar);
        this.drawOnCanvas(this.level.coinbar);
        this.drawOnCanvas(this.level.endbossbar);
        this.drawOnCanvas(this.level.bottlebar);
        this.drawOnCanvas(this.fullScreenButton);
        this.drawOnCanvas(this.musicButton);
        this.drawOnCanvas(this.soundButton);
        this.drawObjectsOnCanvas(this.text);
        this.drawObjectsOnCanvas(this.restartButton);
        this.drawObjectsOnCanvas(this.homeButton);

        this.drawAgain();
    }

    emptyCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawOnCanvas(object) {
        this.flipImage(object);
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        this.flipImageBack(object);
    };

    drawObjectsOnCanvas(objects) {
        objects.forEach(object => {
            this.drawOnCanvas(object);
        });
    }

    flipImage(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
    }

    flipImageBack(object) {
        if (object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    // draw() wird immer wieder aufgerufen
    drawAgain() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    insideButton(position, rect) {
        return position.x > rect.x &&
            position.x < rect.x + rect.width &&
            position.y < rect.y + rect.height &&
            position.y > rect.y
    }

    getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    muteAudio(event) {
        let mousePosition = this.getMousePosition(this.canvas, event);
        if (this.insideButton(mousePosition, this.musicButton)) {
            this.muteMusic();
        } else if (this.insideButton(mousePosition, this.soundButton)) {
            this.muteSounds();
        }
    }

    muteMusic() {
        if (this.mutedMusic == false) {
            this.musicButton.img.src = 'img/10_icons/music-off-weiß.svg';
            this.music.pause();
            this.mutedMusic = true;
        } else {
            this.musicButton.img.src = 'img/10_icons/music-weiß.svg';
            this.music.play();
            this.mutedMusic = false;
        }
    }

    muteSounds() {
        if (this.mutedSound == false) {
            this.soundButton.img.src = 'img/10_icons/sound-off-weiß.svg';
            this.mutedSound = true;
        } else {
            this.soundButton.img.src = 'img/10_icons/sound-weiß.svg';
            this.mutedSound = false;
        }
    }

    

}