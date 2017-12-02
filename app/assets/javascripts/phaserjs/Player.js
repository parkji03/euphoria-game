function createPlayer(game) {
  // Create the player sprite
  game.player = game.add.sprite(32, game.world.height - 300, 'player');
  game.player.scale.setTo(game.hardScale, game.hardScale);

  // Add animations
  game.player.animations.add('left-fall', [1, 0], 36, true).speed = 10;
  game.player.animations.add('left-jump', [3, 2], 36, true).speed = 10;
  game.player.animations.add('left-run', [11, 10, 9, 8, 7, 6, 5, 4], 36, true).speed = 13;
  game.player.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
  game.player.animations.add('right-run', [24, 25, 26, 27, 28, 29, 30, 31], 36, true).speed = 13;
  game.player.animations.add('right-jump', [32, 33], 36, true).speed = 10;
  game.player.animations.add('right-fall', [34, 35], 36, true).speed = 10;

  // Add camera movement
  game.physics.arcade.enable(game.player);
  game.player.body.collideWorldBounds = true;
  game.camera.follow(game.player, Phaser.Camera.FOLLOW_PLATFORMER);

  // Set player out of world bounds listener
  game.player.checkWorldBounds = true;
  game.player.events.onOutOfBounds.add(function() {
    playerDeath(game);
  }, game);

  // Set player spike collision detection
  game.map.setTileIndexCallback(game.spike_id, function () {
    playerDeath(game);
  }, game, game.worldLayer);

}

function checkPlayerMobCollision(game) {
  game.physics.arcade.overlap(game.player, game.greenDinoGroup, function(player, dino) {
    playerDeath(game);
  }, null, game);
}

function checkPlayerCoinCollision(game) {
  game.physics.arcade.overlap(game.player, game.coinGroup, function(player, coin) {
    coin.kill();
    game.coinCount += 1;
    game.coinText.text = 'Score: ' + game.coinCount;

    if (game.happyBarProgress.width + game.happyBarTenth > game.happyBarProgressLength) {
      game.happyBarProgress.width = game.happyBarProgressLength;
    }
    else {
      game.happyBarProgress.width += game.happyBarTenth;
    }
  }, null, game);
}

function updatePlayerMovement(game) {
  // game.physics.arcade.TILE_BIAS = 40;
  game.player.body.velocity.x = 0;
  var testHit = game.physics.arcade.collide(game.player, game.worldLayer);


  // Set player mob collision detection
  checkPlayerMobCollision(game);
  checkPlayerCoinCollision(game);

  if (game.leftKey.isDown && game.player.alive) {
      game.player.body.velocity.x = -1 * game.playerVelocity;
      game.player.animations.play('left-run');
  }
  else if (game.rightKey.isDown && game.player.alive) {
      game.player.body.velocity.x = game.playerVelocity;
      game.player.animations.play('right-run');
  }
  else {
      game.player.animations.play('idle');
  }

  //NOTE: change this for production
  if (game.upKey.isDown && game.player.alive && testHit && game.player.body.onFloor()) {
  // if (game.upKey.isDown && game.player.alive) {
    game.player.body.velocity.y = game.playerJump;
    if (game.player.body.velocity.y > 0) {
      game.player.animations.play('right-jump');
    }
    else {
      game.player.animations.play('left-jump');
    }
  }

  if (game.player.body.velocity.y < 0) {
    if (game.player.body.velocity.x < 0) {
      game.player.animations.play('left-fall');
    }
    else {
      game.player.animations.play('right-fall');
    }
  }

  if (game.player.body.velocity.y > 0) {
    if (game.player.body.velocity.x < 0) {
      game.player.animations.play('left-fall');
    }
    else {
      game.player.animations.play('right-fall');
    }
  }
}

// function playerDeath(game) {
//   if (PLAYER.alive) {
//     var deathEmote = game.add.sprite(game.player.position.x, game.player.position.y - 30, 'emoticons');
//     deathEmote.scale.setTo(3);
//     deathEmote.animations.add('empty-skull', [72, 73, 74], 78, true).speed = 2;
//     deathEmote.animations.play('empty-skull');
//   }
// }
