class Character extends MovableObject {
    world;
    level = level1;
    x = 0;
    y = 30;
    width = 110;
    height = 200;
    speed = 4;
    energy = 100;
    coinstatus = 0;
    bottlestatus = 0;
    IMAGES_STANDING = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];
    IMAGES_SLEEPING = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_HURTING = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    IMAGES_DYING = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];
    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    hurting_sound = new Audio('audio/hurting.mp3');
    dying_sound = new Audio('audio/dying.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    collect_sound = new Audio('audio/collecting.mp3');
    attack_sound = new Audio('audio/attack.mp3');
    offset = {
        top: 90,
        right: 30,
        bottom: 10,
        left: 20,
    }


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.controlCharacter();
        this.checkCollisions();
    }

    controlCharacter() {
        this.animateWalk();
        this.walk();
        this.animateJump();
        this.jump();
        this.throwBottle();
    }

    animateWalk() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.animateImages(this.IMAGES_WALKING);
                this.walking_sound.play();
            } else {
                if (this.energy > 0) {
                    this.animateImages(this.IMAGES_STANDING);
                } else {
                    this.loadImage('img/2_character_pepe/5_dead/D-57.png');
                }
                this.walking_sound.pause();
            }
        }, 110);
    }

    walk() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 150;
        }, 1000 / 60);
    }

    animateJump() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.animateImages(this.IMAGES_JUMPING);
                this.walking_sound.pause();
            }
        }, 110);
    }

    jump() {
        this.applyGravity();
        setInterval(() => {
            if (this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.speedY = 15;
                this.jumping_sound.play();
            }
        }, 1000 / 60);
    }

    throwBottle() {
        setInterval(() => {
            if (this.world.keyboard.D && this.bottlestatus > 0) {
                let bottle = new ThrowableObject(this.x + 50, this.y + 100);
                this.world.throwableObjects.push(bottle);
                this.attack_sound.play();
                this.bottlestatus -= 20;
                this.level.bottlebar.setPercentage(this.bottlestatus);
            }
        }, 200);
    }

    checkCollisions() {
        setInterval(() => {
            this.collideEnemy();
            this.collideEndboss();
            this.collideCoin();
            this.collideBottle();
        }, 110);
        this.animateCollision();
    }

    collideEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.isColliding(enemy)) {
                if (this.energy > 0) {
                    if (!this.isHurt()) {
                        this.energy -= 20;
                        this.level.lifebar.setPercentage(this.energy);
                        this.lastHit = new Date().getTime();
                    }
                }
            }
        })
    }

    collideEndboss(){
        if (this.isColliding(this.world.endboss)) {
            if (this.energy > 0) {
                if (!this.isHurt()) {
                    this.energy -= 20;
                    this.level.lifebar.setPercentage(this.energy);
                    this.lastHit = new Date().getTime();
                }
            }
        }
    }

    collideCoin() {
        let coins = this.level.coins;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            if (this.isColliding(coin) && this.coinstatus < 100 && !this.isHit()) {
                this.coinstatus += 20;
                this.level.coinbar.setPercentage(this.coinstatus);
                this.lastCollect = new Date().getTime();
                this.coin_sound.play();
                coins.splice(i, 1);
            }
        }
    }

    collideBottle() {
        let bottles = this.level.bottles;
        for (let i = 0; i < bottles.length; i++) {
            const bottle = bottles[i];
            if (this.isColliding(bottle) && this.bottlestatus < 100 && !this.isHit()) {
                this.bottlestatus += 20;
                this.level.bottlebar.setPercentage(this.bottlestatus);
                this.lastCollect = new Date().getTime();
                this.collect_sound.play();
                bottles.splice(i, 1);
            }
        }
    }

    animateCollision() {
        setInterval(() => {
            if (this.isHurt()) {
                this.animateImages(this.IMAGES_HURTING);
                this.hurting_sound.play();
            }
            if (this.isDead() && this.energy == 0) {
                this.animateImages(this.IMAGES_DYING);
                this.dying_sound.play();
            }
        }, 110);
    }
}