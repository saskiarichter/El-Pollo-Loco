class Coin extends MovableObject{
    width = 100;
    height = 100;
    IMG_SMALL = 'img/8_coin/coin_1.png';
    IMG_BIG = 'img/8_coin/coin_2.png';
    offset = {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
    }

    /**
     * initializes the coin object
     * 
     * @param {string} path - image file path
     * @param {number} x - x-coordinate for the object's position
     * @param {number} y - y-coordinate for the object's position
     */
    constructor(path, x, y){
        super().loadImage(path);
        this.x = x;
        this.y = y;
    }
}