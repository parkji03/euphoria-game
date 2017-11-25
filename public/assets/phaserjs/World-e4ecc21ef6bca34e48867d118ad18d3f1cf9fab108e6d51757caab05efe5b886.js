function createGamePhysics(a){a.physics.startSystem(Phaser.Physics.ARCADE),a.physics.arcade.gravity.y=a.gameGravity,a.physics.arcade.checkCollision.down=!1}function createBackgroundParallax(a){var e=1920,r=1080,l=5;a.jg_1=a.add.tileSprite(0,0,e,r,"jg_1"),a.jg_1.scale.setTo(l,l),a.jg_2=a.add.tileSprite(0,0,e,r,"jg_2"),a.jg_2.scale.setTo(l,l),a.jg_3=a.add.tileSprite(0,0,e,r,"jg_3"),a.jg_3.scale.setTo(l,l),a.jg_4=a.add.tileSprite(0,0,e,r,"jg_4"),a.jg_4.scale.setTo(l,l),a.jg_5=a.add.tileSprite(0,0,e,r,"jg_5"),a.jg_5.scale.setTo(l,l)}function createGameWorld(a){createGamePhysics(a),createBackgroundParallax(a),a.map=a.add.tilemap("map_testmap"),a.map.addTilesetImage("grass","grass"),a.map.addTilesetImage("spike","spike"),a.map.addTilesetImage("mob_block","mob_block"),a.worldLayer=a.map.createLayer("World Layer"),a.worldLayer.setScale(a.hardScale),a.worldLayer.resizeWorld(),a.mobBlockLayer=a.map.createLayer("Mob Block Layer"),a.mobBlockLayer.setScale(a.hardScale),a.mobBlockLayer.resizeWorld(),a.map.setCollision([0,1,2,3,4,5,15,16,17,18,19,20,21,28,30,31],!0,a.worldLayer),a.map.setCollision([47],!0,a.mobBlockLayer),a.mobBlockLayer.alpha=0}function updateBackgroundParallax(a){a.jg_2.x=.01*a.camera.x,a.jg_3.x=.02*a.camera.x,a.jg_4.x=.05*a.camera.x,a.jg_5.x=.1*a.camera.x}