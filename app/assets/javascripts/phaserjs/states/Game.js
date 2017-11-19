//NOTE: with scale, horizontal tile count = 80
//NOTE: with scale, height tile count = 45

Euphoria.Game = function(game) {

  // Game assets
  this.game = game;
  this.canvasWidth = 1280;
  this.canvasHeight = 800;
  this.gameGravity = 2000;
  this.playerVelocity = 600;
  this.playerJump = -700;
  this.hardScale = 1.5;

  // Tile assets
  this.spike_id = 46;

  // World assets
  this.jg_1 = null;
  this.jg_2 = null;
  this.jg_3 = null;
  this.jg_4 = null;
  this.jg_5 = null;
  this.map = null;
  this.worldLayer = null;
  this.mobBlockLayer = null;

  // Player assets
  this.player = null;

  // Interaction assets
  this.retryKey = null;
  this.retryLabel = null;
  this.deathCount = 0;
  this.deathLabel = null;

  // Keyboard assets
  this.upKey = null;
  this.leftKey = null;
  this.rightKey = null;

  // Mob assets
  this.mobs = null;
  this.testMob = null;
};

var mob_direction = 1;

Euphoria.Game.prototype = {
  create: function() {

    createGameWorld(this);
    createMob(this);
    createPlayer(this);

    createDeathLabel(this);
    createGameKeys(this);
  },

  update: function() {
    updatePlayerMovement(this);
    updateMobMovement(this);


    // this.physics.arcade.collide(this.testMob, this.mobBlockLayer);
    // if(this.physics.arcade.collide(this.player, this.world)) {
    //   console.log("hey");
    // }
    // }

    if (this.physics.arcade.collide(this.testMob, this.mobBlockLayer)) {
      mob_direction *= -1;
      console.log('hey');
    }

    this.testMob.body.velocity.x = mob_direction * 300;

    if (this.testMob.body.velocity.x > 0) {
      this.testMob.animations.play('right-charge');
    }
    else if (this.testMob.body.velocity.x < 0) {
      this.testMob.animations.play('left-charge');
    }
    else {
      this.testMob.animations.play('right-idle');
    }




    updateBackgroundParallax(this);
  },

  render: function() {
    // DEBUGGING
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    // this.game.debug.cameraInfo(this.game.camera, 32, 32);
    this.game.debug.spriteInfo(this.player, 32, 32);
  }

  // quitGame: function() {
  //   this.state.start('MainMenu');
  // }
};
