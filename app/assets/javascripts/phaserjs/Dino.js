function createGreenDinoGroup(game) {
  game.greenDinoGroup = game.add.group();
  game.greenDinoGroup.enableBody = true;

  // Insert Additional Green Dinos here
  // NOTE: x and y has to be hard coded depending on the world map
  addGreenDino(game, 420, 750);
  addGreenDino(game, 1500, 800);
}

function checkPlayerMobCollision(game) {
  game.physics.arcade.overlap(game.player, game.greenDinoGroup, function(player, dino) {
    playerDeath(game);
  }, null, game);
}

function addGreenDino(game, x_location, y_location) {

  var tempMob = game.greenDinoGroup.create(x_location, y_location, 'dino_green');
  tempMob.scale.setTo(game.hardScale, game.hardScale);

  game.physics.arcade.enable(tempMob);
  tempMob.body.collisionWorldBounds = true;

  // Randomize the default direction of each green dino
  var initDirection = Math.floor(Math.random() * 2);
  if (initDirection == 1) {
    tempMob.mob_direction = 1;
  }
  else {
    tempMob.mob_direction = -1;
  }

  tempMob.animations.add('left-charge', [5, 4, 3, 2, 1, 0], 48, true).speed = 15;
  tempMob.animations.add('left-crouch', [6], 48, true);
  tempMob.animations.add('left-hurt', [10, 9, 8, 7], 48, true).speed = 4;
  tempMob.animations.add('left-kick', [13, 12, 11], 48, true).speed = 5;
  tempMob.animations.add('left-walk', [19, 18, 17, 16, 15, 14], 48, true).speed = 8;
  tempMob.animations.add('left-idle', [23, 22, 21, 20], 48, true).speed = 6;
  tempMob.animations.add('right-idle', [24, 25, 26, 27], 48, true).speed = 6;
  tempMob.animations.add('right-walk', [28, 29, 30, 31, 32, 33], 48, true).speed = 8;
  tempMob.animations.add('right-kick', [34, 35, 36], 48, true).speed = 5;
  tempMob.animations.add('right-hurt', [37, 38, 39, 40], 48, true).speed = 4;
  tempMob.animations.add('right-crouch', [41], 48, true);
  tempMob.animations.add('right-charge', [42, 43, 44, 45, 46, 47], 48, true).speed = 15;

}

function updateGreenDinoGroupMovement(game) {
  game.greenDinoGroup.forEach( function(dino) {
    game.physics.arcade.collide(dino, game.worldLayer);

    if (game.physics.arcade.collide(dino, game.mobBlockLayer)) {
      dino.mob_direction *= -1;
    }

    dino.body.velocity.x = dino.mob_direction * game.greenDinoVelocity;

    if (dino.body.velocity.x > 0) {
      dino.animations.play('right-charge');
    }
    else if (dino.body.velocity.x < 0) {
      dino.animations.play('left-charge');
    }
    else {
      dino.animations.play('right-idle');
    }

  }, game);
}
