// // User interface stuff
// function createHappyBar(game) {
//   game.happyBarProgress = game.add.image(16, 16, 'happy_bar_progress');
//   game.happyBarProgress.scale.setTo(game.hardScale);
//   game.happyBarProgress.fixedToCamera = true;
//   game.happyBarProgressLength = game.happyBarProgress.width;
//   game.happyBarTenth = game.happyBarProgress.width / 10;
//   game.happyBarHundredth = game.happyBarTenth / 10;
//   game.happyBarOutline = game.add.image(16, 16, 'happy_bar_outline');
//   game.happyBarOutline.scale.setTo(game.hardScale);
//   game.happyBarOutline.fixedToCamera = true;
//
//   // Decrease happiness progress every second
//   game.time.events.loop(Phaser.Timer.SECOND, function() {
//     if (game.happyBarProgress.width > 0) {
//       // console.log(game.happyBarProgress.width);
//       game.happyBarProgress.width = Math.floor(game.happyBarProgress.width - game.happyBarHundredth);
//     }
//
//     if (game.happyBarProgress.width < 0) { // Capped at width 0
//       game.happyBarProgress.width = 0;
//     }
//   }, game);
// }
//
// function halfWayTrigger(game) {
//   if (game.happyBarProgress.width < game.happyBarProgressLength / 2 && !game.halfTriggered) {
//     game.playerEmote.visible = true;
//     game.playerEmote.animations.play('scramble', 8, false);
//     game.halfTriggered = true;
//   }
//
//   // Reset the half way trigger
//   if (game.happyBarProgress.width > (game.happyBarProgressLength / 2)) {
//     game.halfTriggered = false;
//   }
// }
//
// function happyBarEmoteTriggers(game) {
//   halfWayTrigger(game);
// }
