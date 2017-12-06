Euphoria.Preloader = function(game) {
  this.preloadLogo = null;
  this.preloadBar = null;

};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Euphoria.Preloader.prototype = {
  preload: function() {
    // Preload bar and logo image
    this.preloadLogo = this.add.sprite(this.world.centerX, this.world.centerY - 192, 'logo');
    this.preloadLogo.anchor.setTo(0.5);
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 128, 'preload_bar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    var textStyle = {
      font: '20px 8bit_wonder',
      fill: '#FFF',
      align: 'center',
      stroke: '#000000',
      strokeThickness: 6
    };
    var preloadText = this.add.text(this.world.centerX, this.world.centerY + 256, '', textStyle);
    preloadText.anchor.setTo(0.5);

    var loadingFlavorInt = getRandomInt(0, 5);
    if (loadingFlavorInt === 0) {
      preloadText.text = 'Loading gummy bears...';
    }
    else if (loadingFlavorInt === 1) {
      preloadText.text = 'Arming traps...';

    }
    else if (loadingFlavorInt === 2) {
      preloadText.text = 'Restocking gumball machines...';

    }
    else if (loadingFlavorInt === 3) {
      preloadText.text = 'Prepping bear suit...';

    }
    else if (loadingFlavorInt === 4) {
      preloadText.text = 'Sharpening spikes...';

    }
    else if (loadingFlavorInt === 5) {
      preloadText.text = 'Beautifying user interface...';

    }

    // Maps
    this.load.tilemap('map_worldchooser', 'assets/phaser_assets/maps/world_chooser.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('map_world1', 'assets/phaser_assets/maps/world1.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.tilemap('map_world2', 'assets/phaser_assets/maps/world2.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.tilemap('map_world3', 'assets/phaser_assets/maps/world3.json', null, Phaser.Tilemap.TILED_JSON);

    // Background
    this.load.image('grass_bg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png');
    this.load.image('grass_bg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png');
    this.load.image('grass_bg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png');

    this.load.image('plain_1', 'assets/phaser_assets/backgrounds/plain_sky/plain_1.png');
    this.load.image('plain_2', 'assets/phaser_assets/backgrounds/plain_sky/plain_2.png');
    this.load.image('plain_3', 'assets/phaser_assets/backgrounds/plain_sky/plain_3.png');

    this.load.image('gc_1', 'assets/phaser_assets/backgrounds/grass_castle/1.png');
    this.load.image('gc_2', 'assets/phaser_assets/backgrounds/grass_castle/2.png');
    this.load.image('gc_3', 'assets/phaser_assets/backgrounds/grass_castle/3.png');
    this.load.image('gc_4', 'assets/phaser_assets/backgrounds/grass_castle/4.png');
    this.load.image('gc_5', 'assets/phaser_assets/backgrounds/grass_castle/5.png');
    this.load.image('gc_6', 'assets/phaser_assets/backgrounds/grass_castle/6.png');
    this.load.image('gc_7', 'assets/phaser_assets/backgrounds/grass_castle/7.png');

    this.load.image('clouds', 'assets/phaser_assets/backgrounds/grass_castle/4.png');



    // Sprites
    this.load.spritesheet('phori', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);
    this.load.spritesheet('gumball_machine', 'assets/phaser_assets/sprites/gumball_machine.png', 25, 33);

    this.load.spritesheet('red_gumball', 'assets/phaser_assets/sprites/projectiles/red_projectile.png', 8, 8);
    this.load.spritesheet('blue_gumball', 'assets/phaser_assets/sprites/projectiles/blue_projectile.png', 8, 8);
    this.load.spritesheet('green_gumball', 'assets/phaser_assets/sprites/projectiles/green_projectile.png', 8, 8);
    this.load.spritesheet('orange_gumball', 'assets/phaser_assets/sprites/projectiles/orange_projectile.png', 8, 8);
    this.load.spritesheet('yellow_gumball', 'assets/phaser_assets/sprites/projectiles/yellow_projectile.png', 8, 8);
    this.load.spritesheet('pink_gumball', 'assets/phaser_assets/sprites/projectiles/pink_projectile.png', 8, 8);



    // UI
    this.load.image('overlay', 'assets/phaser_assets/temp/overlay.png');
    this.load.image('happy_bar_outline', 'assets/phaser_assets/user_interface/happy_bar_outline.png');
    this.load.image('happy_bar_progress', 'assets/phaser_assets/user_interface/happy_bar_progress.png');
    this.load.image('death_ui', 'assets/phaser_assets/user_interface/death_ui.png');
    this.load.image('honey_ui', 'assets/phaser_assets/user_interface/honey_ui.png');
    this.load.image('back_ui', 'assets/phaser_assets/user_interface/back_ui.png');
    this.load.image('menu_ui', 'assets/phaser_assets/user_interface/menu_ui.png');
    this.load.image('wooden_button_ui', 'assets/phaser_assets/user_interface/wooden_button_ui.png');
    this.load.image('backdrop_ui', 'assets/phaser_assets/user_interface/backdrop_ui.png');
    this.load.image('menu_button_ui', 'assets/phaser_assets/user_interface/menu_button_ui.png');
    

    // Temp
    this.load.image('wooden_sign', 'assets/phaser_assets/temp/wooden_sign.png');
    this.load.spritesheet('door', 'assets/phaser_assets/temp/door_39x50.png', 39, 50);
    this.load.spritesheet('pointer', 'assets/phaser_assets/temp/pointer.png', 20, 48);
    this.load.image('cloud_platform', 'assets/phaser_assets/temp/cloud_platform.png');
    this.load.spritesheet('gumball', 'assets/phaser_assets/temp/gumball.png', 64, 64);
    this.load.spritesheet('collectible', 'assets/phaser_assets/sprites/coin.png', 18, 18);


















    // Background parallax
    this.load.image('jg_1', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_1.png');
    this.load.image('jg_2', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_2.png');
    this.load.image('jg_3', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_3.png');
    this.load.image('jg_4', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_4.png');
    this.load.image('jg_5', 'assets/phaser_assets/backgrounds/jungle_parallax/jg_5.png');

    this.load.spritesheet('player', 'assets/phaser_assets/sprites/temp_player.png', 23, 38);
    this.load.spritesheet('dino_red', 'assets/phaser_assets/sprites/dinos/dino_red.png', 18, 18);
    this.load.spritesheet('dino_blue', 'assets/phaser_assets/sprites/dinos/dino_blue.png', 18, 18);
    this.load.spritesheet('dino_yellow', 'assets/phaser_assets/sprites/dinos/dino_yellow.png', 18, 18);
    this.load.spritesheet('dino_green', 'assets/phaser_assets/sprites/dinos/dino_green.png', 18, 18);

    this.load.image('player_food', 'assets/phaser_assets/sprites/food/food_34.png');

    // Intro screen
    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

    this.load.tilemap('main_menu_map', 'assets/phaser_assets/maps/main_menu_map.json', null, Phaser.Tilemap.TILED_JSON);

    // World
    this.load.tilemap('map_testmap', 'assets/phaser_assets/maps/map_testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('grass', 'assets/phaser_assets/tiles/grass.png');
    this.load.image('spike', 'assets/phaser_assets/tiles/spike.png');
    this.load.image('mob_block', 'assets/phaser_assets/tiles/mob_block.png');

    // User interface


    // Interactions
    this.load.spritesheet('emoticons', 'assets/phaser_assets/interactions/emoticons.png', 16, 16);

    // Title screen
    this.load.image('background', 'assets/phaser_assets/backgrounds/background.png');
    this.load.image('titlescreen', 'assets/phaser_assets/logos/title.png');
    this.load.image('button', 'assets/phaser_assets/buttons/button.png');

    // World
    this.load.tilemap('map_testmap', 'assets/phaser_assets/maps/map_testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('grass', 'assets/phaser_assets/tiles/grass.png');
    this.load.image('spike', 'assets/phaser_assets/tiles/spike.png');
    this.load.image('mob_block', 'assets/phaser_assets/tiles/mob_block.png');
  },

  create: function() {
    this.state.start('MainMenu');
  },

  update: function () {
  //	You don't actually need to do this, but I find it gives a much smoother game experience.
  //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
  //	You can jump right into the menu if you want and still play the music, but you'll have a few
  //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
  //	it's best to wait for it to decode here first, then carry on.

  //	If you don't have any music in your game then put the game.state.start line into the create function and delete
  //	the update function completely.

  // if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
  // {
  //   this.ready = true;
  //   this.state.start('MainMenu');
  // }
  }
};
