/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-10-11
 ** Brief:	关卡升星界面
 ***********************************************************************/
UILevelUp = UIDEFINE("UILevelUp", LevelUpUI);

UILevelUp.onStart = function(paramArr) {
	this.getChild("label_level_now").text = "恭喜您通过" + paramArr[0] + "!";
	this.getChild("label_level_next").text = "接下来您将挑战" + paramArr[1] + "!";
	this.onClick(this.root, function(){
		this.close();
	}, this, false, true);
	
	laya.callAfter(G.LEVEL_UP_STAY, function(){
		if(this.root){
			laya.fadeOut(this.root, G.LEVEL_UP_FADE, function(){
				this.close();
			}, this);
		}
	}, this);
};

