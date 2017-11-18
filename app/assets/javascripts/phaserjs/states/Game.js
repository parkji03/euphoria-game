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

  // World assets
  this.jg_1 = null;
  this.jg_2 = null;
  this.jg_3 = null;
  this.jg_4 = null;
  this.jg_5 = null;
  this.map = null;
  this.layer = null;

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
    updateBackgroundParallax(this);
  },

  render: function() {
    // DEBUGGING
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  }

  // quitGame: function() {
  //   this.state.start('MainMenu');
  // }
};
