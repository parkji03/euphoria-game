Euphoria.Preloader=function(){this.preloadLogo=null,this.preloadBar=null},Euphoria.Preloader.prototype={preload:function(){this.time.advancedTiming=!0,this.preloadLogo=this.add.sprite(this.world.centerX,this.world.centerY-192,"logo"),this.preloadLogo.anchor.setTo(.5),this.preloadBar=this.add.sprite(this.world.centerX,this.world.centerY+128,"preload_bar"),this.preloadBar.anchor.setTo(.5),this.load.setPreloadSprite(this.preloadBar),this.load.image("sky","assets/sky.png"),this.load.image("ground","assets/platform.png"),this.load.image("star","assets/star.png"),this.load.spritesheet("dude","assets/dude.png",32,48),this.load.image("jg_1","assets/phaser_assets/backgrounds/jungle_parallax/jg_1.png"),this.load.image("jg_2","assets/phaser_assets/backgrounds/jungle_parallax/jg_2.png"),this.load.image("jg_3","assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png"),this.load.image("jg_4","assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png"),this.load.image("jg_5","assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png"),this.load.spritesheet("player","assets/phaser_assets/sprites/temp_player.png",23,38),this.load.spritesheet("dino_red","assets/phaser_assets/sprites/dino_red.png",18,18),this.load.spritesheet("dino_blue","assets/phaser_assets/sprites/dino_blue.png",18,18),this.load.spritesheet("dino_yellow","assets/phaser_assets/sprites/dino_yellow.png",18,18),this.load.spritesheet("dino_green","assets/phaser_assets/sprites/dino_green.png",18,18),this.load.image("background","assets/phaser_assets/backgrounds/background.png"),this.load.image("button","assets/phaser_assets/buttons/button.png"),this.load.tilemap("map_testmap","assets/phaser_assets/maps/map_testmap.json",null,Phaser.Tilemap.TILED_JSON),this.load.image("grass","assets/phaser_assets/tiles/grass.png"),this.load.image("spike","assets/phaser_assets/tiles/spike.png"),this.load.image("mob_block","assets/phaser_assets/tiles/mob_block.png"),this.load.image("happy_bar_outline","assets/phaser_assets/user_interface/happy_bar_outline.png"),this.load.image("happy_bar_progress","assets/phaser_assets/user_interface/happy_bar_progress.png"),this.load.image("background","assets/phaser_assets/backgrounds/background.png"),this.load.image("titlescreen","assets/phaser_assets/logos/title.png"),this.load.image("button","assets/phaser_assets/buttons/button.png"),this.load.tilemap("map_testmap","assets/phaser_assets/maps/map_testmap.json",null,Phaser.Tilemap.TILED_JSON),this.load.image("grass","assets/phaser_assets/tiles/grass.png"),this.load.image("spike","assets/phaser_assets/tiles/spike.png"),this.load.image("mob_block","assets/phaser_assets/tiles/mob_block.png")},create:function(){this.state.start("MainMenu")},update:function(){}};