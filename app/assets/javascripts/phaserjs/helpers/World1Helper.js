var WORLD1 = {
  // NOTE: these need to match the size of the tilemap
  width: 5760,
  height: 1100,

  createSigns: function(game) {
    WORLD.signs = game.add.group();
    WORLD.signs.enableBody = true;

    WORLD.createSign(game, 100, 622, WORLD.signs, "Keep your eye on the Sweet-o-Meter!");
    WORLD.createSign(game, 2417, 334, WORLD.signs, "BEWARE OF FALLING GUMMY BEARS!");

    // WORLD.createSign(game, 295, 526, WORLD.signs, "Collect honeycombs to refresh the Sweet-o-Meter.")
  },

  createDoors: function(game) {
    WORLD.doors = game.add.group();
    WORLD.doors.enableBody = true;

    WORLD.createDoor(game, 5377, 475, 'World2', false);
  },

  createClouds: function(game) {
    WORLD.clouds = game.add.group();
    var cloud1 = WORLD.createCloud(game, 820, 1080, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud1, 820, 1080, 3000, "Sine.easeIn", "Sine.easeOut", 0, 510);
    var cloud2 = WORLD.createCloud(game, 2650, 200, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud2, 2650, 200, 3000, "Sine.easeOut", "Sine.easeIn", -500, 0);
    var cloud3 = WORLD.createCloud(game, 3350, 200, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud3, 3350, 200, 3000, "Sine.easeIn", "Sine.easeOut", -500, 0);
  },

  bgClouds: null,
  bgCastle: null,
  bg1: null,
  bg2: null,
  bg3: null,

  createBackground: function(game) {
    this.bg1 = game.add.tileSprite(0, 0, WORLD1.width, WORLD1.height, 'gc_1');
    this.bgClouds = game.add.tileSprite(0, 0, WORLD1.width, WORLD1. height, 'clouds');

    this.bg2 = game.add.tileSprite(0, 0, WORLD1.width, WORLD1.height, 'gc_2');
    this.bgCastle = game.add.tileSprite(4740, 350, 1920, 1080, 'gc_5');
    this.bgCastle.scale.setTo(0.4);
    this.bg3 = game.add.tileSprite(0, 0, WORLD1.width, WORLD1.height, 'gc_3');
  },

  updateBackground: function(game) {
    this.bgClouds.tilePosition.x -= 0.07
    this.bg2.x = game.camera.x * 0.07;
    this.bg3.x = game.camera.x * 0.05;
  },

  dispatchUI: function(game) {
    UI.centerText.signal.dispatch("LEVEL 1");
  },

  create: function(game) {
    this.ballTrapTriggered = false;
    WORLD.enablePhysics(game);

    // Create unique world
    this.createBackground(game);
    WORLD.map = game.add.tilemap('map_world1');
    WORLD.map.addTilesetImage('grass', 'grass');
    WORLD.map.addTilesetImage('spike', 'spike');
    WORLD.map.addTilesetImage('mob_block', 'mob_block');

    WORLD.worldLayer = WORLD.map.createLayer('Layer1');
    WORLD.worldLayer.setScale(WORLD.scale);
    WORLD.worldLayer.resizeWorld();
    // WORLD.worldLayer.tint = 0xbbcf19;

    WORLD.mobBlockLayer = WORLD.map.createLayer('Mob Block Layer');
    WORLD.mobBlockLayer.setScale(WORLD.scale);
    WORLD.mobBlockLayer.resizeWorld();

    WORLD.map.setCollisionBetween(0, 45, true, WORLD.worldLayer);
    WORLD.map.setCollision([50], true, WORLD.mobBlockLayer);
    WORLD.enableSpikeCollision(game);

    WORLD.mobBlockLayer.alpha = 0;

    this.createClouds(game);
    this.createSigns(game);
    this.createDoors(game);
  },

  update: function(game) {
    this.updateBackground(game);
    WORLD.updateDoorCollision(game);
    WORLD.updateSignCollision(game);

  },
};

var WORLD1_INTERACTION = {
  gumball: null,
  gumballTriggered: false,

  createGumball: function(game) {
    this.gumball = game.add.sprite(2000, 530, 'gumball');
    this.gumball.scale.setTo(2.25);
    game.physics.arcade.enable(this.gumball);
    this.gumball.animations.add('roll', [0, 1, 2, 3, 4, 5, 6, 7], 8, true).speed = 12;
    this.gumball.animations.play('roll');
    this.gumball.checkWorldBounds = true;
    this.gumball.events.onOutOfBounds.add(function() {
      WORLD1_INTERACTION.gumball.kill();
      MOB.gumballMachines.children[0].triggered = true;
      // MOB.gumballMachines.children[1].triggered = true;

      // WORLD1_INTERACTION.createGumball(game);
    }, game);
  },

  createCollectibles: function(game) {
    WORLD.collectibles = game.add.group();

    // Add collectibles by hand
    // WORLD.createCollectible(game, 764, 610, WORLD.collectibles);
    // WORLD.createCollectible(game, 804, 610, WORLD.collectibles);
    // WORLD.createCollectible(game, 844, 610, WORLD.collectibles);
  },

  createHoneycombs: function(game) {
    WORLD.honeycombs = game.add.group();
    // WORLD.createHoneycomb(game, 295, 526, WORLD.honeycombs);
    WORLD.createHoneycomb(game, 804, 610, WORLD.honeycombs);
    WORLD.createHoneycomb(game, 2341, 537, WORLD.honeycombs);
  },

  createGumballMachines: function(game) {
    MOB.gumballMachines = game.add.group();

    // Add gumball machines by hand
    // var m0 = MOB.createGumballMachine(game, 400, 400, MOB.gumballMachines, 'right');
    // m0.triggered = true;
    var m1 = MOB.createGumballMachine(game, 2154, 610, MOB.gumballMachines, 'left');
    // var m2 = MOB.createGumballMachine(game, 2298, 530, MOB.gumballMachines, 'left');

    // m1.triggered = true;
    // m2.triggered = true;



  },

  createGummyBears: function(game) {
    MOB.gummyBears = game.add.group();

    // GAME, X, Y, TYPE, GROUP, MOVE?, FACE_DIRECTION, DROP_BULLETS?, CLOUD_COLLIDE?
    // idle
    MOB.createGummyBear(game, 1660, 372, 'green_gummy_bear', MOB.gummyBears, false, 'left', false, true);
    MOB.createGummyBear(game, 1610, 372, 'yellow_gummy_bear', MOB.gummyBears, false, 'right', false, true);

    // Moving
    MOB.createGummyBear(game, 550, 410, 'red_gummy_bear', MOB.gummyBears, true, null, false, true);

    // FALLING
    MOB.createGummyBear(game, 3167, 200, 'yellow_gummy_bear', MOB.gummyBears, true, null, false, false);
    MOB.createGummyBear(game, 3430, 200, 'green_gummy_bear', MOB.gummyBears, true, null, false, false);

    //2607
    //3020

    // On cloud
    MOB.createGummyBear(game, 2649, 130, 'orange_gummy_bear', MOB.gummyBears, false, 'left', true, true);
    MOB.createGummyBear(game, 3349, 130, 'blue_gummy_bear', MOB.gummyBears, false, 'left', true, true);

  },

  create: function(game) {
    this.gumballTriggered = false;
    this.createGumball(game);
    this.createHoneycombs(game);
    this.createCollectibles(game);
    this.createGumballMachines(game);
    this.createGummyBears(game);

  },

  update: function(game) {

    if (PLAYER.sprite.body.position.x > 1300 && !this.gumballTriggered) {
      game.physics.arcade.enable(this.gumball);
      this.gumball.body.velocity.x = -700;
      this.gumballTriggered = true;
    }

    if (this.gumball) {
      game.physics.arcade.collide(this.gumball, WORLD.worldLayer);
      game.physics.arcade.overlap(PLAYER.sprite, this.gumball, function(player, gumball) {
        PLAYER.death(game);
      }, null, game);
    }

    WORLD.updateHoneycombMovement(game);
    WORLD.enableHoneycombCollision(game);
    WORLD.updateCollectibleMovement(game);
    WORLD.enableCollectibleCollision(game);
  },
};
