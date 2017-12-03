Euphoria.World1 = function(game) {
  this.game = game;
}

Euphoria.World1.prototype = {
  create: function() {
    // World
    WORLD1.create(this);

    // Mobs

    // Player
    PLAYER.create(this, 10, 614);

    // UI
    UI.create(this);
    WORLD1.dispatchUI(this);
  },

  update: function() {
    PLAYER.update(this);
    WORLD.update(this);
    UI.update(this);
    WORLD1.update(this);
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 1260, 14, "#00ff00");
    this.game.debug.spriteInfo(PLAYER.sprite, 800, 32);
  }
};
