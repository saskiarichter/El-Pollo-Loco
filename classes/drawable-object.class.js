class DrawableObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

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
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    animateImages(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}