var WORLD_CHOOSER = {
  create: function(game) {
    WORLD.enablePhysics(game);
    WORLD.createBackground(game);
    WORLD.map = game.add.tilemap('map_worldchooser');
    WORLD.map.addTilesetImage('grass', 'grass');
    WORLD.worldLayer = WORLD.map.createLayer('Layer1');
    WORLD.worldLayer.setScale(WORLD.scale);
    WORLD.worldLayer.resizeWorld();
    WORLD.map.setCollisionBetween(0, 31, true, WORLD.worldLayer);
  }
};
