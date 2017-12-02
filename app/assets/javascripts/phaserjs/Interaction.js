function createCoinText(game) {
  game.coinCount = 0;
  game.coinText = game.add.text(345, 40, 'Score: ' + game.coinCount, game.fontStyle);
  game.coinText.fixedToCamera = true;
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
