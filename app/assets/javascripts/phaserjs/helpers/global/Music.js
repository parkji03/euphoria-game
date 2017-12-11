var MUSIC = {
  jump: null,
  click: null,
  collect: null,
  hit: null,

  mainMenuTheme: null,
  worldChooserTheme: null,
  world1Theme: null,

  muteAll: function(game) {
    // game.sound.mute = true;
  },

  create: function(game) {
    if (this.jump == null) {
      this.jump = game.add.audio('jump', 0.6, false);
    }

    if (this.click == null) {
      this.click = game.add.audio('click', 1, false);
    }

    if (this.collect == null) {
      this.collect = game.add.audio('collect', 0.4, false);
    }

    if (this.hit == null) {
      this.hit = game.add.audio('hit', 0.6, false);
    }

    if (this.mainMenuTheme == null) {
      this.mainMenuTheme = game.add.audio('bit_quest', 0.5, true);
    }
    if (this.worldChooserTheme == null) {
      this.worldChooserTheme = game.add.audio('silly_fun', 0.5, true);
    }
    if (this.world1Theme == null) {
      this.world1Theme = game.add.audio('theme', 0.3, true);
    }
  },

  update: function(game) {

  },

  destroy: function(game) {

  },
};
