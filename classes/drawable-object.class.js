class DrawableObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 60,
        right: 40,
        bottom: 30,
        left: 50,
    }

    /**
     * loads an image 
     * 
     * @param {string} path - image file path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * loads several images
     * 
     * @param {array} array - array of image file paths
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * draws an image to the canvas
     * 
     * @param {CanvasRenderingContext2D} ctx - 2D rendering context of the canvas
     */
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * animates images
     * 
     * @param {array} array - array of image file paths
     */
    animateImages(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * stops all Intervals
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}