Euphoria.Game = function(game) {
  //add variables here
  this.layer = null;
};



Euphoria.Game.prototype = {
  create: function() {
    this.stage.backgroundColor = '#3A5963'
    this.add.sprite(0, 0, 'sky');

    // var map = this.add.tilemap('map_testmap');
    // map.addTilesetImage('tileset_grass', 'tileset_grass');
    // this.layer = map.createLayer('Tile Layer 1');



    //The entire game goes in here
  },

  update: function() {
    //The entire game goes in here
  },

  quitGame: function() {
    this.state.start('MainMenu');
  }
};