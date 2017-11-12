Euphoria.Game = function(game) {
  //add variables here

};

Euphoria.Game.prototype = {
  create: function() {
    this.stage.backgroundColor = '#3A5963'
    this.add.sprite(0, 0, 'sky');
    //The entire game goes in here
  },

  update: function() {
    //The entire game goes in here
  },

  quitGame: function() {
    this.state.start('MainMenu');
  }
};
