var MOB = {

  nextFire: null,
  fireRate: null,
  gumballMachines: null,
  bullets: null,

  createGumballMachine: function(game, x, y, group, direction) {
    var gumballMachine = group.create(x, y, 'gumball_machine');
    gumballMachine.triggered = false;
    gumballMachine.initSpeed = 8;
    if (direction === 'left') {
      gumballMachine.scale.setTo(1.45);
    }
    else {
      gumballMachine.scale.setTo(-1.45, 1.45);
    }
    game.physics.arcade.enable(gumballMachine);
    gumballMachine.animations.add('shoot', [0, 1, 1, 2, 2, 3, 0, 0, 0], 4, true).speed = gumballMachine.initSpeed;
    return gumballMachine;
  },

  createBullets: function(game) {
    this.nextFire = 0;
    this.fireRate = 100;
    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(50, 'red_gumball');
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);
    this.bullets.setAll('body.allowGravity', false);
  },

  shootBullets: function(game) {
    if (game.time.now > this.nextFire && this.bullets.countDead() > 0) {
      this.nextFire = game.time.now + this.fireRate;
      var bullet = this.bullets.getFirstDead();
      bullet.reset(400, 400);
      bullet.body.velocity.x = -200;
      bullet.allowGravity = false;
    }
  },

  updateGumballMovement: function(game) {
    game.physics.arcade.collide(this.gumballMachines, WORLD.worldLayer);
    MOB.gumballMachines.forEach(function(gumballMachine) {
      if (gumballMachine.triggered) {
        gumballMachine.animations.play('shoot').speed = gumballMachine.initSpeed + (1 - UI.happyBarPercent) * 10;
      }
    }, game);
  },


  create: function(game) {
    this.createBullets(game);


  },

  update: function(game) {
    this.updateGumballMovement(game);
    this.shootBullets(game);
  },
};
