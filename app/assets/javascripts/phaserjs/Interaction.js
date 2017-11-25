function createGameKeys(game) {
  game.upKey = game.input.keyboard.addKey(Phaser.KeyCode.W);
  game.leftKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
  game.rightKey = game.input.keyboard.addKey(Phaser.KeyCode.D);
}

function createPlayerEmote(game) {
  game.playerEmote = game.add.sprite(0, game.world.height - 300, 'emoticons');
  game.playerEmote.scale.setTo(game.hardScale);

  game.playerEmote.animations.add('exclamation', [47, 46, 45, 44, 0, 1, 2], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('question', [47, 46, 45, 44, 3, 4, 5], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-exclamation', [6, 7, 8], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('empty-question', [9, 10, 11], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('sweat', [47, 46, 45, 44, 12, 13, 14], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('heart', [47, 46, 45, 44, 15, 16, 17], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('dotdotdot', [47, 46, 45, 44, 18, 19, 20], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('music', [47, 46, 45, 44, 21, 22, 23], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('zzz', [47, 46, 45, 44, 24, 25, 26], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('scramble', [47, 46, 45, 44, 27, 28, 29], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('blush', [47, 46, 45, 44, 30, 31, 32], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('light-bulb', [47, 46, 45, 44, 33, 34, 35], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('skull', [47, 46, 45, 44, 36, 37, 38], 78, true).onComplete.add(function() {
    game.playerEmote.visible = false;
  });
  game.playerEmote.animations.add('angry', [47, 46, 45, 44, 39, 40, 41], 78, true).onComplete.add(function() {
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
  game.playerEmote.animations.play('exclamation', 5, false);
}

function updatePlayerEmote(game) {
  game.playerEmote.position.x = game.player.position.x;
  game.playerEmote.position.y = game.player.position.y - 18;
}

// Sprite following another sprite example
// update: function() {
//   radians = game.physics.arcade.angleBetween(ufoSprite, humanSprite);
//   degrees = radians * (180/Math.PI);
//   game.physics.arcade.velocityFromAngle(degrees, 300, ufoSprite.body.velocity);
// }
