Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
};

var UI = {
  // Style
  fontStyle1: {
    font: "14px 8bit_wonder",
    fill: "#FFF",
    align: 'center',
    stroke: '#000000',
    strokeThickness: 6
  },
  fontStyle2: {
    font: "20px 8bit_wonder",
    fill: "#FFF" ,
    align: 'center',
    stroke: '#000000',
    strokeThickness: 6
  },
  fontStyle3: {
    font: "24px 8bit_wonder",
    fill: "#FFF",
    align: 'center',
    stroke: '#000000',
    strokeThickness: 6
  },
  fontStyle4: {
    font: "28px 8bit_wonder",
    fill: "#FFF",
    align: 'center',
    stroke: '#000000',
    strokeThickness: 6
  },

  // Labels
  deathCounterText: null,
  deathCount: 0,
  deathUI: null,

  deathRetryText: null,
  deathRetryBackground: null,

  scoreText: null,
  scoreCount: 0,
  honeyUI: null,

  backUI: null,

  // Menu
  menuButtonUI: null,
  menuTriggered: false,
  menuOverlay: null,
  menu1: null,
  menu2: null,
  menu3: null,
  menu4: null,
  menu5: null,

  centerText: null,

  // Happy bar
  happyBarProgress: null,
  happyBarOutline: null,
  happyBarProgressLength: null,
  happyBarTenth: null,
  happyBarHundredth: null,
  happyBarPercent: null,
  halfTriggered: false,

  // Bottom text overlay
  bottomTextOverlay: null,
  bottomText: null,
  // isBottomOverlayShowing: false,

  createMenu: function(game) {
    this.menuTriggered = true;
    // Backdrop
    var menuBackdrop = game.add.image(0, 0, 'backdrop_ui');
    menuBackdrop.fixedToCamera = true;

    this.menuOverlay = game.add.image(game.camera.width / 2, game.camera.height / 2, 'menu_ui');
    this.menuOverlay.scale.setTo(2, 1.5);
    this.menuOverlay.anchor.setTo(0.5);
    this.menuOverlay.fixedToCamera = true;

    this.menu1 = game.add.text(game.camera.width / 2, game.camera.height / 2 - 110, 'About', this.fontStyle3);
    this.menu1.fixedToCamera = true;
    this.menu1.anchor.setTo(0.5);
    this.menu1.inputEnabled = true;
    this.menu1.events.onInputDown.add(function() {
      // TODO: trigger an event
    }, game);

    this.menu2 = game.add.text(game.camera.width / 2, game.camera.height / 2 - 60, 'Rankings', this.fontStyle3);
    this.menu2.fixedToCamera = true;
    this.menu2.anchor.setTo(0.5);
    this.menu2.inputEnabled = true;
    this.menu2.events.onInputDown.add(function() {
      // TODO: trigger an event
    }, game);

    this.menu3 = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Settings', this.fontStyle3);
    this.menu3.fixedToCamera = true;
    this.menu3.anchor.setTo(0.5);
    this.menu3.inputEnabled = true;
    this.menu3.events.onInputDown.add(function() {
      // TODO: trigger an event
    }, game);


    this.menu4 = game.add.text(game.camera.width / 2, game.camera.height / 2 + 60, 'Back to Main', this.fontStyle3);
    this.menu4.fixedToCamera = true;
    this.menu4.anchor.setTo(0.5);
    this.menu4.inputEnabled = true;
    this.menu4.events.onInputDown.addOnce(function() {
      UI.menuTriggered = false;
      menuBackdrop.kill();
      UI.menuOverlay.kill();
      UI.menu1.kill();
      UI.menu2.kill();
      UI.menu3.kill();
      UI.menu4.kill();
      UI.menu5.kill();

      game.state.start('MainMenu');
    }, game);

    // Close Menu
    this.menu5 = game.add.text(game.camera.width / 2, game.camera.height / 2 + 120, 'Close', this.fontStyle3);
    this.menu5.fixedToCamera = true;
    this.menu5.anchor.setTo(0.5);
    this.menu5.inputEnabled = true;
    this.menu5.events.onInputDown.addOnce(function() {
      UI.menuTriggered = false;
      menuBackdrop.kill();
      UI.menuOverlay.kill();
      UI.menu1.kill();
      UI.menu2.kill();
      UI.menu3.kill();
      UI.menu4.kill();
      UI.menu5.kill();
    }, game);

  },

  updateMenu: function(game) {
    if (this.menu1 != null) {
      if (this.menu1.input.pointerOver()) {
        this.menu1.addColor('#545253', 0);
        UI.showBottomOverlay('Made with plain old JavaScript.');
        game.world.bringToTop(UI.bottomTextOverlay);
        game.world.bringToTop(UI.bottomText);
      }
      else {
        this.menu1.addColor('#FFFFFF', 0);
      }
    }

    if (this.menu2 != null) {
      if (this.menu2.input.pointerOver()) {
        this.menu2.addColor('#545253', 0);
        UI.showBottomOverlay("Don't bother, you're in last place.");
        game.world.bringToTop(UI.bottomTextOverlay);
        game.world.bringToTop(UI.bottomText);
      }
      else {
        this.menu2.addColor('#FFFFFF', 0);
      }
    }

    if (this.menu3 != null) {
      if (this.menu3.input.pointerOver()) {
        this.menu3.addColor('#545253', 0);
        UI.showBottomOverlay("I didn't implement a lot of settings yet.");
        game.world.bringToTop(UI.bottomTextOverlay);
        game.world.bringToTop(UI.bottomText);
      }
      else {
        this.menu3.addColor('#FFFFFF', 0);
      }
    }

    if (this.menu4 != null) {
      if (this.menu4.input.pointerOver()) {
        this.menu4.addColor('#545253', 0);
        if (UI.deathCount > 10 && UI.deathCount < 999) {
          UI.showBottomOverlay(UI.deathCount + " deaths... Yeah I would give up too.");
        }
        else {
          UI.showBottomOverlay("Yeah, I would give up too.");
        }
        game.world.bringToTop(UI.bottomTextOverlay);
        game.world.bringToTop(UI.bottomText);
      }
      else {
        this.menu4.addColor('#FFFFFF', 0);

      }
    }

    if (this.menu5 != null) {
      if (this.menu5.input.pointerOver()) {
        this.menu5.addColor('#545253', 0);
        UI.showBottomOverlay("Back to dying by killer gummy bears... LOL");
        game.world.bringToTop(UI.bottomTextOverlay);
        game.world.bringToTop(UI.bottomText);
      }
      else {
        this.menu5.addColor('#FFFFF', 0);
      }
    }
  },

  createCenterText: function(game) {
    this.centerText = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Testing Center Text', this.fontStyle3);
    this.centerText.anchor.setTo(0.5);
    this.centerText.fixedToCamera = true;
    this.centerText.visible = false;

    this.centerText.signal = new Phaser.Signal();
    this.centerText.signal.add(function(text) {
      UI.centerText.visible = true;
      UI.centerText.text = text;
      game.time.events.add(1150, function() {
        UI.centerText.visible = false;
      });

    }, game);
  },

  createBottomText: function(game) {
    this.bottomTextOverlay = game.add.image(0, 700, 'overlay');
    this.bottomTextOverlay.fixedToCamera = true;

    var bottomTextStyle = {
      font: '20px 8bit_wonder',
      fill: '#FFF',
      align: 'left',
      wordWrap: true,
      wordWrapWidth: 1100,
      stroke: '#000000',
      strokeThickness: 6
    };
    this.bottomText = game.add.text(640, 750, '', bottomTextStyle);
    this.bottomText.anchor.setTo(0.5);
    this.bottomText.fixedToCamera = true;
    this.hideBottomOverlay();
  },

  showBottomOverlay: function(text) {

    // this.bottomText.text = '';
    // var letters = [];
    // var letterIndex = 0;
    // var letterDelay = 20;
    // letters = text.split('');
    // game.time.events.repeat(letterDelay, text.length, function() {
    //   UI.bottomText.text += letters[letterIndex];
    //   letterIndex++;
    // }, game);
    // console.log(this.bottomText.text);
    this.bottomText.text = text;
    this.bottomTextOverlay.visible = true;
    this.bottomText.visible = true;
  },



  hideBottomOverlay: function() {
    // this.bottomText.addColor('#FFFFFF', 0);
    this.bottomTextOverlay.visible = false;
    this.bottomText.visible = false;
  },

  createDeathRetryText: function(game) {
    var deathRetryTextStyle = {
      font: '30px 8bit_wonder',
      fill: '#CCC',
      align: 'center',
      stroke: '#000000',
      strokeThickness: 6
    };
    this.deathRetryText = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Press Spacebar to reset', deathRetryTextStyle);
    this.deathRetryText.anchor.setTo(0.5);
    this.deathRetryText.fixedToCamera = true;
    this.deathRetryText.addColor('#FFF', 6);
    this.deathRetryText.addColor('#CCC', 15);
    var deathRetryTextPointer = this.deathRetryText;
    var minScale = 0.9;
    var maxScale = 1.2;
    var def = 1;
    var direction = 1;
    game.time.events.loop(10, function() {
      // j += 0.1;
      if (def > maxScale) {
        direction = -1;
      }
      else if (def < minScale) {
        direction = 1;
      }
      def += direction * 0.005
      deathRetryTextPointer.scale.setTo(def);
    }, game);
    this.deathRetryText.visible = false;
  },

  create: function(game) {
    this.menuTriggered = false;
    this.scoreCount = 0;

    // this.createLetter(game);
    // #################
    // ##  Happy bar  ##
    // #################
    // Happy bar progress
    this.happyBarProgress = game.add.image(160, 25, 'happy_bar_progress');
    this.happyBarProgress.scale.setTo(2);
    this.happyBarProgress.fixedToCamera = true;
    // this.happyBarProgress.width = 396;
    this.happyBarProgressLength = this.happyBarProgress.width;
    this.happyBarTenth = this.happyBarProgressLength / 10;
    this.happyBarHundredth = this.happyBarTenth / 10;
    var happyBarProgressPointer = this.happyBarProgress;
    var happyBarTenthPointer = this.happyBarTenth;
    var happyBarHundredthPointer = this.happyBarHundredth;
    // Happy bar outline
    this.happyBarOutline = game.add.image(10, 10, 'happy_bar_outline');
    this.happyBarOutline.scale.setTo(2);
    this.happyBarOutline.fixedToCamera = true;
    // Happy bar ticker
    game.time.events.loop(500, function() {
      if (game.state.current === 'WorldChooser') {
        // Don't decrement inside WorldChooser
      }
      else {
        if (happyBarProgressPointer.width > 0) {
          happyBarProgressPointer.width = Math.floor(happyBarProgressPointer.width - happyBarHundredthPointer);
        }
        if (happyBarProgressPointer.width < 0) { // Capped at min width
          happyBarProgressPointer.width = 0;
        }
      }
    }, game);

    // ##############
    // ##  Labels  ##
    // ##############

    this.deathUI = game.add.image(590, 10, 'death_ui');
    this.deathUI.scale.setTo(2);
    this.deathUI.fixedToCamera = true;
    this.deathCounterText = game.add.text(664, 28, this.deathCount.pad(3), this.fontStyle2);
    this.deathCounterText.fixedToCamera = true;

    // Death retry
    this.createDeathRetryText(game);

    // Score
    this.honeyUI = game.add.image(758, 10, 'honey_ui');
    this.honeyUI.scale.setTo(2);
    this.honeyUI.fixedToCamera = true;

    this.scoreText = game.add.text(832, 28, '' + this.scoreCount.pad(3), this.fontStyle2);
    this.scoreText.fixedToCamera = true;

    // Trigger menu button
    this.menuButtonUI = game.add.button(1204, 10, 'menu_button_ui', function() {
      if (!UI.menuTriggered) {
        UI.createMenu(game);
      }
    }, game);
    this.menuButtonUI.scale.setTo(2);
    this.menuButtonUI.fixedToCamera = true;
    this.menuButtonUI.inputEnabled = true;


    // ###################
    // ##  Center Text  ##
    // ###################
    this.createCenterText(game);

    // ######################
    // ##  Bottom Overlay  ##
    // ######################
    this.createBottomText(game);
  },

  update: function(game) {
    this.hideBottomOverlay();
    this.updateMenu(game);

    // Happy bar trigger
    if (this.happyBarProgress.width < this.happyBarProgressLength / 2 && !this.halfTriggered) {
      PLAYER.emote.signal.dispatch('scramble');
      this.halfTriggered = true;
    }
    // Reset trigger
    if (this.happyBarProgress.width > (this.happyBarProgressLength / 2)) {
      this.halfTriggered = false;
    }

    var p = this.happyBarProgress.width / this.happyBarProgressLength;
    this.happyBarPercent = Math.round(p * 100) / 100
    // console.log(this.happyBarPercent);
    // this.happyBarPercent = this.happyBarProgress.width / this.happyBarProgressLength;
  },

  updateDeathCount: function() {
    if (this.deathCount != 'LOL') {
      this.deathCount++;
    }
    if (this.deathCount > 999) {
      this.deathCount = 'LOL';
      this.deathCounterText.setText(this.deathCount);
    }
    else {
      this.deathCounterText.setText(this.deathCount.pad(3));
    }
  },
};
