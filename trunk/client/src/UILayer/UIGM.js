/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	GM界面
 ***********************************************************************/
UIGM = UIDEFINE("UIGM", GMUI);

UIGM.onStart = function(coin) {
	this.onClick(this.getChild("btn_close"), this.onClickBtnClose, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
	this.bind(EventDef["ED_ADD_TO_LIST"], this.onAddToList);
	UIGame.close();
	Controller.create(false);
	Controller.onLevel(true, true);
	this.mIsMusicOn = AudioModel.isMusicEnabled();
	this.mIsSoundOn = AudioModel.isSoundEnabled();
	AudioModel.setMusicEnabled(false);
	AudioModel.setSoundEnabled(false);
};

// 点击返回按钮
UIGM.onClickBtnClose = function(btn) {
	AudioModel.setMusicEnabled(this.mIsMusicOn);
	AudioModel.setSoundEnabled(this.mIsSoundOn);
	this.close();
	Controller.create(true);
	UIGame.openMiddle();    // 注意:在Controller.create()后面调用
};

// 点击开始按钮
UIGM.onClickBtnStart = function(btn) {
	this.mAward = 0;
	// 下注
	var stakeTextinput = this.getChild("textinput_stake");
	this.mStake = parseInt(stakeTextinput.text);
	this.mStake = isNaN(this.mStake) ? 1 : Math.abs(this.mStake);
	stakeTextinput.text = this.mStake;
	stakeTextinput.mouseEnabled = false;
	// 开奖次数
	var countTextinput = this.getChild("textinput_count");
	this.mCount = parseInt(countTextinput.text);
	this.mCount = isNaN(this.mCount) ? 1 : Math.abs(this.mCount);
	countTextinput.text = this.mCount;
	countTextinput.mouseEnabled = false;
	// 总的奖励
	var awardTotalLabel = this.getChild("label_award_total");
	awardTotalLabel.text = 0;
	// 平均奖励
	var awardPerLabel = this.getChild("label_award_per");
	awardPerLabel.text = 0;
	// 总耗时
	var costTimeLabel = this.getChild("label_cost_time");
	costTimeLabel.text = "模拟中, 请稍等 ......";
	// 返回按钮
	var closeBtn = this.getChild("btn_close");
	closeBtn.mouseEnabled = false;
    closeBtn.gray = true;
	// 开始按钮
	var startBtn = this.getChild("btn_start");
	startBtn.mouseEnabled = false;
    startBtn.gray = true;
	// 创建地图
	Controller.create(false);
	Controller.onLevel(true, true);
	laya.callAfter(0.1, function() {
		var startTime = laya.utils.Browser.now();
		var lastTime = startTime;
		Controller.onStart(this.mCount, null, null, null, function() {
			stakeTextinput.mouseEnabled = true;
			countTextinput.mouseEnabled = true;
			closeBtn.mouseEnabled = true;
			closeBtn.gray = false;
			startBtn.mouseEnabled = true;
			startBtn.gray = false;
			awardTotalLabel.text = this.mAward;
			awardPerLabel.text = this.mAward/this.mCount;
			costTimeLabel.text = this.calcTime(startTime);
		}, this);
	}, this);
};

UIGM.calcTime = function(startTime) {
	var seconds = (laya.utils.Browser.now() - startTime)/1000;
	var hour = Math.floor(seconds/3600);
	if (hour > 0) {
		seconds = seconds%3600;
	}
	var minute = Math.floor(seconds/60);
	if (minute > 0) {
		seconds = seconds/60;
	}
	return hour + "时" + minute + "分" + seconds + "秒";
};

UIGM.onAddToList = function(gameSection, screenTimes, objectList) {
    var totalValue = 0;
    var levelId = Controller.getLevelId();
    for (var objectId in objectList) {
        if (objectList.hasOwnProperty(objectId)) {
			var awardData = DataModel.calcAwardData(levelId, gameSection, screenTimes, objectId, objectList[objectId]);
            totalValue += awardData.value;
        }
    }
    totalValue *= this.mStake;
    this.mAward += totalValue;
};
