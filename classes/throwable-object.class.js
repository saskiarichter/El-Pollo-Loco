class ThrowableObject extends MovableObject {
    x = 100;
    y = 300;
    width = 60;
    height = 60;
    speedY;
    speedX;


    constructor() {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        setTimeout(() => {
            this.throw(50, 200);
        }, 5000);
        


    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 5;
        this.applyGravity();
        setInterval(() => {
            this.x += 30;
        }, 50);
    }
}