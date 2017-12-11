var WORLD2 = {
  width: 0,
  height: 0,

  bgClouds: null,
  bgCastle: null,
  bg1: null,
  bg2: null,
  bg3: null,

  createSigns: function(game) {

  },

  createDoors: function(game) {

  },

  createClouds: function(game) {

  },

  createBackground: function(game) {

  },

  updateBackground: function(game){

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
