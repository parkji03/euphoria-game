Euphoria.Game = function(game) {
  //add variables here
  this.layer = null;
  this.player = null;
  this.cursors = null;
  this.game = game;
  this.hardScale = 2;
};

// var this.player;

Euphoria.Game.prototype = {
  create: function() {
    // this.world.scale.set(1.3);

    // this.scale.pageAlignVertically = true;
    // this.world.setBounds(0, 0, 2040, 1200); //This should be the size of the tilemap
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 600;
    // this.physics.startSystem(Phaser.Physics.P2JS);
    // this.physics.p2.gravity.y = 100;
    // this.physics.p2.restitution = 0.8;

    this.stage.backgroundColor = '#3A5963'
    // this.add.sprite(0, 0, 'sky');

    var map = this.add.tilemap('map_testmap');
    map.addTilesetImage('grass', 'grass');
    map.addTilesetImage('spike', 'spike');
    map.setCollision([0, 1, 2, 15, 16, 17, 18, 19, 20, 30, 31])
    this.layer = map.createLayer('Tile Layer 1');
    this.layer.setScale(this.hardScale);
    this.layer.resizeWorld();


    // The this.player and its settings
    this.player = this.add.sprite(32, this.world.height - 400, 'dude');
    this.player.scale.setTo(this.hardScale, this.hardScale);

    //  We need to enable physics on the this.player
    this.physics.arcade.enable(this.player);
    // this.physics.p2.enable(this.player);

    //  this.player physics properties. Give the little guy a slight bounce.
    // this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 500 * this.hardScale;
    this.player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);

    //create keys
    this.cursors = this.input.keyboard.createCursorKeys();

  },

  update: function() {
    this.physics.arcade.TILE_BIAS = 40;
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
        this.player.body.velocity.y = -600;
    }
    //The entire game goes in here
  },

  render: function() {
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  },

  quitGame: function() {
    this.state.start('MainMenu');
  }
};
