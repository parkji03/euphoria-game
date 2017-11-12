Euphoria.Preloader = function(game) {
  // this.preloadBar = null;
};

Euphoria.Preloader.prototype = {
  preload: function() {

    //TODO: load all the assets here


    // this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    // this.preloadBar.anchor.setTo(0.5, 0.5);
    // this.time.advancedTiming = true;
    // this.load.setPreloadSprite(this.preloadBar);
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    this.load.image('titlescreen', 'assets/phaser_assets/backgrounds/baddie.png')
    this.load.image('button', 'assets/phaser_assets/buttons/baddie.png')



    //LOAD ALL ASSETS
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
