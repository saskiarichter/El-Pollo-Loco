class MovableObject extends DrawableObject{
    speed;
    otherDirection = false;
    speedY = 0;
    accelaration = 1;
    lastHit = 0;
    lastCollect = 0;

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelaration;
            }
        }, 1000/60);
    }

    isAboveGround(){
        if (this instanceof ThrowableObject) { // bottle should always fall
            return true;
        }else {
            return this.y < 220;
        }
    }

    isColliding(object){
        return this.x + this.width - this.offset.right > object.x + object.offset.left &&
        this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
        this.x + this.offset.left < object.x + object.width - object.offset.right &&
        this.y + this.offset.top < object.y + object.height - object.offset.bottom;
    }

    isHit(){
        let timepassed = new Date().getTime() - this.lastCollect;
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 0.5;
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 2;
    }

    isDead(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 4;
    }
}