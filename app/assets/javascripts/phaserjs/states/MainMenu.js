Euphoria.MainMenu = function(game) {
  this.menu_jg_1 = null;
  this.menu_jg_2 = null;
  this.menu_jg_3 = null;
  this.menu_jg_4 = null;
  this.menu_jg_5 = null;
  
  this.mainTitle = null;
  this.backgroundTitle = null;
  // this.music = null;

};

Euphoria.MainMenu.prototype = {
  create: function(game) {

    // Set the background
    let p_width = 1280;
    let p_height = 800;
    let p_scale = 3.34;
    game.menu_jg_1 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_1')
    game.menu_jg_1.scale.setTo(p_scale, p_scale);
    game.menu_jg_2 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_2')
    game.menu_jg_2.scale.setTo(p_scale, p_scale);
    game.menu_jg_3 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_3')
    game.menu_jg_3.scale.setTo(p_scale, p_scale);
    game.menu_jg_4 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_4')
    game.menu_jg_4.scale.setTo(p_scale, p_scale);
    game.menu_jg_5 = game.add.tileSprite(0, 0, p_width, p_height, 'jg_5')
    game.menu_jg_5.scale.setTo(p_scale, p_scale);

    //play button
    this.createButton(game, "Play", game.world.centerX, game.world.centerY + 32, 300, 100,
      function() {
        this.state.start('Game');
      });

    //random button
    this.createButton(game, "About", game.world.centerX, game.world.centerY + 192, 300, 100,
      function() {
        console.log("Clicked About");
      });

    //title screen
    mainTitle = game.add.sprite(game.world.centerX, game.world.centerY - 192, 'titlescreen');
    mainTitle.anchor.setTo(0.5, 0.5);

    //background
  },

  update: function(game) {
    // Move background
    game.menu_jg_2.x -= 0.05;
    game.menu_jg_3.x -= 0.09;
    game.menu_jg_4.x -= 0.13;
    game.menu_jg_5.x -= 0.16;
  },

  createButton: function(game, string, x, y, w, h, callback) {
    var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

    button1.anchor.setTo(0.5, 0.5);
    button1.width = w;
    button1.height = h;

    var txt = game.add.text(button1.x, button1.y, string, {
      font: "14px Arial",
      fill: "#fff",
      align: "center"
    });
    txt.anchor.setTo(0.5, 0.5);
  }
  // create: function () {
  //
  // 		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
  // 		//	Here all we're doing is playing some music and adding a picture and button
  // 		//	Naturally I expect you to do something significantly better :)
  //
  // 		this.music = this.add.audio('titleMusic');
  // 		this.music.play();
  //
  // 		this.add.sprite(0, 0, 'titlepage');
  //
  // 		this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
  //
  // 	},
  //
  // 	update: function () {
  //
  // 		//	Do some nice funky main menu effect here
  //
  // 	},
  //
  // 	startGame: function (pointer) {
  //
  // 		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
  // 		this.music.stop();
  //
  // 		//	And start the actual game
  // 		this.state.start('Game');
  //
  // 	}
};
