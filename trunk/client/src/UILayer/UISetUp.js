/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	设置界面
 ***********************************************************************/
UISetUp = UIDEFINE("UISetUp", SetUpUI);

UISetUp.onStart = function() {
    // 关闭按钮
    this.onClick(this.getChild("btn_close"), function() {
        this.close();
    }, this, true, true);
   
    // 音乐按钮
    var isMusicOn = AudioModel.isMusicEnabled();
    var musicBtn = this.getChild("btn_music");
    this.loadSkinByState(musicBtn, isMusicOn);
    this.onClick(this.getChild("btn_music"), function() {
        isMusicOn = !isMusicOn;
        AudioModel.setMusicEnabled(isMusicOn);
        if (isMusicOn) {
			var levelData = DataTB.get("level_tplt", Controller.getLevelId(), true);
            AudioModel.playMusic(levelData.music);
            //AudioModel.playMusic(1001);
        }
        UISetUp.loadSkinByState(musicBtn, isMusicOn);
    }, this. true, true);
    // 声音按钮
    var isSoundOn = AudioModel.isSoundEnabled();
    var effectBtn = this.getChild("btn_effect");
    this.loadSkinByState(effectBtn, isSoundOn);
    this.onClick(this.getChild("btn_effect"), function() {
        isSoundOn = !isSoundOn;
        AudioModel.setSoundEnabled(isSoundOn);
        UISetUp.loadSkinByState(effectBtn, isSoundOn);
    }, this, true, true);
   //游戏说明
   var desBtn = this.getChild("btn_des");
   this.onClick(desBtn, function() {
        UIGamePlayDes.openFront(true, true, true);
    }, this, true, true);
};

//根据开关状态，设置皮肤
UISetUp.loadSkinByState = function(node, state){
    if(node.name == "btn_effect"){
        node.pos(557,200);
		node.skin = "ui/button_switch_02.png";
        if(state){
            node.pos(607,200);
			 node.skin = "ui/button_switch_01.png";
            return ;
        }
    }else if(node.name == "btn_music"){
        node.pos(346,200);
		node.skin = "ui/button_switch_02.png";
        if(state){
            node.pos(392,200);
			node.skin = "ui/button_switch_01.png";
            return ;
        }
    }
};