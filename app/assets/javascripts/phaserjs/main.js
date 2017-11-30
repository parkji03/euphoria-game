window.onload = function() {
  var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'game-container');

  // States
  game.state.add('Boot', Euphoria.Boot);
  game.state.add('Preloader', Euphoria.Preloader);
  game.state.add('MainMenu', Euphoria.MainMenu);

  // Worlds
  game.state.add('WorldChooser', Euphoria.WorldChooser);
  game.state.add('World1', Euphoria.World1);
  game.state.add('World2', Euphoria.World2);
  game.state.add('World3', Euphoria.World3);

  // Test
  game.state.add('Game', Euphoria.Game);

  // Begin Boot state
  game.state.start('Boot');
};
