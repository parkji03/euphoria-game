function createPlayer(game) {
  // Create the player sprite
  game.player = game.add.sprite(32, game.world.height - 300, 'player');
  game.player.scale.setTo(game.hardScale, game.hardScale);

  // Add animations
  game.player.animations.add('left-fall', [0, 1], 36, true).speed = 10;
  game.player.animations.add('left-jump', [2, 3], 36, true).speed = 10;
  game.player.animations.add('left-run', [4, 5, 6, 7, 8, 9, 10, 11], 36, true).speed = 13;
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
  game.greenDinoGroup.forEach( function(dino) {
    if (game.player.overlap(dino)) {
      playerDeath(game);
    }
  }, game);
}

function updatePlayerMovement(game) {
  // game.physics.arcade.TILE_BIAS = 40;
  game.player.body.velocity.x = 0;
  let testHit = game.physics.arcade.collide(game.player, game.worldLayer);


  // Set player mob collision detection
  checkPlayerMobCollision(game);

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

function playerDeath(game) {
  if (game.player.alive) {
    game.retryLabel = game.add.text(game.camera.width / 2, game.camera.height / 2 - 100, 'Press \'Spacebar\' to reset', { font: '30px Arial', fill: '#FFF' } );
    game.retryLabel.anchor.setTo(0.5, 0.5);
    game.retryLabel.fixedToCamera = true;
    game.player.alive = false;
    updateDeathLabel(game);
    game.retryKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.retryKey.onDown.add(function() {
      game.player.kill();
      game.state.restart();
    }, game);

  }
}
//
// playerDeath: function() {
//   //TODO: play death animation
//   this.retryLabel = this.add.text(this.camera.width / 2, this.camera.height / 2 - 100, 'Press \'Spacebar\' to reset', {font: '30px Arial', fill: '#fff'});
//   this.retryLabel.anchor.setTo(0.5, 0.5);
//   this.retryLabel.fixedToCamera = true;
//   this.player.alive = false;
//
//   updateDeathLabel(this);
//   this.retryKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
//   this.retryKey.onDown.add(function() {
//     this.player.kill();
//     // console.log("spacebar clicked and we're dead");
//     this.state.restart();
//   }, this);
// }
