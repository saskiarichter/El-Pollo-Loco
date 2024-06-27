class Coin extends MovableObject{
    width = 100;
    height = 100;
    IMG_SMALL = 'img/8_coin/coin_1.png';
    IMG_BIG = 'img/8_coin/coin_2.png';

    constructor(path, x, y){
        super().loadImage(path);
        this.x = x;
        this.y = y;
    }
}