class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    endboss = new Endboss();
    throwableObjects = [];
    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
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
}