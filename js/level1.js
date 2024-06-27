const level1 = new Level(
    [
        new Chicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new Endboss(),
    ], [
    new Cloud('img/5_background/layers/4_clouds/1.png', -400),
    new Cloud('img/5_background/layers/4_clouds/1.png', 0),
    new Cloud('img/5_background/layers/4_clouds/2.png', 400),
    new Cloud('img/5_background/layers/4_clouds/1.png', 800),
    new Cloud('img/5_background/layers/4_clouds/2.png', 1300),
    new Cloud('img/5_background/layers/4_clouds/2.png', 1700),
    new Cloud('img/5_background/layers/4_clouds/1.png', 2200),
    new Cloud('img/5_background/layers/4_clouds/1.png', 2600),
    new Cloud('img/5_background/layers/4_clouds/2.png', 2900),
    new Cloud('img/5_background/layers/4_clouds/1.png', 3200),
    new Cloud('img/5_background/layers/4_clouds/2.png', 3600),
], [
    new Background('img/5_background/layers/air.png', -719),
    new Background('img/5_background/layers/3_third_layer/2.png', -719),
    new Background('img/5_background/layers/2_second_layer/2.png', -719),
    new Background('img/5_background/layers/1_first_layer/2.png', -719),

    new Background('img/5_background/layers/air.png', 0),
    new Background('img/5_background/layers/3_third_layer/1.png', 0),
    new Background('img/5_background/layers/2_second_layer/1.png', 0),
    new Background('img/5_background/layers/1_first_layer/1.png', 0),

    new Background('img/5_background/layers/air.png', 719),
    new Background('img/5_background/layers/3_third_layer/2.png', 719),
    new Background('img/5_background/layers/2_second_layer/2.png', 719),
    new Background('img/5_background/layers/1_first_layer/2.png', 719),

    new Background('img/5_background/layers/air.png', 719 * 2),
    new Background('img/5_background/layers/3_third_layer/1.png', 719 * 2),
    new Background('img/5_background/layers/2_second_layer/1.png', 719 * 2),
    new Background('img/5_background/layers/1_first_layer/1.png', 719 * 2),

    new Background('img/5_background/layers/air.png', 719 * 3),
    new Background('img/5_background/layers/3_third_layer/2.png', 719 * 3),
    new Background('img/5_background/layers/2_second_layer/2.png', 719 * 3),
    new Background('img/5_background/layers/1_first_layer/2.png', 719 * 3),
],[
    new Bottle(800),
    new Bottle(1500),
],[
    new Coin('img/8_coin/coin_1.png', 690, 180),
    new Coin('img/8_coin/coin_1.png', 730, 180),
    new Coin('img/8_coin/coin_2.png', 1200, 330),
]);