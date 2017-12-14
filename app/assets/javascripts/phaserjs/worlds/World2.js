Euphoria.World2 = function(game) {

}

Euphoria.World2.prototype = {
  create: function() {
    if (!MUSIC.world1Theme.isPlaying) {
      MUSIC.world1Theme.play();
    }

    // World
    WORLD2.create(this);

    // Interaction
    WORLD2_INTERACTION.create(this);

    // Mobs
    MOB.create(this);

    // Player
    PLAYER.create(this, 10, 614);
    // PLAYER.create(this, 2800, 100);

    // UI
    UI.create(this);
    WORLD2.dispatchUI(this);
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
    // this.game.debug.text(this.game.time.fps || '--', 10, 100, "#00ff00");
    // this.game.debug.spriteInfo(PLAYER.sprite, 10, 116);
  }
};
