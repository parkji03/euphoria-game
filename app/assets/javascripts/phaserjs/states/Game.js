Euphoria.Game = function(game) {

  //add variables here
  this.layer = null;
  this.player = null;
  this.cursors = null;
  this.game = game;
  this.hardScale = 1.5;
  this.canvasWidth = 1280;
  this.canvasHeight = 800;
  this.deathCount = 0;

  this.testLabel = null;


};

// var this.player;

Euphoria.Game.prototype = {
  create: function() {
    var gameThis = this;
    // this.world.setBounds(0, 0, 3000, 1850); //This should be the size of the tilemap
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 2000;
    this.physics.arcade.checkCollision.down = false


    this.stage.backgroundColor = '#3A5963'
    // this.add.sprite(0, 0, 'sky');
    var map = this.add.tilemap('map_testmap');
    map.addTilesetImage('grass', 'grass');
    map.addTilesetImage('spike', 'spike');
    map.setCollision([0, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20, 21, 28, 30, 31])



    this.layer = map.createLayer('Tile Layer 1');
    this.layer.setScale(this.hardScale);
    this.layer.resizeWorld();


    // The this.player and its settings
    this.player = this.add.sprite(32, this.world.height - 400, 'dude');
    this.player.scale.setTo(this.hardScale, this.hardScale);

    //  We need to enable physics on the this.player
    this.physics.arcade.enable(this.player);

    //  this.player physics properties. Give the little guy a slight bounce.
    // this.player.body.bounce.y = 0.2;
    // this.player.body.gravity.y = 500 * this.hardScale;
    this.player.body.collideWorldBounds = true;
    // this.player.body.checkWorldBounds = true;
    this.player.checkWorldBounds = true;
    this.player.events.onOutOfBounds.add(function() {
      console.log("fell through the ground");
      gameThis.playerDeath();

    }, this);

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);

    //create keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // if we step on the spikes... 46 is the spike ID
    map.setTileIndexCallback(46, function () {
      console.log('hit the spike so bad!');
      if (gameThis.player.alive) {
        gameThis.playerDeath();
        gameThis.player.alive = false;
      }
    }, this.game, this.layer);


    //adding Menu
    this.testLabel = this.add.text(this.camera.width / 2, this.camera.height / 2, 'Death Count: ' + this.deathCount, {font: '24px Arial', fill: '#fff'});
    this.testLabel.anchor.setTo(0.5, 0.5);
    this.testLabel.fixedToCamera = true;
    this.testLabel.inputEnabled = true;
    this.testLabel.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        console.log("hit");
        // this.paused = true;
        //
        // // Then add the menu
        // menu = this.add.sprite(w/2, h/2, 'menu');
        // menu.anchor.setTo(0.5, 0.5);
        //
        // // And a label to illustrate which menu item was chosen. (This is not necessary)
        // choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        // choiseLabel.anchor.setTo(0.5, 0.5);
    });

  },

  update: function() {
    // console.log(this.camera.position.x);
    // console.log(this.camera.position.y);

    // Bias set incase our velocity gets so fast that we go through collision
    this.physics.arcade.TILE_BIAS = 60;
    this.physics.arcade.collide(this.player, this.layer);
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -600;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 600;
        this.player.animations.play('right');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }
    //  Allow the this.player to jump if they are touching the ground.
    if (this.cursors.up.isDown)
    {
        this.player.body.velocity.y = -700;
    }
    //The entire game goes in here
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  },

  quitGame: function() {
    this.state.start('MainMenu');
  },

  playerDeath: function() {
    this.deathCount++;
    this.testLabel.setText("Death Count: " + this.deathCount);
    this.state.restart();
  }
};
