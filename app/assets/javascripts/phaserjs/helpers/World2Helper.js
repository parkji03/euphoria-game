var WORLD2 = {
  width: 4080,
  height: 1100,

  bgClouds: null,
  bgCastle: null,
  bg1: null,
  bg2: null,
  bg3: null,

  createSigns: function(game) {

  },

  createDoors: function(game) {
    WORLD.doors = game.add.group();
    WORLD.doors.enableBody = true;

    WORLD.createDoor(game, 3846, 475, 'World3', false);
  },

  createClouds: function(game) {

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
  },

  update: function(game) {
    this.updateBackground(game);
    WORLD.updateDoorCollision(game);
    WORLD.updateSignCollision(game);
  },
};

var WORLD2_INTERACTION = {
  createHoneycombs: function(game) {

  },

  createGumballMachines: function(game) {

  },

  createGummyBears: function(game) {

  },

  create: function(game) {

  },

  update: function(game) {

  }
};
