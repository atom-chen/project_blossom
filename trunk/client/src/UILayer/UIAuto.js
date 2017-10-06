/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	自动界面
 ***********************************************************************/
UIAuto = UIDEFINE("UIAuto", AutoUI);

UIAuto.onStart = function(coin) {
    this.onClick(this.getChild("btn_stake_left"), this.onClickBtnStakeLeft, this, true, true);
    this.onClick(this.getChild("btn_stake_right"), this.onClickBtnStakeRight, this, true, true);
    this.onClick(this.getChild("btn_stake1"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake2"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake3"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_times_left"), this.onClickBtnTimesLeft, this, true, true);
    this.onClick(this.getChild("btn_times_right"), this.onClickBtnTimesRight, this, true, true);
    this.onClick(this.getChild("btn_times1"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times2"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times3"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times4"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_cancel"), this.onClickBtnCancel, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
    // 数据初始化
    this.mCoin = coin;                          // 赛豆
    this.mStakeIdx = 1;                         // 下注索引值(>=1)
    this.mTimesIdx = 1;                         // 次数索引值(>=1)
    // 逻辑初始化
    this.initStake();
    this.initTimes();
};

// 点击下注向左按钮
UIAuto.onClickBtnStakeLeft = function(btn) {
    if (this.mStakePage.isCanMovePrev()) {
        this.mStakeList = this.mStakePage.moveOnePrev();
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnLeft();
};

// 点击下注向右按钮
UIAuto.onClickBtnStakeRight = function(btn) {
    if (this.mStakePage.isCanMoveNext()) {
        this.mStakeList = this.mStakePage.moveOneNext();
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnRight();
};

// 点击下注按钮
UIAuto.onClickBtnStake = function(btn) {
    var stakeIdx = this.mStakePage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mStakeIdx) {
        this.mStakeIdx = stakeIdx
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnStake(btn);
};

// 点击次数向左按钮
UIAuto.onClickBtnTimesLeft = function(btn) {
    if (this.mTimesPage.isCanMovePrev()) {
        this.mTimesList = this.mTimesPage.moveOnePrev();
        this.refreshTimesBtnStatus();
    }
};

// 点击次数向右按钮
UIAuto.onClickBtnTimesRight = function(btn) {
    if (this.mTimesPage.isCanMoveNext()) {
        this.mTimesList = this.mTimesPage.moveOneNext();
        this.refreshTimesBtnStatus();
    }
};

// 点击次数按钮
UIAuto.onClickBtnTimes = function(btn) {
    var stakeIdx = this.mTimesPage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mTimesIdx) {
        this.mTimesIdx = stakeIdx
        this.refreshTimesBtnStatus();
    }
};

// 点击取消按钮
UIAuto.onClickBtnCancel = function(btn) {
    this.close();
};

// 点击开始按钮
UIAuto.onClickBtnStart = function(btn) {
    var stake = G.STAKE_LIST[this.mStakeIdx - 1];
    var times = G.TIMES_LIST[this.mTimesIdx - 1];
    console.log("下注: " + stake + ", 次数: " + times);
    UIGame.onClickBtnStart(null, times, function(isCoinEnough) {
        if (isCoinEnough) {
            this.close();
        }
    }, this);
};

// 初始下注
UIAuto.initStake = function() {
    this.mStakePage = Page.create(G.STAKE_LIST, 3, 0);  // 下注页面管理器,每页3个
    this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
    this.refreshStakeBtnStatus();
};

// 刷新下注按钮状态
UIAuto.refreshStakeBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_stake_left");
    if (this.mStakePage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_stake_right");
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
        stakeBtn.timer.callLater(this, function(i, stakeBtn) {
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

// 初始次数
UIAuto.initTimes = function() {
    this.mTimesPage = Page.create(G.TIMES_LIST, 4, 0);  // 次数页面管理器,每页4个
    this.mTimesList = this.mTimesPage.moveToIndex(this.mTimesIdx - 1);  // 当前次数页面数据
    this.refreshTimesBtnStatus();
};

// 刷新次数按钮状态
UIAuto.refreshTimesBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_times_left");
    if (this.mTimesPage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_times_right");
    if (this.mTimesPage.isCanMoveNext()) {
        rightBtn.mouseEnabled = true;
        rightBtn.gray = false;
    } else {
        rightBtn.mouseEnabled = false;
        rightBtn.gray = true;
    }
    // 下注按钮状态
    var beginIndex = this.mTimesPage.getBeginIndex();
    for (var i = 1; i <= this.mTimesPage.getNumPerPage(); ++i) {
        var timesBtn = this.getChild("btn_times" + i);
        timesBtn.tag = i;   // 按钮标识
        timesBtn.timer.callLater(this, function(i, timesBtn) {
            var times = this.mTimesList[i - 1];
            if (isNaN(times)) {
                timesBtn.visible = false;
            } else {
                timesBtn.visible = true;
                timesBtn.label = times;
                timesBtn.mouseEnabled = true;
                timesBtn.gray = false;
                if (beginIndex + i == this.mTimesIdx) { // 当前所选
                    timesBtn.skin = "ui/button_times_01.png";
                    timesBtn.labelColors = "#633b29";
                } else {                                // 非当前所选
                    timesBtn.skin = "ui/button_times_02.png";
                    timesBtn.labelColors = "#fff7c5";
                }
            }
        }, [i, timesBtn]);
    }
}