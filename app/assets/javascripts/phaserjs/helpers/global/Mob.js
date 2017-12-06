var MOB = {

  gumballMachines: null,

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

  // enableGumballCollision: function(game) {
  //
  // },

  updateGumballMovement: function(game) {
    game.physics.arcade.collide(this.gumballMachines, WORLD.worldLayer);
    MOB.gumballMachines.forEach(function(gumballMachine) {
      if (gumballMachine.triggered) {
        gumballMachine.animations.play('shoot').speed = gumballMachine.initSpeed + (1 - UI.happyBarPercent) * 10;
      }
    }, game);
  },


  create: function(game) {

  },

  update: function(game) {
    this.updateGumballMovement(game);
  },
};
