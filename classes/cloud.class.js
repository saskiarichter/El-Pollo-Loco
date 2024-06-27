class Cloud extends MovableObject {
    x = 0;
    y = 40;
    width = 400;
    height = 250;
    speed = 0.1;

    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}