class Statusbar extends DrawableObject{
    height = 40;
    width = 150;
    percentage = 100;
    IMAGES_STATUSBAR;

    /**
     * initialzies a statusbar object
     * 
     * @param {array} images - array of image files
     * @param {number} x - x-coordinate for the object's position
     * @param {number} y - y-coordinate for the object's position
     * @param {number} percentage - initial percentage value
     */
    constructor(images, x, y, percentage){
        super();
        this.x = x;
        this.y = y;
        this.IMAGES_STATUSBAR = images;
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(percentage);
    }

    /**
     * updates percentage of statusbar 
     * 
     * @param {number} percentage - percentage of statusbar
     */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * determines the index of the image to be used based on the current percentage
     * 
     * @returns {number} index of the image belonging to the current percentage
     */
    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    } 
}