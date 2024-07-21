class Endboss extends MovableObject {
    world;
    level = level1;
    x = 3400;
    y = 90;
    width = 280;
    height = 370;
    energy = 100;
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    IMAGES_ATTACKING = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    IMAGES_HURTING = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    IMAGES_DYING = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    hurting_sound = new Audio('audio/chicken-hurting.mp3');
    dying_sound = new Audio('audio/chicken-dying.mp3');
    winning_sound = new Audio('audio/win.mp3');

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SPLASH);
        this.animate();
        this.checkCollision();
        this.animateCollision();
    }

    animate() {
        setInterval(() => {
            if (this.energy > 0 && this.world.character.x < 3100) {
                this.animateImages(this.IMAGES_ALERT);
            } else if (this.world.character.x > 3100 && !this.isHurt() && !this.isDead()) {
                this.animateImages(this.IMAGES_ATTACKING);
            }
        }, 200);
    }

    checkCollision() {
        setInterval(() => {
            this.world.throwableObjects.forEach((bottle) => {
                if (this.isColliding(bottle)) {
                    if (this.energy > 0) {
                        if (!this.isHurt()) {
                            this.energy -= 20;
                            this.level.endbossbar.setPercentage(this.energy);
                            this.lastHit = new Date().getTime();
                        }
                    }
                }
            })
        }, 110);
    }


    animateCollision() {
        setInterval(() => {
            if (this.isHurt()) {
                this.animateImages(this.IMAGES_HURTING);
                if (!this.isMuted()) {
                    this.hurting_sound.play();
                }
            }
            if (this.isDead() && this.energy == 0) {
                this.animateImages(this.IMAGES_DYING);
                if (!this.isMuted()) {
                    this.dying_sound.play();
                }
                setTimeout(() => {
                    this.clearAllIntervals();
                    this.world.music.pause();
                    this.world.mutedSound = true;
                    this.winning_sound.play();
                    let text = new Text('img/9_intro_outro_screens/win/win_1.png', 380, 100, 170, 190);
                    this.world.text.push(text);
                    let restartButton = new Button('img/10_icons/restart-gelb.svg', 80, 210, 60, 60);
                    this.world.restartButton.push(restartButton);
                    let homeButton = new Button('img/10_icons/home-gelb.svg', 590, 210, 60, 60);
                    this.world.homeButton.push(homeButton);
                }, 4000);
            }
        }, 110);
    }
}