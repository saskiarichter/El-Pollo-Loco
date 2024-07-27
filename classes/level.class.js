class Level {
    enemies;
    clouds;
    backgrounds;
    bottles;
    coins;
    lifebar;
    coinbar;
    bottlebar;
    endbossbar;
    level_end_x = 4200;

    /**
     * initializes the game components
     * 
     * @param {array} enemies - array of enemy objects
     * @param {array} clouds - array of cloud objects
     * @param {array} backgrounds - array of background objects
     * @param {array} bottles - array of bottle objects
     * @param {array} coins - array of coin objects
     * @param {object} lifebar - lifebar object showing the player's health
     * @param {object} coinbar - coinbar object displaying the collected coins
     * @param {object} bottlebar - bottlebar object displaying the collected bottles
     * @param {object} endbossbar - endbossbar object showing the endboss's health
     */
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