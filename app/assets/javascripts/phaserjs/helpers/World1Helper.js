var WORLD1 = {
  createClouds: function(game) {
    WORLD.clouds = game.add.group();
    var cloud1 = WORLD.createCloud(game, 820, 1100, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud1, 820, 1100, 3000, "Sine.easeIn", "Sine.easeOut", 0, 500);
  },

  dispatchUI: function(game) {
    UI.centerText.signal.dispatch("LEVEL 1");
  },

  create: function(game) {
    this.ballTrapTriggered = false;
    WORLD.enablePhysics(game);
    WORLD.createBackground(game);
    WORLD.map = game.add.tilemap('map_world1');
    WORLD.map.addTilesetImage('grass', 'grass');
    WORLD.map.addTilesetImage('spike', 'spike');
    WORLD.map.addTilesetImage('mob_block', 'mob_block');

    WORLD.worldLayer = WORLD.map.createLayer('Layer1');
    WORLD.worldLayer.setScale(WORLD.scale);
    WORLD.worldLayer.resizeWorld();

    WORLD.mobBlockLayer = WORLD.map.createLayer('Mob Block Layer');
    WORLD.mobBlockLayer.setScale(WORLD.scale);
    WORLD.mobBlockLayer.resizeWorld();

    WORLD.map.setCollisionBetween(0, 45, true, WORLD.worldLayer);
    WORLD.map.setCollision([47], true, WORLD.mobBlockLayer);
    WORLD.enableSpikeCollision(game);

    WORLD.mobBlockLayer.alpha = .5;

    // Test
    this.createClouds(game);
  },

  update: function(game) {
    // if (!this.ballTrapTriggered && PLAYER.sprite.body.position.x > 1150) {
    //   CANVAS.shakeCanvas(game, 10, 100, 4, 1000);
    //   this.ballTrapTriggered = true;
    // }
  },
};

var WORLD1_INTERACTION = {
  gumballTriggered: false,
  gumball: null,

  createGumball: function(game) {
    this.gumball = game.add.sprite(2000, 530, 'gumball');
    this.gumball.scale.setTo(2.25);
    game.physics.arcade.enable(this.gumball);
    this.gumball.animations.add('roll', [0, 1, 2, 3, 4, 5, 6, 7], 8, true).speed = 12;
    this.gumball.animations.play('roll');
    this.gumball.checkWorldBounds = true;
    this.gumball.events.onOutOfBounds.add(function() {
      WORLD1_INTERACTION.gumball.kill();
      // WORLD1_INTERACTION.createGumball(game);
    }, game);
  },

  create: function(game) {
    this.gumballTriggered = false;
    this.createGumball(game);
  },

  update: function(game) {
    if (PLAYER.sprite.body.position.x > 1150 && !this.gumballTriggered) {
      game.physics.arcade.enable(this.gumball);
      this.gumball.body.velocity.x = -650;
      this.gumballTriggered = true;
    }

    if (this.gumball) {
      game.physics.arcade.collide(this.gumball, WORLD.worldLayer);
      game.physics.arcade.overlap(PLAYER.sprite, this.gumball, function(player, gumball) {
        PLAYER.death(game);
      }, null, game);
    }

  },
};
