var WORLD_CHOOSER={door1Locked:!1,door2Locked:!0,door3Locked:!0,gc1:null,gc2:null,gc3:null,gc4:null,gc5:null,gc6:null,gc7:null,createSigns:function(e){WORLD.signs=e.add.group(),WORLD.signs.enableBody=!0,WORLD.createSign(e,38,600,WORLD.signs,'Use  " W A S D "  to move.')},createDoors:function(e){WORLD.doors=e.add.group(),WORLD.doors.enableBody=!0,WORLD.createDoor(e,470,403,"World1",!1),WORLD.createDoor(e,928,139,"World2",!0),WORLD.createDoor(e,1384,403,"World3",!0),WORLD.doors.children[1].locked=this.door2Locked,WORLD.doors.children[2].locked=this.door3Locked},createPointer:function(e,o){var r=e.add.sprite(o.position.x+43,o.position.y-80,"pointer");return r.scale.setTo(1.5),r.animations.add("point",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],24,!0),r.animations.play("point"),r.visible=!1,r},createPointers:function(e){WORLD.doors.children[0].pointer=this.createPointer(e,WORLD.doors.children[0]),WORLD.doors.children[1].pointer=this.createPointer(e,WORLD.doors.children[1]),WORLD.doors.children[2].pointer=this.createPointer(e,WORLD.doors.children[2])},create:function(e){WORLD.enablePhysics(e),MUSIC.worldChooserTheme.play(),this.gc1=e.add.tileSprite(0,0,1920,1080,"gc_1"),this.gc2=e.add.tileSprite(0,0,1920,1080,"gc_2"),this.gc5=e.add.tileSprite(600,270,1920,1080,"gc_5"),this.gc3=e.add.tileSprite(0,0,1920,1080,"gc_3"),this.gc4=e.add.tileSprite(0,0,1920,1080,"gc_4"),this.gc5.scale.setTo(.5),WORLD.map=e.add.tilemap("map_worldchooser"),WORLD.map.addTilesetImage("grass","grass"),WORLD.worldLayer=WORLD.map.createLayer("Layer1"),WORLD.worldLayer.setScale(WORLD.scale),WORLD.worldLayer.resizeWorld(),WORLD.map.setCollisionBetween(0,45,!0,WORLD.worldLayer),this.createDoors(e),this.createPointers(e),this.createSigns(e)},update:function(e){WORLD.updateDoorCollision(e),WORLD.updateSignCollision(e),this.gc4.tilePosition.x-=.06,this.gc2.x=.08*e.camera.x,this.gc3.x=.04*e.camera.x,this.gc4.x=.03*e.camera.x,WORLD.doors.forEach(function(e){e.locked||(e.pointer.visible=!0)},e)}};