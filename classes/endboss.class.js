class Endboss extends MovableObject {
    world;
    level = level1;
    x = 3400;
    y = 90;
    width = 280;
    height = 370;
    energy = 100;
    speed = 12;
    firstContact = false;
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
    hurting_sound = new Audio('audio/chicken-hurting.mp3');
    dying_sound = new Audio('audio/endboss-dying.mp3');
    winning_sound = new Audio('audio/win.mp3');
    letsgo_sound = new Audio('audio/letsgo.mp3');

    /**
     * initializes the endboss object
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.animate();
        this.checkCollision();
        this.animateCollision();
    }

    /**
     * calls functions to animate the endboss based on its distance to the character
     */
    animate() {
        this.checkFirstContact();
        setInterval(() => {
            let distance = this.x - this.world.character.x;
            if (this.isFarAway(distance)) {
                this.endbossIsFarAway();
            } else if (this.isClose(distance)) {
                this.endbossIsClose();
            } else if (this.isBehind(distance)) {
                this.endbossIsBehind();
            }
        }, 100);
    }

    /**
     * checks if endboss and character have first contact
     */
    checkFirstContact() {
        setInterval(() => {
            if (this.firstContact == false && this.world.character.x > 3000) {
                this.firstContact = true;
            }
        }, 100);
    }

    /**
     * checks if the endboss is far away from the character
     * 
     * @param {number} distance - distance between endboss and character
     * @returns {boolean} - true if the endboss is far away and not hurt or dead
     */
    isFarAway(distance) {
        return this.energy > 0 && distance > 100
    }

    /**
     * checks if the endboss is close to the character
     * 
     * @param {number} distance - distance between endboss and character
     * @returns {boolean} - true if the endboss is in a specific distance and not hurt or dead
     */
    isClose(distance) {
        return distance <= 100 && distance >= 0 && !this.isHurt() && !this.isDead()
    }

    /**
     * checks if the endboss is behind the character
     * 
     * @param {number} distance - distance between endboss and character
     * @returns {boolean} - true if the object is behind the given distance, not hurt, and not dead
     */
    isBehind(distance) {
        return distance < 0 && !this.isHurt() && !this.isDead()
    }

    /**
     * animates the endboss if the character is far away
     */
    endbossIsFarAway() {
        if (this.firstContact == false) {
            this.animateImages(this.IMAGES_ALERT);
        } else {
            this.animateImages(this.IMAGES_WALKING);
            this.moveLeft();
        }
    }

    /**
     * animates the endboss if the character is close
     */
    endbossIsClose() {
        this.otherDirection = false;
        this.animateImages(this.IMAGES_ATTACKING);
        this.moveLeft();
    }

    /**
     * animates the endboss behind the character
     */
    endbossIsBehind() {
        this.otherDirection = true;
        this.animateImages(this.IMAGES_WALKING);
        this.moveRight();
    }

    /**
     * checks and handles the collision with a flying bottle object
     */
    checkCollision() {
        setInterval(() => {
            this.world.throwableObjects.forEach((bottle) => {
                if (this.isColliding(bottle)) {
                    bottle.flying = false;
                    if (this.energy > 0 && !this.isHurt()) {
                        this.energy -= 20;
                        this.level.endbossbar.setPercentage(this.energy);
                        this.lastHit = new Date().getTime();
                    }
                }
            })
        }, 110);
    }

    /**
     * calls functions to animate the endboss when hurting, dying or the game is over
     */
    animateCollision() {
        setInterval(() => {
            if (this.isHurt()) {
                this.hurting();
            }
            if (this.isDead() && this.energy == 0) {
                this.dying();
                this.showEndScreen();
            }
        }, 110);
    }

    /**
     * animates endboss when hurting
     */
    hurting() {
        this.animateImages(this.IMAGES_HURTING);
        if (!this.isMuted()) {
            this.hurting_sound.play();
        }
    }

    /**
     * animates endboss when dying
     */
    dying() {
        this.animateImages(this.IMAGES_DYING);
        if (!this.isMuted()) {
            this.dying_sound.play();
        }
    }

    /**
     * shows the endscreen when the game is won
     */
    showEndScreen() {
        setTimeout(() => {
            this.clearAllIntervals();
            if (!this.isMuted()) {
                this.winning_sound.play();
            }
            this.world.music.pause();
            let text = new Text('img/9_intro_outro_screens/win/win_1.png', 380, 100, 170, 190);
            this.world.text.push(text);
            let gameoverButtons = document.getElementById('gameover-buttons');
            gameoverButtons.classList.remove('hidden');
        }, 3000);
    }
}