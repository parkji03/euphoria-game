Euphoria.Preloader = function(game) {
  // this.preloadBar = null;
};

Euphoria.Preloader.prototype = {
  preload: function() {
    //Display FPS
    this.time.advancedTiming = true;


    //TODO: load all the assets here


    // this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    // this.preloadBar.anchor.setTo(0.5, 0.5);
    // this.time.advancedTiming = true;
    // this.load.setPreloadSprite(this.preloadBar);
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);


    this.load.spritesheet('player', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);
    this.load.image('jg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_1.png')
    this.load.image('jg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_2.png')
    this.load.image('jg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png')
    this.load.image('jg_4', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png')
    this.load.image('jg_5', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png')

    this.load.spritesheet('dino-red', 'assets/phaser_assets/sprites/dino-red.png', 24, 24);
    this.load.spritesheet('dino-blue', 'assets/phaser_assets/sprites/dino-blue.png', 24, 24);
    this.load.spritesheet('dino-yellow', 'assets/phaser_assets/sprites/dino-yellow.png', 24, 24);
    this.load.spritesheet('dino-green', 'assets/phaser_assets/sprites/dino-green.png', 24, 24);








    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png')
    this.load.image('titlescreen', 'assets/phaser_assets/logos/title.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

    this.load.tilemap('map_testmap', 'assets/phaser_assets/maps/map_testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('grass', 'assets/phaser_assets/tiles/grass.png');
    this.load.image('spike', 'assets/phaser_assets/tiles/test_spike.png');
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
