function createGamePhysics(game) {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = game.gameGravity;
  // Let player fall below the world
  game.physics.arcade.checkCollision.down = false
}

function createBackgroundParallax(game) {
  let p_width = 1920;
  let p_height = 1080;
  let p_scale = 5;

  game.jg_1 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_1')
  game.jg_1.scale.setTo(p_scale, p_scale);
  game.jg_2 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_2')
  game.jg_2.scale.setTo(p_scale, p_scale);
  game.jg_3 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_3')
  game.jg_3.scale.setTo(p_scale, p_scale);
  game.jg_4 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_4')
  game.jg_4.scale.setTo(p_scale, p_scale);
  game.jg_5 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_5')
  game.jg_5.scale.setTo(p_scale, p_scale);
}

function createGameWorld(game) {
  createGamePhysics(game);
  createBackgroundParallax(game);

  // Create the world map
  game.map = game.add.tilemap('map_testmap');
  game.map.addTilesetImage('grass', 'grass');
  game.map.addTilesetImage('spike', 'spike');
  game.map.addTilesetImage('mob_block', 'mob_block');

  game.worldLayer = game.map.createLayer('World Layer');
  game.worldLayer.setScale(game.hardScale);
  game.worldLayer.resizeWorld();



  game.mobBlockLayer = game.map.createLayer('Mob Block Layer');
  game.mobBlockLayer.setScale(game.hardScale);
  game.mobBlockLayer.resizeWorld();

  game.map.setCollision([0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 28, 30, 31], true, game.worldLayer);
  game.map.setCollision([47], true, game.mobBlockLayer);

  //NOTE: this will hide or display the Mob Block Layer
  game.mobBlockLayer.alpha = 0;
}

function updateBackgroundParallax(game) {
  game.jg_2.x = game.camera.x * 0.01;
  game.jg_3.x = game.camera.x * 0.02;
  game.jg_4.x = game.camera.x * 0.05;
  game.jg_5.x = game.camera.x * 0.10;
}
