class Background extends MovableObject{
    x = 0;
    y = 0;
    width = 720;
    height = 480;

    /**
     * initializes a background object
     * 
     * @param {string} imagePath - image file
     * @param {number} x - x-coordinate for the object's position
     */
    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
    }
}