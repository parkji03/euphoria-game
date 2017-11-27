var Euphoria = {};

Euphoria.Boot = function(game) {

};

Euphoria.Boot.prototype = {
  init: function() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;

    //Display FPS
    this.time.advancedTiming = true;

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
    this.load.image('logo', 'assets/phaser_assets/logos/logo.png');
    this.load.image('preload_bar', 'assets/phaser_assets/user_interface/preload_bar.png');

  },

  create: function() {
    this.add.text(0, 0, "hack", {font: "1px 8bit_wonder", fill: "#FFFFFF" });
    // this.add.text(0, 0, "hack", {font: "1px 8bit_wonder", fill: "#FFFFFF" });


    this.state.start('Preloader');
  }
}
