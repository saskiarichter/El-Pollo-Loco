class Chicken extends MovableObject {
    world;
    level = level1;
    x = 800 + Math.random() * 2600;
    y = 355;
    width = 60;
    height = 70;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
    speed = 0.5 + Math.random() * 0.5;
    offset = {
        top: 10,
        right: 5,
        bottom: 10,
        left: 5,
    }

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.animateImages(this.IMAGES_WALKING);
        }, 200);
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}