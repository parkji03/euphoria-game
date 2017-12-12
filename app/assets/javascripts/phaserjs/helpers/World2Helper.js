var WORLD2 = {
  width: 4080,
  height: 1100,

  bgClouds: null,
  bgCastle: null,
  bg1: null,
  bg2: null,
  bg3: null,

  createSigns: function(game) {
    WORLD.signs = game.add.group();
    WORLD.signs.enableBody = true;
    WORLD.createSign(game, 1880, 623, WORLD.signs, "Don't Fall!");
  },

  createPointers: function(game) {
    WORLD.doors.children[0].pointer = WORLD.createPointer(game, WORLD.doors.children[0]);
    WORLD.doors.children[0].pointer.visible = true;
  },

  createDoors: function(game) {
    WORLD.doors = game.add.group();
    WORLD.doors.enableBody = true;

    // WORLD.createDoor(game, 3846, 475, 'World3', true);
    WORLD.createDoor(game, 230, 284, 'World3', false);
    // console.log(WORLD.doors.children)

  },

  createClouds: function(game) {
    WORLD.clouds = game.add.group();
    var cloud1 = WORLD.createCloud(game, 950, 700, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud1, 950, 700, 3000, "Sine.easeIn", "Sine.easeOut", 470, 0);
    var cloud2 = WORLD.createCloud(game, 1270, 700, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud2, 1270, 700, 3000, "Sine.easeIn", "Sine.easeOut", -470, 0);

    var cloud3 = WORLD.createCloud(game, 1740, 200, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud3, 1740, 200, 6000, "Sine.easeIn", "Sine.easeOut", 1270, 0);

    var cloud4 = WORLD.createCloud(game, 1740, 412, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud4, 1740, 412, 3000, "Sine.easeIn", "Sine.easeOut", 470, 0);

    var cloud5 = WORLD.createCloud(game, 480, 412, WORLD.clouds);
    WORLD.addCloudMotion(game, cloud5, 480, 412, 3000, "Sine.easeIn", "Sine.easeOut", -470, 0);

  },

  createBackground: function(game) {
    this.bg1 = game.add.tileSprite(0, 0, WORLD2.width, WORLD2.height, 'gc_1');
    this.bgClouds = game.add.tileSprite(0, 0, WORLD2.width, WORLD2.height, 'clouds')
    this.bg2 = game.add.tileSprite(0, 0, WORLD2.width, WORLD2.height, 'gc_2');
  },

  updateBackground: function(game){
    this.bgClouds.tilePosition.x -= 0.08
    this.bg2.x = game.camera.x * 0.05
  },

  create: function(game) {
    // Unlock door for World Chooser
    WORLD_CHOOSER.door2Locked = false;
    WORLD.enablePhysics(game);

    this.createBackground(game);
    WORLD.map = game.add.tilemap('map_world2');
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
    WORLD.map.setCollision([50], true, WORLD.mobBlockLayer);
    WORLD.enableSpikeCollision(game);

    WORLD.mobBlockLayer.alpha = 0;

    this.createClouds(game);
    this.createSigns(game);
    this.createDoors(game);
    this.createPointers(game);
  },

  update: function(game) {
    this.updateBackground(game);
    WORLD.updateDoorCollision(game);
    WORLD.updateSignCollision(game);
  },

  dispatchUI: function(game) {
    UI.centerText.signal.dispatch("LEVEL 2");
  },
};

var WORLD2_INTERACTION = {
  // trollGummyBearTriggered: false,

  // createTrollGummyBear: function(game) {
  //   MOB.createGummyBear(game, 300, 50, 'red_gummy_bear', MOB.gummyBears, false, 'left', false, true);
  // },

  createHoneycombs: function(game) {
    WORLD.honeycombs = game.add.group();
    WORLD.createHoneycomb(game, 2071, 627, WORLD.honeycombs);

  },

  createGumballMachines: function(game) {
    MOB.gumballMachines = game.add.group();
    MOB.createGumballMachine(game, 2050, 626, MOB.gumballMachines, 'left', false);


    // 2nd part
    MOB.createGumballMachine(game, 3486, 458, MOB.gumballMachines, 'left', false);
    MOB.createGumballMachine(game, 3486, 266, MOB.gumballMachines, 'left', false);
    MOB.createGumballMachine(game, 1876, 386, MOB.gumballMachines, 'right', false);
    MOB.createGumballMachine(game, 1876, 217, MOB.gumballMachines, 'right', false);
    // MOB.createGumballMachine(game, 1514, 506, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1719, 506, MOB.gumballMachines, 'left', true);

    // MOB.createGumballMachine(game, 1650, 50, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1650, 146, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1650, 242, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1650, 338, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1650, 434, MOB.gumballMachines, 'right', true);
    // MOB.createGumballMachine(game, 1650, 530, MOB.gumballMachines, 'right', true);

    MOB.gumballMachines.children[0].triggered = true;
    MOB.gumballMachines.children[1].triggered = true;
    MOB.gumballMachines.children[2].triggered = true;
    MOB.gumballMachines.children[3].triggered = true;
    MOB.gumballMachines.children[4].triggered = true;
    // MOB.gumballMachines.children[5].triggered = true;
    // MOB.gumballMachines.children[6].triggered = true;
    // MOB.gumballMachines.children[7].triggered = true;
    // MOB.gumballMachines.children[8].triggered = true;
    // MOB.gumballMachines.children[9].triggered = true;
    // MOB.gumballMachines.children[10].triggered = true;
    // MOB.gumballMachines.children[11].triggered = true;


  },

  createGummyBears: function(game) {
    MOB.gummyBears = game.add.group();

    // Idle
    MOB.createGummyBear(game, 100, 100, 'green_gummy_bear', MOB.gummyBears, false, 'left', false, true);
    // MOB.createGummyBear(game, 157, -600, 'red_gummy_bear', MOB.gummyBears, false, 'left', false, true);
    MOB.createGummyBear(game, 3566, 540, 'red_gummy_bear', MOB.gummyBears, false, 'left', false, true);

    // Moving
    MOB.createGummyBear(game, 2988, 560, 'green_gummy_bear', MOB.gummyBears, true, null, false, true);
    // MOB.createGummyBear(game, 2226, 560, 'yellow_gummy_bear', MOB.gummyBears, true, null, false, true);

    // On cloud shooting
    MOB.createGummyBear(game, 1739, 130, 'orange_gummy_bear', MOB.gummyBears, false, 'left', true, true);

    // Falling
    // MOB.createGummyBear(game, 1000, 200, 'blue_gummy_bear', MOB.gummyBears, true, null, false, false);
    MOB.createGummyBear(game, 1080, 200, 'yellow_gummy_bear', MOB.gummyBears, true, null, false, false);

  },

  create: function(game) {
    // this.trollGummyBearTriggered = false;
    this.createHoneycombs(game);
    this.createGumballMachines(game);
    this.createGummyBears(game);
  },

  update: function(game) {
    // if (!this.trollGummyBearTriggered && PLAYER.sprite.body.position.y < 612) {
    //   this.createTrollGummyBear(game);
    //   this.trollGummyBearTriggered = true;
    // }
    WORLD.updateHoneycombMovement(game);
    WORLD.enableHoneycombCollision(game);

  }
};
