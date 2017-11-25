Euphoria.Game=function(t){this.game=t,this.canvasWidth=1280,this.canvasHeight=800,this.gameGravity=2e3,this.playerVelocity=600,this.playerJump=-700,this.hardScale=1.5,this.spike_id=46,this.jg_1=null,this.jg_2=null,this.jg_3=null,this.jg_4=null,this.jg_5=null,this.map=null,this.worldLayer=null,this.mobBlockLayer=null,this.player=null,this.greenDinoVelocity=200,this.greenDinoGroup=null,this.retryKey=null,this.retryLabel=null,this.deathCount=0,this.deathLabel=null,this.happyBarOutline=null,this.happyBarProgress=null,this.happyBarTenth=null,this.happyBarHundredth=null,this.upKey=null,this.leftKey=null,this.rightKey=null},Euphoria.Game.prototype={create:function(){createGameWorld(this),createGreenDinoGroup(this),createPlayer(this),createDeathLabel(this),createGameKeys(this),createHappyBar(this)},update:function(){updatePlayerMovement(this),updateGreenDinoGroupMovement(this),updateBackgroundParallax(this)},render:function(){this.game.debug.text(this.game.time.fps||"--",1260,14,"#00ff00"),this.game.debug.spriteInfo(this.player,800,32)}};