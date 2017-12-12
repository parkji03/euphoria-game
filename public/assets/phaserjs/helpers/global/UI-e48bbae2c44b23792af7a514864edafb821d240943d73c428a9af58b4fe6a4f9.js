Number.prototype.pad=function(t){for(var e=String(this);e.length<(t||2);)e="0"+e;return e};var UI={fontStyle1:{font:"14px 8bit_wonder",fill:"#FFF",align:"center",stroke:"#000000",strokeThickness:6},fontStyle2:{font:"20px 8bit_wonder",fill:"#FFF",align:"center",stroke:"#000000",strokeThickness:6},fontStyle3:{font:"24px 8bit_wonder",fill:"#FFF",align:"center",stroke:"#000000",strokeThickness:6},fontStyle4:{font:"28px 8bit_wonder",fill:"#FFF",align:"center",stroke:"#000000",strokeThickness:6},deathCounterText:null,deathCount:0,deathUI:null,deathRetryText:null,deathRetryBackground:null,scoreText:null,scoreCount:0,honeyUI:null,backUI:null,menuButtonUI:null,menuTriggered:!1,menuOverlay:null,menu1:null,menu2:null,menu3:null,menu4:null,menu5:null,centerText:null,happyBarProgress:null,happyBarOutline:null,happyBarProgressLength:null,happyBarTenth:null,happyBarHundredth:null,happyBarPercent:null,halfTriggered:!1,bottomTextOverlay:null,bottomText:null,createMenu:function(t){this.menuTriggered=!0;var e=t.add.image(0,0,"backdrop_ui");e.fixedToCamera=!0,this.menuOverlay=t.add.image(t.camera.width/2,t.camera.height/2,"menu_ui"),this.menuOverlay.scale.setTo(2,1.5),this.menuOverlay.anchor.setTo(.5),this.menuOverlay.fixedToCamera=!0,this.menu1=t.add.text(t.camera.width/2,t.camera.height/2-110,"About",this.fontStyle3),this.menu1.fixedToCamera=!0,this.menu1.anchor.setTo(.5),this.menu1.inputEnabled=!0,this.menu1.events.onInputDown.add(function(){},t),this.menu2=t.add.text(t.camera.width/2,t.camera.height/2-60,"Rankings",this.fontStyle3),this.menu2.fixedToCamera=!0,this.menu2.anchor.setTo(.5),this.menu2.inputEnabled=!0,this.menu2.events.onInputDown.add(function(){},t),this.menu3=t.add.text(t.camera.width/2,t.camera.height/2,"Settings",this.fontStyle3),this.menu3.fixedToCamera=!0,this.menu3.anchor.setTo(.5),this.menu3.inputEnabled=!0,this.menu3.events.onInputDown.add(function(){},t),this.menu4=t.add.text(t.camera.width/2,t.camera.height/2+60,"Back to Main",this.fontStyle3),this.menu4.fixedToCamera=!0,this.menu4.anchor.setTo(.5),this.menu4.inputEnabled=!0,this.menu4.events.onInputDown.addOnce(function(){UI.menuTriggered=!1,MUSIC.click.play(),e.kill(),UI.menuOverlay.kill(),UI.menu1.kill(),UI.menu2.kill(),UI.menu3.kill(),UI.menu4.kill(),UI.menu5.kill(),MUSIC.world1Theme.stop(),MUSIC.worldChooserTheme.stop(),t.state.start("MainMenu")},t),this.menu5=t.add.text(t.camera.width/2,t.camera.height/2+120,"Close",this.fontStyle3),this.menu5.fixedToCamera=!0,this.menu5.anchor.setTo(.5),this.menu5.inputEnabled=!0,this.menu5.events.onInputDown.addOnce(function(){UI.menuTriggered=!1,MUSIC.click.play(),e.kill(),UI.menuOverlay.kill(),UI.menu1.kill(),UI.menu2.kill(),UI.menu3.kill(),UI.menu4.kill(),UI.menu5.kill()},t)},updateMenu:function(t){null!=this.menu1&&(this.menu1.input.pointerOver()?(this.menu1.addColor("#545253",0),UI.showBottomOverlay("Made with plain old JavaScript."),t.world.bringToTop(UI.bottomTextOverlay),t.world.bringToTop(UI.bottomText)):this.menu1.addColor("#FFFFFF",0)),null!=this.menu2&&(this.menu2.input.pointerOver()?(this.menu2.addColor("#545253",0),UI.showBottomOverlay("Don't bother, you're in last place."),t.world.bringToTop(UI.bottomTextOverlay),t.world.bringToTop(UI.bottomText)):this.menu2.addColor("#FFFFFF",0)),null!=this.menu3&&(this.menu3.input.pointerOver()?(this.menu3.addColor("#545253",0),UI.showBottomOverlay("I didn't implement a lot of settings yet."),t.world.bringToTop(UI.bottomTextOverlay),t.world.bringToTop(UI.bottomText)):this.menu3.addColor("#FFFFFF",0)),null!=this.menu4&&(this.menu4.input.pointerOver()?(this.menu4.addColor("#545253",0),UI.deathCount>10&&UI.deathCount<999?UI.showBottomOverlay(UI.deathCount+" deaths... Yeah I would give up too."):UI.showBottomOverlay("Yeah, I would give up too."),t.world.bringToTop(UI.bottomTextOverlay),t.world.bringToTop(UI.bottomText)):this.menu4.addColor("#FFFFFF",0)),null!=this.menu5&&(this.menu5.input.pointerOver()?(this.menu5.addColor("#545253",0),UI.showBottomOverlay("Back to dying by killer gummy bears... LOL"),t.world.bringToTop(UI.bottomTextOverlay),t.world.bringToTop(UI.bottomText)):this.menu5.addColor("#FFFFF",0))},createCenterText:function(t){this.centerText=t.add.text(t.camera.width/2,t.camera.height/2,"Testing Center Text",this.fontStyle3),this.centerText.anchor.setTo(.5),this.centerText.fixedToCamera=!0,this.centerText.visible=!1,this.centerText.signal=new Phaser.Signal,this.centerText.signal.add(function(e){UI.centerText.visible=!0,UI.centerText.text=e,t.time.events.add(1150,function(){UI.centerText.visible=!1})},t)},createBottomText:function(t){this.bottomTextOverlay=t.add.image(0,700,"overlay"),this.bottomTextOverlay.fixedToCamera=!0;var e={font:"20px 8bit_wonder",fill:"#FFF",align:"left",wordWrap:!0,wordWrapWidth:1100,stroke:"#000000",strokeThickness:6};this.bottomText=t.add.text(640,750,"",e),this.bottomText.anchor.setTo(.5),this.bottomText.fixedToCamera=!0,this.hideBottomOverlay()},showBottomOverlay:function(t){this.bottomText.text=t,this.bottomTextOverlay.visible=!0,this.bottomText.visible=!0},hideBottomOverlay:function(){this.bottomTextOverlay.visible=!1,this.bottomText.visible=!1},createDeathRetryText:function(t){var e={font:"30px 8bit_wonder",fill:"#CCC",align:"center",stroke:"#000000",strokeThickness:6};this.deathRetryText=t.add.text(t.camera.width/2,t.camera.height/2,"Press Spacebar to reset",e),this.deathRetryText.anchor.setTo(.5),this.deathRetryText.fixedToCamera=!0,this.deathRetryText.addColor("#FFF",6),this.deathRetryText.addColor("#CCC",15);var n=this.deathRetryText,i=1,o=1;t.time.events.loop(10,function(){i>1.2?o=-1:i<.9&&(o=1),i+=.005*o,n.scale.setTo(i)},t),this.deathRetryText.visible=!1},create:function(t){this.menuTriggered=!1,this.scoreCount=0,this.happyBarProgress=t.add.image(160,25,"happy_bar_progress"),this.happyBarProgress.scale.setTo(2),this.happyBarProgress.fixedToCamera=!0,this.happyBarProgressLength=this.happyBarProgress.width,this.happyBarTenth=this.happyBarProgressLength/10,this.happyBarHundredth=this.happyBarTenth/10;var e=this.happyBarProgress,n=(this.happyBarTenth,this.happyBarHundredth);this.happyBarOutline=t.add.image(10,10,"happy_bar_outline"),this.happyBarOutline.scale.setTo(2),this.happyBarOutline.fixedToCamera=!0,t.time.events.loop(500,function(){"WorldChooser"===t.state.current||(e.width>0&&(e.width=Math.floor(e.width-n)),e.width<0&&(e.width=0))},t),this.deathUI=t.add.image(590,10,"death_ui"),this.deathUI.scale.setTo(2),this.deathUI.fixedToCamera=!0,this.deathCounterText=t.add.text(664,28,this.deathCount.pad(3),this.fontStyle2),this.deathCounterText.fixedToCamera=!0,this.createDeathRetryText(t),this.honeyUI=t.add.image(758,10,"honey_ui"),this.honeyUI.scale.setTo(2),this.honeyUI.fixedToCamera=!0,this.scoreText=t.add.text(832,28,""+this.scoreCount.pad(3),this.fontStyle2),this.scoreText.fixedToCamera=!0,this.menuButtonUI=t.add.button(1204,10,"menu_button_ui",function(){UI.menuTriggered||(MUSIC.click.play(),UI.createMenu(t))},t),this.menuButtonUI.scale.setTo(2),this.menuButtonUI.fixedToCamera=!0,this.menuButtonUI.inputEnabled=!0,this.createCenterText(t),this.createBottomText(t)},update:function(t){this.hideBottomOverlay(),this.updateMenu(t),this.happyBarProgress.width<this.happyBarProgressLength/2&&!this.halfTriggered&&(PLAYER.emote.signal.dispatch("scramble"),this.halfTriggered=!0),this.happyBarProgress.width>this.happyBarProgressLength/2&&(this.halfTriggered=!1);var e=this.happyBarProgress.width/this.happyBarProgressLength;this.happyBarPercent=Math.round(100*e)/100},updateDeathCount:function(){"LOL"!=this.deathCount&&this.deathCount++,this.deathCount>999?(this.deathCount="LOL",this.deathCounterText.setText(this.deathCount)):this.deathCounterText.setText(this.deathCount.pad(3))}};