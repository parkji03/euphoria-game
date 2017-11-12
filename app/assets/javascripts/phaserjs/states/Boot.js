var Euphoria = {};

Euphoria.Boot = function(game) {

};

Euphoria.Boot.prototype = {
  init: function() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop) {
      //desktop settings
      // this.scale.pageAlignHorizontally = true;
    }
    else {
      //mobile settings
      // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      // this.scale.setMinMax(480, 260, 1024, 768);
      // this.scale.forceLandscape = true;
      // this.scale.pageAlignHorizontally = true;
    }
  },

  preload: function() {
    //LOAD PRELOADER LOADING BAR HERE
    // this.load.image('preloaderBar', 'assets/dude.png');
  },

  create: function() {
    this.state.start('Preloader');
  }
}
