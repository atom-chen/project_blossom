/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	游戏界面
 ***********************************************************************/
UIGame = UIDEFINE("UIGame", GameUI);

UIGame.onStart = function() {
	//瓢虫贝塞尔曲线动画
	this.ladyBirdAction();
    // 按钮点击事件注册
    this.onClick(this.getChild("btn_set"), this.onClickBtnSet, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
    this.onClick(this.getChild("btn_auto"), this.onClickBtnAuto, this, true, true);
    this.onClick(this.getChild("btn_left"), this.onClickBtnLeft, this, true, true);
    this.onClick(this.getChild("btn_right"), this.onClickBtnRight, this, true, true);
    this.onClick(this.getChild("btn_stake1"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake2"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake3"), this.onClickBtnStake, this, true, true);
	this.onClick(this.getChild("btn_charge"), this.onClickBtnCharge, this, true, true);
    if (G.SHOW_FPS) {
        this.onClick(this.getChild("image_small_map"), this.onClickImageSmallMap, this, true, true);
    }
    this.bind(EventDef["ED_PROGRESS_BONUS1"], this.updateProgress);
    this.bind(EventDef["ED_PROGRESS_BONUS2"], this.bonus2Up);
    this.bind(EventDef["ED_ADD_TO_LIST"], this.onAddToList);
    this.bind(EventDef["ED_ON_BONUS"], this.onBonus);
    this.bind(EventDef["ED_LEVEL_INFO"], this.updateLevelInfo);
	this.bind(EventDef["ED_LEVEL_CLEAR"], this.levelReset);
	this.bind(EventDef["ED_LEVEL_COIN"], this.updateTimesCoin);
    this.bind(EventDef["ED_LEVEL_AUTO_TIMES"], this.updateLeftTimes);
    // 数据初始化
    this.mCoin = 1000;                          // 赛豆
    this.mAward = 0;                            // 奖励
    this.mStakeIdx = 1;                         // 下注索引值(>=1)
    this.mStake = 1;                            // 下注
    // 逻辑初始化
    this.changeMainAreaZOrder();
    this.initStake();
    this.initList();
	this.updateCoin(0);
    this.updateAward(0);
    this.resetProgress();
    this.drawBonus2Box();
    Controller.getComp("ControllerMinimap").show(this.getChild("image_small_map"), 29, 40, true);
    Controller.onLevel(true, true);
    this.setStartBtnState(false);
	Controller.onInitDrop(function() {
        this.setStartBtnState(true);
		UINewGuide.openFront(true, true, false);
    }, this);
};

//点击重置按钮
UIGame.onClickBtnCharge = function(){
	console.log("点击充值了++++++++++++++++++++");
}

// 改变地图区域灰色图片的层级
UIGame.changeMainAreaZOrder = function() {
    var imageMainArea = this.getChild("image_main_area");
    if (!imageMainArea) {
        return;
    }
    var parent = Controller.getView().getMapLayer();
    if (!parent) {
        return;
    }
    var worldPos = laya.getWorldPosition(imageMainArea);
    var localPos = laya.getLocalPosition(parent, worldPos)
    imageMainArea.pos(localPos.x, localPos.y);
    laya.changeParent(imageMainArea, parent);
};

// 设置关卡名称
UIGame.setLevelName = function(name) {
     this.getChild("label_level").text = name;
};

// 获取当前以及下一关的关卡的等级和星级
UIGame.getLevelStarInfo = function(levelId, starNum) {
    var arr = [];
	var levelData = DataTB.get("level_tplt", levelId, true);
	var nextId = levelId + 1 ;
	var nextStar = starNum;
	if(levelId >= 8){
		nextId = 1;
	}
	if(nextStar >= 3){
		nextStar = 1;
	}
	var nextLevelData = DataTB.get("level_tplt", levelId, true);
	arr[0] = levelData.name + "-" + (starNum - 1);
	arr[1] = nextLevelData.name + "-" + nextStar;
	return arr;
};

//星级动画
UIGame.starAction = function(node){
    var ani = laya.createArmature(ResURL("ditushengji.png"), ResURL("ditushengji.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        node.skin = "ui/image_star.png";
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ue_level_star", false);
    ani.pos(16, 17);
    node.addChild(ani);
}

//升级动画
UIGame.levelUpAction = function(callBack){
    var ani = laya.createArmature(ResURL("ditushengji.png"), ResURL("ditushengji.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        callBack.apply(this, []);
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ui_levelup", false);
    ani.pos(480, 250);
    this.node.addChild(ani);
}

//过关动画
UIGame.levelPassAction = function(callBack){
    var ani = laya.createArmature(ResURL("guanqiaguoguan.png"), ResURL("guanqiaguoguan.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        callBack.apply(this, []);
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ui_mission_clear", false);
    ani.pos(490, 250);
    this.node.addChild(ani);
}

// 设置关卡星级
UIGame.setLevelStar = function(star, levelId) {
    for (var i = 1; i <= G.MAX_STAR; ++i) {
        var starImage = this.getChild("image_star" + i);
        if (i > star) {
            starImage.skin = "ui/image_star_gray.png";
        } else {
            if(i > (this.mLastStar || 1)){
                this.starAction(starImage);
				//var arr = this.getLevelStarInfo(levelId, star);
				//UILevelUp.openFront(true, true, true, arr);
            }else{
                starImage.skin = "ui/image_star.png";
            }
        }
    }
     this.mLastStar = star;
};

// 格式化钱币
UIGame.formatMoney = function(money, bit) {
    bit = (isNaN(bit) || bit < 0 || bit > 20) ? 0 : bit;
    money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(bit) + "";
    var integer = money.split(".")[0].split("").reverse();
    var decimals = money.split(".")[1];
    var str = "";
    for (var i = 0; i < integer.length; ++i) {
        str += integer[i] + (0 == (i + 1)%3 && (i + 1) != integer.length ? "," : "");
    }
    return str.split("").reverse().join("") + (decimals ? ("." + decimals) : "");
};

// 更新赛豆
UIGame.updateCoin = function(reduceCoin) {
    reduceCoin = isNaN(reduceCoin) ? 0 : reduceCoin;
    if (reduceCoin > this.mCoin) {
        return false;
    }
    this.mCoin -= reduceCoin;
    // 设置到控件
    this.getChild("label_coin").text = this.formatMoney(this.mCoin, 2);
    return true;
}

// 更新赛豆
UIGame.updateTimesCoin = function(types) {
    // 添加奖励所得赛豆
	if(1 == types){
		this.updateCoin(-this.mAward);
	}else if(2 == types){
		this.updateCoin(this.mStake);
	}
}

// 获取要播放的奖励动画的索引
UIGame.getAwardActionIndex = function(addAward) {
    var times = addAward / this.mStake;
    if(times == 0){
        return 0;
    }
    var length = G.AWARD_TIMES.length;
    if(times >= G.AWARD_TIMES[length - 1]){
        return G.AWARD_TIMES.length;
    }
    for(var key in G.AWARD_TIMES){
        if ( G.AWARD_TIMES[key] >= times){
            var index = parseInt(key) + 1;
            return index;
        }
    }
    return 0;
};

// 更新奖励
UIGame.updateAward = function(addAward) {
    addAward = isNaN(addAward) ? 0 : addAward;
    this.mAward += addAward;
    // 设置到控件
    this.getChild("label_award").text = this.formatMoney(this.mAward, 2);
	if ( addAward <= 0 ){
		return;
	}
    //金币动画
    var index = this.getAwardActionIndex(addAward);
    if(index > 0){
        AudioModel.playSound(2002);
        var ani = laya.createArmature(ResURL("chaoeshouyi.png"), ResURL("chaoeshouyi.sk"), false, null, null, function() {
            ani.removeSelf();
            ani.destroy();
        }, this);
        ani.anchorX = 0;
        ani.anchorY = 0;
        ani.play("ui_big_money_" + index , false);
        ani.pos(130, 430);
        this.node.addChild(ani);
    } 
};

// 关卡信息
UIGame.updateLevelInfo = function(levelName, star, levelId) {
    this.setLevelName(levelName);
	this.setLevelStar(star, levelId);
};

// 点击设置按钮
UIGame.onClickBtnSet = function(btn) {
    UISetUp.openFront(true, true, true);
};

// 更新自动开奖剩余次数
UIGame.updateLeftTimes = function(startCount) {
    if( this.autoStartCount > 1 ){
        var startBtn = this.getChild("btn_start");
        startBtn.skin = "ui/button_novalue_01.png"
        startBtn.label = startCount;
    }
};

// 点击开始按钮
UIGame.onClickBtnStart = function(btn, startCount, checkCoinCB, target) {
	this.mFisrtEnter = false;
    this.autoStartCount = startCount;
    startCount = isNaN(startCount) ? 1 : startCount;
    checkCoinCB = 'function' == typeof(checkCoinCB) ? checkCoinCB : function(){};
    this.mStake = G.STAKE_LIST[this.mStakeIdx - 1];
    // 扣除开始所需赛豆
    if (this.mStake > this.mCoin) {
        UIPrompt.show("资金不足");
        checkCoinCB.apply(target, [false]);
        return;
    }
	this.mSingleStartTimes = this.mSingleStartTimes + 1;
	this.setStakeBtnsGray(true);
    checkCoinCB.apply(target, [true]);
    this.clearList();
    this.resetProgress();
    // 按钮状态
    var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
    var smallMap = this.getChild("image_small_map");
    startBtn.mouseEnabled = false;
    startBtn.gray = true;
    autoBtn.mouseEnabled = false;
    autoBtn.gray = true;
    smallMap.mouseEnabled = false;
    startBtn.label = "";
    startBtn.skin = "ui/button_start.png";
    autoBtn.skin = "ui/button_auto.png";
    if(startCount > 1){
        startBtn.label = startCount - 1;
        startBtn.skin = "ui/button_novalue_01.png";
        autoBtn.skin = "ui/button_cancel.png";
        autoBtn.gray = false;
        autoBtn.mouseEnabled = true;
    }
    // 开始操作
    laya.callAfter(0.1, function() {
        Controller.onStart(startCount, this.levelUpAction, this.levelPassAction, function() {
            // 重置进度条
            this.resetProgress();
            // 重置瓶子状态
            this.bonus2Down();
        }, function() {
            startBtn.mouseEnabled = true;
            startBtn.gray = false;
            autoBtn.mouseEnabled = true;
            autoBtn.gray = false;
            smallMap.mouseEnabled = true;
            startBtn.label = "";
            startBtn.skin = "ui/button_start.png";
            autoBtn.label = "";
            autoBtn.skin = "ui/button_auto.png";
            this.autoStartCount = 1;
			//更新赌注状态
			this.setStakeBtnsGray(false);
        }, this);
    }, this);
};

// 重新开始函数
UIGame.restartGame = function(count) {
    var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
    var smallMap = this.getChild("image_small_map");
    Controller.onStart(count, this.levelUpAction, this.levelPassAction, function() {
        // 重置进度条
        this.resetProgress();
        // 重置瓶子状态
        this.bonus2Down();
    }, function() {
        startBtn.mouseEnabled = true;
        startBtn.gray = false;
        autoBtn.mouseEnabled = true;
        autoBtn.gray = false;
        smallMap.mouseEnabled = true;
        startBtn.label = "";
        startBtn.skin = "ui/button_start.png";
        autoBtn.label = "";
        autoBtn.skin = "ui/button_auto.png";
        this.autoStartCount = 1;
        //更新赌注状态
        this.setStakeBtnsGray(false);
    }, this);
};

// 点击自动按钮
UIGame.onClickBtnAuto = function(btn) {
    //暂停
    if( this.autoStartCount && this.autoStartCount > 1){
        Controller.onStop();
        var startBtn = this.getChild("btn_start");
        var autoBtn = this.getChild("btn_auto");
        startBtn.label = "";
        startBtn.skin = "ui/button_start.png";
        autoBtn.gray = true;
        autoBtn.mouseEnabled = false;
        autoBtn.label = "";
        autoBtn.skin = "ui/button_auto.png";
    }else{	
	    UIAuto.openFront(true, true, true, this.mCoin);
    }
};

// 点击向左按钮
UIGame.onClickBtnLeft = function(btn) {
    if (this.mStakePage.isCanMovePrev()) {
        this.mStakeList = this.mStakePage.moveOnePrev();
        this.refreshStakeBtnStatus();
    }
};

// 点击向右按钮
UIGame.onClickBtnRight = function(btn) {
    if (this.mStakePage.isCanMoveNext()) {
        this.mStakeList = this.mStakePage.moveOneNext();
        this.refreshStakeBtnStatus();
    }
};

// 点击下注按钮
UIGame.onClickBtnStake = function(btn) {
    var stakeIdx = this.mStakePage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mStakeIdx) {
        this.mStakeIdx = stakeIdx
        this.refreshStakeBtnStatus();
    }
};

// 开始后设置按钮灰态,并跳到赌注所在页
UIGame.setStakeBtnsGray = function(grayFlag) {
	var beginIndex = this.mStakePage.getBeginIndex();
	if( this.mStakeIdx < beginIndex + 1 || this.mStakeIdx > beginIndex + 3){
		this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
		beginIndex = this.mStakePage.getBeginIndex();
	}
	var leftBtn = this.getChild("btn_left");
	var rightBtn = this.getChild("btn_right");
	leftBtn.mouseEnabled = !grayFlag;
	leftBtn.gray = grayFlag;
	rightBtn.mouseEnabled = !grayFlag;
	rightBtn.gray = grayFlag;
	if(grayFlag){
		for (var i = 1; i <= this.mStakePage.getNumPerPage(); ++i) {
			var stakeBtn = this.getChild("btn_stake" + i);
			var coin = this.mStakeList[i - 1];
			stakeBtn.label = coin;
			if (beginIndex + i == this.mStakeIdx) { // 当前所选
				stakeBtn.mouseEnabled = false;
				stakeBtn.gray = false;
			} else {                                // 非当前所选
				stakeBtn.mouseEnabled = false;
				stakeBtn.gray = true;
			}
		}
	}else{
		this.refreshStakeBtnStatus();
	}
};

// 点击小地图
UIGame.onClickImageSmallMap = function(btn) {
    UIGM.openFront(true, true, true);
};

// 初始下注
UIGame.initStake = function() {
    this.mStakePage = Page.create(G.STAKE_LIST, 3, 0);  // 下注页面管理器,每页3个
    this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
    this.refreshStakeBtnStatus();
};

// 刷新下注按钮状态
UIGame.refreshStakeBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_left");
    if (this.mStakePage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_right");
    if (this.mStakePage.isCanMoveNext()) {
        rightBtn.mouseEnabled = true;
        rightBtn.gray = false;
    } else {
        rightBtn.mouseEnabled = false;
        rightBtn.gray = true;
    }
    // 下注按钮状态
    var beginIndex = this.mStakePage.getBeginIndex();
    for (var i = 1; i <= this.mStakePage.getNumPerPage(); ++i) {
        var stakeBtn = this.getChild("btn_stake" + i);
        stakeBtn.tag = i;   // 按钮标识
        stakeBtn.timer.callLater(this, function(i, stakeBtn) {  // 这里应该是Laya的坑,需要稍后调用,才能显示最新渲染的内容
            var coin = this.mStakeList[i - 1];
            if (isNaN(coin)) {
                stakeBtn.visible = false;
            } else {
                stakeBtn.visible = true;
                stakeBtn.label = coin;
                if (coin <= this.mCoin) {   // 赛豆足够
                    stakeBtn.mouseEnabled = true;
                    stakeBtn.gray = false;
                    if (beginIndex + i == this.mStakeIdx) { // 当前所选
                        stakeBtn.skin = "ui/button_bet_01.png";
                        stakeBtn.labelColors = "#633b29";
                    } else {                                // 非当前所选
                        stakeBtn.skin = "ui/button_bet_02.png";
                        stakeBtn.labelColors = "#F0B137";
                    }
                } else {                    // 赛豆不足
                    stakeBtn.mouseEnabled = false;
                    stakeBtn.gray = true;
                    stakeBtn.skin = "ui/button_bet_02.png";
                    stakeBtn.labelColors = "#F0B137";
                }
            }
        }, [i, stakeBtn]);
    }
};

// 初始列表
UIGame.initList = function() {
    this.mList = new laya.ui.List();
    this.mList.itemRender = ItemClear;
    this.mList.vScrollBarSkin = "";
    this.mList.array = [];
    this.mList.renderHandler = new laya.utils.Handler(this, this.onUpdateClearItem);
    this.mList.width = 150;
    this.mList.height = 240;
    this.mList.spaceY = 1;
    this.mList.anchorX = 0.5;
    this.mList.anchorY = 0.5;
    this.mList.pos(119, 213);
    this.mList.optimizeScrollRect = true;
    this.mList.scrollBar.elasticDistance = 30;
    this.getChild("box_left").addChild(this.mList);
};

// 清空列表
UIGame.clearList = function() {
    this.mList.array = [];
    this.mAward = 0;
    this.updateAward(0);
};

// 清空列表
UIGame.levelReset = function() {
    this.clearList();
	this.resetProgress();
};

// 添加选项
UIGame.addListItem = function(levelId, gameSection, screenTimes, objectId, count) {
    var awardData = DataModel.calcAwardData(levelId, gameSection, screenTimes, objectId, count);
    this.mList.addItem(awardData);
    this.mList.scrollTo(this.mList.length);
    return awardData.value;
};

// 更新选项
UIGame.onUpdateClearItem = function(item, index) {
    var data = item.dataSource;
    if (!data) {
        return;
    }
    if (0 == index % 2) {
        item.setBg(ResURL("ui/image_score_back_01.png"));
    } else {
        item.setBg(ResURL("ui/image_score_back_02.png"));
    }
    item.setNum(data.count);
    item.setImg(ResURL(data.image));
    item.setScore(data.value);
};

// 添加到列表
UIGame.onAddToList = function(gameSection, screenTimes, objectList) {
    var totalValue = 0;
    var levelId = Controller.getLevelId();
    for (var objectId in objectList) {
        if (objectList.hasOwnProperty(objectId)) {
            totalValue += this.addListItem(levelId, gameSection, screenTimes, objectId, objectList[objectId]);
        }
    }
    totalValue *= this.mStake;
    // 更新WIN
    this.updateAward(totalValue);
};

// 更新进度条(当进度条满时,会触发bonus1)
UIGame.updateProgress = function(curr) {
    curr = (isNaN(curr) || curr < 0) ? 0 : curr;
    var value = curr / G.BONUS_1;
    value = value > 1 ? 1 : value;
    this.mProgress.setValue(value, true);
};

// 重置进度条
UIGame.resetProgress = function() {
    if (!this.mProgress || this.mProgress.destroyed) {
        this.mProgress = laya.createProgress(ResURL("image_progress_bg.png"), ResURL("image_progress_bar.png"), ResURL("image_progress_mask.png"), 1.5);
        this.mProgress.rotation = 270;
        this.mProgress.pos(230, 380);
        this.node.addChild(this.mProgress);
    }
    this.mProgress.setValue(0);
};

// 触发bonus事件
UIGame.onBonus = function(bonusType) {
    if (game_section["bonus1"] == bonusType) {
        this.resetProgress();
    } else if (game_section["bonus1"] == bonusType) {
        this.bonus2Down();
    }
};

//加载bonus2状态瓶子(阶段，升降,true表示升，false表示降)
UIGame.drawBonus2Box = function () {
    this.mBonus2Box = laya.createArmature(ResURL("b2zhuangtaidonghua.png"),ResURL("b2zhuangtaidonghua.sk"), false, null, null, null, this);
    this.mBonus2Box.pos(850,235);
    this.node.addChild(this.mBonus2Box);
    this.mBonus2Box.play("ui_bonus02_1",true);
}

// bonus2(点亮)
UIGame.bonus2Up = function(times) {
    console.log("bonus2刷屏, times: " + times);
    var soundIds = [2006, 2007, 2008, 2009];
    var soundIdx = times - 1;
    if (soundIdx >= 0 && soundIdx < soundIds.length) {
        AudioModel.playSound(soundIds[soundIdx]);
    }
    this.mBonus2Box.play("ui_bonus02_" + (times + 1) + "_sheng",false);
    if (times >= 4){
        this.mBonus2Box.play("ui_bonus02_5_xunhuan",true);
    }
    this.mBonusTimes = times;
};

// bonus2(消退)
UIGame.bonus2Down = function() { 
    if (this.mBonusTimes >= 4){
        this.mBonus2Box.stop("ui_bonus02_5_xunhuan",false);
    }
    if(this.mBonusTimes > 0){
        this.mBonus2Box.play("ui_bonus02_" +(this.mBonusTimes + 1) + "_jiang" ,false);
        this.mBonusTimes = 0;
    }
};

//设置开始、自动消除按钮状态
UIGame.setStartBtnState = function(visible) { 
	var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
	startBtn.gray = !visible;
    startBtn.mouseEnabled = visible;
	autoBtn.gray = !visible;
    autoBtn.mouseEnabled = visible;
};

//设置开始、自动消除按钮状态
UIGame.loopAction = function(img) { 
	laya.scaleFromTo(img, 1, 1, 0.8, 0.5, function(){
		laya.scaleFromTo(img, 1, 0.8, 1.0, 0.6, null, null)
	}, null);
	laya.moveBy(img, {x:0, y:-20}, 0.5, null, function() {
		laya.moveBy(img, {x:0,y:20}, 0.5, null, function(){
			this.loopAction(img)
		}, this)
	}, this);
};

//瓢虫贝塞尔曲线动画
UIGame.ladyBirdAction = function(){
	var sprite = laya.createArmature(ResURL("piaochong.png"), ResURL("piaochong.sk"), false, null, null, function(){
		sprite.removeSelf();
		sprite.destroy();
		laya.callAfter(G.LADY_BIRD_DELAY, this.ladyBirdAction, this)
	}, this);
    sprite.play("ladybird", false);
	sprite.zOrder = 500;
    this.node.addChild(sprite);
	sprite.pos(480, 60);
};