//NOTE: with scale, horizontal tile count = 80
//NOTE: with scale, height tile count = 45

Euphoria.Game = function(game) {
  this.game = game;
  this.canvasWidth = 1280;
  this.canvasHeight = 800;
  this.gameGravity = 2000;
  this.playerVelocity = 600;
  this.playerJump = -700;
  this.hardScale = 1.5;

  this.layer = null;
  this.map = null;
  this.player = null;


  this.deathCount = 0;
  this.deathLabel = null;

  this.retryLabel = null;
  this.retryKey = null;

  this.upKey = null;
  this.leftKey = null;
  this.rightKey = null;

  this.jg_1 = null;
  this.jg_2 = null;
  this.jg_3 = null;
  this.jg_4 = null;
  this.jg_5 = null;
};

function createGamePhysics(game) {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = game.gameGravity;
  // Let player fall below the world
  game.physics.arcade.checkCollision.down = false
}

function createBackgroundParallax(game) {
  game.jg_1 = game.add.tileSprite(0, 0, 1920, 1080, 'jg_1')
  game.jg_1.scale.setTo(5, 5);
  game.jg_2 = game.add.tileSprite(0, 0, 1920, 1080, 'jg_2')
  game.jg_2.scale.setTo(5, 5);
  game.jg_3 = game.add.tileSprite(0, 0, 1920, 1080, 'jg_3')
  game.jg_3.scale.setTo(5, 5);
  game.jg_4 = game.add.tileSprite(0, 0, 1920, 1080, 'jg_4')
  game.jg_4.scale.setTo(5, 5);
  game.jg_5 = game.add.tileSprite(0, 0, 1920, 1080, 'jg_5')
  game.jg_5.scale.setTo(5, 5);
}

function updateBackgroundParallax(game) {
  this.jg_2.x = this.camera.x * 0.01;
  this.jg_3.x = this.camera.x * 0.02;
  this.jg_4.x = this.camera.x * 0.05;
  this.jg_5.x = this.camera.x * 0.10;
}

function createGameSprites(game) {
  // Create the world map
  game.map = game.add.tilemap('map_testmap');
  game.map.addTilesetImage('grass', 'grass');
  game.map.addTilesetImage('spike', 'spike');
  game.map.setCollision([0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 28, 30, 31])
  game.layer = game.map.createLayer('Tile Layer 1');
  game.layer.setScale(game.hardScale);
  game.layer.resizeWorld();

  // Create the player sprite
  game.player = game.add.sprite(32, game.world.height - 300, 'player');
  game.player.scale.setTo(game.hardScale, game.hardScale);

  game.player.animations.add('left-fall', [0, 1], 36, true).speed = 10;
  game.player.animations.add('left-jump', [2, 3], 36, true).speed = 10;
  game.player.animations.add('left-run', [4, 5, 6, 7, 8, 9, 10, 11], 36, true).speed = 13;
  game.player.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
  game.player.animations.add('right-run', [24, 25, 26, 27, 28, 29, 30, 31], 36, true).speed = 13;
  game.player.animations.add('right-jump', [32, 33], 36, true).speed = 10;
  game.player.animations.add('right-fall', [34, 35], 36, true).speed = 10;

  // t4.speed = 10;

  game.physics.arcade.enable(game.player);
  game.player.body.collideWorldBounds = true;
  game.camera.follow(game.player, Phaser.Camera.FOLLOW_PLATFORMER);

  // Set player out of bounds listener
  game.player.checkWorldBounds = true;
  game.player.events.onOutOfBounds.add(function() {
    game.playerDeath();
  }, game);

  // Set spike collision
  game.map.setTileIndexCallback(46, function () {
    // console.log('hit the spike!');
    if (game.player.alive) {
      game.playerDeath();
    }
  }, game, game.layer);

}

function createGameKeys(game) {
  game.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
  game.leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
  game.rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
}

function createDeathLabel(game) {
  game.deathLabel = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Death Count: ' + game.deathCount, {font: '24px Arial', fill: '#fff'});
  game.deathLabel.anchor.setTo(0.5, 0.5);
  game.deathLabel.fixedToCamera = true;
  game.deathLabel.inputEnabled = true;
  game.deathLabel.events.onInputUp.add(function () {
      console.log("hit");
      // this.paused = true;
      // // Then add the menu
      // menu = this.add.sprite(w/2, h/2, 'menu');
      // menu.anchor.setTo(0.5, 0.5);
      //
      // // And a label to illustrate which menu item was chosen. (This is not necessary)
      // choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
      // choiseLabel.anchor.setTo(0.5, 0.5);
  });
}

function updateDeathLabel(game) {
  game.deathCount++;
  game.deathLabel.setText("Death Count: " + game.deathCount);
}

function updateGameKeys(game) {
  // game.physics.arcade.TILE_BIAS = 40;
  game.player.body.velocity.x = 0;
  let testHit = game.physics.arcade.collide(game.player, game.layer);

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

Euphoria.Game.prototype = {
  create: function() {
    createGamePhysics(this);
    createBackgroundParallax(this);
    createGameSprites(this);
    createDeathLabel(this);
    createGameKeys(this);
  },

  update: function() {
    updateGameKeys(this);
    updateBackgroundParallax(this);
  },

  render: function() {
    // DEBUGGING
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  },

  quitGame: function() {
    this.state.start('MainMenu');
  },

  playerDeath: function() {
    //TODO: play death animation
    this.retryLabel = this.add.text(this.camera.width / 2, this.camera.height / 2 - 100, 'Press \'Spacebar\' to reset', {font: '30px Arial', fill: '#fff'});
    this.retryLabel.anchor.setTo(0.5, 0.5);
    this.retryLabel.fixedToCamera = true;
    this.player.alive = false;
    updateDeathLabel(this);
    this.retryKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.retryKey.onDown.add(function() {
      this.player.kill();
      // console.log("spacebar clicked and we're dead");
      this.state.restart();
    }, this);
  }
};
