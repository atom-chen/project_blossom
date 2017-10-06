/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-10-12
 ** Brief:	新手引导界面
 ***********************************************************************/
UINewGuide = UIDEFINE("UINewGuide", NewGuideUI);

UINewGuide.onStart = function(steps) {
	//设置背景
	var bg = this.getChild("game_bg").skin = ResURL("image_map_bg_001.png") ;
	this.uiNode = this.getChild("box_middle");
	this.steps = steps || 1;

	this.setImageWord();
	
	if(1 == this.steps){
		this.createStakeGuide();
	}else if(2 == this.steps){
		this.createStartGuide();
	}else if(3 == this.steps){
		this.createAutoGuide();
	}else if(4 == this.steps){
		this.createAwardGuide();
	}else if(5 == this.steps){
		this.createProgressGuide();
	}else if(6 == this.steps){
		this.createBottleGuide();
	}else if(7 == this.steps){
		this.sureClick();
	}
	
	//this.node.addChild(maskSp);

	//触摸层
	this.onClick(this.getChild("game_touch"),function(){
		var steps = this.steps + 1;
		this.close();
		UINewGuide.openFront(true, true, false,steps);
	}, this, false, true);
	
	//用来测试坐标
	Laya.stage.on("mousemove", this, function(){
		//console.log("36++++++++++++++++",Laya.stage.mouseX,Laya.stage.mouseY);
		//maskSp.x = Laya.stage.mouseX;
		//maskSp.y = Laya.stage.mouseY;
	});
};

//根据指引，设置文字
UINewGuide.setImageWord = function() {
	for(var i = 1; i <= 6; ++i){	
		var img = this.getChild("img_word_" + i);
		img.visible = !(this.steps != i);
	}
	this.getChild("img_word_7").visible = false;
	this.getChild("btn_sure").visible = false;
	this.getChild("btn_sure").mouseEnabled = false;
	this.getChild("game_touch").mouseEnabled = true;
	if(this.steps == 7){
		this.getChild("img_word_7").visible = true;
		this.getChild("btn_sure").visible = true;
		this.getChild("btn_sure").mouseEnabled = true;
		this.getChild("game_touch").mouseEnabled = false;
		this.uiNode.visible = false;
		this.getChild("game_touch").mouseThrough = false;
	}
};

//赌注引导
UINewGuide.createStakeGuide = function() {
	//左边按钮灰色
	this.getChild("btn_left").gray = true;
	//赌注mask
	var maskSp =  new laya.ui.Image("ui/image_score_back_01.png");
	maskSp.sizeGrid = "14,56,22,42";
	maskSp.width = 580;
	maskSp.height = 84;
	this.uiNode.mask = maskSp;
	maskSp.pos(-270, 190);
};

//创建开始引导
UINewGuide.createStartGuide = function() {
	//开始mask
	var	maskSp = new Laya.Sprite();
	maskSp.loadImage("ui/button_start.png");
	maskSp.pivot(0, 0);
	this.uiNode.mask = maskSp;
	maskSp.pos(297, 128);
};

//创建自动消除引导
UINewGuide.createAutoGuide = function() {
	//自动消除mask
	var	maskSp = new Laya.Sprite();
	maskSp.loadImage("ui/button_auto.png");
	maskSp.pivot(0, 0);
	this.uiNode.mask = maskSp;
	maskSp.pos(309, 205);
};

//创建奖励引导
UINewGuide.createAwardGuide = function() {
	//奖励mask
	var maskSp =  new laya.ui.Image("ui/image_score_back_01.png");
	maskSp.sizeGrid = "14,56,22,42";
	maskSp.width = 205;
	maskSp.height = 76;
	this.uiNode.mask = maskSp;
	maskSp.pos(-460, 116);
};

//创建进度条引导
UINewGuide.createProgressGuide = function() {
	//进度条创建
	this.mProgress = laya.createProgress(ResURL("image_progress_bg.png"), ResURL("image_progress_bar.png"), ResURL("image_progress_mask.png"), 1.5);
	this.mProgress.rotation = 270;
	this.mProgress.pos(230, 380);
	this.uiNode.addChild(this.mProgress);
    this.mProgress.setValue(100);
	//进度条mask
	var maskSp = new laya.ui.Image(ResURL("image_progress_bar.png"));
	maskSp.rotation = 270;
	this.uiNode.mask = maskSp;
	maskSp.pos(-250, 110);
};

//创建花瓶引导
UINewGuide.createBottleGuide = function() {
	//花瓶
	this.mBonus2Box = laya.createArmature(ResURL("b2zhuangtaidonghua.png"),ResURL("b2zhuangtaidonghua.sk"), false, null, null, null, this);
    this.mBonus2Box.pos(850,235);
    this.uiNode.addChild(this.mBonus2Box);
    this.mBonus2Box.play("ui_bonus02_1",true);
	//花瓶mask
	var maskSp =  new laya.ui.Image("ui/image_ui_level_01.png");
	maskSp.width = 132;
	maskSp.height = 180;
	this.uiNode.mask = maskSp;
	maskSp.pos(300, -205);
};

//最后一步确认
UINewGuide.sureClick = function() {
	this.onClick(this.getChild("btn_sure"), function(){
		this.close();
	}, this, true, true);
};
