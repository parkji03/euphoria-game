var MOB = {

  // nextFire: null,
  // fireRate: null,
  gumballMachines: null,
  // bullets: null,

  createGumballMachine: function(game, x, y, group, direction) {
    var gumballMachine = group.create(x, y, 'gumball_machine');
    gumballMachine.triggered = false;
    gumballMachine.anchor.setTo(0.5);
    gumballMachine.initSpeed = 8;
    gumballMachine.shootDirection = direction;
    if (direction === 'left') {
      gumballMachine.scale.setTo(1.45);
    }
    else {
      gumballMachine.scale.setTo(-1.45, 1.45);
    }
    game.physics.arcade.enable(gumballMachine);
    gumballMachine.animations.add('shoot', [0, 1, 1, 2, 2, 3, 0, 0, 0], 4, true).speed = gumballMachine.initSpeed;

    gumballMachine.initFireRate = 3000;
    gumballMachine.initBulletSpeed = 200;

    gumballMachine.fireRate = 3000;
    gumballMachine.nextFire = 0;
    gumballMachine.bulletSpeed = 200;
    gumballMachine.bullets = this.createGumballMachineBullets(game);

    return gumballMachine;
  },

  createGumballMachineBullets: function(game) {
    var bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 20; i++) {
      var random = getRandomInt(1, 3);
      if (random === 1) {
        bullets.createMultiple(1, 'red_gumball');
        bullets.createMultiple(1, 'blue_gumball');
        bullets.createMultiple(1, 'yellow_gumball');
      }
      else if (random === 2) {
        bullets.createMultiple(1, 'blue_gumball');
        bullets.createMultiple(1, 'orange_gumball');
        bullets.createMultiple(1, 'green_gumball');
      }
      else if (random === 3) {
        bullets.createMultiple(1, 'yellow_gumball');
        bullets.createMultiple(1, 'red_gumball');
        bullets.createMultiple(1, 'blue_gumball');
      }
    }

    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('body.allowGravity', false);
    return bullets;
  },

  // createBullets: function(game) {
  //   this.nextFire = 0;
  //   this.fireRate = 100;
  //   this.bullets = game.add.group();
  //   this.bullets.enableBody = true;
  //   this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
  //
  //   // bullets.callAll('animations.add', 'animations', 'fire', [0,1,2,3,4,5,6], 5, true);
  //   // bullets.callAll('play', null, 'fire');
  //
  //
  //
  // },

  updateGumballMachineMovement: function(game) {
    game.physics.arcade.collide(this.gumballMachines, WORLD.worldLayer);
    MOB.gumballMachines.forEach(function(gumballMachine) {
      if (gumballMachine.triggered) {
        gumballMachine.animations.play('shoot').speed = gumballMachine.initSpeed + (1 - UI.happyBarPercent) * 10;
        // gumballMachine.bulletSpeed = gumballMachine.initBulletSpeed;
        gumballMachine.fireRate = gumballMachine.initFireRate - (1 - UI.happyBarPercent) * 2200;
        if (game.time.now > gumballMachine.nextFire && gumballMachine.bullets.countDead() > 0) {
          gumballMachine.nextFire = game.time.now + gumballMachine.fireRate;
          var bullet = gumballMachine.bullets.getFirstDead();
          if (gumballMachine.shootDirection === 'left') {
            bullet.reset(gumballMachine.position.x - 13, gumballMachine.position.y + 10);
            bullet.body.velocity.x = -1 * gumballMachine.bulletSpeed;
          }
          else {
            bullet.reset(gumballMachine.position.x + 10, gumballMachine.position.y + 10);
            bullet.body.velocity.x = gumballMachine.bulletSpeed;
          }
        }
      }
      game.physics.arcade.collide(gumballMachine.bullets, WORLD.worldLayer, function(bullet, layer) {
        bullet.kill();
      });

      game.physics.arcade.overlap(PLAYER.sprite, gumballMachine.bullets, function(player, bullet) {
        if (PLAYER.alive) {
          bullet.kill();
        }
        PLAYER.death(game);
      }, null, game);
    }, game);
  },

  create: function(game) {
  },

  update: function(game) {
    this.updateGumballMachineMovement(game);
  },
};
