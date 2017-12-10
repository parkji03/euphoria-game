var PLAYER = {
  // Values
  velocity: 420,
  jump: -700,
  alive: true,
  direction: 'right',
  stop: false,

  // Sprite
  sprite: null,
  emote: null,
  deathEmote: null,

  // Keyboard
  keyW: null,
  keyA: null,
  keyD: null,
  keyE: null,
  keySpaceBar: null,

  createGameKeys: function(game) {
    this.keyW = game.input.keyboard.addKey(Phaser.KeyCode.W);
    this.keyA = game.input.keyboard.addKey(Phaser.KeyCode.A);
    this.keyD = game.input.keyboard.addKey(Phaser.KeyCode.D);
    this.keyE = game.input.keyboard.addKey(Phaser.KeyCode.E);
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
    else {
      this.emote.animations.play('angry', 8, false);
    }

    this.emote.signal = new Phaser.Signal();
    this.emote.signal.add(function(animation) {
      PLAYER.emote.visible = true;
      PLAYER.emote.animations.play(animation, 8, false);
    }, game);
  },

  create: function(game, x, y) {
    this.createGameKeys(game);
    this.stop = false;
    // Create sprite
    this.alive = true;
    this.sprite = game.add.sprite(x, y, 'barry');
    this.sprite.scale.setTo(WORLD.scale);
    // this.sprite.body.maxVelocity = new Phaser.Point(500, 500);
    // this.sprite.tint = 0x444444;

    // Add animations
    this.sprite.animations.add('left-fall', [35, 34], 47, true).speed = 10;
    this.sprite.animations.add('left-jump', [33, 32], 47, true).speed = 10;
    this.sprite.animations.add('right-run', [12, 13, 14, 15, 16, 17, 18, 19], 47, true).speed = 13;
    this.sprite.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 47, true).speed = 13;
    this.sprite.animations.add('left-run', [27, 26, 25, 24, 23, 22, 21, 20], 47, true).speed = 13;
    this.sprite.animations.add('right-jump', [28, 29], 47, true).speed = 10;
    this.sprite.animations.add('right-fall', [30, 31], 47, true).speed = 10;
    this.sprite.animations.add('death', [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 47, true).speed = 13;

    // Camera movement
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_PLATFORMER);

    // Out of world bounds listener
    this.sprite.checkWorldBounds = true;
    this.sprite.events.onOutOfBounds.add(function() {
      PLAYER.death(game);
    }, game);

    this.createEmote(game);

    this.deathEmote = game.add.sprite(this.sprite.position.x, this.sprite.position.y - 30, 'emoticons');
    this.deathEmote.scale.setTo(3);
    this.deathEmote.animations.add('empty-skull', [72, 73, 74], 78, true).speed = 2;
    this.deathEmote.animations.play('empty-skull');
    this.deathEmote.visible = false;
  },

  update: function(game) {
    game.physics.arcade.TILE_BIAS = 40;

    // Collision
    this.sprite.body.velocity.x = 0;
    var isHittingLayer = game.physics.arcade.collide(this.sprite, WORLD.worldLayer);
    var onCloud = game.physics.arcade.collide(PLAYER.sprite, WORLD.clouds, function(player, platform) {
      if (player.body.touching.down) {
        // Make player position follow platform deltaX and Y
        player.body.position.x = player.body.position.x + platform.deltaX;
        player.body.position.y = player.body.position.y + platform.deltaY;
      }
    });
    var standing = this.sprite.body.touching.down && onCloud || this.sprite.body.onFloor();

    // Left and right animations
    if (!UI.menuTriggered && !this.stop) {
      if (this.keyA.isDown && this.alive) {
        this.sprite.body.velocity.x = -1 * this.velocity;
        this.sprite.animations.play('left-run');
      }
      else if (this.keyD.isDown && this.alive) {
        this.sprite.body.velocity.x = this.velocity;
        this.sprite.animations.play('right-run');
      }
      else {
        if (this.alive) {
          this.sprite.animations.play('idle');
        }
      }

      // Jump animations
      // NOTE: change this for production/development
      // if (PLAYER.keyW.isDown && PLAYER.alive) {
      if (this.keyW.isDown && this.alive && standing) {
        this.sprite.body.velocity.y = this.jump;
        game.sound.play('jump');
        if (this.sprite.body.velocity.y > 0) {
          this.sprite.animations.play('right-jump');
        }
        else {
          this.sprite.animations.play('left-jump');
        }
      }

      // Falling animations
      if (this.sprite.body.velocity.y > 0) {
        if (this.alive) {

          if (this.sprite.body.velocity.x < 0) {
            this.sprite.animations.play('left-fall');
          }
          else {
            this.sprite.animations.play('right-fall');
          }
        }
      }
    }

    // Emote
    this.emote.position.x = this.sprite.position.x;
    this.emote.position.y = this.sprite.position.y - 23;

    this.deathEmote.position.x = this.sprite.position.x;
    this.deathEmote.position.y = this.sprite.position.y - 30;
  },

  death: function(game) {
    if (PLAYER.alive) {
      UI.deathRetryText.visible = true;
      PLAYER.alive = false;

      UI.updateDeathCount();

      //emote
      this.deathEmote.visible = true;
      PLAYER.sprite.animations.play('death', 13, false);

      PLAYER.keySpaceBar.onDown.add(function() {
        if (!UI.menuTriggered) {
          PLAYER.sprite.kill();
          game.state.restart();
        }
      }, game);
    }
  },
};
