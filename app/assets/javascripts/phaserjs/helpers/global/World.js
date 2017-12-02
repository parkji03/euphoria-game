var WORLD = {
  // World
  width: 1920,
  height: 1080,
  scale: 1.5,
  bg_scale: 3.34,
  gravity: 2000,

  // Background
  grass_bg_1: null,
  grass_bg_2: null,
  grass_bg_3: null,

  // Map
  map: null,
  worldLayer: null,
  spikeLayer: null,
  mobBlockLayer: null,
  spikeID: 46,

  // Cloud (Moving Platform)
  clouds: null,

  createClouds: function(game) {
    this.clouds = game.add.group();

    var cloud1 = new CloudPlatform(game, 400, 400, 'cloud_platform', this.clouds);
    cloud1.addMotionPath([
      { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+300", ySpeed: 2000, yEase: "Sine.easeIn" },
      { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-300", ySpeed: 2000, yEase: "Sine.easeOut" }
    ]);
  },

  enablePhysics: function(game) {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = this.gravity;
    game.physics.arcade.checkCollision.down = false;
  },

  createBackground: function(game) {
    this.grass_bg_1 = game.add.tileSprite(0, 0, this.width, this.height, 'grass_bg_1');
    this.grass_bg_1.scale.setTo(this.bg_scale);
    this.grass_bg_2 = game.add.tileSprite(0, 0, this.width, this.height, 'grass_bg_2');
    this.grass_bg_2.scale.setTo(this.bg_scale);
    this.grass_bg_3 = game.add.tileSprite(0, 0, this.width, this.height, 'grass_bg_3');
    this.grass_bg_3.scale.setTo(this.bg_scale);
  },

  updateBackground: function(game) {
    this.grass_bg_1.x = game.camera.x * 0.10;
    this.grass_bg_2.x = game.camera.x * 0.05;
    this.grass_bg_3.x = game.camera.x * 0.02;
  },

  update: function(game) {
    this.updateBackground(game);
  },
};
