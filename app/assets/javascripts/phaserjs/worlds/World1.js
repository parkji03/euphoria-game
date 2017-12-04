Euphoria.World1 = function(game) {
  this.game = game;
}

Euphoria.World1.prototype = {
  create: function() {
    // World
    WORLD1.create(this);

    // Interaction
    WORLD1_INTERACTION.create(this);

    // Mobs

    // Player
    PLAYER.create(this, 10, 614);

    // UI
    UI.create(this);
    WORLD1.dispatchUI(this);
    // 
    // var temp = this.add.sprite(400, 400, 'gumball_machine');
    // temp.scale.setTo(3);
    // temp.animations.add('shoot', [0, 1, 1, 2, 2, 3, 0, 0, 0], 4, true).speed = 8;
    // temp.animations.play('shoot');
  },

  update: function() {
    PLAYER.update(this);
    WORLD.update(this);
    UI.update(this);
    WORLD1.update(this);
    WORLD1_INTERACTION.update(this);
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 1260, 14, "#00ff00");
    this.game.debug.spriteInfo(PLAYER.sprite, 800, 32);
  }
};
