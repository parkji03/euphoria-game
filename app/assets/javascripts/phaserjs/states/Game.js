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
};

function createGamePhysics(game) {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = game.gameGravity;
  // Let player fall below the world
  game.physics.arcade.checkCollision.down = false
}

function createGameSprites(game) {
  game.stage.backgroundColor = '#3A5963'

  // Create the world map
  game.map = game.add.tilemap('map_testmap');
  game.map.addTilesetImage('grass', 'grass');
  game.map.addTilesetImage('spike', 'spike');
  game.map.setCollision([0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 28, 30, 31])
  game.layer = game.map.createLayer('Tile Layer 1');
  game.layer.setScale(game.hardScale);
  game.layer.resizeWorld();

  // Create the player sprite
  game.player = game.add.sprite(32, game.world.height - 400, 'dude');
  game.player.scale.setTo(game.hardScale, game.hardScale);
  game.player.animations.add('left', [0, 1, 2, 3], 10, true);
  game.player.animations.add('right', [5, 6, 7, 8], 10, true);
  game.physics.arcade.enable(game.player);
  // this.player.body.bounce.y = 0.2;
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
  game.physics.arcade.TILE_BIAS = 60;
  game.player.body.velocity.x = 0;
  let testHit = game.physics.arcade.collide(game.player, game.layer);

  if (game.leftKey.isDown && game.player.alive) {
      game.player.body.velocity.x = -1 * game.playerVelocity;
      game.player.animations.play('left');
  }
  else if (game.rightKey.isDown && game.player.alive) {
      game.player.body.velocity.x = game.playerVelocity;
      game.player.animations.play('right');
  }
  else {
      game.player.animations.stop();
      game.player.frame = 4;
  }

  //NOTE: change this for production
  // if (game.upKey.isDown && game.player.alive && testHit)
  if (game.upKey.isDown && game.player.alive) {
      game.player.body.velocity.y = game.playerJump;
  }
}

Euphoria.Game.prototype = {
  create: function() {
    createGamePhysics(this);
    createGameSprites(this);
    createDeathLabel(this);
    createGameKeys(this);
  },

  update: function() {
    updateGameKeys(this);
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
      // console.log("spacebar clicked and we're dead");
      this.state.restart();
    }, this);
  }
};
