function createGameKeys(game) {
  game.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
  game.leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
  game.rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
}

function createDeathLabel(game) {
  game.deathLabel = game.add.text(game.camera.width / 2, game.camera.height / 2, 'Death Count: ' + game.deathCount, {font: '24px Arial', fill: '#fff'});
  game.deathLabel.anchor.setTo(0.5, 0.5);
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
