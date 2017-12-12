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

  honeycombs: null,

  signs: null,
  doors: null,

  createPointer: function(game, door) {
    var pointer = game.add.sprite(door.position.x + 43, door.position.y - 80, 'pointer');
    pointer.scale.setTo(1.5);
    pointer.animations.add('point', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 24, true);
    pointer.animations.play('point');
    pointer.visible = false;
    return pointer;
  },

  createDoor: function(game, x, y, toState, locked) {
    var door = this.doors.create(x, y, 'door');
    door.scale.setTo(3);
    door.body.allowGravity = false;
    door.animations.add('open', [0, 1, 2, 3, 4], 5, true).onComplete.add(function() {
      // console.log(door.startState);
      // TODO: Do something when door opens
    });
    door.animations.frame = 0;
    door.state = toState;
    door.locked = locked;
  },

  updateDoorCollision: function(game) {
    game.physics.arcade.overlap(PLAYER.sprite, WORLD.doors, function(player, door) {
      if (door.animations.currentAnim.frame === 4) {
        game.time.events.add(500, function() {
          MUSIC.worldChooserTheme.stop();
          // MUSIC.world1Theme.stop();
          game.state.start(door.state);
        });
      }
      else {
        if (door.locked) {
          UI.showBottomOverlay("This door is locked.");
        }
        else {
          // Door is unlocked... so player can press E to travel to world
          UI.showBottomOverlay("Press E to open the door.");
          if (PLAYER.keyE.isDown) {
            PLAYER.stop = true;
            PLAYER.sprite.animations.play('idle');
            door.animations.play('open', 8, false);
          }
        }
      }
    }, null, game);
  },

  createSign: function(game, x, y, group, text) {
    var sign = group.create(x, y, 'sign');
    sign.scale.setTo(1.2);
    sign.body.allowGravity = false;
    sign.signText = text;
    // sign.signColor = color;
    // sign.signMin = min;
    // sign.signMax = max;
  },

  updateSignCollision: function(game) {
    game.physics.arcade.overlap(PLAYER.sprite, this.signs, function(player, sign) {
      UI.showBottomOverlay(sign.signText);
    }, null, game);
  },

  createHoneycomb: function(game, x, y, group) {
    var honeycomb = group.create(x, y, 'honeycomb');
    honeycomb.scale.setTo(2);
    game.physics.arcade.enable(honeycomb);
    honeycomb.body.allowGravity = false;
    honeycomb.body.immovable = true;

    honeycomb.origin = honeycomb.position.y;
    honeycomb.floatSpeed = (Math.floor(Math.random() * 4) + 1) / 10.0;
    var initDirection = Math.floor(Math.random() * 2);
    if (initDirection === 1) {
      honeycomb.floatDirection = 1;
    }
    else {
      honeycomb.floatDirection = -1;
    }
  },

  updateHoneycombMovement: function(game) {
    this.honeycombs.forEach(function(honeycomb) {
      if (honeycomb.position.y < honeycomb.origin - 7) {
        honeycomb.floatDirection = 1;
      }
      else if (honeycomb.position.y > honeycomb.origin + 7) {
        honeycomb.floatDirection = -1;
      }
      honeycomb.position.y += honeycomb.floatDirection * honeycomb.floatSpeed;
    }, game);
  },

  enableHoneycombCollision: function(game) {
    game.physics.arcade.overlap(PLAYER.sprite, this.honeycombs, function(player, honeycomb) {
      MUSIC.collect.play();
      honeycomb.kill();
      UI.scoreCount++;
      UI.scoreText.text = UI.scoreCount.pad(3);
      UI.happyBarProgress.width = UI.happyBarProgressLength;
    }, null, game);
  },

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
      // UI.scoreCount++;
      // UI.scoreText.text = UI.scoreCount.pad(3);

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
    this.map.setTileIndexCallback(46, function(sprite) {
      if (sprite.key === 'barry') {
        PLAYER.death(game);
      }
    }, game, WORLD.worldLayer);

    this.map.setTileIndexCallback(47, function(sprite) {
      if (sprite.key === 'barry') {
        PLAYER.death(game);
      }
    }, game, WORLD.worldLayer);

    this.map.setTileIndexCallback(48, function(sprite) {
      if (sprite.key === 'barry') {
        PLAYER.death(game);
      }
    }, game, WORLD.worldLayer);

    this.map.setTileIndexCallback(49, function(sprite) {
      if (sprite.key === 'barry') {
        PLAYER.death(game);
      }
    }, game, WORLD.worldLayer);
  },

  update: function(game) {
    // Update
  },
};
