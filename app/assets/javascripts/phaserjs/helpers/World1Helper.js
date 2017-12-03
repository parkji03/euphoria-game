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

    WORLD.mobBlockLayer.alpha = .5;

    // Test
    this.createClouds(game);
  },

  update: function(game) {
  },
};
