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

  deathRetryText: null,
  deathRetryBackground: null,

  scoreText: null,
  scoreCount: 0,

  centerText: null,

  // Happy bar
  happyBarProgress: null,
  happyBarOutline: null,
  happyBarProgressLength: null,
  happyBarTenth: null,
  happyBarHundredth: null,
  halfTriggered: false,

  // Bottom text overlay
  bottomTextOverlay: null,
  bottomText: null,
  // isBottomOverlayShowing: false,

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

    this.bottomText.text = text;
    this.bottomTextOverlay.visible = true;
    this.bottomText.visible = true;
  },

  hideBottomOverlay: function() {
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
    this.scoreCount = 0;

    // this.createLetter(game);
    // #################
    // ##  Happy bar  ##
    // #################
    // Happy bar progress
    this.happyBarProgress = game.add.image(16, 16, 'happy_bar_progress');
    this.happyBarProgress.scale.setTo(WORLD.scale);
    this.happyBarProgress.fixedToCamera = true;
    this.happyBarProgressLength = this.happyBarProgress.width;
    this.happyBarTenth = this.happyBarProgressLength / 10;
    this.happyBarHundredth = this.happyBarTenth / 10;
    var happyBarProgressPointer = this.happyBarProgress;
    var happyBarTenthPointer = this.happyBarTenth;
    var happyBarHundredthPointer = this.happyBarHundredth;
    // Happy bar outline
    this.happyBarOutline = game.add.image(16, 16, 'happy_bar_outline');
    this.happyBarOutline.scale.setTo(WORLD.scale);
    this.happyBarOutline.fixedToCamera = true;
    // Happy bar ticker
    game.time.events.loop(500, function() {
      if (happyBarProgressPointer.width > 0) {
        happyBarProgressPointer.width = Math.floor(happyBarProgressPointer.width - happyBarHundredthPointer);
      }
      if (happyBarProgressPointer.width < 0) { // Capped at min width
        happyBarProgressPointer.width = 0;
      }
    }, game);

    // ##############
    // ##  Labels  ##
    // ##############
    // Death counter
    this.deathCounterText = game.add.text(345, 16, 'Death Count: ' + this.deathCount, this.fontStyle1);
    this.deathCounterText.fixedToCamera = true;
    // Death retry
    this.createDeathRetryText(game);
    // Score
    this.scoreText = game.add.text(345, 40, 'Score: ' + this.scoreCount, this.fontStyle1);
    this.scoreText.fixedToCamera = true;

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
    // Happy bar trigger
    if (this.happyBarProgress.width < this.happyBarProgressLength / 2 && !this.halfTriggered) {
      PLAYER.emote.signal.dispatch('scramble');
      this.halfTriggered = true;
    }
    // Reset trigger
    if (this.happyBarProgress.width > (this.happyBarProgressLength / 2)) {
      this.halfTriggered = false;
    }
  },

  updateDeathCount: function() {
    this.deathCount++;
    this.deathCounterText.setText('Death Count: ' + this.deathCount);
  },
};
