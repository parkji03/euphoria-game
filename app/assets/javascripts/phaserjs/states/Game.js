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

  // Background assets
  this.jg_1 = null;
  this.jg_2 = null;
  this.jg_3 = null;
  this.jg_4 = null;
  this.jg_5 = null;

  // World assets
  this.map = null;
  this.worldLayer = null;
  this.mobBlockLayer = null;

  // Player assets
  this.player = null;
  this.playerEmote = null;

  // Mob assets
  this.greenDinoVelocity = 200;
  this.greenDinoGroup = null;

  // Interaction assets
  this.retryKey = null;
  this.retryLabel = null;
  this.deathCount = 0;
  this.deathLabel = null;

  this.coinGroup = null;

  // User interface assets
  this.fontStyle = { font: "14px 8bit_wonder", fill: "#FFF" };
  this.coinText = null;
  this.coinCount = 0;

  this.happyBarOutline = null;
  this.happyBarProgress = null;
  this.happyBarProgressLength = null;
  this.happyBarTenth = null;
  this.happyBarHundredth = null;
  this.happyBarEmoteSignal = null;
  this.halfTriggered = false;

  // Keyboard assets
  this.upKey = null;
  this.leftKey = null;
  this.rightKey = null;
};

Euphoria.Game.prototype = {
  create: function() {

    // Create the world
    createGameWorld(this);

    // Create mobs
    createGreenDinoGroup(this);
    createCoinGroup(this);

    // Create player
    createPlayer(this);

    // Create interaction
    createGameKeys(this);
    createPlayerEmote(this);

    //Create user interface
    createDeathLabel(this);
    createHappyBar(this);
    createCoinText(this);
  },

  update: function() {
    // Player
    updatePlayerMovement(this);

    // Mobs
    updateGreenDinoGroupMovement(this);
    updateCoinMovement(this);

    // Background
    updateBackgroundParallax(this);

    // Interaction
    updatePlayerEmote(this);
    happyBarEmoteTriggers(this);

    // User interface
    // updateHappyBar(this);
  },

  render: function() {
    // DEBUGGING
    this.game.debug.text(this.game.time.fps || '--', 1260, 14, "#00ff00");
    // this.game.debug.cameraInfo(this.game.camera, 32, 32);
    this.game.debug.spriteInfo(this.player, 800, 32);

  }

  // quitGame: function() {
  //   this.state.start('MainMenu');
  // }
};
