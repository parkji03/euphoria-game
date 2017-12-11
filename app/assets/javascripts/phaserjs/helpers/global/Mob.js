var MOB = {

  gumballMachines: null,
  gummyBears: null,

  createGummyBear: function(game, x, y, type, group, move, direction, dropBullets, cloudCollide) {
    var gummyBear = group.create(x, y, type);
    gummyBear.scale.setTo(WORLD.scale);
    game.physics.arcade.enable(gummyBear);
    gummyBear.body.collisionWorldBounds = true;
    gummyBear.body.bounce.set(1);
    gummyBear.body.gravity.set(0, -1000);
    gummyBear.anchor.setTo(0.5);
    gummyBear.cloudCollide = cloudCollide;
    // gummyBear.animations.add('', [0], 0, true);

    if (!cloudCollide) {
      gummyBear.body.bounce.set(0.7);
      gummyBear.checkWorldBounds = true;
      gummyBear.events.onOutOfBounds.add(function() {
        gummyBear.moveDirection *= -1;
        gummyBear.scale.x *= -1;
        var randomGummy = getRandomInt(1, 5);
        if (randomGummy === 1) {
          gummyBear.loadTexture('red_gummy_bear', 0);
        }
        else if (randomGummy === 2) {
          gummyBear.loadTexture('blue_gummy_bear', 0);
        }
        else if (randomGummy === 3) {
          gummyBear.loadTexture('green_gummy_bear', 0);
        }
        else if (randomGummy === 4) {
          gummyBear.loadTexture('yellow_gummy_bear', 0);
        }
        else if (randomGummy === 5) {
          gummyBear.loadTexture('orange_gummy_bear', 0);
        }
        gummyBear.reset(getRandomInt(x - 100, x + 100), 0);
      }, game);
    }


    var initRotationDirection = Math.floor(Math.random() * 2);
    if (initRotationDirection == 1) {
      gummyBear.rotationDirection = 1;
    }
    else {
      gummyBear.rotationDirection = -1;
    }
    gummyBear.rotationLimit = 12;

    var initMoveDirection = Math.floor(Math.random() * 2);
    if (initMoveDirection == 1) {
      gummyBear.moveDirection = 1;
      gummyBear.scale.x *= -1; // if going to the right, flip sprite horizontally
    }
    else {
      gummyBear.moveDirection = -1;
    }

    gummyBear.initMoveSpeed = 100;
    gummyBear.moveSpeed = 100;
    gummyBear.isMoving = move;
    if (!move) {
      gummyBear.body.bounce.set(0);
    }
    if (direction === 'left') {
      gummyBear.scale.setTo(WORLD.scale);
    }
    else if (direction === 'right') {
      gummyBear.scale.setTo(-WORLD.scale, WORLD.scale);
    }

    if (dropBullets) {
      gummyBear.dropTrigger = true;

      gummyBear.initFireRate = 800;
      // gummyBear.initBulletSpeed = 300;

      gummyBear.fireRate = 1500;
      gummyBear.nextFire = 0;
      // gummyBear.bulletSpeed = 300;
      gummyBear.bullets = this.createGummyBearBullets(game, type, true);
    }
  },

  createGummyBearBullets: function(game, type, drop) {
    var bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    if (type === 'red_gummy_bear') {
      bullets.createMultiple(50, 'red_gumball');
    }
    else if (type === 'green_gummy_bear') {
      bullets.createMultiple(50, 'green_gumball');
    }
    else if (type === 'yellow_gummy_bear') {
      bullets.createMultiple(50, 'yellow_gumball');
    }
    else if (type === 'orange_gummy_bear') {
      bullets.createMultiple(50, 'orange_gumball');
    }
    else if (type === 'blue_gummy_bear') {
      bullets.createMultiple(50, 'blue_gumball');
    }

    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    if (!drop) {
      bullets.setAll('body.allowGravity', false);
    }
    return bullets;
  },

  // TODO: ADD BULLET MOVEMENT
  updateGummyBearMovement: function(game) {
    game.physics.arcade.collide(this.gummyBears, WORLD.worldLayer);
    game.physics.arcade.overlap(PLAYER.sprite, this.gummyBears, function(player, gummyBear) {
      PLAYER.death(game);
    }, null, game);

    this.gummyBears.forEach(function(gummyBear) {
      if (gummyBear.cloudCollide) {
        // console.log(gummyBear.key);
        var onCloud = game.physics.arcade.collide(gummyBear, WORLD.clouds, function(sprite, platform) {
          // console.log(gummyBear.key);
          if (sprite.body.touching.down) {
            // Make player position follow platform deltaX and Y
            sprite.body.position.x = sprite.body.position.x + platform.deltaX;
            sprite.body.position.y = sprite.body.position.y + platform.deltaY;
          }
        });
      }

      // Gummy bear rotation
      if (gummyBear.isMoving) {
        if (gummyBear.angle > gummyBear.rotationLimit) {
          gummyBear.rotationDirection = -1;
        }
        else if (gummyBear.angle < -gummyBear.rotationLimit) {
          gummyBear.rotationDirection = 1;
        }
        gummyBear.angle += gummyBear.rotationDirection * 0.5;

        // Gummy bear movement
        if (game.physics.arcade.collide(MOB.gummyBears, WORLD.mobBlockLayer)) {
          gummyBear.moveDirection *= -1;
          gummyBear.scale.x *= -1;

        }
        gummyBear.moveSpeed = gummyBear.initMoveSpeed + (1 - UI.happyBarPercent) * 100;
        // console.log(gummyBear.moveSpeed);
        gummyBear.body.velocity.x = gummyBear.moveDirection * gummyBear.moveSpeed;
      }

      if (gummyBear.dropTrigger) {
        gummyBear.fireRate = gummyBear.initFireRate - (1 - UI.happyBarPercent) * (gummyBear.initFireRate / 2);
        if (game.time.now > gummyBear.nextFire && gummyBear.bullets.countDead() > 0) {
          gummyBear.nextFire = game.time.now + gummyBear.fireRate;
          var bullet = gummyBear.bullets.getFirstDead();
          bullet.reset(gummyBear.position.x, gummyBear.position.y + 10);
        }
      }

      game.physics.arcade.collide(gummyBear.bullets, WORLD.worldLayer, function(bullet, layer) {
        bullet.kill();
      });

      game.physics.arcade.overlap(PLAYER.sprite, gummyBear.bullets, function(player, bullet) {
        if (PLAYER.alive) {
          bullet.kill();
        }
        PLAYER.death(game);
      }, null, game);
    }, game);
  },

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
        bullets.createMultiple(1, 'green_gumball');
        bullets.createMultiple(1, 'red_gumball');
        bullets.createMultiple(1, 'blue_gumball');
      }
    }

    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('body.allowGravity', false);
    return bullets;
  },

  updateGumballMachineMovement: function(game) {
    game.physics.arcade.collide(this.gumballMachines, WORLD.worldLayer);
    MOB.gumballMachines.forEach(function(gumballMachine) {
      if (gumballMachine.triggered) {
        gumballMachine.animations.play('shoot').speed = gumballMachine.initSpeed + (1 - UI.happyBarPercent) * 10;
        gumballMachine.bulletSpeed = gumballMachine.initBulletSpeed + (1 - UI.happyBarPercent) * 70;
        gumballMachine.fireRate = gumballMachine.initFireRate - (1 - UI.happyBarPercent) * 1700;
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
    this.updateGummyBearMovement(game);
  },
};
