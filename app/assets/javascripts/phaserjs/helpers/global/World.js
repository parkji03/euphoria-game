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
  collectibles: null,

  createCollectible: function(game, x, y, group) {
    var collectible = group.create(x, y, 'collectible');
    collectible.scale.setTo(WORLD.scale);
    game.physics.arcade.enable(collectible);
    collectible.body.allowGravity = false;
    collectible.body.immovable = true;
    collectible.animations.add('default', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);

    collectible.origin = collectible.position.y;
    collectible.floatSpeed = (Math.floor(Math.random() * 7) + 1) / 10.0;
    var initDirection = Math.floor(Math.random() * 2);
    if (initDirection === 1) {
      collectible.floatDirection = 1;
    }
    else {
      collectible.floatDirection = -1;
    }
  },

  enableCollectibleCollision: function(game) {
    game.physics.arcade.overlap(PLAYER.sprite, this.collectibles, function(player, collectible) {
      collectible.kill();
      UI.scoreCount++;
      UI.scoreText.text = UI.scoreCount.pad(3);

      if (UI.happyBarProgress.width + UI.happyBarTenth > UI.happyBarProgressLength) {
        UI.happyBarProgress.width = UI.happyBarProgressLength;
      }
      else {
        UI.happyBarProgress.width += UI.happyBarTenth;
      }
    }, null, game);
  },

  updateCollectibleMovement: function(game) {
    this.collectibles.forEach(function(collectible) {
      collectible.animations.play('default');

      if (collectible.position.y < collectible.origin - 7) {
        collectible.floatDirection = 1;
      }
      else if (collectible.position.y > collectible.origin + 7) {
        collectible.floatDirection = -1;
      }

      collectible.position.y += collectible.floatDirection * collectible.floatSpeed;
    }, game);
  },

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

  enableSpikeCollision: function(game) {
    this.map.setTileIndexCallback(this.spikeID, function(sprite) {
      if (sprite.key === 'phori') {
        PLAYER.death(game);
      }
    }, game, WORLD.worldLayer);
  },

  update: function(game) {
    // Update
  },
};