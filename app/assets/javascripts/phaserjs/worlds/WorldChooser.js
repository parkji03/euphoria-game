Euphoria.WorldChooser = function(game) {
  this.game = game;
}

Euphoria.WorldChooser.prototype = {
  create: function() {
    // this.sound.play('theme');
    // World
    WORLD_CHOOSER.create(this);

    // Mobs
    // MOB.create(this)

    // Player
    PLAYER.create(this, 10, 600);

    // UI
    UI.create(this);
  },

  update: function() {
    PLAYER.update(this);
    WORLD.update(this);
    UI.update(this);
    WORLD_CHOOSER.update(this);
  },

  render: function() {
    // this.game.debug.text(this.game.time.fps || '--', 1260, 14, "#00ff00");
    // // this.game.debug.cameraInfo(this.game.camera, 32, 32);
    // this.game.debug.spriteInfo(PLAYER.sprite, 800, 32);
  }
};
