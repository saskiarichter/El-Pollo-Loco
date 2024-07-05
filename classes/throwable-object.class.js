class ThrowableObject extends MovableObject {
    x = 0;
    y = 0;
    width = 60;
    height = 60;
    IMAGES_ROTATING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATING);
        this.x = x;
        this.y = y;
        this.throwBottle();
    }

    throwBottle(){
        this.throw();
        this.animateThrow();
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 40);
    }

    animateThrow(){
        setInterval(() => {
            this.animateImages(this.IMAGES_ROTATING);
        }, 70);
    }
}