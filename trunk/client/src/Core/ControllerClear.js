/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	消除控制器
 ***********************************************************************/
ControllerClear = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerClear");
		this.mClearBoundary = [];				// 保存消除的元素的边框
		this.mShowSkills = [];					// 这一局触发过的技能
    },
    //----------------------------------------------------------------------
    // 初始化函数
    init: function() {
	    this.mMap = this.getSibling("ComponentMap");
    },
	//----------------------------------------------------------------------
    // 重置技能触发
    resetShowSkills: function() {
	    this.mShowSkills = [];
    },
	//----------------------------------------------------------------------
	// 生成技能
	generateSkill: function(objectId, skillId, row, col) {
		var pos = this.getMaster().getPos(row, col);
		// 物件
		var objectElement = this.mMap.createElement(objectId);
		if (objectElement.getNode()) {
			objectElement.getNode().pos(pos.x, pos.y);
		}
		objectElement.is_old = true;
		this.mMap.addElement(row, col, objectElement);
		// 附件
		var attachElement = this.mMap.createElement(skillId);
		if (attachElement.getNode()) {
			var display = null;
			if (30100 == skillId) {			// 十字消
				display = laya.createArmature(ResURL("shizixiaozhuangtai.png"), ResURL("shizixiaozhuangtai.sk"), false, null, null, null, null);
				display.play("skill_cross_state", true);
			} else if (30200 == skillId) {	// x消
				display = laya.createArmature(ResURL("xzixiao.png"), ResURL("xzixiao.sk"), false, null, null, null, null);
				display.play("skill_x_state", true);
			}
			if (display) {
				attachElement.setNode(display);
			}
			attachElement.getNode().pos(pos.x, pos.y);
		}
		attachElement.is_old = true;
		this.mMap.addElement(row, col, attachElement);
	},
	//----------------------------------------------------------------------
	// 检查技能生成
	checkSkillGenerate: function(coordList) {
		var skillId = 0;
		if (G.SKILL_OBLIQUE_COUNT == coordList.length) {		// x消
			skillId = 30200;
		} else if (coordList.length >= G.SKILL_CROSS_COUNT) {	// 十字消
			skillId = 30100;
		} else {
			return;
		}
		for (var i = 0; i < this.mShowSkills.length; ++i) {
			if (skillId == this.mShowSkills[i]) {
				return;
			}
		}
		// 获取随机位置
		var randomCoordList = [];
		for (var i = 0, len = coordList.length; i < len; ++i) {
			var coord = coordList[i];
			var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.overlay);
			if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != objectElement.getSubType()
				&& !attachElement && !overlayElement) {	// 可生成技能位置:普通元素,且非百搭,且无技能,无固定元素
				randomCoordList.push(coord);
			}
		}
		var randomIndex = Math.floor(DataModel.getRandom()*(randomCoordList.length - 1) + 0.5);
		var randomCoord = randomCoordList[randomIndex];
		if (randomCoord) {
			return {
				skill_id: skillId,			// 技能id
				row: randomCoord.row,		// 行坐标
				col: randomCoord.col		// 列坐标
			}
		}
	},
	//----------------------------------------------------------------------
	// 检查技能消除
	checkSkillClear: function(coord, searchedList, clearList) {
		function innerFunc(coord) {
			if (!this.getMaster().isCoordValid(coord.row, coord.col) || CA.getCoordIndex(searchedList, coord) >= 0) {	// 坐标无效,坐标被使用
				return;
			}
			CA.addCoord(searchedList, coord);
			var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
			if (!objectElement) {
				return;
			}
			if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(被技能)
				clearList.push({coord:coord, object_ids:[], clear_type:2});
			} else {	// 普通元素
				clearList.push({coord:coord, object_ids:[objectElement.getId()], clear_type:2});
			}
			this.checkSkillClear(coord, searchedList, clearList);
		}
		var attachElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.attach);
		if (attachElement) {
			if (CoreDef.AttachType.cross == attachElement.getType()) {	// 十字消
				var crossCoordList = CA.getCrossRange(coord.row, coord.col, G.MAP_ROW);
				for (var i = 0, len = crossCoordList.length; i < len; ++i) {
					innerFunc.apply(this, [crossCoordList[i]]);
				}
			} else if (CoreDef.AttachType.oblique == attachElement.getType()) {	// x消
				var obliqueCoordList = CA.getObliqueRange(coord.row, coord.col, 1);
				for (var j = 0, l = obliqueCoordList.length; j < l; ++j) {
					innerFunc.apply(this, [obliqueCoordList[j]]);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	// 搜索消除
	searchList: function() {
		var infoList = [];
		var searchedList = [];
		// 遍历地图
		var rc = this.getMaster().getRowCol();
		for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
				var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if (!objectElement || CoreDef.ObjectType.normal != objectElement.getType()) {	// 不为普通元素
					continue;
				}
				if (CA.getCoordIndex(searchedList, CA.makeCoord(row, col)) >= 0) {	// 位置已被搜索,不能作为起始点
					continue;
				}
				if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭不能作为起始点
					continue;
				}
				// 可消除元素判断
				var subType = 0;	// 消除的元素子类型
				var coordList = CA.searchConnectList(row, col, function(row1, col1, row2, col2) {
					if (this.getMaster().isCoordValid(row1, col1) && this.getMaster().isCoordValid(row2, col2)) {
						if ((row1 == row2 - 1 && col1 == col2) || (row1 == row2 && col1 == col2 - 1)
							|| (row1 == row2 + 1 && col1 == col2) || (row1 == row2 && col1 == col2 + 1)) {  // 上,右,下,左
							var objectElement1 = this.mMap.getElement(row1, col1, CoreDef.ElementTag.object);
							var objectElement2 = this.mMap.getElement(row2, col2, CoreDef.ElementTag.object);
							if (objectElement1 && CoreDef.ObjectType.normal == objectElement1.getType()
								&& objectElement2 && CoreDef.ObjectType.normal == objectElement2.getType()) {	// 元素不为空,且为普通元素
								if (0 == subType) {
									if (CoreDef.BaseType.wail != objectElement1.getSubType()) {
										subType = objectElement1.getSubType();
									} else if (CoreDef.BaseType.wail != objectElement2.getSubType()) {
										subType = objectElement2.getSubType();
									}
								}
								if (objectElement1.getSubType() == objectElement2.getSubType()) {	// 元素子类型相同
									return true;
								}
								if (CoreDef.BaseType.wail == objectElement1.getSubType()) {	// 元素1为百搭,元素2必须为指定的子类型
									return subType == objectElement2.getSubType();
								}
								if (CoreDef.BaseType.wail == objectElement2.getSubType()) {	// 元素2为百搭,元素1必须为指定的子类型
									return subType == objectElement1.getSubType();
								}
								return false;
							}
						}
					}
				}, this);
				// 保存已搜索坐标
				for (var i = 0, len = coordList.length; i < len; ++i) {
					CA.addCoord(searchedList, coordList[i]);
				}
				// 消除个数条件判断
				if (coordList.length >= G.CLEAR_COUNT) {
					infoList.push(coordList);
				}
			}
		}
		return infoList;
	},
	//----------------------------------------------------------------------
	// 搜索消除信息
	searchClearInfo: function(infoList, isMatch) {
		var searchedList = [];
		var clearList = [];			// 消除列表
		var skillList = [];			// 技能列表
		// 计算消除信息(正常消除)
		for (var i = 0, len = infoList.length; i < len; ++i) {
			var coordList = infoList[i];
			var coordStart = coordList[0];
			var firstObjectId = this.mMap.getElement(coordStart.row, coordStart.col, CoreDef.ElementTag.object).getId();
			for (var j = 0, l = coordList.length; j < l; ++j) {
				var coord = coordList[j];
				var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
				var objectId = objectElement.getId();
				var coordIndex = CA.getCoordIndex(searchedList, coord);
				if (coordIndex >= 0) {	// 坐标已使用
					if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(被多次匹配)
						if (isMatch) {
							clearList[coordIndex].object_ids.push(firstObjectId);
						}
					}
				} else {	// 坐标未使用
					CA.addCoord(searchedList, coord);
					// coord:坐标,object_ids:坐标上被消除的对象id,clear_type:消除类型(1.匹配消除,2.被动消除)
					if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(第1次匹配)
						if (isMatch) {
							clearList.push({coord:coord, object_ids:[firstObjectId], clear_type:1});
						} else {
							clearList.push({coord:coord, object_ids:[], clear_type:2});
						}
					} else {	// 普通元素
						clearList.push({coord:coord, object_ids:[objectId], clear_type:(isMatch ? 1 : 2)});
					}
				}
			}
			// 生成技能信息
			var skillInfo = this.checkSkillGenerate(coordList);
			if (skillInfo) {
				skillList.push(skillInfo);
			}
		}
		// 计算消除信息(技能消除)
		for (var i = 0, len = infoList.length; i < len; ++i) {
			for (var j = 0, l = infoList[i].length; j < l; ++j) {
				this.checkSkillClear(infoList[i][j], searchedList, clearList);
			}
		}
		return {clear_list:clearList, skill_list:skillList};
	},
	//----------------------------------------------------------------------
	// 消除元素
	clearElement: function(info, skillList, callback, target) {
		var pos = this.getMaster().getPos(info.coord.row, info.coord.col);
		var surfaceElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.surface);
		var objectElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.object);
		var attachElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.attach);
		var overlayElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.overlay);
		if (!overlayElement) {	// 有固定元素,不可消除物件
			objectElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.object);
			attachElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.attach);
		}
		var surfaceId = surfaceElement ? surfaceElement.getId() : 0;	// 地表id
		var objectIds = info.object_ids;								// 物件id列表
		var skillId = 0;												// 技能id
		var clearType = info.clear_type;								// 消除类型(1.匹配消除,2.被动消除)
		for (var i = 0, len = skillList.length; i < len; ++i) {
			var skillInfo = skillList[i];
			if (info.coord.row == skillInfo.row && info.coord.col == skillInfo.col) {
				skillId = skillInfo.skill_id;
				skillList.splice(i, 1);
				break;
			}
		}
		// 消除表现
		var playCount = 3;
		function innerFunc() {
			if (--playCount <= 0) {
				callback.apply(target, []);
			}
		}
		Action.playSurfaceClear(surfaceElement, pos, function() {
			innerFunc();
		}, this);
		if (overlayElement) {	// 有固定元素,不可消除物件/附件
			innerFunc();
			innerFunc();
		} else {
			Action.playClearEffect(objectElement, info.clear_type, function() {
				Action.playAttachClear(attachElement, info.coord, pos, function() {
					if(attachElement && CoreDef.AttachType.cross == attachElement.getType()){
						this.mShowSkills.push(30100);
					}else if(attachElement && CoreDef.AttachType.oblique == attachElement.getType()){
						this.mShowSkills.push(30200);
					}
					innerFunc();
				}, this);
				Action.playObjectClear(objectElement, pos, clearType, function() {
					if (skillId > 0 && objectIds.length > 0) {
						this.generateSkill(objectIds[0], skillId, info.coord.row, info.coord.col);
					}
					innerFunc()
				}, this);
			}, this);
		}
		// 事件派发
		if (surfaceId > 0) {
			EventCenter.post(EventDef["ED_CORE_CLEAR_SURFACE"], surfaceId, info.coord.row, info.coord.col);
		}
		for (var j = 0, l = objectIds.length; j < l; ++j) {
			EventCenter.post(EventDef["ED_CORE_CLEAR_OBJECT"], objectIds[j], info.coord.row, info.coord.col);
		}
	},
	//----------------------------------------------------------------------
	// 是否存在地表
	isExistSurface: function() {
		var rc = this.getMaster().getRowCol();
		for (var row = 1; row <= rc.row; ++row) {
			for (var col = 1; col <= rc.col; ++col) {
				if (this.mMap.getElement(row, col, CoreDef.ElementTag.surface)) {
					return true;
				}
			}
		}
		return false;
	},
	//----------------------------------------------------------------------
	// 开始消除(自动寻找可消除元素)
	startClear: function(clearCB, target) {
		var infoList = this.searchList();
		this.getSibling("ControllerGain").resetTimesGain();
		if (0 == infoList.length) {	// 无可消除
			clearCB.apply(target, [0]);
		} else {		// 有可消除
			// 消除元素
			var clearInfo = this.searchClearInfo(infoList, true);
			var clearCount = clearInfo.clear_list.length;
			AudioModel.playSound(3002);
			for (var i = 0, len = clearInfo.clear_list.length; i < len; ++i) {
				this.clearElement(clearInfo.clear_list[i], clearInfo.skill_list, function() {
					if (--clearCount <= 0) {
						
						clearCB.apply(target, [clearInfo.clear_list.length]);
					}
				}, this);
			}
			// 消除区域效果
			if (Controller.isShowDisplay()) {
				for (var j = 0, l = infoList.length; j < l; ++j) {
					this.createClearBoundary(infoList[j]);
				}
				laya.callAfter(0.6, function() {
					AudioModel.playSound(3002);
					this.deleteClearBoundary();
				}, this);
			}
		}
	},
	//----------------------------------------------------------------------
	// 开始消除(消除指定元素)
	startClearEx: function(coordList, clearCB, target) {
		if (0 == coordList.length) {
			clearCB.apply(target, []);
			return;
		}
		this.getSibling("ControllerGain").resetTimesGain();
		var infoList = [coordList];
		var clearInfo = this.searchClearInfo(infoList, false);
		var clearCount = clearInfo.clear_list.length;
		AudioModel.playSound(3002);
		for (var i = 0, len = clearInfo.clear_list.length; i < len; ++i) {
			this.clearElement(clearInfo.clear_list[i], clearInfo.skill_list, function() {
				if (--clearCount <= 0) {
					clearCB.apply(target, [clearInfo.clear_list.length]);
				}
			}, this);
		}
	},
	//----------------------------------------------------------------------
	//添加边框
	createClearBoundary: function(coordList) {
		this.createHorBoundary(coordList);
		this.createVerBoundary(coordList);
		this.createCornerBoundary(coordList);
	},
	//----------------------------------------------------------------------
	//判断要不要创建横向边框
	showHorBoundary: function(coordList, row7, col6){
		var upRow = row7 - 1;
		var dowRow = row7
		var upFlag = false;
		var downFlag = false;
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(row == upRow && col6 == col) {
				upFlag = true;
			} 
			if (row  == dowRow && col == col6){
				downFlag = true;
			}
		}
		if (upFlag && downFlag){
			return false;
		}
		if(upFlag || downFlag){
			return true;
		}
		return false;
	},
	//----------------------------------------------------------------------
	//创建横向边框
	createHorBoundary: function(coordList){
		for(var i = 1; i <= 7; ++i){
			for(var j = 1;j <= 6; ++j){
				if(this.showHorBoundary(coordList, i, j)){
					var anchorX = 0.5, anchorY = 1;
					var x = 0, y = 0;
					var pos = this.getMaster().getPos(i > 6?6:i, j);
					var horLineNOde = new Laya.Image(ResURL("image_map_boundary_01.png"));
					horLineNOde.anchorX = anchorX;
					horLineNOde.width = 49;
					horLineNOde.anchorY = anchorY;
					horLineNOde.pos(pos.x, pos.y - G.GRID_HEIGHT/2 + 6);
					if(i == 7){
						horLineNOde.pos(pos.x, pos.y + G.GRID_HEIGHT/2 + 6);
					}
					horLineNOde.zOrder = 50;
					Controller.getView().getSceneLayer().addChild(horLineNOde);
					this.mClearBoundary.push(horLineNOde);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//判断要不要创建纵向边框
	showVerBoundary: function(coordList, row6, col7){
		var leftCol = col7 - 1;
		var rightCol = col7
		var leftFlag = false;
		var rightFlag = false;
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(col == leftCol && row == row6) {
				leftFlag = true;
			} 
			if (col == rightCol && row == row6){
				rightFlag = true;
			}
		}
		if (leftFlag && rightFlag){
			return false;
		}
		if(leftFlag || rightFlag){
			return true;
		}
		return false;
	},
	//----------------------------------------------------------------------
	//创建纵向边框
	createVerBoundary: function(coordList){
		for(var i = 1; i <= 6; ++i){
			for(var j = 1;j <= 7; ++j){
				if(this.showVerBoundary(coordList, i, j)){
					var anchorX = 0.5, anchorY = 1;
					var x = 0, y = 0;
					var pos = this.getMaster().getPos(i, j > 6 ? 6: j);
					var verLineNOde = new Laya.Image(ResURL("image_map_boundary_01.png"));
					verLineNOde.anchorX = anchorX;
					verLineNOde.rotation = 90;
					verLineNOde.anchorY = anchorY;
					verLineNOde.width = 49;
					verLineNOde.pos(pos.x- G.GRID_HEIGHT/2 - 5, pos.y );
					if(j == 7){
						verLineNOde.pos(pos.x + G.GRID_HEIGHT/2 - 5, pos.y );
					}
					verLineNOde.zOrder = 50;
					Controller.getView().getSceneLayer().addChild(verLineNOde);
					this.mClearBoundary.push(verLineNOde);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//判断创建四角边框的方向(1=右下角 , 2=左下角, 3=右上角, 4=左上角, 5=横线,
						   //6=竖线， 7=不创建, 8=左上右下，9=左下右上)
	calCornerType: function(coordList, row7, col7 ){
		var direct1Flag = false;	//左上是否有元素
		var direct2Flag = false;	//上方是否有元素
		var direct3Flag = false;	//左边是否有元素
		var direct4Flag = false;	//该位置是否有元素
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(row7 == row && col7 == col){
				direct4Flag = true;
			}
			if(row7 == 1 && col > 1 && (col7 - 1 == col) && row == 1 && direct4Flag){
				direct3Flag = true;
			}
			if(col == 1 && col7 == col && row > 1 && (row7 - 1 == row) && direct4Flag){
				direct2Flag = true;
			}
			if(row7 > 1 && row7 - 1 == row && col7 == col){
				direct2Flag = true;
			}
			if (row7 > 1 && col7 > 1 && row7 - 1 == row && col7 - 1 == col){
				direct1Flag = true;
			}
			if (col7 > 1 && row7 == row && col7 - 1 == col){
				direct3Flag = true;
			}
		}
		//console.log("453+++++++++++++++",direct1Flag, direct2Flag,direct3Flag,direct4Flag);
		if ((direct4Flag && !direct1Flag && !direct2Flag && !direct3Flag) || (!direct4Flag && direct1Flag && direct2Flag && direct3Flag)){	return 4; }
		if((direct4Flag && !direct1Flag && direct2Flag && !direct3Flag) || (direct1Flag && !direct2Flag && direct3Flag && !direct4Flag)){ return 6; }
		if((direct4Flag && direct1Flag && direct2Flag && !direct3Flag) || (!direct4Flag && !direct1Flag && !direct2Flag && direct3Flag )){ return 3;}
		if((direct4Flag && !direct1Flag && !direct2Flag && direct3Flag) || (direct1Flag && direct2Flag && !direct3Flag && !direct4Flag)){ return 5; }
		if((direct4Flag && !direct1Flag && direct2Flag && direct3Flag) || (direct1Flag && !direct2Flag && !direct3Flag && !direct4Flag)){ return 1; }
		if((direct4Flag && direct1Flag && !direct2Flag && direct3Flag ) || (!direct1Flag && direct2Flag && !direct3Flag && !direct4Flag)){ return 2; }
		if((direct4Flag && direct1Flag && direct2Flag && direct3Flag) || (!direct1Flag && !direct2Flag && !direct3Flag)){
			return 7;
		}
		if(direct1Flag && !direct2Flag && !direct3Flag && direct4Flag){return 8;}
		if(!direct1Flag && direct2Flag && direct3Flag && !direct4Flag){return 9;}
		return 7;
	},
	//----------------------------------------------------------------------
	//创建四角边框
	createCornerBoundary: function(coordList){
		for(var i = 1; i <= 7; ++i){
			for(var j = 1;j <= 7; ++j){
				var anchorX = 0.5, anchorY = 0.5;
				var x = 0, y = 0;
				var pos = this.getMaster().getPos(i > 6 ? 6: i, j > 6 ? 6: j);
				var image = ResURL("image_map_boundary_03.png");
				var rotation = 0;
				var width = 19
				var directType = this.calCornerType(coordList, i, j);
				if (directType != 7){
					//console.log("471++++++++++++++",i,j, directType);
					if(directType == 1){			//右下角
						rotation = 180;
						x = pos.x -  G.GRID_WIDTH/2 - 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 - 4;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 -4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 - 4;
						}
					}else if(directType == 2){		//左下角
						rotation = 270;
						x = pos.x -  G.GRID_WIDTH/2 + 5 ;
						y = pos.y -  G.GRID_HEIGHT/2 - 4;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 + 5 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 - 4;
						}
					}else if(directType == 3){		//右上角
						rotation = 90;
						x = pos.x -  G.GRID_WIDTH/2 - 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 + 5;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 - 4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 + 5;
						}
					}else if(directType == 4){		//左上角
						rotation = 0;
						x = pos.x -  G.GRID_WIDTH/2 + 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 + 5;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 + 4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 + 5;
						}
					}else if(directType == 5){		//横线
						image = ResURL("image_map_boundary_01.png");
						x = pos.x - 35;
						width = 32;
						y = pos.y - G.GRID_HEIGHT/2;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2;
						}
					}
					else if(directType == 6){		//竖线
						image = ResURL("image_map_boundary_01.png");
						rotation = 90;
						width = 32;
						x = pos.x -  G.GRID_WIDTH/2 ;
						y = pos.y - 35;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2  ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2;
						}
					}
					var cornerNode = new Laya.Image(image);
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}
				if(directType == 8){
					var cornerNode1 = new Laya.Image(image);	//左上边框（左上方元素的右下角）右下角类型
					rotation = 180;
					x = pos.x -  G.GRID_WIDTH/2 - 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 - 4;
					cornerNode1.anchorX = anchorX;
					cornerNode1.rotation = rotation;
					cornerNode1.anchorY = anchorY;
					cornerNode1.width = width;
					cornerNode1.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode1);
					this.mClearBoundary.push(cornerNode1);
					
					var cornerNode = new Laya.Image(image);	//右下（该位置左上角）	左上角类型
					rotation = 0;
					x = pos.x -  G.GRID_WIDTH/2 + 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 + 5;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}else if(directType == 9){
					var cornerNode = new Laya.Image(image);	//右上边框（右上方元素的左下角）  左下角类型
					rotation = 270;
					x = pos.x -  G.GRID_WIDTH/2 + 5 ;
					y = pos.y -  G.GRID_HEIGHT/2 - 4;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
					
					var cornerNode = new Laya.Image(image);	//右下（左边元素的右上角）  右上角类型
					rotation = 90;
					x = pos.x -  G.GRID_WIDTH/2 - 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 + 5;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//删除边框数据
	deleteClearBoundary: function(){
		for (var i = 0, len = this.mClearBoundary.length; i< len; ++i){
			var node = this.mClearBoundary[i];
			node.removeSelf();
			node.destroy();
		}
		this.mClearBoundary = [];
	}
    //----------------------------------------------------------------------
});