class Character extends MovableObject {
    world;
    level = level1;
    x = 0;
    y = 228;
    width = 110;
    height = 200;
    speed = 4;
    energy = 100;
    sleeptimer = 100;
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
    letsgo_sound = new Audio('audio/letsgo.mp3');
    loosing_sound = new Audio('audio/noo.mp3');
    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    hurting_sound = new Audio('audio/hurt.mp3');
    dying_sound = new Audio('audio/dying.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    collect_sound = new Audio('audio/collecting.mp3');
    attack_sound = new Audio('audio/throw.mp3');
    chickenDying_sound = new Audio('audio/chicken-dying.mp3');
    offset = {
        top: 90,
        right: 30,
        bottom: 10,
        left: 20,
    }

    /**
     * initializes a character object
     */
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
        setTimeout(() => {
            if (!this.isMuted()) {
                this.letsgo_sound.play();
            }
        }, 3000);
    }

    /**
     * calls functions to control the character
     */
    controlCharacter() {
        this.animateWalk();
        this.walk();
        this.animateJump();
        this.jump();
        this.throwBottle();
    }

    /**
     * animates character if walking or standing
     */
    animateWalk() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.sleeptimer = 100;
                this.animateWalking();
            } else {
                if (this.energy > 0) {
                    this.animateStanding();
                }
            }
        }, 110);
    }

    /**
     * animates walking of character 
     */
    animateWalking() {
        this.animateImages(this.IMAGES_WALKING);
        if (!this.isMuted()) {
            this.walking_sound.play();
        }
    }

    /**
     * animates standing of character 
     */
    animateStanding() {
        this.animateImages(this.IMAGES_STANDING);
        this.animateSleeping();
        this.walking_sound.pause();
    }

    /**
     * animates sleeping of character
     */
    animateSleeping() {
        if (this.sleeptimer > 0) {
            this.sleeptimer--;
        } else {
            this.animateImages(this.IMAGES_SLEEPING);
        }
    }

    /**
     * moves character left and right
     */
    walk() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > -550) {
                this.moveLeft();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 150;
        }, 1000 / 60);
    }

    /**
     * animates jump of character
     */
    animateJump() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.animateImages(this.IMAGES_JUMPING);
                this.walking_sound.pause();
            }
        }, 110);
    }

    /**
     * moves character when jumping
     */
    jump() {
        this.applyGravity();
        setInterval(() => {
            if (this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()) {

                this.sleeptimer = 100;
                this.speedY = 15;
                if (!this.isMuted()) {
                    this.jumping_sound.play();
                }
            }
        }, 1000 / 60);
    }

    /**
     * checks if bottles are available & initiates the bottle object
     */
    throwBottle() {
        setInterval(() => {
            if (this.world.keyboard.D && this.bottlestatus > 0) {
                this.sleeptimer = 100;
                let bottle = new ThrowableObject(this.x, this.y + 100, this.otherDirection);
                this.world.throwableObjects.push(bottle);
                if (!this.isMuted()) {
                    this.attack_sound.play();
                }
                this.bottlestatus -= 20;
                this.level.bottlebar.setPercentage(this.bottlestatus);
            }
        }, 200);
    }

    /**
     * calls functions to check collisions and animate them
     */
    checkCollisions() {
        setInterval(() => {
            this.collideEnemy();
            this.collideEndboss();
            this.collideCoin();
            this.collideBottle();
        }, 20);
        setInterval(() => {
            this.animateCollision();
        }, 110);
    }

    /**
     * checks and handles collisions with enemies
     */
    collideEnemy() {
        let enemies = this.level.enemies;

        for (let i = 0; i < enemies.length; i++) {
            const chicken = enemies[i];
            if (this.isCollidingEnemy(chicken)) {
                this.sleeptimer = 100;
                if (this.isAboveGround() && this.speedY < 0) {
                    this.jumpOnEnemy(enemies, chicken, i);
                } else {
                    this.getHurt();
                }
            }
        }
    }

    /**
     * checks if the object is colliding with an enemy
     * 
     * @param {object} enemy - enemy object to check for a collision
     * @returns {boolean} - true if the object is colliding with the enemy, has energy greater than 0 and is not hurt
     */
    isCollidingEnemy(enemy) {
        return this.isColliding(enemy) && this.energy > 0 && !this.isHurt()
    }

    /**
     * handles jump on enemy 
     * 
     * @param {array} enemies - array of enemy objects
     * @param {object} enemy - specific enemy object that is jumped on
     * @param {number} i - index of the enemy in the enemies array
     */
    jumpOnEnemy(enemies, enemy, i) {
        this.speedY = 15;
        enemy.isCollapsing();
        if (!this.isMuted()) {
            this.chickenDying_sound.play();
        }
        if (!this.isMuted()) {
            this.jumping_sound.play();
        }
        setTimeout(() => {
            enemies.splice(i, 1);
        }, 500);
    }

    /**
     * sets energy, lifebar and last hit of the character
     */
    getHurt() {
        this.energy -= 20;
        this.level.lifebar.setPercentage(this.energy);
        this.lastHit = new Date().getTime();
    }

    /**
     * checks and handles a collision with the endboss
     */
    collideEndboss() {
        if (this.isCollidingEnemy(this.world.endboss)) {
            this.sleeptimer = 100;
            this.getHurt();
        }
    }

    /**
     * checks and handles collisions with coins
     */
    collideCoin() {
        let coins = this.level.coins;

        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            if (this.isColliding(coin) && this.coinstatus < 100) {
                this.coinstatus += 20;
                this.level.coinbar.setPercentage(this.coinstatus);
                if (!this.isMuted()) {
                    this.coin_sound.play();
                }
                coins.splice(i, 1);
            }
        }
    }

    /**
     * checks and handles collisions with bottles
     */
    collideBottle() {
        let bottles = this.level.bottles;

        for (let i = 0; i < bottles.length; i++) {
            const bottle = bottles[i];
            if (this.isColliding(bottle) && this.bottlestatus < 100) {
                this.bottlestatus += 20;
                this.level.bottlebar.setPercentage(this.bottlestatus);
                if (!this.isMuted()) {
                    this.collect_sound.play();
                }
                bottles.splice(i, 1);
            }
        }
    }

    /**
     * animates the character when its hurting or dying 
     */
    animateCollision() {
        if (this.isHurt()) {
            this.animateImages(this.IMAGES_HURTING);
            if (!this.isMuted()) {
                this.hurting_sound.play();
            }
        }
        if (this.isDead() && this.energy == 0) {
            this.animateImages(this.IMAGES_DYING);
            this.showEndScreen();
        }
    }

    /**
     * shows the endscreen when the game is lost
     */
    showEndScreen() {
        setTimeout(() => {
            this.clearAllIntervals();
            this.walking_sound.pause();
            this.walking_sound.currentTime = 0;
            if (!this.isMuted()) {
                this.loosing_sound.play();
            }
            this.world.music.pause();
            let text = new Text('img/9_intro_outro_screens/game_over/game over.png', 720, 480, 0, 0);
            this.world.text.push(text);
            let gameoverButtons = document.getElementById('gameover-buttons');
            gameoverButtons.classList.remove('hidden');
        }, 2000);
    }
} 