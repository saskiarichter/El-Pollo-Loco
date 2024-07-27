class ThrowableObject extends MovableObject {
    x = 0;
    y = 0;
    width = 60;
    height = 60;
    flying = true;
    otherDirection;
    IMAGES_ROTATING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    /**
     * initializes a throwable bottle object
     * 
     * @param {number} x - x-coordinate for the bottle's position
     * @param {number} y - y-coordinate for the bottle's position
     * @param {boolean} otherDirection - indicates if the bottle is thrown in the opposite direction
     */
    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATING);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.throwBottle();
    }

    /**
     * calls functions to throw the bottle
     */
    throwBottle() {
        this.throw();
        this.animateThrow();
    }

    /**
     * moves the bottle when throwing
     */
    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            if (this.otherDirection == false) {
                this.x += 20;
            } else {
                this.x -= 20;
            }
        }, 40);
    }

    /**
     * animates the bottle when throwing
     */
    animateThrow() {
        setInterval(() => {
            if (this.flying == true) {
                this.animateImages(this.IMAGES_ROTATING);
            } else {
                this.animateImages(this.IMAGES_SPLASH);
            }
        }, 70);
    }
}