// User interface stuff
function createHappyBar(game) {
  game.happyBarProgress = game.add.image(16, 16, 'happy_bar_progress');
  game.happyBarProgress.scale.setTo(game.hardScale);
  game.happyBarProgress.fixedToCamera = true;
  game.happyBarTenth = game.happyBarProgress.width / 10;
  game.happyBarHundredth = game.happyBarTenth / 10;
  game.happyBarOutline = game.add.image(16, 16, 'happy_bar_outline');
  game.happyBarOutline.scale.setTo(game.hardScale);
  game.happyBarOutline.fixedToCamera = true;

  // Decrease happiness progress every second
  game.time.events.loop(Phaser.Timer.SECOND, function() {
    if (game.happyBarProgress.width > 0) {
      // console.log(game.happyBarProgress.width);
      game.happyBarProgress.width = Math.floor(game.happyBarProgress.width - game.happyBarHundredth);
    }

    if (game.happyBarProgress.width < 0) {
      game.happyBarProgress.width = 0;
    }
  }, game);
}

function createDeathLabel(game) {
  game.deathLabel = game.add.text(345, 16, 'Death Count: ' + game.deathCount, {font: '24px Arial', fill: '#fff'});
  // game.deathLabel.anchor.setTo(0.5, 0.5);
  game.deathLabel.fixedToCamera = true;
  game.deathLabel.inputEnabled = true;
  game.deathLabel.events.onInputUp.add(function () {
      console.log("hit");
      // this.paused = true;
      // // Then add the menu
      // menu = this.add.sprite(w/2, h/2, 'menu');
      // menu.anchor.setTo(0.5, 0.5);
      //
      // // And a label to illustrate which menu item was chosen. (This is not necessary)
      // choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
      // choiseLabel.anchor.setTo(0.5, 0.5);
  });
}

function updateDeathLabel(game) {
  game.deathCount++;
  game.deathLabel.setText("Death Count: " + game.deathCount);
}



// function increaseHappiness(game) {
//
// }
//
// function updateHappyBar(game) {
//   // game.time.events.repeat(Phaser.Timer.SECOND, decreaseHappiness(game), game);
// }
