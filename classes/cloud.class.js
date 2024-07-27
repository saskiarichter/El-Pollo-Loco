class Cloud extends MovableObject {
    x = 0;
    y = 40;
    width = 400;
    height = 250;
    speed = 0.1;

    /**
     * initializes the cloud object
     * 
     * @param {string} path - image file path
     * @param {number} x - x-coordinate for the object's position
     */
    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
        this.animate();
    }

    /**
     * moves the cloud object left
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}