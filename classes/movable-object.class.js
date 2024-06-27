class MovableObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    speed;
    otherDirection = false;
    speedY = 0;
    accelaration = 1;


    loadImage(path) {
        this.img = new Image(); // <img id="image"> // img = document.getElementById('image');
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof SmallChicken || this instanceof Bottle || this instanceof Coin || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "green";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    animateImages(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelaration;
            }
        }, 1000/60);
    }

    isAboveGround(){
        return this.y < 220;
    }

    isColliding(object){
        return this.x + this.width > object.x &&
        this.y + this.height > object.y &&
        this.x < object.x &&
        this.y < object.y + object.height
    }
}