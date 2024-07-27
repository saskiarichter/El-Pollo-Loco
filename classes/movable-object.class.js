class MovableObject extends DrawableObject {
    speed;
    otherDirection = false;
    speedY = 0;
    accelaration = 1;
    lastHit = 0;

    /**
     * moves an object right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * moves an object left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * applies to gravity to an object
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelaration;
                if (!this.isAboveGround()) {
                    this.y = 228;
                }
            }
        }, 1000 / 60);
    }

    /**
     * checks if the object is above the ground
     * 
     * @returns {boolean} - true if the object is above the ground or is a throwable object
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // bottle should always fall
            return true;
        } else {
            return this.y < 228;
        }
    }

    /**
     * checks if this object is colliding with another object
     * 
     * @param {object} object - object to check for a collision with
     * @returns {boolean} - true if this object is colliding with another object
     */
    isColliding(object) {
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    }

    /**
     * checks if the object is in a hurt state
     * 
     * @returns {boolean} - true if the object was hit within the last second
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 1;
    }

    /**
     * checks if the object is in a dead state
     * 
     * @returns {boolean} - true if the object was hit within the last 3 seconds
     */
    isDead() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 3;
    }

    /**
     * checks if the sound is muted 
     * 
     * @returns {boolean} - true if the sound is muted
     */
    isMuted() {
        return this.world.mutedSound == true
    }

    /**
     * sets the object's speed to 0 and loads the 'dead' image
     */
    isCollapsing() {
        this.speed = 0;
        setInterval(() => {
            this.loadImage(this.IMAGE_DEAD);
        }, 10);
    }
}