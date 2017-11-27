function createGreenDinoGroup(e){e.greenDinoGroup=e.add.group(),e.greenDinoGroup.enableBody=!0,addGreenDino(e,420,750),addGreenDino(e,1500,800)}function addGreenDino(e,a,i){var n=e.greenDinoGroup.create(a,i,"dino_green");n.scale.setTo(e.hardScale,e.hardScale),e.physics.arcade.enable(n),n.body.collisionWorldBounds=!0;var o=Math.floor(2*Math.random());n.mob_direction=1==o?1:-1,n.animations.add("left-charge",[5,4,3,2,1,0],48,!0).speed=15,n.animations.add("left-crouch",[6],48,!0),n.animations.add("left-hurt",[10,9,8,7],48,!0).speed=4,n.animations.add("left-kick",[13,12,11],48,!0).speed=5,n.animations.add("left-walk",[19,18,17,16,15,14],48,!0).speed=8,n.animations.add("left-idle",[23,22,21,20],48,!0).speed=6,n.animations.add("right-idle",[24,25,26,27],48,!0).speed=6,n.animations.add("right-walk",[28,29,30,31,32,33],48,!0).speed=8,n.animations.add("right-kick",[34,35,36],48,!0).speed=5,n.animations.add("right-hurt",[37,38,39,40],48,!0).speed=4,n.animations.add("right-crouch",[41],48,!0),n.animations.add("right-charge",[42,43,44,45,46,47],48,!0).speed=15}function updateGreenDinoGroupMovement(e){e.greenDinoGroup.forEach(function(a){e.physics.arcade.collide(a,e.worldLayer),e.physics.arcade.collide(a,e.mobBlockLayer)&&(a.mob_direction*=-1),a.body.velocity.x=a.mob_direction*e.greenDinoVelocity,a.body.velocity.x>0?a.animations.play("right-charge"):a.body.velocity.x<0?a.animations.play("left-charge"):a.animations.play("right-idle")},e)}