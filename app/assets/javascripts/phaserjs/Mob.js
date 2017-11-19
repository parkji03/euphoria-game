var tempMob;
function createMob(game) {
    // game.mobs = game.add.group();
    //
    // tempMob = game.mobs.create(1200, 730, 'dino_green');
    // tempMob.scale.setTo(game.hardScale, game.hardScale);
    // game.physics.arcade.enable(tempMob);

    game.testMob = game.add.sprite(1500, 730, 'dino_green');
    game.testMob.scale.setTo(game.hardScale, game.hardScale);
    game.physics.arcade.enable(game.testMob);
    game.testMob.body.collideWorldBounds = true;
    // game.add.sprite(750, game.world.height - 250, 'dino-blue');
    // game.add.sprite(800, game.world.height - 250, 'dino-green');
    // game.add.sprite(850, game.world.height - 250, 'dino-yellow');

    //TODO: do this next
    game.testMob.animations.add('left-charge', [5, 4, 3, 2, 1, 0], 48, true).speed = 15;
    game.testMob.animations.add('left-crouch', [6], 48, true);
    game.testMob.animations.add('left-hurt', [10, 9, 8, 7], 48, true).speed = 4;
    game.testMob.animations.add('left-kick', [13, 12, 11], 48, true).speed = 5;
    game.testMob.animations.add('left-walk', [19, 18, 17, 16, 15, 14], 48, true).speed = 8;
    game.testMob.animations.add('left-idle', [23, 22, 21, 20], 48, true).speed = 6;
    game.testMob.animations.add('right-idle', [24, 25, 26, 27], 48, true).speed = 6;
    game.testMob.animations.add('right-walk', [28, 29, 30, 31, 32, 33], 48, true).speed = 8;
    game.testMob.animations.add('right-kick', [34, 35, 36], 48, true).speed = 5;
    game.testMob.animations.add('right-hurt', [37, 38, 39, 40], 48, true).speed = 4;
    game.testMob.animations.add('right-crouch', [41], 48, true);
    game.testMob.animations.add('right-charge', [42, 43, 44, 45, 46, 47], 48, true).speed = 15;

    // tempMob.animations.add('left-idle', [23, 22, 21, 20], 48, true).speed = 6;

}

function updateMobMovement(game) {
  // game.testMob.animations.play('left-walk');
  game.physics.arcade.collide(game.testMob, game.worldLayer);
  // game.physics.arcade.collide(game.mobs, game.worldLayer);
  // tempMob.animations.play('left-idle');




}
