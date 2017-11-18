function createMob(game) {
    game.mobs = game.add.group();

    game.testMob = game.add.sprite(1200, game.world.height - 250, 'dino-red');
    game.testMob.scale.setTo(game.hardScale, game.hardScale);
    game.physics.arcade.enable(game.testMob);
    // game.add.sprite(750, game.world.height - 250, 'dino-blue');
    // game.add.sprite(800, game.world.height - 250, 'dino-green');
    // game.add.sprite(850, game.world.height - 250, 'dino-yellow');

    //TODO: do this next
    game.testMob.animations.add('idle', [0, 1, 2, 3], 24, true).speed = 10;
    game.testMob.animations.add('walking', [4, 5, 6, 7, 8, 9], 24, true).speed = 10;
    game.testMob.animations.add('kicking', [10, 11, 12], 24, true).speed = 5;
    game.testMob.animations.add('hurt', [13, 14, 15, 16], 24, true).speed = 5;
    game.testMob.animations.add('sneak', [17, 18, 19, 20, 21, 22, 23], 24, true).speed = 10;
}

function updateMobMovement(game) {
  game.testMob.animations.play('hurt');
  game.physics.arcade.collide(game.testMob, game.layer);
}
