class Statusbar extends DrawableObject{
    height = 40;
    width = 150;
    percentage = 100;
    IMAGES_STATUS_LIFE;

    constructor(images, x, y){
        super();
        this.x = x;
        this.y = y;
        this.IMAGES_STATUS_LIFE = images;
        this.loadImages(this.IMAGES_STATUS_LIFE);
        this.setPercentage(100);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_STATUS_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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