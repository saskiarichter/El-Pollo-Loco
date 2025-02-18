let level1;

/**
 * initializes elements in the world
 */
function initLevel() {
    level1 = new Level([
        new Chicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
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
        new Cloud('img/5_background/layers/4_clouds/1.png', 4000),
        new Cloud('img/5_background/layers/4_clouds/2.png', 4300),
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

        new Background('img/5_background/layers/air.png', 719 * 4),
        new Background('img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new Background('img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new Background('img/5_background/layers/1_first_layer/1.png', 719 * 4),

        new Background('img/5_background/layers/air.png', 719 * 5),
        new Background('img/5_background/layers/3_third_layer/2.png', 719 * 5),
        new Background('img/5_background/layers/2_second_layer/2.png', 719 * 5),
        new Background('img/5_background/layers/1_first_layer/2.png', 719 * 5),

        new Background('img/5_background/layers/air.png', 719 * 6),
        new Background('img/5_background/layers/3_third_layer/1.png', 719 * 6),
        new Background('img/5_background/layers/2_second_layer/1.png', 719 * 6),
        new Background('img/5_background/layers/1_first_layer/1.png', 719 * 6),
    ], [
        new Bottle(-530),
        new Bottle(600),
        new Bottle(1500),
        new Bottle(2100),
        new Bottle(2800),
        new Bottle(3650),
    ], [
        new Coin('img/8_coin/coin_1.png', -350, 230),
        new Coin('img/8_coin/coin_1.png', 900, 270),
        new Coin('img/8_coin/coin_2.png', 950, 270),
        new Coin('img/8_coin/coin_2.png', 2560, 180),
        new Coin('img/8_coin/coin_2.png', 2600, 180),
    ],
        new Statusbar([
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
        ], 50, 30, 100)
        ,
        new Statusbar([
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
        ], 50, 65, 0)
        ,
        new Statusbar([
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
            'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
        ], 50, 100, 0)
        ,
        new Statusbar([
            'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
            'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
        ], 520, 35, 100)
    )
} 