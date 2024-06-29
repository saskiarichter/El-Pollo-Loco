class Level {
    enemies;
    clouds;
    backgrounds;
    bottles;
    coins;
    lifebar;
    coinbar;
    bottlebar;
    endbossbar
    level_end_x = 2000;

    constructor(enemies, clouds, backgrounds, bottles, coins, lifebar, coinbar, bottlebar, endbossbar) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.bottles = bottles;
        this.coins = coins;
        this.lifebar = lifebar;
        this.coinbar = coinbar;
        this.bottlebar = bottlebar;
        this.endbossbar = endbossbar;
    }
}