class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions(this.level.enemies);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.emptyCanvas();

        this.ctx.translate(this.camera_x, 0);

        this.drawObjectsOnCanvas(this.level.backgrounds);
        this.drawObjectsOnCanvas(this.level.bottles);
        this.drawObjectsOnCanvas(this.level.coins);
        this.drawObjectsOnCanvas(this.level.clouds);

        this.drawOnCanvas(this.character);
        this.drawObjectsOnCanvas(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

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

    checkCollisions(array){
        setInterval(() => {
            array.forEach((object)=> {
                if (this.character.isColliding(object)) {
                    this.character.animateImages(this.character.IMAGES_HURTING);
                    this.character.hurting_sound.play();
                }
            })
        }, 110);
    }
    
}