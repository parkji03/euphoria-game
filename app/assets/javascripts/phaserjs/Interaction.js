function createGameKeys(game) {
  game.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
  game.leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
  game.rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
}

function createPlayerEmote(game) {
  game.playerEmote = game.add.sprite(0, game.world.height - 300, 'emoticons');
  game.playerEmote.scale.setTo(game.hardScale);

  game.playerEmote.animations.add('exclamation', [47, 46, 45, 44, 0, 1, 2, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('question', [47, 46, 45, 44, 3, 4, 5, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-exclamation', [6, 7, 8], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-question', [9, 10, 11], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('sweat', [47, 46, 45, 44, 12, 13, 14, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('heart', [47, 46, 45, 44, 15, 16, 17, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('dotdotdot', [47, 46, 45, 44, 18, 18, 19, 19, 20, 20, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('music', [47, 46, 45, 44, 21, 22, 23, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('zzz', [47, 46, 45, 44, 24, 25, 26, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('scramble', [47, 46, 45, 44, 27, 28, 29, 28, 27, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('blush', [47, 46, 45, 44, 30, 31, 32, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('light-bulb', [47, 46, 45, 44, 33, 34, 35, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('skull', [47, 46, 45, 44, 36, 37, 38, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('angry', [47, 46, 45, 44, 39, 40, 41, 40, 39, 45, 46], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-sweat', [48, 49, 50], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-heart', [51, 52, 53], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-dotdotdot', [54, 55, 56], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-music', [57, 58, 59], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-zzz', [60, 61, 62], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-scramble', [63, 64, 65], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-blush', [66, 67, 68], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-lightbulb', [69, 70, 71], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-skull', [72, 73, 74], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-angry', [75, 76, 77], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });

  // Spawn emote.. play different ones depending on death count
  if (game.deathCount < 5) {
    game.playerEmote.animations.play('exclamation', 8, false);
  }
  else if (game.deathCount < 10) {
    game.playerEmote.animations.play('sweat', 8, false);
  }
  else if (game.deathCount < 15) {
    game.playerEmote.animations.play('dotdotdot', 8, false);
  }
  else if (game.deathCount < 20) {
    game.playerEmote.animations.play('angry', 8, false);
  }
}

function updatePlayerEmote(game) {
  game.playerEmote.position.x = game.player.position.x;
  game.playerEmote.position.y = game.player.position.y - 18;
}

function createCoinText(game) {
  game.coinText = game.add.text(345, 40, 'Score: ' + game.coinCount, game.fontStyle);
  game.coinText.fixedToCamera = true;
}

function collectCoin(player, coin) {
  // game.coinCount += 1;
  // game.coinText.text = 'Score: ' + game.coinCount;
  //
  // if (game.happyBarProgress.width + game.happyBarTenth > game.happyBarProgressLength) {
  //   game.happyBarProgress.width = game.happyBarProgressLength;
  // }
  // else {
  //   game.happyBarProgress.width += game.happyBarTenth;
  // }
  // console.log('hey');
  // coin.kill();
}

function createCoinGroup(game) {
  game.coinGroup = game.add.group();
  game.coinGroup.enableBody = true;

  addCoin(game, 20, game.world.height - 400);
  addCoin(game, 60, game.world.height - 400);
  addCoin(game, 100, game.world.height - 400);

}

function addCoin(game, x_location, y_location) {
  var tempCoin = game.coinGroup.create(x_location, y_location, 'coin');
  tempCoin.scale.setTo(game.hardScale);
  tempCoin.body.gravity.y = -game.gameGravity;
  tempCoin.coinOrigin = tempCoin.position.y;
  tempCoin.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
  tempCoin.coinSpeed = (Math.floor(Math.random() * 5) + 1) / 10.0;
  var initDirection = Math.floor(Math.random() * 2);

  if (initDirection == 1) {
    tempCoin.coinDirection = 1;
  }
  else {
    tempCoin.coinDirection = -1;
  }
}

function updateCoinMovement(game) {
  game.coinGroup.forEach(function(coin) {
    coin.animations.play('spin');

    if (coin.position.y < coin.coinOrigin - 7) {
      coin.coinDirection = 1;
    }
    else if (coin.position.y > coin.coinOrigin + 7){
      coin.coinDirection = -1;
    }

    coin.position.y += coin.coinDirection * coin.coinSpeed;
  }, game);
}

// Sprite following another sprite example
// update: function() {
//   radians = game.physics.arcade.angleBetween(ufoSprite, humanSprite);
//   degrees = radians * (180/Math.PI);
//   game.physics.arcade.velocityFromAngle(degrees, 300, ufoSprite.body.velocity);
// }
