var WORLD_CHOOSER = {
  doors: null,
  door1Locked: false,
  door2Locked: true,
  door3Locked: true,

  createDoor: function(game, x, y) {
    var door = this.doors.create(x, y, 'door');
    door.scale.setTo(3);
    door.body.allowGravity = false;
    door.animations.add('open', [0, 1, 2, 3, 4], 5, true).onComplete.add(function() {
      // console.log(door.startState);
      // TODO: Do something when door opens
    });
    door.animations.frame = 0;
  },

  createDoors: function(game) {
    this.doors = game.add.group();
    this.doors.enableBody = true;

    this.createDoor(game, 470, 403);
    this.createDoor(game, 928, 139);
    this.createDoor(game, 1384, 403);

    this.doors.children[0].state = 'World1';
    this.doors.children[0].locked = this.door1Locked;
    this.doors.children[1].state = 'World2';
    this.doors.children[1].locked = this.door2Locked;
    this.doors.children[2].state = 'World3';
    this.doors.children[2].locked = this.door3Locked;

  },

  createPointer: function(game, door) {
    var pointer = game.add.sprite(door.position.x + 43, door.position.y - 80, 'pointer');
    pointer.scale.setTo(WORLD.scale);
    pointer.animations.add('point', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 24, true);
    pointer.animations.play('point');
    pointer.visible = false;
    return pointer;
  },

  createPointers: function(game) {
    this.doors.children[0].pointer = this.createPointer(game, this.doors.children[0]);
    this.doors.children[1].pointer = this.createPointer(game, this.doors.children[1]);
    this.doors.children[2].pointer = this.createPointer(game, this.doors.children[2]);
  },

  create: function(game) {
    WORLD.enablePhysics(game);
    WORLD.createBackground(game);
    WORLD.map = game.add.tilemap('map_worldchooser');
    WORLD.map.addTilesetImage('grass', 'grass');
    WORLD.worldLayer = WORLD.map.createLayer('Layer1');
    WORLD.worldLayer.setScale(WORLD.scale);
    WORLD.worldLayer.resizeWorld();
    WORLD.map.setCollisionBetween(0, 45, true, WORLD.worldLayer);

    this.createDoors(game);
    this.createPointers(game);
  },

  updateDoorCollision(game) {
    game.physics.arcade.overlap(PLAYER.sprite, this.doors, function(player, door) {
      if (door.animations.currentAnim.frame === 4) {
        game.time.events.add(500, function() {
          game.state.start(door.state);
        });
      }
      else {
        if (door.locked) {
          UI.showBottomOverlay("This door is locked.");
        }
        else {
          // Door is unlocked... so player can press E to travel to world
          UI.showBottomOverlay("Press E to open the door.");
          if (PLAYER.keyE.isDown) {
            PLAYER.alive = false;
            door.animations.play('open', 8, false);
          }
        }
      }
    }, null, game);
  },

  update: function(game) {
    UI.hideBottomOverlay();
    this.updateDoorCollision(game);

    // If the door is locked, no pointers...
    this.doors.forEach(function(door) {
      if (!door.locked) {
        door.pointer.visible = true;
      }
    }, game);
  },
};
