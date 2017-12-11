var WORLD_CHOOSER = {
  // doors: null,
  door1Locked: false,
  // TODO: Change for production
  door2Locked: false,
  door3Locked: true,

  gc1: null,
  gc2: null,
  gc3: null,
  gc4: null,
  gc5: null,
  gc6: null,
  gc7: null,

  createSigns: function(game) {
    WORLD.signs = game.add.group();
    WORLD.signs.enableBody = true;

    WORLD.createSign(game, 38, 600, WORLD.signs, 'Use  \" W A S D \"  to move.');
  },

  // createDoor: function(game, x, y) {
  //   var door = this.doors.create(x, y, 'door');
  //   door.scale.setTo(3);
  //   door.body.allowGravity = false;
  //   door.animations.add('open', [0, 1, 2, 3, 4], 5, true).onComplete.add(function() {
  //     // console.log(door.startState);
  //     // TODO: Do something when door opens
  //   });
  //   door.animations.frame = 0;
  // },

  createDoors: function(game) {
    WORLD.doors = game.add.group();
    WORLD.doors.enableBody = true;

    WORLD.createDoor(game, 470, 403, 'World1', false);
    WORLD.createDoor(game, 928, 139, 'World2', true);
    WORLD.createDoor(game, 1384, 403, 'World3', true);

    WORLD.doors.children[1].locked = this.door2Locked;
    WORLD.doors.children[2].locked = this.door3Locked;

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
    WORLD.doors.children[0].pointer = this.createPointer(game, WORLD.doors.children[0]);
    WORLD.doors.children[1].pointer = this.createPointer(game, WORLD.doors.children[1]);
    WORLD.doors.children[2].pointer = this.createPointer(game, WORLD.doors.children[2]);
  },

  create: function(game) {
    WORLD.enablePhysics(game);
    MUSIC.worldChooserTheme.play();

    // WORLD.createBackground(game);
    this.gc1 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_1');
    this.gc2 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_2');
    this.gc5 = game.add.tileSprite(600, 270, 1920, 1080, 'gc_5');
    this.gc3 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_3');
    this.gc4 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_4');
    // this.gc6 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_6');
    // this.gc7 = game.add.tileSprite(0, 0, 1920, 1080, 'gc_7');

    // this.gc1.scale.setTo(0.667);
    // this.gc2.scale.setTo(0.667);
    // this.gc3.scale.setTo(0.667);
    // this.gc4.scale.setTo(0.667);
    this.gc5.scale.setTo(0.50);
    // this.gc6.scale.setTo(0.667);
    // this.gc7.scale.setTo(0.667);




    WORLD.map = game.add.tilemap('map_worldchooser');
    WORLD.map.addTilesetImage('grass', 'grass');
    WORLD.worldLayer = WORLD.map.createLayer('Layer1');
    WORLD.worldLayer.setScale(WORLD.scale);
    WORLD.worldLayer.resizeWorld();
    WORLD.map.setCollisionBetween(0, 45, true, WORLD.worldLayer);

    this.createDoors(game);
    this.createPointers(game);
    this.createSigns(game);
  },



  update: function(game) {
    // this.updateDoorCollision(game);
    WORLD.updateDoorCollision(game);
    WORLD.updateSignCollision(game);

    // Move clouds
    this.gc4.tilePosition.x -= 0.06;

    this.gc2.x = game.camera.x * 0.08;
    this.gc3.x = game.camera.x * 0.04;
    this.gc4.x = game.camera.x * 0.03;
    // this.gc6.x = game.camera.x * 0.02;
    // this.gc7.x = game.camera.x * 0.01;


    // If the door is locked, no pointers...
    WORLD.doors.forEach(function(door) {
      if (!door.locked) {
        door.pointer.visible = true;
      }
    }, game);
  },
};
