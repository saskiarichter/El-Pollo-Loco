class Text extends DrawableObject {
    x;
    y;
    width;
    height;

    /**
     * initalizes a text object
     * 
     * @param {string} path - image file path
     * @param {number} width - width of image
     * @param {number} height - height of image
     * @param {number} x - x-coordinate for the object's position
     * @param {number} y - y-coordinate for the object's position
     */
    constructor(path, width, height, x, y){
        super().loadImage(path);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}