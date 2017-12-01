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
  mobBlockLayer: null,
  spikeID: 46,

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

var UI = {
  // Style
  fontStyle1: { font: "14px 8bit_wonder", fill: "#FFF" },
  fontStyle2: { font: "20px 8bit_wonder", fill: "#FFF" },
  fontStyle3: { font: "24px 8bit_wonder", fill: "#FFF" },
  fontStyle4: { font: "28px 8bit_wonder", fill: "#FFF" },

  // Labels
  deathCounterText: null,
  deathCount: 0,

  deathRetryText: null,
  deathRetryBackground: null,

  scoreText: null,
  scoreCount: 0,

  // Happy bar
  happyBarProgress: null,
  happyBarOutline: null,
  happyBarProgressLength: null,
  happyBarTenth: null,
  happyBarHundredth: null,
  halfTriggered: false,

  createDeathRetryText: function(game) {
    var deathRetryTextStyle = { font: '30px 8bit_wonder',
                                fill: '#CCC',
                                align: 'center',
                                // wordWrap: true,
                                // wordWrapWidth: 450,
                                stroke: '#000000',
                                strokeThickness: 6
                              };
    this.deathRetryText = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Press Spacebar to reset', deathRetryTextStyle);
    this.deathRetryText.anchor.setTo(0.5);
    this.deathRetryText.fixedToCamera = true;
    this.deathRetryText.addColor('#FFF', 6);
    this.deathRetryText.addColor('#CCC', 15);
    var deathRetryTextPointer = this.deathRetryText;
    var minScale = 0.9;
    var maxScale = 1.2;
    var def = 1;
    var direction = 1;
    game.time.events.loop(10, function() {
      // j += 0.1;
      if (def > maxScale) {
        direction = -1;
      }
      else if (def < minScale) {
        direction = 1;
      }
      def += direction * 0.005
      deathRetryTextPointer.scale.setTo(def);
    }, game);
    this.deathRetryText.visible = false;
  },

  create: function(game) {
    // #################
    // ##  Happy bar  ##
    // #################
    // Happy bar progress
    this.happyBarProgress = game.add.image(16, 16, 'happy_bar_progress');
    this.happyBarProgress.scale.setTo(WORLD.scale);
    this.happyBarProgress.fixedToCamera = true;
    this.happyBarProgressLength = this.happyBarProgress.width;
    this.happyBarTenth = this.happyBarProgressLength / 10;
    this.happyBarHundredth = this.happyBarTenth / 10;
    var happyBarProgressPointer = this.happyBarProgress;
    var happyBarTenthPointer = this.happyBarTenth;
    var happyBarHundredthPointer = this.happyBarHundredth;
    // Happy bar outline
    this.happyBarOutline = game.add.image(16, 16, 'happy_bar_outline');
    this.happyBarOutline.scale.setTo(WORLD.scale);
    this.happyBarOutline.fixedToCamera = true;
    // Happy bar ticker
    game.time.events.loop(500, function() {
      if (happyBarProgressPointer.width > 0) {
        happyBarProgressPointer.width = Math.floor(happyBarProgressPointer.width - happyBarHundredthPointer);
      }
      if (happyBarProgressPointer.width < 0) { // Capped at min width
        happyBarProgressPointer.width = 0;
      }
    }, game);

    // ##############
    // ##  Labels  ##
    // ##############
    // Death counter
    this.deathCounterText = game.add.text(345, 16, 'Death Count: ' + this.deathCount, this.fontStyle1);
    this.deathCounterText.fixedToCamera = true;
    // Death retry
    this.createDeathRetryText(game);
    // Score
    this.scoreText = game.add.text(345, 40, 'Score: ' + this.scoreCount, this.fontStyle1);
    this.scoreText.fixedToCamera = true;

  },

  update: function(game) {
    // Happy bar trigger
    if (this.happyBarProgress.width < this.happyBarProgressLength / 2 && !this.halfTriggered) {
      console.log("half way triggered");
      this.halfTriggered = true;
    }
    // Reset trigger
    if (this.happyBarProgress.width > (this.happyBarProgressLength / 2)) {
      this.halfTriggered = false;
    }
  },

  updateDeathCount: function() {
    this.deathCount++;
    this.deathCounterText.setText('Death Count: ' + this.deathCount);
  },
};

var CANVAS = {
  // Canvas
  width: 1280,
  height: 800,
};

var PLAYER = {
  // Values
  velocity: 600,
  jump: -700,
  alive: true,

  // Sprite
  sprite: null,
  emote: null,

  // Keyboard
  keyW: null,
  keyA: null,
  keyD: null,
  keySpaceBar: null,

  createGameKeys: function(game) {
    this.keyW = game.input.keyboard.addKey(Phaser.KeyCode.W);
    this.keyA = game.input.keyboard.addKey(Phaser.KeyCode.A);
    this.keyD = game.input.keyboard.addKey(Phaser.KeyCode.D);
    this.keySpaceBar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  },

  createEmote: function(game) {
    this.emote = game.add.sprite(10, 10, 'emoticons');
    this.emote.scale.setTo(WORLD.scale);
    var emotePointer = this.emote;

    emotePointer.animations.add('exclamation', [47, 46, 45, 44, 0, 1, 2, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('question', [47, 46, 45, 44, 3, 4, 5, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-exclamation', [6, 7, 8], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-question', [9, 10, 11], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('sweat', [47, 46, 45, 44, 12, 13, 14, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('heart', [47, 46, 45, 44, 15, 16, 17, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('dotdotdot', [47, 46, 45, 44, 18, 18, 19, 19, 20, 20, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('music', [47, 46, 45, 44, 21, 22, 23, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('zzz', [47, 46, 45, 44, 24, 25, 26, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('scramble', [47, 46, 45, 44, 27, 28, 29, 28, 27, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('blush', [47, 46, 45, 44, 30, 31, 32, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('light-bulb', [47, 46, 45, 44, 33, 34, 35, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('skull', [47, 46, 45, 44, 36, 37, 38, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('angry', [47, 46, 45, 44, 39, 40, 41, 40, 39, 45, 46], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-sweat', [48, 49, 50], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-heart', [51, 52, 53], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-dotdotdot', [54, 55, 56], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-music', [57, 58, 59], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-zzz', [60, 61, 62], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-scramble', [63, 64, 65], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-blush', [66, 67, 68], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-lightbulb', [69, 70, 71], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-skull', [72, 73, 74], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });
    emotePointer.animations.add('empty-angry', [75, 76, 77], 78, true).onComplete.add(function() {
      emotePointer.visible = false;
    });

    if (UI.deathCount < 5) {
      this.emote.animations.play('exclamation', 8, false);
    }
    else if (UI.deathCount < 10) {
      this.emote.animations.play('sweat', 8, false);
    }
    else if (UI.deathCount < 15) {
      this.emote.animations.play('dotdotdot', 8, false);
    }
    else if (UI.deathCount < 20) {
      this.emote.animations.play('angry', 8, false);
    }
  },

  create: function(game, x, y) {
    this.createGameKeys(game);
    // Create sprite
    this.alive = true;
    this.sprite = game.add.sprite(x, y, 'phori');
    this.sprite.scale.setTo(WORLD.scale);

    // Add animations
    this.sprite.animations.add('left-fall', [1, 0], 36, true).speed = 10;
    this.sprite.animations.add('left-jump', [3, 2], 36, true).speed = 10;
    this.sprite.animations.add('left-run', [11, 10, 9, 8, 7, 6, 5, 4], 36, true).speed = 13;
    this.sprite.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
    this.sprite.animations.add('right-run', [24, 25, 26, 27, 28, 29, 30, 31], 36, true).speed = 13;
    this.sprite.animations.add('right-jump', [32, 33], 36, true).speed = 10;
    this.sprite.animations.add('right-fall', [34, 35], 36, true).speed = 10;

    // Camera movement
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_PLATFORMER);

    // Out of world bounds listener
    this.sprite.checkWorldBounds = true;
    this.sprite.events.onOutOfBounds.add(function() {
      playerDeath(game);
    }, game);

    this.createEmote(game);
  },

  update: function(game) {
    // Collision
    this.sprite.body.velocity.x = 0;
    var isHittingLayer = game.physics.arcade.collide(this.sprite, WORLD.worldLayer);

    // Left and right animations
    if (this.keyA.isDown && this.alive) {
      this.sprite.body.velocity.x = -1 * this.velocity;
      this.sprite.animations.play('left-run');
    }
    else if (this.keyD.isDown && this.alive) {
      this.sprite.body.velocity.x = this.velocity;
      this.sprite.animations.play('right-run');
    }
    else {
      this.sprite.animations.play('idle');
    }

    // Jump animations
    // NOTE: change this for production/development
    // if (PLAYER.keyW.isDown && PLAYER.alive) {
    if (this.keyW.isDown && this.alive && isHittingLayer && this.sprite.body.onFloor()) {
      this.sprite.body.velocity.y = this.jump;
      if (this.sprite.body.velocity.y > 0) {
        this.sprite.animations.play('right-jump');
      }
      else {
        this.sprite.animations.play('left-jump');
      }
    }

    // Falling animations
    if (this.sprite.body.velocity.y > 0) {
      if (this.sprite.body.velocity.x < 0) {
        this.sprite.animations.play('left-fall');
      }
      else {
        this.sprite.animations.play('right-fall');
      }
    }

    // Emote
    this.emote.position.x = this.sprite.position.x;
    this.emote.position.y = this.sprite.position.y - 18;
  },
};

function playerDeath(game) {
  if (PLAYER.alive) {
    UI.deathRetryText.visible = true;
    PLAYER.alive = false;

    UI.updateDeathCount();
    //emote
    PLAYER.keySpaceBar.onDown.add(function() {
      PLAYER.sprite.kill();
      game.state.restart();
    }, game);
  }
}
