Euphoria.World2=function(){},Euphoria.World2.prototype={create:function(){MUSIC.world1Theme.isPlaying||MUSIC.world1Theme.play(),WORLD2.create(this),WORLD2_INTERACTION.create(this),MOB.create(this),PLAYER.create(this,10,614),UI.create(this),WORLD2.dispatchUI(this)},update:function(){PLAYER.update(this),MOB.update(this),WORLD.update(this),UI.update(this),WORLD2.update(this),WORLD2_INTERACTION.update(this)},render:function(){this.game.debug.text(this.game.time.fps||"--",10,100,"#00ff00"),this.game.debug.spriteInfo(PLAYER.sprite,10,116)}};