Euphoria.World1 = function(game) {
  this.game = game;
}

Euphoria.World1.prototype = {
  create: function() {
    if (!MUSIC.world1Theme.isPlaying) {
      MUSIC.world1Theme.play();
    }

    // World
    WORLD1.create(this);

    // Interaction
    WORLD1_INTERACTION.create(this);

    // Mobs
    MOB.create(this);

    // Player
    PLAYER.create(this, 10, 614);

    // UI
    UI.create(this);
    WORLD1.dispatchUI(this);

  },

  update: function() {
    PLAYER.update(this);
    MOB.update(this);
    WORLD.update(this);
    UI.update(this);
    WORLD1.update(this);
    WORLD1_INTERACTION.update(this);
  },

  render: function() {
    // this.game.debug.text(this.game.time.fps || '--', 10, 100, "#00ff00");
    // this.game.debug.spriteInfo(PLAYER.sprite, 10, 116);
  }
};
