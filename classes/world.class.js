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
    music;
    mutedMusic;
    mutedSound;

    /**
     * initializes the game world
     * 
     * @param {element} canvas - html element for canvas
     * @param {object} keyboard - keyboard object
     * @param {boolean} mutedMusic - indicator if music is muted
     * @param {object|string} music - music file path
     * @param {boolean} mutedSound - indicator if sounds are muted
     */
    constructor(canvas, keyboard, mutedMusic, music, mutedSound) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.mutedMusic = mutedMusic;
        this.mutedSound = mutedSound;
        this.music = music;
        this.setWorld();
        this.draw();
    }

    /**
     * sets world reference for character and endboss
     */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /**
     * calls functions to draw all elements on canvas
     */
    draw() {
        this.emptyCanvas();

        this.ctx.translate(this.camera_x, 0);
        this.drawMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.drawFixedObjets();

        this.drawAgain();
    }

    /**
     * empties specific area on canvas
     */
    emptyCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * draws all movable Objects on canvas
     */
    drawMovableObjects() {
        this.drawObjectsOnCanvas(this.level.backgrounds);
        this.drawObjectsOnCanvas(this.level.clouds);
        this.drawObjectsOnCanvas(this.level.bottles);
        this.drawObjectsOnCanvas(this.level.coins);
        this.drawOnCanvas(this.character);
        this.drawOnCanvas(this.endboss);
        this.drawObjectsOnCanvas(this.level.enemies);
        this.drawObjectsOnCanvas(this.throwableObjects);
    }

     /**
     * draws all fixed Objects on canvas
     */
    drawFixedObjets() {
        this.drawOnCanvas(this.level.lifebar);
        this.drawOnCanvas(this.level.coinbar);
        this.drawOnCanvas(this.level.endbossbar);
        this.drawOnCanvas(this.level.bottlebar);
        this.drawObjectsOnCanvas(this.text);
    }

    /**
     * draws a single object && applies transformations
     * 
     * @param {object} object - object that should be drawn
     */
    drawOnCanvas(object) {
        this.flipImage(object);
        object.draw(this.ctx);
        this.flipImageBack(object);
    };

    /**
     * draws several objects
     * 
     * @param {array} objects - array of objects that should be drawn
     */
    drawObjectsOnCanvas(objects) {
        objects.forEach(object => {
            this.drawOnCanvas(object);
        });
    }

    /**
     * flips image horizontally
     * 
     * @param {object} object - object whose image should be flipped
     */
    flipImage(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
    }

    /**
     * restores image after it has been flipped
     * 
     * @param {object} object - object whose image should be flipped
     */
    flipImageBack(object) {
        if (object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    /**
     * redraws the canvas
     */
    drawAgain() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}