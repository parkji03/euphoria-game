Euphoria.MainMenu = function(game) {
  // Background parallax
  this.menu_jg_1 = null;
  this.menu_jg_2 = null;
  this.menu_jg_3 = null;
  this.menu_jg_4 = null;
  this.menu_jg_5 = null;

  this.menu_plain_1 = null;
  this.menu_plain_2 = null;
  this.menu_plain_3 = null;

  this.gc_1 = null;
  this.gc_2 = null;
  this.gc_3 = null;
  this.gc_4 = null;
  this.gc_5 = null;
  this.gc_6 = null;
  this.gc_7 = null;



  this.cloud_1 = null;
  this.cloud_2 = null;

  // Logo
  this.logo = null;

  // Main menu tilemap and layer
  this.mainMenuMap = null;
  this.mainMenuLayer = null;

  // Main menu sprites
  this.mainMenuCharacter = null;
  this.mainMenuCharEmote = null;
  this.mainMenuMobs = null;
  this.dinoEmote = null;

  this.topLeftSprite = null;
  this.topLeftEmote = null;
  this.topRightSprite = null;
  this.topRightEmote = null;
  this.bottomLeftSprite = null;
  this.bottomRightSprite = null;

  // this.music = null;


};

// function moveMobs(game) {
  // game.mainMenuMobs.forEach(function(dino) {
  //   dino
  // }, game);
// }

Euphoria.MainMenu.prototype = {
  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 0;
    // Let player fall below the world
    // this.physics.arcade.checkCollision.down = false
    // Set the background
    var gameHardScale = 1.5;
    var p_width = 1280;
    var p_height = 800;
    var p_scale = 3.34;
    // this.menu_jg_1 = this.add.tileSprite(0, 0, p_width, p_height, 'jg_1');
    // this.menu_jg_1.scale.setTo(p_scale, p_scale);
    // this.menu_jg_2 = this.add.tileSprite(0, 0, p_width, p_height, 'jg_2');
    // this.menu_jg_2.scale.setTo(p_scale, p_scale);
    // this.menu_jg_3 = this.add.tileSprite(0, 0, p_width, p_height, 'jg_3');
    // this.menu_jg_3.scale.setTo(p_scale, p_scale);
    // this.menu_jg_4 = this.add.tileSprite(0, 0, p_width, p_height, 'jg_4');
    // this.menu_jg_4.scale.setTo(p_scale, p_scale);
    // this.menu_jg_5 = this.add.tileSprite(0, 0, p_width, p_height, 'jg_5');
    // this.menu_jg_5.scale.setTo(p_scale, p_scale);

    // this.menu_plain_1 = this.add.tileSprite(0, -800, 2474, 2000, 'plain_1');
    // // this.menu_plain_1.scale.setTo(0.8);
    // this.menu_plain_2 = this.add.tileSprite(0, -800, 2474, 2000, 'plain_2');
    // // this.menu_plain_2.scale.setTo(0.518, 0.4);
    //
    // this.menu_plain_3 = this.add.tileSprite(0, -1000, 2474, 2000, 'plain_3');
    // this.menu_plain_3.scale.setTo(0.518, 0.4);

    this.gc_1 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_1');
    this.gc_2 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_2');
    this.gc_3 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_3');
    this.gc_4 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_4');
    this.gc_5 = this.add.tileSprite(280, 30, 1920, 1080, 'gc_5');
    this.gc_6 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_6');
    this.gc_7 = this.add.tileSprite(0, 0, 1920, 1080, 'gc_7');

    this.gc_1.scale.setTo(0.667);
    this.gc_2.scale.setTo(0.667);
    this.gc_3.scale.setTo(0.667);
    this.gc_4.scale.setTo(0.667);
    this.gc_5.scale.setTo(0.667);
    this.gc_6.scale.setTo(0.667);
    this.gc_7.scale.setTo(0.667);

    //   this.grass_bg_1.x = game.camera.x * 0.10;
    //   this.grass_bg_2.x = game.camera.x * 0.05;
    //   this.grass_bg_3.x = game.camera.x * 0.02;








    // Map and Layer
    this.mainMenuMap = this.add.tilemap('main_menu_map');
    this.mainMenuMap.addTilesetImage('grass', 'grass');

    this.mainMenuLayer = this.mainMenuMap.createLayer('Tile Layer 1');
    this.mainMenuLayer.setScale(gameHardScale);
    this.mainMenuLayer.resizeWorld();

    this.mainMenuMap.setCollision([0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 28, 30, 31], true, this.mainMenuLayer);

    // var logoShadow = this.add.sprite(this.world.centerX + 7, this.world.centerY - 185, 'logo');
    // // logoShadow.scale.setTo(1.05);
    // logoShadow.anchor.setTo(0.5);
    // logoShadow.tint = 0x000000;
    // logoShadow.alpha = 0.6;

    // Logo
    this.logo = this.add.sprite(this.world.centerX, this.world.centerY - 192, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);


    // this.add.tween(logoShadow).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true)
    this.add.tween(this.logo).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);

    // Play button
    // this.createButton(this, "Play", this.world.centerX, this.world.centerY + 38, 270, 98,
    //   function() {
    //     this.state.start('WorldChooser');
    //   }
    // );

    // Create sprites
    this.mainMenuMobs = this.add.group();

    var tempMob2 = this.mainMenuMobs.create(-490, 638, 'dino_red');
    tempMob2.scale.setTo(2);
    this.physics.arcade.enable(tempMob2);
    tempMob2.animations.add('left-charge', [5, 4, 3, 2, 1, 0], 48, true).speed = 15;
    tempMob2.animations.add('right-charge', [42, 43, 44, 45, 46, 47], 48, true).speed = 15;
    tempMob2.moveDirection = 1;
    tempMob2.moveLeftBound = -300;
    tempMob2.moveRightBound = 1700;
    tempMob2.moveSpeed = 3;
    tempMob2.animations.play('right-charge');

    var tempMob1 = this.mainMenuMobs.create(-450, 638, 'dino_blue');
    tempMob1.scale.setTo(2);
    this.physics.arcade.enable(tempMob1);
    tempMob1.animations.add('left-charge', [5, 4, 3, 2, 1, 0], 48, true).speed = 15;
    tempMob1.animations.add('right-charge', [42, 43, 44, 45, 46, 47], 48, true).speed = 15;
    tempMob1.moveDirection = 1;
    tempMob1.moveLeftBound = -300;
    tempMob1.moveRightBound = 1700;
    tempMob1.moveSpeed = 3;
    tempMob1.animations.play('right-charge');

    var tempMob3 = this.mainMenuMobs.create(-530, 638, 'dino_green');
    tempMob3.scale.setTo(2);
    this.physics.arcade.enable(tempMob3);
    tempMob3.animations.add('left-charge', [5, 4, 3, 2, 1, 0], 48, true).speed = 15;
    tempMob3.animations.add('right-charge', [42, 43, 44, 45, 46, 47], 48, true).speed = 15;
    tempMob3.moveDirection = 1;
    tempMob3.moveLeftBound = -300;
    tempMob3.moveRightBound = 1700;
    tempMob3.moveSpeed = 3;
    tempMob3.animations.play('right-charge');

    var tempMob4 = this.mainMenuMobs.create(-200, 638, 'dino_yellow');
    tempMob4.scale.setTo(2);
    this.physics.arcade.enable(tempMob4);
    tempMob4.animations.add('left-charge', [19, 18, 17, 16, 15, 14], 48, true).speed = 8;
    tempMob4.animations.add('right-charge', [28, 29, 30, 31, 32, 33], 48, true).speed = 8;
    tempMob4.moveDirection = 1;
    tempMob4.moveLeftBound = -200;
    tempMob4.moveRightBound = 1400;
    tempMob4.moveSpeed = 1.5;
    tempMob4.animations.play('right-charge');

    this.dinoEmote = this.add.sprite(0, 0, 'emoticons');
    this.dinoEmote.scale.setTo(gameHardScale);
    // this.dinoEmote.animations.add('dotdotdot', [42, 42, 18, 18, 19, 19, 20, 20], 78, true).speed = 4;
    this.dinoEmote.animations.add('dotdotdot', [3, 4, 5, 4, 5, 4], 78, true).speed = 4;
    this.dinoEmote.animations.play('dotdotdot');

    this.mainMenuCharacter = this.add.sprite(-350, 628, 'phori');
    this.mainMenuCharacter.scale.setTo(gameHardScale);
    this.physics.arcade.enable(this.mainMenuCharacter);
    this.mainMenuCharacter.animations.add('right-run', [12, 13, 14, 15, 16, 17, 18, 19], 36, true).speed = 13;
    this.mainMenuCharacter.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 36, true).speed = 13;
    this.mainMenuCharacter.animations.add('left-run', [27, 26, 25, 24, 23, 23], 36, true).speed = 13;
    this.mainMenuCharacter.moveDirection = 1;
    this.mainMenuCharacter.moveLeftBound = -300;
    this.mainMenuCharacter.moveRightBound = 1700;
    this.mainMenuCharacter.animations.play('right-run');

    this.mainMenuCharEmote = this.add.sprite(0, 0, 'emoticons');
    this.mainMenuCharEmote.scale.setTo(gameHardScale);
    this.mainMenuCharEmote.animations.add('scramble', [27, 28, 29, 28, 29], 78, true).speed = 4;
    this.mainMenuCharEmote.animations.play('scramble');

    // this.topLeftSprite = this.add.sprite(190, 207, 'player');
    // this.topLeftSprite.scale.setTo(gameHardScale);
    // this.topLeftSprite.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
    // this.topLeftSprite.animations.play('idle');
    //
    // this.topLeftEmote = this.add.sprite(190, 186, 'emoticons');
    // this.topLeftEmote.scale.setTo(gameHardScale);
    // this.topLeftEmote.animations.add('exclamation', [2, 2, 2], 78, true).speed = 4;
    // this.topLeftEmote.animations.play('exclamation');
    //
    // this.topRightSprite = this.add.sprite(1110, 207, 'player');
    // this.topRightSprite.scale.setTo(-gameHardScale, gameHardScale);
    // this.topRightSprite.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
    // this.topRightSprite.animations.play('idle');
    //
    // this.bottomLeftSprite = this.add.sprite(190, 423, 'player');
    // this.bottomLeftSprite.scale.setTo(gameHardScale);
    // this.bottomLeftSprite.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
    // this.bottomLeftSprite.animations.play('idle');
    //
    // // this.bottomRightSprite = this.add.sprite()
    // this.bottomRightSprite = this.add.sprite(1110, 423, 'player');
    // this.bottomRightSprite.scale.setTo(-gameHardScale, gameHardScale);
    // this.bottomRightSprite.animations.add('idle', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 36, true).speed = 13;
    // this.bottomRightSprite.animations.play('idle');

    UI.createBottomText(this);
    UI.showBottomOverlay('Press Enter to play.');
    this.add.tween(UI.bottomText).to( { alpha: 0 }, 1100, Phaser.Easing.Linear.None, true, 0, 500, true);

    var gamePointer = this;

    var menuEnter = this.input.keyboard.addKey(Phaser.KeyCode.ENTER);
    menuEnter.onDown.addOnce(function() {
      gamePointer.state.start('WorldChooser');
    }, this);
  },

  update: function() {
    this.physics.arcade.collide(this.mainMenuCharacter, this.mainMenuLayer);

    if (this.mainMenuCharacter.position.x > this.mainMenuCharacter.moveRightBound) {
      this.mainMenuCharacter.moveDirection = -1;
      this.mainMenuCharacter.animations.play('left-run');
    }
    else if (this.mainMenuCharacter.position.x < this.mainMenuCharacter.moveLeftBound){
      this.mainMenuCharacter.moveDirection = 1;
      this.mainMenuCharacter.animations.play('right-run');
    }
    this.mainMenuCharacter.position.x += this.mainMenuCharacter.moveDirection * 3;

    this.physics.arcade.collide(this.mainMenuMobs, this.mainMenuLayer);
    this.mainMenuMobs.forEach( function(dino) {
      if (dino.position.x > dino.moveRightBound) {
        dino.moveDirection = -1;
        dino.animations.play('left-charge');
      }
      else if (dino.position.x < dino.moveLeftBound) {
        dino.moveDirection = 1;
        dino.animations.play('right-charge');
      }

      dino.position.x += dino.moveDirection * dino.moveSpeed;

    }, this);

    this.dinoEmote.position.x = this.mainMenuMobs.children[3].position.x;
    this.dinoEmote.position.y = this.mainMenuMobs.children[3].position.y - 24;

    this.mainMenuCharEmote.position.x = this.mainMenuCharacter.position.x;
    this.mainMenuCharEmote.position.y = this.mainMenuCharacter.position.y - 23;


    // Move background
    // this.menu_jg_2.tilePosition.x -= 0.008;
    // this.menu_jg_3.tilePosition.x -= 0.009;
    // this.menu_jg_4.tilePosition.x -= 0.02;
    // this.menu_jg_5.tilePosition.x -= 0.04;

    // this.menu_plain_2.tilePosition.x -= 0.008;
    // this.menu_plain_3.tilePosition.x -= 0.02;

    this.gc_4.tilePosition.x -= 0.06;

  },

  createButton: function(game, string, x, y, w, h, callback) {
    var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);

    button1.anchor.setTo(0.5, 0.5);
    button1.width = w;
    button1.height = h;
    // button1.alpha = 0;

    var txt = game.add.text(button1.x, button1.y, string, {
      font: "24px 8bit_wonder",
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
