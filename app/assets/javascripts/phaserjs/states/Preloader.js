Euphoria.Preloader = function(game) {
  this.preloadLogo = null;
  this.preloadBar = null;

};

Euphoria.Preloader.prototype = {
  preload: function() {
    // Preload bar and logo image
    this.preloadLogo = this.add.sprite(this.world.centerX, this.world.centerY - 192, 'logo');
    this.preloadLogo.anchor.setTo(0.5);
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 128, 'preload_bar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    // Maps
    this.load.tilemap('map_worldchooser', 'assets/phaser_assets/maps/world_chooser.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('map_world1', 'assets/phaser_assets/maps/world1.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.tilemap('map_world2', 'assets/phaser_assets/maps/world2.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.tilemap('map_world3', 'assets/phaser_assets/maps/world3.json', null, Phaser.Tilemap.TILED_JSON);

    // Background
    this.load.image('grass_bg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png');
    this.load.image('grass_bg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png');
    this.load.image('grass_bg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png');

    // Sprites
    this.load.spritesheet('phori', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);

    // UI
    this.load.image('overlay', 'assets/phaser_assets/temp/overlay.png');




    // Temp
    this.load.image('wooden_sign', 'assets/phaser_assets/temp/wooden_sign.png');
    this.load.spritesheet('door', 'assets/phaser_assets/temp/door_39x50.png', 39, 50);
    this.load.spritesheet('pointer', 'assets/phaser_assets/temp/pointer.png', 20, 48);
    this.load.image('cloud_platform', 'assets/phaser_assets/temp/cloud_platform.png');
    this.load.spritesheet('gumball', 'assets/phaser_assets/temp/gumball.png', 64, 64);


















    // Background parallax
    this.load.image('jg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_1.png');
    this.load.image('jg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_2.png');
    this.load.image('jg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png');
    this.load.image('jg_4', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png');
    this.load.image('jg_5', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png');

    this.load.spritesheet('player', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);
    this.load.spritesheet('dino_red', 'assets/phaser_assets/sprites/dinos/dino_red.png', 18, 18);
    this.load.spritesheet('dino_blue', 'assets/phaser_assets/sprites/dinos/dino_blue.png', 18, 18);
    this.load.spritesheet('dino_yellow', 'assets/phaser_assets/sprites/dinos/dino_yellow.png', 18, 18);
    this.load.spritesheet('dino_green', 'assets/phaser_assets/sprites/dinos/dino_green.png', 18, 18);

    this.load.image('player_food', 'assets/phaser_assets/sprites/food/food_34.png');
    this.load.spritesheet('coin', 'assets/phaser_assets/sprites/coin.png', 18, 18);

    // Intro screen
    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

    this.load.tilemap('main_menu_map', 'assets/phaser_assets/maps/main_menu_map.json', null, Phaser.Tilemap.TILED_JSON);


    // World
    this.load.tilemap('map_testmap', 'assets/phaser_assets/maps/map_testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('grass', 'assets/phaser_assets/tiles/grass.png');
    this.load.image('spike', 'assets/phaser_assets/tiles/spike.png');
    this.load.image('mob_block', 'assets/phaser_assets/tiles/mob_block.png');

    // User interface
    this.load.image('happy_bar_outline', 'assets/phaser_assets/user_interface/happy_bar_outline.png');
    this.load.image('happy_bar_progress', 'assets/phaser_assets/user_interface/happy_bar_progress.png');

    // Interactions
    this.load.spritesheet('emoticons', 'assets/phaser_assets/interactions/emoticons.png', 16, 16);

    // Title screen
    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png');
    this.load.image('titlescreen', 'assets/phaser_assets/logos/title.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

    // World
    this.load.tilemap('map_testmap', 'assets/phaser_assets/maps/map_testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('grass', 'assets/phaser_assets/tiles/grass.png');
    this.load.image('spike', 'assets/phaser_assets/tiles/spike.png');
    this.load.image('mob_block', 'assets/phaser_assets/tiles/mob_block.png');
  },

  create: function() {
    this.state.start('MainMenu');
  },

  update: function () {
  //	You don't actually need to do this, but I find it gives a much smoother game experience.
  //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
  //	You can jump right into the menu if you want and still play the music, but you'll have a few
  //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
  //	it's best to wait for it to decode here first, then carry on.

  //	If you don't have any music in your game then put the game.state.start line into the create function and delete
  //	the update function completely.

  // if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
  // {
  //   this.ready = true;
  //   this.state.start('MainMenu');
  // }
  }
};
