var MUSIC={jump:null,click:null,collect:null,hit:null,mainMenuTheme:null,worldChooserTheme:null,world1Theme:null,muteAll:function(){},create:function(l){null==this.jump&&(this.jump=l.add.audio("jump",.6,!1)),null==this.click&&(this.click=l.add.audio("click",1,!1)),null==this.collect&&(this.collect=l.add.audio("collect",.4,!1)),null==this.hit&&(this.hit=l.add.audio("hit",.6,!1)),null==this.mainMenuTheme&&(this.mainMenuTheme=l.add.audio("bit_quest",.5,!0)),null==this.worldChooserTheme&&(this.worldChooserTheme=l.add.audio("silly_fun",.5,!0)),null==this.world1Theme&&(this.world1Theme=l.add.audio("theme",.3,!0))},update:function(){},destroy:function(){}};