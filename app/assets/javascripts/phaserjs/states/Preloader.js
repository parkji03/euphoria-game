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

    // Background parallax
    this.load.image('jg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_1.png');
    this.load.image('jg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_2.png');
    this.load.image('jg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png');
    this.load.image('jg_4', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png');
    this.load.image('jg_5', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png');
    // this.load.image('cloud', 'assets/star.png');

    // Game sprites
    this.load.spritesheet('player', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);
    this.load.spritesheet('dino_red', 'assets/phaser_assets/sprites/dinos/dino_red.png', 18, 18);
    this.load.spritesheet('dino_blue', 'assets/phaser_assets/sprites/dinos/dino_blue.png', 18, 18);
    this.load.spritesheet('dino_yellow', 'assets/phaser_assets/sprites/dinos/dino_yellow.png', 18, 18);
    this.load.spritesheet('dino_green', 'assets/phaser_assets/sprites/dinos/dino_green.png', 18, 18);

    this.load.image('player_food', 'assets/phaser_assets/sprites/food/food_34.png');
    this.load.spritesheet('coin', 'assets/phaser_assets/sprites/coin.png', 18, 18);

    // Title screen
    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

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
