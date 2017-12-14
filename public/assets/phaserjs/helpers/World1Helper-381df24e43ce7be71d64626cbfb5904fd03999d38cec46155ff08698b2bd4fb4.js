var WORLD1={width:5760,height:1100,createSigns:function(e){WORLD.signs=e.add.group(),WORLD.signs.enableBody=!0,WORLD.createSign(e,100,622,WORLD.signs,"Keep your eye on the Sweet-o-Meter!"),WORLD.createSign(e,2417,334,WORLD.signs,"BEWARE OF FALLING GUMMY BEARS!")},createDoors:function(e){WORLD.doors=e.add.group(),WORLD.doors.enableBody=!0,WORLD.createDoor(e,5379,475,"World2",!0)},createClouds:function(e){WORLD.clouds=e.add.group();var a=WORLD.createCloud(e,820,1080,WORLD.clouds);WORLD.addCloudMotion(e,a,820,1080,3e3,"Sine.easeIn","Sine.easeOut",0,510);var l=WORLD.createCloud(e,2650,200,WORLD.clouds);WORLD.addCloudMotion(e,l,2650,200,3e3,"Sine.easeOut","Sine.easeIn",-500,0);var t=WORLD.createCloud(e,3350,200,WORLD.clouds);WORLD.addCloudMotion(e,t,3350,200,3e3,"Sine.easeIn","Sine.easeOut",-500,0)},bgClouds:null,bgCastle:null,bg1:null,bg2:null,bg3:null,createBackground:function(e){this.bg1=e.add.tileSprite(0,0,WORLD1.width,WORLD1.height,"gc_1"),this.bgClouds=e.add.tileSprite(0,0,WORLD1.width,WORLD1.height,"clouds"),this.bg2=e.add.tileSprite(0,0,WORLD1.width,WORLD1.height,"gc_2"),this.bgCastle=e.add.tileSprite(4740,350,1920,1080,"gc_5"),this.bgCastle.scale.setTo(.4),this.bg3=e.add.tileSprite(0,0,WORLD1.width,WORLD1.height,"gc_3")},updateBackground:function(e){this.bgClouds.tilePosition.x-=.07,this.bg2.x=.07*e.camera.x,this.bg3.x=.05*e.camera.x},dispatchUI:function(){UI.centerText.signal.dispatch("LEVEL 1")},create:function(e){this.ballTrapTriggered=!1,WORLD.enablePhysics(e),this.createBackground(e),WORLD.map=e.add.tilemap("map_world1"),WORLD.map.addTilesetImage("grass","grass"),WORLD.map.addTilesetImage("spike","spike"),WORLD.map.addTilesetImage("mob_block","mob_block"),WORLD.worldLayer=WORLD.map.createLayer("Layer1"),WORLD.worldLayer.setScale(WORLD.scale),WORLD.worldLayer.resizeWorld(),WORLD.mobBlockLayer=WORLD.map.createLayer("Mob Block Layer"),WORLD.mobBlockLayer.setScale(WORLD.scale),WORLD.mobBlockLayer.resizeWorld(),WORLD.map.setCollisionBetween(0,45,!0,WORLD.worldLayer),WORLD.map.setCollision([50],!0,WORLD.mobBlockLayer),WORLD.enableSpikeCollision(e),WORLD.mobBlockLayer.alpha=0,this.createClouds(e),this.createSigns(e),this.createDoors(e)},update:function(e){this.updateBackground(e),WORLD.updateDoorCollision(e),WORLD.updateSignCollision(e)}},WORLD1_INTERACTION={gumball:null,gumballTriggered:!1,createGumball:function(e){this.gumball=e.add.sprite(2e3,530,"gumball"),this.gumball.scale.setTo(2.25),e.physics.arcade.enable(this.gumball),this.gumball.animations.add("roll",[0,1,2,3,4,5,6,7],8,!0).speed=12,this.gumball.animations.play("roll"),this.gumball.checkWorldBounds=!0,this.gumball.events.onOutOfBounds.add(function(){WORLD1_INTERACTION.gumball.kill(),MOB.gumballMachines.children[0].triggered=!0},e)},createCollectibles:function(e){WORLD.collectibles=e.add.group()},createHoneycombs:function(e){WORLD.honeycombs=e.add.group(),WORLD.createHoneycomb(e,804,610,WORLD.honeycombs),WORLD.createHoneycomb(e,2341,537,WORLD.honeycombs)},createGumballMachines:function(e){MOB.gumballMachines=e.add.group();MOB.createGumballMachine(e,2154,610,MOB.gumballMachines,"left")},createGummyBears:function(e){MOB.gummyBears=e.add.group(),MOB.createGummyBear(e,1660,372,"green_gummy_bear",MOB.gummyBears,!1,"left",!1,!0),MOB.createGummyBear(e,1610,372,"yellow_gummy_bear",MOB.gummyBears,!1,"right",!1,!0),MOB.createGummyBear(e,550,410,"red_gummy_bear",MOB.gummyBears,!0,null,!1,!0),MOB.createGummyBear(e,3167,200,"yellow_gummy_bear",MOB.gummyBears,!0,null,!1,!1),MOB.createGummyBear(e,3350,200,"green_gummy_bear",MOB.gummyBears,!0,null,!1,!1),MOB.createGummyBear(e,2649,130,"orange_gummy_bear",MOB.gummyBears,!1,"left",!0,!0),MOB.createGummyBear(e,3349,130,"blue_gummy_bear",MOB.gummyBears,!1,"left",!0,!0)},create:function(e){this.gumballTriggered=!1,this.createGumball(e),this.createHoneycombs(e),this.createCollectibles(e),this.createGumballMachines(e),this.createGummyBears(e)},update:function(e){PLAYER.sprite.body.position.x>1300&&!this.gumballTriggered&&(e.physics.arcade.enable(this.gumball),this.gumball.body.velocity.x=-700,this.gumballTriggered=!0),this.gumball&&(e.physics.arcade.collide(this.gumball,WORLD.worldLayer),e.physics.arcade.overlap(PLAYER.sprite,this.gumball,function(){PLAYER.death(e)},null,e)),WORLD.updateHoneycombMovement(e),WORLD.enableHoneycombCollision(e),WORLD.updateCollectibleMovement(e),WORLD.enableCollectibleCollision(e)}};