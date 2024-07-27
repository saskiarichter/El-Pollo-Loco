class Bottle extends MovableObject {
    y = 365;
    width = 80;
    height = 60;
    IMG_BOTTLE = 'img/6_salsa_bottle/salsa_bottle.png';
    IMG_GROUND_LEFT = 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png';
    IMG_GROUND_RIGHT = 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png';
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
    offset = {
        top: 10,
        right: 20,
        bottom: 5,
        left: 35,
    }

    /**
     * initializes the bottle object
     */
    constructor(x){
        super().loadImage(this.IMG_GROUND_LEFT);
        this.x = x;
    }
}