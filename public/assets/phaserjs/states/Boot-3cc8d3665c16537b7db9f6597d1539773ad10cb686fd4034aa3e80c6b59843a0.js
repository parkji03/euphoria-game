var Euphoria={};Euphoria.Boot=function(){},Euphoria.Boot.prototype={init:function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!0,this.game.device.desktop},preload:function(){this.load.image("logo","assets/phaser_assets/logos/title.png"),this.load.image("preload_bar","assets/phaser_assets/user_interface/preload_bar.png")},create:function(){this.state.start("Preloader")}};