class Level {
    enemies;
    clouds;
    backgrounds;
    bottles;
    coins;
    level_end_x = 2000;

    constructor(enemies, clouds, backgrounds, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.bottles = bottles;
        this.coins = coins;
    }
}