Euphoria.World2 = function(game) {

}

Euphoria.World2.prototype = {
  create: function() {

    // World
    WORLD2.create(this);

    // Interaction
    // WORLD2_INTERACTION.create(this);

    // Mobs

    // Player
    PLAYER.create(this, 10, 614);

    // UI
    UI.create(this);
  },

  update: function() {
    PLAYER.update(this);
    MOB.update(this);
    WORLD.update(this);
    UI.update(this);
    WORLD2.update(this);
    WORLD2_INTERACTION.update(this);
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 10, 100, "#00ff00");
    this.game.debug.spriteInfo(PLAYER.sprite, 10, 116);
  }
};
