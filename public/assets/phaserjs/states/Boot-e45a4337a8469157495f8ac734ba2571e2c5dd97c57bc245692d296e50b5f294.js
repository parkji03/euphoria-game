var Euphoria={};Euphoria.Boot=function(){},Euphoria.Boot.prototype={init:function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!0,this.time.advancedTiming=!0,this.game.device.desktop},preload:function(){this.load.image("logo","assets/phaser_assets/logos/logo.png"),this.load.image("preload_bar","assets/phaser_assets/user_interface/preload_bar.png")},create:function(){this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.add.text(0,0,"text",{font:"1px 8bit_wonder",fill:"#FFFFFF"}),this.state.start("Preloader")}};