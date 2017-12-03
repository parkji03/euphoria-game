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

  clouds: null,

  // NOTE: up-down, or side-to-side only
  addCloudMotion: function(game, cloud, positionX, positionY, speed, type1, type2, offsetX, offsetY) {
    cloud.tweenX = game.add.tween(cloud).to( {
      x: positionX
    }, speed, type1);

    cloud.rTweenX = game.add.tween(cloud).to( {
      x: positionX - offsetX
    }, speed, type2);

    cloud.tweenY = game.add.tween(cloud).to( {
      y: positionY
    }, speed, type1);

    cloud.rTweenY = game.add.tween(cloud).to( {
      y: positionY - offsetY
    }, speed, type2);

    cloud.tweenX.start();
    cloud.tweenY.start();

    cloud.tweenX.onComplete.add(function() {
      cloud.rTweenX.start();
    }, game);

    cloud.rTweenX.onComplete.add(function() {
      cloud.tweenX.start();
    }, game);

    cloud.tweenY.onComplete.add(function() {
      cloud.rTweenY.start();
    }, game);

    cloud.rTweenY.onComplete.add(function() {
      cloud.tweenY.start();
    }, game);
  },

  // Cloud (Moving Platform)
  createCloud: function(game, x, y, group) {
    var cloud = group.create(x, y, 'cloud_platform');
    cloud.scale.setTo(0.3);
    cloud.anchor.setTo(0.5);
    game.physics.arcade.enable(cloud);
    cloud.body.allowGravity = false;
    cloud.body.immovable = true;
    return cloud;
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
