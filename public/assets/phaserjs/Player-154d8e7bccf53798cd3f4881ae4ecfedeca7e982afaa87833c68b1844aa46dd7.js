function createPlayer(a){a.player=a.add.sprite(32,a.world.height-300,"player"),a.player.scale.setTo(a.hardScale,a.hardScale),a.player.animations.add("left-fall",[0,1],36,!0).speed=10,a.player.animations.add("left-jump",[2,3],36,!0).speed=10,a.player.animations.add("left-run",[4,5,6,7,8,9,10,11],36,!0).speed=13,a.player.animations.add("idle",[12,13,14,15,16,17,18,19,20,21,22,23],36,!0).speed=13,a.player.animations.add("right-run",[24,25,26,27,28,29,30,31],36,!0).speed=13,a.player.animations.add("right-jump",[32,33],36,!0).speed=10,a.player.animations.add("right-fall",[34,35],36,!0).speed=10,a.physics.arcade.enable(a.player),a.player.body.collideWorldBounds=!0,a.camera.follow(a.player,Phaser.Camera.FOLLOW_PLATFORMER),a.player.checkWorldBounds=!0,a.player.events.onOutOfBounds.add(function(){playerDeath(a)},a),a.map.setTileIndexCallback(a.spike_id,function(){playerDeath(a)},a,a.worldLayer)}function checkPlayerMobCollision(a){a.greenDinoGroup.forEach(function(e){a.player.overlap(e)&&playerDeath(a)},a)}function updatePlayerMovement(a){a.player.body.velocity.x=0;a.physics.arcade.collide(a.player,a.worldLayer);checkPlayerMobCollision(a),a.leftKey.isDown&&a.player.alive?(a.player.body.velocity.x=-1*a.playerVelocity,a.player.animations.play("left-run")):a.rightKey.isDown&&a.player.alive?(a.player.body.velocity.x=a.playerVelocity,a.player.animations.play("right-run")):a.player.animations.play("idle"),a.upKey.isDown&&a.player.alive&&(a.player.body.velocity.y=a.playerJump,a.player.body.velocity.y>0?a.player.animations.play("right-jump"):a.player.animations.play("left-jump")),a.player.body.velocity.y<0&&(a.player.body.velocity.x<0?a.player.animations.play("left-fall"):a.player.animations.play("right-fall")),a.player.body.velocity.y>0&&(a.player.body.velocity.x<0?a.player.animations.play("left-fall"):a.player.animations.play("right-fall"))}function playerDeath(a){a.player.alive&&(a.retryLabel=a.add.text(a.camera.width/2,a.camera.height/2-100,"Press 'Spacebar' to reset",{font:"30px Arial",fill:"#FFF"}),a.retryLabel.anchor.setTo(.5,.5),a.retryLabel.fixedToCamera=!0,a.player.alive=!1,updateDeathLabel(a),a.retryKey=a.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR),a.retryKey.onDown.add(function(){a.player.kill(),a.state.restart()},a))}