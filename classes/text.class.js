class Text extends DrawableObject {
    x;
    y;
    width;
    height;

    constructor(path, width, height, x, y){
        super().loadImage(path);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}