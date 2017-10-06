/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	目标控制器
 ***********************************************************************/
ControllerGain = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerGain");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function(showDisplay) {
        this.mMap = this.getSibling("ComponentMap");
        this.mShowDisplay = showDisplay;
		this.mGameSection = game_section["normal"];     // 游戏阶段
    	this.mNormalClearCount = 0;                 	// 常规阶段元素消除数量
    	this.mNormalScreenTimes = 0;                	// 常规阶段刷屏次数
		this.mTimesNormalMap = {};
		this.mTimesBonus1Map = {};
		this.mTimesBonus2Map = {};
		this.mTimesBonus3Map = {};
        this.bind(EventDef["ED_CORE_CLEAR_OBJECT"], this.onObjectClear);  // 注册物件被消除事件
    },
    //----------------------------------------------------------------------
    // 物件被消除事件
    onObjectClear: function(objectId, row, col) {
        if (game_section["normal"] == this.mGameSection) {          // 常规阶段
			this.mTimesNormalMap[objectId] = isNaN(this.mTimesNormalMap[objectId]) ? 1 : ++this.mTimesNormalMap[objectId];
            ++this.mNormalClearCount;
            EventCenter.post(EventDef["ED_PROGRESS_BONUS1"], this.mNormalClearCount);
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段
			this.mTimesBonus1Map[objectId] = isNaN(this.mTimesBonus1Map[objectId]) ? 1 : ++this.mTimesBonus1Map[objectId];
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段
			this.mTimesBonus2Map[objectId] = isNaN(this.mTimesBonus2Map[objectId]) ? 1 : ++this.mTimesBonus2Map[objectId];
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段
			this.mTimesBonus3Map[objectId] = isNaN(this.mTimesBonus3Map[objectId]) ? 1 : ++this.mTimesBonus3Map[objectId];
        }
    },
	//----------------------------------------------------------------------
    // 获取当前的状态
    getGameSection: function() {
		return this.mGameSection;
    },
	//----------------------------------------------------------------------
    // 重置每次的收获
    resetTimesGain: function() {
		this.mTimesNormalMap = {};
		this.mTimesBonus1Map = {};
		this.mTimesBonus2Map = {};
		this.mTimesBonus3Map = {};
    },
    //----------------------------------------------------------------------
    // 重置收获
    resetGain: function() {
        this.mGameSection = game_section["normal"];
        this.mNormalClearCount = 0;
        this.mNormalScreenTimes = 0;
		this.resetTimesGain();
    },
	 //----------------------------------------------------------------------
    // 每次都更新左边收获
    updateGain:function(times) {
		if (game_section["normal"] == this.mGameSection) {          // 常规阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["normal"], times, this.mTimesNormalMap);
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus1"], times, this.mTimesBonus1Map);
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段结束 
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus2"], times, this.mTimesBonus2Map);
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus3"], times, this.mTimesBonus3Map);
        }
		this.resetTimesGain();
    },
	//----------------------------------------------------------------------
	// 触发bonus,count:消除个数,times:刷屏次数,effect1:bonus1产生的效果,effect3:bonus3产生的效果
	triggerBonus: function(count, times, effect1, effect3, checkCB, target) {
		if (game_section["normal"] == this.mGameSection) {          // 常规阶段结束
            if (this.mShowDisplay) {
                console.log("常规阶段结束");
            }
            this.mNormalClearCount = count;
            this.mNormalScreenTimes = times;
            if (this.mNormalClearCount >= G.BONUS_1) {                      // 触发bonus1
                AudioModel.playSound(2005);
                this.mGameSection = game_section["bonus1"];
				Action.playBonus1HintAction(function() {
					this.onBonus1(effect1, function() {
						checkCB.apply(target, [game_section["bonus1"], false]);
					}, this);
				}, this)
            } else if (this.mNormalScreenTimes >= G.BONUS_2) {              // 触发bonus2
                this.mGameSection = game_section["bonus2"];
				Action.playBonus2HintAction(function() {
					this.onBonus2(function() {
						checkCB.apply(target, [game_section["bonus2"], false]);
					}, this);
				}, this)
            } else {	                                                    // 几率触发bonus3(常规阶段无触发bonus1,bonus2)
                if (effect3) {  // 触发bonus3
                    this.mGameSection = game_section["bonus3"];
					Action.playBonus3HintAction(function() {
						this.onBonus3(effect3, function() {
							checkCB.apply(target, [game_section["bonus3"], false]);
						}, this);
					},this)
                } else {        // 不触发bonus3
                    checkCB.apply(target, [game_section["normal"], true]);
                }
            }
            return;
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段结束
            if (this.mShowDisplay) {
                console.log("bonus1阶段结束");
            }
            if (this.mNormalScreenTimes >= G.BONUS_2) {                     // 触发bonus2
                this.mGameSection = game_section["bonus2"];
				Action.playBonus2HintAction(function() {
					this.onBonus2(function() {
						checkCB.apply(target, [game_section["bonus2"], false]);
					}, this);
				},this)
                return;
            }
            checkCB.apply(target, [game_section["bonus1"], true]);
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段结束
            if (this.mShowDisplay) {
                console.log("bonus2阶段结束");
            }
           checkCB.apply(target, [game_section["bonus2"], true]);
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段结束
            if (this.mShowDisplay) {
                console.log("bonus3阶段结束");
            }
            checkCB.apply(target, [game_section["bonus3"], true]);
        }
	},
    //----------------------------------------------------------------------
    // 触发bonus1
    onBonus1: function(effect1, callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus1");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus1"]);
        if (bonus_type["random_replace"] == effect1.type) {             // 随机替换
            this.doRandomReplace(callback, target);
        } else if (bonus_type["discolor_ray"] == effect1.type) {        // 变色射线
            this.doDiscolorRay(callback, target);
        } else if (bonus_type["diagonal_discolor"] == effect1.type) {   // 对角变色
            this.doDiagonalDiscolor(callback, target);
        } else {
            console.log("特效类型: " + effect1.type);
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 触发bonus2
    onBonus2: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus2");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus2"]);
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            for (var col = 1; col <= rc.col; ++col) {
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (!overlayElement || CoreDef.OverlayType.fixed != overlayElement.getType()) {
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 清屏操作
        var count = coordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            AudioModel.playMusic(1999);
            for (var i = 0, len = coordList.length; i < len; ++i) {
                var coord = coordList[i];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var objectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.attach);
                Action.playElementScreenOut(attachElement, coord, pos, null, this);
                Action.playElementScreenOut(objectElement, coord, pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 触发bonus3
    onBonus3: function(effect3, callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus3");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus3"]);
        if (bonus_type["random_all_match"] == effect3.type) {           // 随机百搭
            this.doRandomAllMatch(effect3.value, callback, target);
        } else if (bonus_type["fixed_all_match"] == effect3.type) {     // 固定百搭
            this.doFixedAllMatch(effect3.value, callback, target);
        } else if (bonus_type["position_swap"] == effect3.type) {       // 位置互换
            AudioModel.playSound(3011);
            this.doPositionSwap(callback, target);
        } else if (bonus_type["element_fixed"] == effect3.type) {       // 元素固定
            this.doElementFixed(callback, target);
        } else if (bonus_type["random_ramble"] == effect3.type) {       // 随机漫步
            AudioModel.playSound(3012);
            this.doRandomRamble(callback, target);
        } else if (bonus_type["rainbow_clear"] == effect3.type) {       // 彩虹消
            this.doRainbowClear(callback, target);
        } else if (bonus_type["screen_clear"] == effect3.type) {        // 全屏随机消除
            this.doScreenClear(effect3.value, callback, target);
        } else  {
            console.log("特效类型: " + effect3.type);
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 替换物件元素
    replaceObject: function(row, col, newObjectId) {
        var pos = this.getMaster().getPos(row, col);
        var oldObjectElement = this.mMap.delElement(row, col, CoreDef.ElementTag.object);
        var newObjectElement = this.mMap.createElement(newObjectId);
        if (newObjectElement.getNode()) {
            newObjectElement.getNode().pos(pos.x, pos.y);
            newObjectElement.getNode().visible = false;
        }
        this.mMap.addElement(row, col, newObjectElement);
        return {old_object: oldObjectElement, new_object: newObjectElement, pos: pos};
    },
    //----------------------------------------------------------------------
    // 随机替换
    doRandomReplace: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("随机替换");
        }
        var infoMap = {};
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
						infoMap[baseType] = infoMap[baseType] || [];
						infoMap[baseType].push({row:row, col:col, object_id:objectElement.getId()});
					}
				}
            }
        }
        // 元素基础类型列表
        var baseTypeList = []
        for (var key in infoMap) {
            if (infoMap.hasOwnProperty(key)) {
                baseTypeList.push(key);
            }
        }
        // 随机出元素类型(目标元素类型,要被替换的元素类型)
        var targetIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var targetBaseType = baseTypeList[targetIndex];
        var targetInfoList = infoMap[targetBaseType];
        var targetObjectId = targetInfoList[0].object_id;
        baseTypeList.splice(targetIndex, 1);
        var srcIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var srcBaseType = baseTypeList[srcIndex];
        var srcInfoList = infoMap[srcBaseType];
        // 替换操作
        var count = srcInfoList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var i = 0, len = srcInfoList.length; i < len; ++i) {
                var srcInfo = srcInfoList[i];
                var info = this.replaceObject(srcInfo.row, srcInfo.col, targetObjectId);
                // 操作动画
                Action.playRandomReplaceAction(info.old_object, info.new_object, info.pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 变色射线
    doDiscolorRay: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("变色射线");
        }
        var coordList = [];
        // 遍历场上中间4x4区域
        var rc = this.getMaster().getRowCol();
        for (var row = 2; row <= 5; ++row) {
			for (var col = 2; col <= 5; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
						coordList.push(CA.makeCoord(row, col));
					}
				}
            }
        }
        // 随机出元素信息
        var targetIndex = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
        var targetCoord = coordList[targetIndex];
        // 获取变色区域
        var upCoordList = [];        // 上方向区域
        var downCoordList = [];      // 下方向区域
        var leftCoordList = [];      // 左方向区域
        var rightCoordList = [];     // 右方向区域
        var crossCoordList = CA.getCrossRange(targetCoord.row, targetCoord.col, G.MAP_ROW);
        for (var i = 0, len = crossCoordList.length; i < len; ++i) {
            var srcCoord = crossCoordList[i];
            if (this.getMaster().isCoordValid(srcCoord.row, srcCoord.col)) {
                var srcObjectElement = this.mMap.getElement(srcCoord.row, srcCoord.col, CoreDef.ElementTag.object);
                if (srcObjectElement && CoreDef.ObjectType.normal == srcObjectElement.getType()) {  // 普通元素
                    if (srcCoord.row < targetCoord.row && srcCoord.col == targetCoord.col) {	    // 上方向
                        upCoordList.push(srcCoord);
                    } else if (srcCoord.row > targetCoord.row && srcCoord.col == targetCoord.col) {	// 下方向
                        downCoordList.push(srcCoord);
                    } else if (srcCoord.row == targetCoord.row && srcCoord.col < targetCoord.col) {	// 左方向
                        leftCoordList.push(srcCoord);
                    } else if (srcCoord.row == targetCoord.row && srcCoord.col > targetCoord.col) {	// 右方向
                        rightCoordList.push(srcCoord);
                    }
                }
            }
        }
        // 替换操作
        var count = upCoordList.length + downCoordList.length + leftCoordList.length + rightCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            var targetPos = this.getMaster().getPos(targetCoord.row, targetCoord.col);
            var targetObjectIds = [20101, 20102, 20103, 20104, 20105, 20106, 20107];
            // 上方向替换
            var upIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var upObjectId = targetObjectIds[upIndex];
            for (var i = 0, len = upCoordList.length; i < len; ++i) {
                var upCoord = upCoordList[i];
                var info = this.replaceObject(upCoord.row, upCoord.col, upObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "up", upCoordList.length, null, null);
            // 下方向替换
            var downIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var downObjectId = targetObjectIds[downIndex];
            for (var i = 0, len = downCoordList.length; i < len; ++i) {
                var downCoord = downCoordList[i];
                var info = this.replaceObject(downCoord.row, downCoord.col, downObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "down", downCoordList.length, null, null);
            // 左方向替换
            var leftIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var leftObjectId = targetObjectIds[leftIndex];
            for (var i = 0, len = leftCoordList.length; i < len; ++i) {
                var leftCoord = leftCoordList[i];
                var info = this.replaceObject(leftCoord.row, leftCoord.col, leftObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "left", leftCoordList.length, null, null);
            // 右方向替换
            var rightIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var rightObjectId = targetObjectIds[rightIndex];
            for (var i = 0, len = rightCoordList.length; i < len; ++i) {
                var rightCoord = rightCoordList[i];
                var info = this.replaceObject(rightCoord.row, rightCoord.col, rightObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "right", rightCoordList.length, null, null);
        }
    },
    //----------------------------------------------------------------------
    // 对角变色
    doDiagonalDiscolor: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("对角变色");
        }
        var infoList = [];
        // 遍历4个对角
        var coordList = [[1, 1], [1, 6], [6, 1], [6, 6]];   // 对角坐标
        for (var i = 0, len = coordList.length; i < len; ++i) {
            var row = coordList[i][0];
            var col = coordList[i][1];
            var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
			if(objectElement){
				var baseType = objectElement.getSubType();
				if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
					infoList.push({row:row, col:col, object_id:objectElement.getId()});
				}
			}  
        }
        // 随机1个对角
        var targetIndex = Math.floor(Math.random()*(infoList.length - 1) + 0.5);
        var targetInfo = infoList[targetIndex];
        var targetObjectId = targetInfo.object_id;
        // 获取变色区域
        var diagonalCoordList = [];
        if (1 == targetInfo.row && 1 == targetInfo.col) {
            diagonalCoordList = [[2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
        } else if (1 == targetInfo.row && 6 == targetInfo.col) {
            diagonalCoordList = [[2, 5], [3, 4], [4, 3], [5, 2], [6, 1]];
        } else if (6 == targetInfo.row && 1 == targetInfo.col) {
            diagonalCoordList = [[5, 2], [4, 3], [3, 4], [2, 5], [1, 6]];
        } else if (6 == targetInfo.row && 6 == targetInfo.col) {
            diagonalCoordList = [[5, 5], [4, 4], [3, 3], [2, 2], [1, 1]];
        }
        var srcInfoList = [];
        for (var j = 0, l = diagonalCoordList.length; j < l; ++j) {
            var srcRow = diagonalCoordList[j][0];
            var srcCol = diagonalCoordList[j][1];
            var srcObjectElement = this.mMap.getElement(srcRow, srcCol, CoreDef.ElementTag.object);
            if (srcObjectElement && CoreDef.ObjectType.normal == srcObjectElement.getType()) {  // 普通元素
                srcInfoList.push({row:srcRow, col:srcCol, object_id:srcObjectElement.getId()});
            }
        }
        // 替换操作
        var count = srcInfoList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            var pos = this.getMaster().getPos(targetInfo.row, targetInfo.col);
            Action.playDiagonalDiscolorAction1(CA.makeCoord(targetInfo.row, targetInfo.col), pos, null, null);
            for (var i = 0, len = srcInfoList.length; i < len; ++i) {
                var srcInfo = srcInfoList[i];
                var info = this.replaceObject(srcInfo.row, srcInfo.col, targetObjectId);
                // 操作动画(随机替换动画)
                Action.playRandomReplaceAction(info.old_object, info.new_object, info.pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 随机百搭
    doRandomAllMatch: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("随机百搭: " + value);
        }
        if (0 == value) {
            callback.apply(target, []);
            return;
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (objectElement && CoreDef.ObjectType.normal == objectElement.getType()
                    && CoreDef.BaseType.wail != objectElement.getSubType()
                    && !attachElement && !overlayElement) {  // 普通元素,且非百搭,且无附件,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
        // 生成百搭元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var j = 0, len = randomCoordList.length; j < len; ++j) {
                var coord = randomCoordList[j];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var srcObjectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var targetObjectElement = this.mMap.createElement(20108);   // 百搭
                if (targetObjectElement.getNode()) {
                    targetObjectElement.getNode().pos(pos.x, pos.y);
                    targetObjectElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, targetObjectElement);
                // 操作动画
                Action.playRandomAllMatchAction(srcObjectElement, targetObjectElement, pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 固定百搭
    doFixedAllMatch: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("固定百搭: " + value);
        }
        if (0 == value) {
            callback.apply(target, []);
            return;
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 2; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (CoreDef.ObjectType.normal == objectElement.getType()
                    && CoreDef.BaseType.wail != objectElement.getSubType()
                    && !attachElement && !overlayElement) {  // 普通元素,且非百搭,且无附件,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
        // 生成固定百搭元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var j = 0, len = randomCoordList.length; j < len; ++j) {
				AudioModel.playSound(3004);
                var coord = randomCoordList[j];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var srcObjectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var targetObjectElement = this.mMap.createElement(20108);   // 百搭
                if (targetObjectElement.getNode()) {
                    targetObjectElement.getNode().pos(pos.x, pos.y);
                    targetObjectElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, targetObjectElement);
                var overlayElement = this.mMap.createElement(40100);    // 固定
                if (overlayElement.getNode()) {
                    overlayElement.getNode().pos(pos.x, pos.y);
                    overlayElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, overlayElement);
                // 操作动画
                Action.playFixedAllMatchAction(srcObjectElement, targetObjectElement, overlayElement, pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 位置互换
    doPositionSwap: function(callback, target) {
        // 四个对角坐标列表
        var leftUpCoordList = [];
        var rightUpCoordList = [];
        var leftDownCoordList = [];
        var rightDownCoordList = [];
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            for (var col = 1; col <= rc.col; ++col) {
                if (row >= 1 && row <= rc.row/2) {
                    if (col >= 1 && col <= rc.col/2) { // 左上角
                        leftUpCoordList.push(CA.makeCoord(row, col));
                    } else {    // 右上角
                        rightUpCoordList.push(CA.makeCoord(row, col));
                    }
                } else {
                    if (col >= 1 && col <= rc.col/2) { // 左下角
                        leftDownCoordList.push(CA.makeCoord(row, col));
                    } else {    // 右下角
                        rightDownCoordList.push(CA.makeCoord(row, col));
                    }
                }
            }
        }
        // 随机出互换方法
        var swapTypeList = [1,2,3,4,5]; // 互换方法:1.顺时针,2.逆时针,3.交叉,4.横向,5.竖向
        var randomIndex = Math.floor(Math.random()*(swapTypeList.length - 1) + 0.5);
        var swapType = swapTypeList[randomIndex];
        // 互换操作
        this.swapImplFunc1 = function(coordList1, coordList2, coordList3, coordList4) {
            var infoList = [];
            var count = coordList1.length;
            for (var i = 0; i < count; ++i) {
                var coord1 = coordList1[i];
                var pos1 = this.getMaster().getPos(coord1.row, coord1.col);
                var coord2 = coordList2[i];
                var pos2 = this.getMaster().getPos(coord2.row, coord2.col);
                var coord3 = coordList3[i];
                var pos3 = this.getMaster().getPos(coord3.row, coord3.col);
                var coord4 = coordList4[i];
                var pos4 = this.getMaster().getPos(coord4.row, coord4.col);
                // 元素互换
                var objectElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.object);
                var attachElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.attach);
                var overlayElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.overlay);
                var objectElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.object);
                var attachElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.attach);
                var overlayElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.overlay);
                var objectElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.object);
                var attachElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.attach);
                var overlayElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.overlay);
                var objectElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.object);
                var attachElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.attach);
                var overlayElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.overlay);
                this.mMap.addElement(coord1.row, coord1.col, objectElement4);
                this.mMap.addElement(coord1.row, coord1.col, attachElement4);
                this.mMap.addElement(coord1.row, coord1.col, overlayElement4);
                this.mMap.addElement(coord2.row, coord2.col, objectElement1);
                this.mMap.addElement(coord2.row, coord2.col, attachElement1);
                this.mMap.addElement(coord2.row, coord2.col, overlayElement1);
                this.mMap.addElement(coord3.row, coord3.col, objectElement2);
                this.mMap.addElement(coord3.row, coord3.col, attachElement2);
                this.mMap.addElement(coord3.row, coord3.col, overlayElement2);
                this.mMap.addElement(coord4.row, coord4.col, objectElement3);
                this.mMap.addElement(coord4.row, coord4.col, attachElement3);
                this.mMap.addElement(coord4.row, coord4.col, overlayElement3);
                //
                var info1 = {
                    elements: [objectElement1, attachElement1, overlayElement1],
                    pos:{x:pos2.x, y:pos2.y}
                };
                var info2 = {
                    elements: [objectElement2, attachElement2, overlayElement2],
                    pos:{x:pos3.x, y:pos3.y}
                };
                var info3 = {
                    elements: [objectElement3, attachElement3, overlayElement3],
                    pos:{x:pos4.x, y:pos4.y}
                };
                var info4 = {
                    elements: [objectElement4, attachElement4, overlayElement4],
                    pos:{x:pos1.x, y:pos1.y}
                };
                infoList.push(info1);
                infoList.push(info2);
                infoList.push(info3);
                infoList.push(info4);
            }
            return infoList;
        };
        this.swapImplFunc2 = function(coordList1, coordList2) {
            var infoList = [];
            var count = coordList1.length;
            for (var i = 0; i < count; ++i) {
                var coord1 = coordList1[i];
                var pos1 = this.getMaster().getPos(coord1.row, coord1.col);
                var coord2 = coordList2[i];
                var pos2 = this.getMaster().getPos(coord2.row, coord2.col);
                // 元素互换
                var objectElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.object);
                var attachElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.attach);
                var overlayElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.overlay);
                var objectElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.object);
                var attachElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.attach);
                var overlayElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.overlay);
                this.mMap.addElement(coord1.row, coord1.col, objectElement2);
                this.mMap.addElement(coord1.row, coord1.col, attachElement2);
                this.mMap.addElement(coord1.row, coord1.col, overlayElement2);
                this.mMap.addElement(coord2.row, coord2.col, objectElement1);
                this.mMap.addElement(coord2.row, coord2.col, attachElement1);
                this.mMap.addElement(coord2.row, coord2.col, overlayElement1);
                //
                var info1 = {
                    elements: [objectElement1, attachElement1, overlayElement1],
                    pos:{x:pos2.x, y:pos2.y}
                };
                var info2 = {
                    elements: [objectElement2, attachElement2, overlayElement2],
                    pos:{x:pos1.x, y:pos1.y}
                };
                infoList.push(info1);
                infoList.push(info2);
            }
            return infoList;
        };
        if (1 == swapType) {        // 顺时针:左上角->右上角->右下角->左下角->左上角
            if (this.mShowDisplay) {
                console.log("位置互换,顺时针");
            }
            var infoList = this.swapImplFunc1(leftUpCoordList, rightUpCoordList, rightDownCoordList, leftDownCoordList);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (2 == swapType) { // 逆时针:左上角->左下角->右下角->右上角->左上角
            if (this.mShowDisplay) {
                console.log("位置互换,逆时针");
            }
            var infoList = this.swapImplFunc1(leftUpCoordList, leftDownCoordList, rightDownCoordList, rightUpCoordList);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (3 == swapType) { // 交叉:左上角<->右下角,右上角<->左下角
            if (this.mShowDisplay) {
                console.log("位置互换,交叉");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, rightDownCoordList);
            var infoList2 = this.swapImplFunc2(rightUpCoordList, leftDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (4 == swapType) { // 横向:左上角<->右上角,左下角<->右下角
            if (this.mShowDisplay) {
                console.log("位置互换,横向");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, rightUpCoordList);
            var infoList2 = this.swapImplFunc2(leftDownCoordList, rightDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (5 == swapType) { // 竖向:左上角<->左下角,右上角<->右下角
            if (this.mShowDisplay) {
                console.log("位置互换,竖向");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, leftDownCoordList);
            var infoList2 = this.swapImplFunc2(rightUpCoordList, rightDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else {
            if (this.mShowDisplay) {
                console.log("位置互换,未知类型: " + swapType);
            }
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 元素固定
    doElementFixed: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("元素固定");
        }
        var coordMap= {};
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 2; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType
						&& !overlayElement) {  // 普通元素,且非百搭,且无覆盖
						coordMap[baseType] = coordMap[baseType] || [];
						coordMap[baseType].push(CA.makeCoord(row, col));
					}
				} 
            }
        }
        // 元素基础类型列表
        var baseTypeList = []
        for (var key in coordMap) {
            if (coordMap.hasOwnProperty(key)) {
                baseTypeList.push(key);
            }
        }
        // 随机出元素类型
        var randomIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var randomBaseType = baseTypeList[randomIndex];
        var randomCoordList = coordMap[randomBaseType];
        // 清屏操作
        function innerScreenClear() {
            // 遍历地图可清屏坐标
            var coordList = [];
            var rc = this.getMaster().getRowCol();
            for (var row = rc.row; row >= 1; --row) {
                for (var col = 1; col <= rc.col; ++col) {
                    var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                    var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                    if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {
                        coordList.push(CA.makeCoord(row, col));
                    }
                }
            }
            // 执行动作
            var count = coordList.length;
            if (0 == count) {
                callback.apply(target, []);
            } else {
                for (var i = 0, len = coordList.length; i < len; ++i) {
                    var coord = coordList[i];
                    var pos = this.getMaster().getPos(coord.row, coord.col);
                    var objectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                    var attachElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.attach);
                    Action.playElementScreenOut(attachElement, coord, pos, null, this);
                    Action.playElementScreenOut(objectElement, coord, pos, function() {
                        if (--count <= 0) {
                            Controller.onDrop(0, 0, null, callback, target);
                        }
                    }, this);
	            }
            }
        }
        // 生成固定元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var i = 0, len = randomCoordList.length; i < len; ++i) {
                var coord = randomCoordList[i];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var overlayElement = this.mMap.createElement(40100);    // 固定
                if (overlayElement.getNode()) {
                    overlayElement.getNode().pos(pos.x, pos.y);
                    overlayElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, overlayElement);
                // 操作动画
                Action.playElementFixedAction(overlayElement, pos, function() {
                    if (--count <= 0) {
                        innerScreenClear.apply(this, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 随机漫步
    doRandomRamble: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("随机漫步");
        }
        var coordList = [];
        // 遍历场上中间4x4区域
        var rc = this.getMaster().getRowCol();
        for (var row = 2; row <= 5; ++row) {
			for (var col = 2; col <= 5; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if (objectElement) {
                    var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
						coordList.push(CA.makeCoord(row, col));
					}
				}
            }
        }
        // 随机出起始位置
        var beginIndex = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
        var beginCoord = coordList[beginIndex];
        // 从四个方向获取随机一个坐标(不回头,根据前一个坐标)
        var directs = {to_up:true, to_down:true, to_left:true, to_right:true};
        this.getRandomCrossCoord = function(preCoord, currCoord) {
            if (preCoord) { // 不能回头
                if (preCoord.row > currCoord.row) { // 之前往上走,不能往下走
                    directs.to_down = false;
                } else if (preCoord.row < currCoord.row) { // 之前往下走,不能往上走
                    directs.to_up = false;
                } else if (preCoord.col > currCoord.col) {	// 之前往左走,不能往右走
                    directs.to_right = false;
                } else if (preCoord.col < currCoord.col) { // 之前往右走,不能往左走
                    directs.to_left = false;
                }
            } 
            if (1 == currCoord.row || rc.row == currCoord.row || 1 == currCoord.col || rc.col == currCoord.col) {
                return;
            }
            var randomCoordList = [];
            var crossCoordList = CA.getCrossRange(currCoord.row, currCoord.col, 1);
            for (var i = 0, len = crossCoordList.length; i < len; ++i) {
                var crossCoord = crossCoordList[i];
                if (this.getMaster().isCoordValid(crossCoord.row, crossCoord.col)) {
                    if (crossCoord.row < currCoord.row && crossCoord.col == currCoord.col) {   // 往上方向
                        if (directs.to_up) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row > currCoord.row && crossCoord.col == currCoord.col) {   // 往下方向
                        if (directs.to_down) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row == currCoord.col && crossCoord.col < currCoord.col) {   // 往左方向
                        if (directs.to_left) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row == currCoord.col && crossCoord.col >= currCoord.col) {   // 往右方向
                        if (directs.to_right) {
                            randomCoordList.push(crossCoord);
                        }
                    }
                }
            }
            var randomIndex = Math.floor(Math.random()*(randomCoordList.length - 1) + 0.5);
            return randomCoordList[randomIndex];
        }
        // 漫步表现
        this.rambleImplFunc = function(preCoord, currCoord) {
            var coord = this.getRandomCrossCoord(preCoord, currCoord);
            var objectElement = this.mMap.getElement(currCoord.row, currCoord.col, CoreDef.ElementTag.object);
            var pos = this.getMaster().getPos(currCoord.row, currCoord.col);
            if (objectElement) {
                Action.playRandomRambleAction1(pos, function() {
                    Action.playRandomRambleAction2(pos, currCoord, coord, null, this);
                    this.getSibling("ControllerClear").startClearEx([currCoord], function() {
                        this.updateGain(1);
                        if (coord) {
                            this.rambleImplFunc(currCoord, coord);
                        } else {
                            Controller.onDrop(0, 1, null, callback, target);
                        }
                    }, this);
                }, this);
            } else {
                if (coord) {
                    this.rambleImplFunc(currCoord, coord);
                } else {
                    Controller.onDrop(0, 0, null, callback, target);
                }
            }
        };
        this.rambleImplFunc(null, beginCoord);
    },
    //----------------------------------------------------------------------
    // 彩虹消
    doRainbowClear: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("彩虹消");
        }
        // 所有彩虹消坐标列表
        var allRainbowCoordList = [
            [[2,1],[1,2],[1,3],[1,4],[1,5],[2,6]],
            [[3,1],[2,2],[2,3],[2,4],[2,5],[3,6]],
            [[4,1],[3,2],[3,3],[3,4],[3,5],[4,6]],
            [[5,1],[4,2],[4,3],[4,4],[4,5],[5,6]],
            [[6,1],[5,2],[5,3],[5,4],[5,5],[6,6]]
        ];
        // 随机出坐标列表
        var randomIndex = Math.floor(Math.random()*(allRainbowCoordList.length - 1) + 0.5);
        var randomCoordList = allRainbowCoordList[randomIndex];
        var coordList = [];
        for (var i = 0, len = randomCoordList.length; i < len; ++i) {
            var row = randomCoordList[i][0];
            var col = randomCoordList[i][1];
            var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
            var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
            if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
                coordList.push(CA.makeCoord(row, col));
            }
        }
        //
        var pos = this.mMap.getRowPos(randomCoordList[0][0]);
        Action.playRainbowClearAction(pos, function() {
            this.getSibling("ControllerClear").startClearEx(coordList, function() {
				this.updateGain(1);
				Controller.onDrop(0, 1, null, callback, target);
            }, this);
        }, this);
    },
    //----------------------------------------------------------------------
    // 全屏随机消除
    doScreenClear: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("全屏随机消除: " + value);
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
		for(var j = 0, len = randomCoordList.length; j < len; ++j){
			var pos = this.getMaster().getPos(randomCoordList[j].row, randomCoordList[j].col);
			Action.playScreenClearFlyAction(pos,randomCoordList[j],function(){
				var ani = laya.createArmature(ResURL("yuansuxiaochu.png"), ResURL("yuansuxiaochu.sk"), false, null, null, function() {
					ani.removeSelf();
					ani.destroy();
				}, this);
				ani.play("ue_clear_2");
				ani.pos(pos.x, pos.y);
				Controller.getView().getSceneLayer().addChild(ani);
			},this);
		}
		Action.playScreenClearCastAction(null,function(){
			this.getSibling("ControllerClear").startClearEx(randomCoordList, function() {
				this.updateGain(1);
				Controller.onDrop(0, 1, null, callback, target);
			}, this);
		},this);
    }
    //----------------------------------------------------------------------
});