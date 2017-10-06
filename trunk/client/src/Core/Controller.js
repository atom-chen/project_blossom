/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	控制器
 ***********************************************************************/
Controller = {};
//----------------------------------------------------------------------
// 创建视图
Controller.createView = function(gridGap, gridTouchGap) {
    var view = new ComponentView();
    var mapSize = view.calcMapSize(G.MAP_ROW, G.MAP_COL, G.GRID_WIDTH, G.GRID_HEIGHT, gridGap);
    var offsetX = (G.DESIGN_WIDTH - mapSize.width)/2 + G.VIEW_OFFSET_X;
    var offsetY = Laya.stage.height/2 + G.VIEW_OFFSET_Y;
    view.init(G.MAP_ROW, G.MAP_COL, G.GRID_WIDTH, G.GRID_HEIGHT, gridGap, gridTouchGap, offsetX, offsetY);
    Game.NODE_SCENE.addChild(view.getRoot());
    return view;
};
//----------------------------------------------------------------------
// 创建
Controller.create = function(showDisplay) {
    this.destroy();
    // 视图
    this.mView = this.createView(G.GRID_GAP, G.GRID_TOUCH_GAP);
	this.mView.setTouchEnabled(true);
	this.mView.showTips(false, false);
    // 地图控制器
    var mapCtrl = this.mView.addComponent(new ComponentMap());
	mapCtrl.init(core_map_config, showDisplay);
	mapCtrl.showTips(false, false, false);
	// 掉落控制器
	var dropCtrl = this.mView.addComponent(new ControllerDrop());
	dropCtrl.init();
	// 消除控制器
	var clearCtrl = this.mView.addComponent(new ControllerClear());
	clearCtrl.init();
	// 小地图控制器
	var minimapCtrl = this.mView.addComponent(new ControllerMinimap());
	minimapCtrl.init();
	// 收获控制器
	var gainCtrl = this.mView.addComponent(new ControllerGain());
	gainCtrl.init(showDisplay);
	// 数据初始化
	this.mShowDisplay = showDisplay;
	this.mLevelId = G.FIRST_LEVEL_ID;
	this.mStar = 1;
};
//----------------------------------------------------------------------
// 销毁
Controller.destroy = function() {
    if (this.mView) {
        this.mView.dtor();
        this.mView.getRoot().removeSelf();
		this.mView.getRoot().destroy();
        delete this.mView;
    }
};
//----------------------------------------------------------------------
// 获取视图
Controller.getView = function() {
    return this.mView;
};
//----------------------------------------------------------------------
// 获取组件
Controller.getComp = function(name) {
    if (this.mView) {
        return this.mView.getComponent(name);
    }
};
//----------------------------------------------------------------------
// 清除地表
Controller.clearSurface = function() {
	Action.clearImageList();
	var mapCtrl = this.getComp("ComponentMap");
	var rc = this.mView.getRowCol();
	for (var row = 1; row <= rc.row; ++row) {
		for (var col = 1; col <= rc.col; ++col) {
			var surfaceElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.surface);
			if (surfaceElement) {
				surfaceElement.dtor();
			}
		}
	}
};
//----------------------------------------------------------------------
// 清除物件
Controller.clearObject = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	var mapCtrl = this.getComp("ComponentMap");
	var rc = this.mView.getRowCol();
	var objectCount = rc.row * rc.col;
	for (var row = 1; row <= rc.row; ++row) {
		for (var col = 1; col <= rc.col; ++col) {
			var pos = this.mView.getPos(row, col);
			var objectElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.object);
			var attachElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.overlay);
			if (overlayElement) {
				overlayElement.dtor();
			}
			Action.playElementScreenOut(attachElement, {row:row, col:col}, pos, null, this);
			Action.playElementScreenOut(objectElement, {row:row, col:col}, pos, function() {
				if (--objectCount <= 0) {
					if ('function' == typeof(callback)) {
						callback.apply(target, []);
					}
				}
			}, this);
		}
	}
};
//----------------------------------------------------------------------
// 检查是否升级地图/是否过关,0:地图不升级,未过关,1.地图升级,2.过关
Controller.checkMapAndLevel = function() {
	if (this.getComp("ControllerClear").isExistSurface()) {
		return 0;
	}
	// 地图中的地表元素都被消除,进入下一张地图
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	this.mStar += 1;
	if (this.mStar <= G.MAX_STAR) {
		return 1;
	}
	// 关卡所有地图都已完成,进入下一关卡
	var levelData = DataTB.get("level_tplt", this.mLevelId, true);
	this.mLevelId = (isNaN(levelData.next_id) || levelData.next_id <= 0) ? G.FIRST_LEVEL_ID : levelData.next_id;
	this.mStar = 1;
	this.mLevelChange = true;
	return 2;
};
//----------------------------------------------------------------------
// 关卡
Controller.onLevel = function(isResetMap, isClearObject, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	var levelData = DataTB.get("level_tplt", this.mLevelId, true);
	// 设置关卡信息
	EventCenter.post(EventDef["ED_LEVEL_INFO"], levelData.name, this.mStar, this.mLevelId);
	// 获取地表数据
	var mapId = levelData.maps[this.mStar - 1];
	var mapData = DataTB.get("map_tplt", mapId, true);
	// 重置数据
	this.getComp("ControllerDrop").setDropData(DataModel.getDropData(), 1);
	this.getComp("ControllerGain").resetGain();
	this.getComp("ControllerClear").resetShowSkills();
	// 重置地图
	if (isResetMap) {
		var mapCtrl = this.getComp("ComponentMap");
		this.mLevelChange = isNaN(this.mLevelChange) ? true : this.mLevelChange;
		if (this.mLevelChange) {
			this.mLevelChange = false;
			mapCtrl.setMapBackground(levelData.file);	// 设置关卡背景
			AudioModel.playMusic(levelData.music);	// 设置关卡音乐
		}
		this.clearSurface();
		for (var row = 0; row < G.MAP_ROW; ++row) {
			for (var col = 0; col < G.MAP_COL; ++col) {
				var surfaceId = mapData[row][col];
				var element = mapCtrl.createElement(surfaceId);
				if (element) {
					var pos = this.mView.getPos(row + 1, col + 1);
					if (element.getNode()) {
						element.getNode().pos(pos.x, pos.y);
					}
					mapCtrl.addElement(row + 1, col + 1, element);
				}
			}
		}
	this.getComp("ControllerMinimap").resetByMapData(mapData);
	}
	// 消除物件
	if (isClearObject) {
		this.clearObject(callback, target);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 掉落
Controller.onDrop = function(count, times, timesCB, callback, target) {
	count = isNaN(count) ? 0 : count;
	times = isNaN(times) ? 0 : times;
	timesCB = 'function' == typeof(timesCB) ? timesCB : function(){};
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.getComp("ControllerDrop").startDrop(times, function(hasDrop) {
		if (hasDrop) {
			laya.callAfter(this.mShowDisplay ? 0.3 : 0, function() {
				this.getComp("ControllerClear").startClear(function(clearCount) {
					count += clearCount;
					if (clearCount > 0) {
						times += 1;
						timesCB.apply(target, [times]);
						this.getComp("ControllerGain").updateGain(times);
						if (times >= G.MAX_TIMES) {	// 当刷屏次数较大时,这里给中断掉
							if (this.mShowDisplay) {
								UIPrompt.show("太多次刷屏,请检查掉落数据表");
							}
							callback.apply(target, [count, times]);
						} else {
							this.onDrop(count, times, timesCB, callback, target);
						}
					} else {
						callback.apply(target, [count, times]);
					}
				}, this);
			}, this);
		} else {
			callback.apply(target, [count, times]);
		}
	}, this);
};
//----------------------------------------------------------------------
// 收获
Controller.onGain = function(count, times, effect1, effect3, callback, target) {
	if (this.mShowDisplay) {
		console.log("消除个数: " + count + ", 刷屏次数: " + times);
	}
	count = isNaN(count) ? 0 : count;
	times = isNaN(times) ? 0 : times;
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.getComp("ControllerGain").triggerBonus(count, times, effect1, effect3, function(gameSection, isOver) {
		count = 0;
		times = 0;
		if (isOver) {	// 本次操作结束
			if (this.mBonus2Flag) {
				this.mBonus2Flag = false;
				var levelData = DataTB.get("level_tplt", Controller.getLevelId(), true);
                AudioModel.playMusic(levelData.music);
			}
			callback.apply(target, []);
		} else {	// 操作未结束
			if (game_section["bonus2"] == gameSection) {	// bonus2清屏结束后,执行掉落操作
				this.mBonus2Flag = true;
				this.getComp("ControllerDrop").setDropData(DataModel.getDropData(), 1);	// 数据重置
				this.onDrop(count, times, null, function() {
					this.onGain(count, times, effect1, effect3, callback, target);
				}, this);
			} else {
				laya.callAfter(this.mShowDisplay ? 0.5 : 0, function() {
					this.getComp("ControllerClear").startClear(function(clearCount) {
						count += clearCount;
						if (clearCount > 0) {
							times += 1;
							this.getComp("ControllerGain").updateGain(times);
							this.onDrop(count, times, null, function() {
								this.onGain(count, times, effect1, effect3, callback, target);
							}, this);
						} else {
							this.onGain(count, times, effect1, effect3, callback, target);
						}
					}, this);
				}, this);
			}
		}
	}, this);
};
//----------------------------------------------------------------------
// 开始
Controller.onStart = function(startCount, mapUpgradeCB, levelPassCB, countCB, callback, target) {
	startCount = isNaN(startCount) ? 1 : startCount;
	mapUpgradeCB = 'function' == typeof(mapUpgradeCB) ? mapUpgradeCB : function(cb){cb();};
	levelPassCB = 'function' == typeof(levelPassCB) ? levelPassCB : function(cb){cb();};
	countCB = 'function' == typeof(countCB) ? countCB : function(){};
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.mStartCount = startCount - 1;
	// 更新剩余自动开奖次数
	EventCenter.post(EventDef["ED_LEVEL_AUTO_TIMES"], this.mStartCount);
	// 自动开奖赛豆更新，更新所得奖励
	EventCenter.post(EventDef["ED_LEVEL_COIN"], 1);
	if (this.mStartCount < 0) {
		callback.apply(target, []);
		return;
	}
	// 扣除赛豆
	EventCenter.post(EventDef["ED_LEVEL_COIN"], 2);
	// 自动开奖重置
	EventCenter.post(EventDef["ED_LEVEL_CLEAR"]);
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	var effect1 = DataModel.getBonus1Effect(this.mLevelId);
    var effect3 = DataModel.getBonus3Effect(this.mLevelId);
	if (this.mShowDisplay) {
    	console.log("============================== 开始");
	}
    this.onLevel(false, true, function() {
        this.onDrop(0, 0, function(times) {
            EventCenter.post(EventDef["ED_PROGRESS_BONUS2"], times);
        }, function(count, times) {
            this.onGain(count, times, effect1, effect3, function() {
				var mapAndLevel = this.checkMapAndLevel();
				if (this.mShowDisplay) {
                	console.log("============================== 结束" + (0 == mapAndLevel ? "" : (1 == mapAndLevel ? ": 地图升级" : ": 过关")));
				}
				countCB.apply(target, []);
                if (1 == mapAndLevel) {     // 地图升级
					if (this.mShowDisplay) {		// 显示表现
						AudioModel.playSound(2004);
						mapUpgradeCB.apply(target, [function() {
							this.onLevel(true, false);
							this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
						}.bind(this)]);
						return;
					} else {
						this.onLevel(true, false);
					}
                } else if (2 == mapAndLevel) {  // 过关
					if (this.mShowDisplay) {		// 显示表现
						AudioModel.playSound(2003);
						levelPassCB.apply(target, [function() {
							this.onLevel(true, false);
							if(this.mLevelId%1000 > 1){
								 UILevelDes.openFront(true, true, true, [this.mLevelId%1000,this.mStartCount]);
							}else{
								this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
							}
						}.bind(this)]);
						return;
					} else {
						this.onLevel(true, false);
					}
                }
				this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
            }, this);
        }, this);
    }, this);
};
//----------------------------------------------------------------------
// 停止
Controller.onStop = function() {
	this.mStartCount = 0;
};
//----------------------------------------------------------------------
// 是否显示表现
Controller.isShowDisplay = function() {
	return this.mShowDisplay;
};
//----------------------------------------------------------------------
// 获取关卡id
Controller.getLevelId = function() {
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	return this.mLevelId;
};
//----------------------------------------------------------------------
// 获取星级
Controller.getStar = function() {
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	return this.mStar;
};
//----------------------------------------------------------------------
// 一进入游戏就开始掉落
Controller.onInitDrop = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	var dropData = [
	[20101,20102,20103,20104,20105,20106],
	[20101,20102,20103,20104,20105,20106],
	[20102,20103,20104,20105,20106,20107],
	[20102,20103,20104,20105,20106,20107],
	[20103,20104,20105,20106,20107,20101],
	[20103,20104,20105,20106,20107,20101]
	];
	this.getComp("ControllerDrop").setDropData(dropData, 4);
	this.getComp("ControllerDrop").startDrop(0, function(hasDrop) {
		callback.apply(target, []);
	}, this);	
};
//----------------------------------------------------------------------
// 获取地图居中位置
Controller.getCenterPos = function() {
	var posTb = this.mView.getPos(3,3);
	return {x: posTb.x + 30, y: posTb.y + 30};
};
//----------------------------------------------------------------------