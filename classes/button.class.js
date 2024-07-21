class Button extends DrawableObject {
    
    constructor(path, x, y, width, height){
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}