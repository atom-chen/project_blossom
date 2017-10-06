/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	掉落控制器
 ***********************************************************************/
ControllerDrop = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerDrop");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function() {
	    this.mMap = this.getSibling("ComponentMap");
		this.mBornCoordList = [];       // 出现点列表
	    var rc = this.getMaster().getRowCol();
	    for (var row = 1; row <= rc.row; ++row) {
		    for (var col = 1; col <= rc.col; ++col) {
			    if (CoreDef.GridType.born == this.mMap.getGrid(row, col).getType()) {
				    this.mBornCoordList.push({row:row, col:col});
			    }
		    }
	    }
    },
	//----------------------------------------------------------------------
	// 设置掉落数据,dataMap:数据表(二维数组),orderType:数据获取顺序类型(1.随机初始row,row递减,2.随机初始row,row递增,3.初始row=maxRow,row递减,4.初始row=0,row递增)
	setDropData: function(dataMap, orderType) {
		this.mDataMap= dataMap;					// 掉落数据表
		this.mOrderType = (1 == orderType || 2 == orderType || 3 == orderType || 4 == orderType) ? orderType : 1;
	    this.mDataColIndexList = [];			// 数据列索引表(对应到第几行)
	    for (var col = 0, maxCol = this.getMaster().getRowCol().col; col < maxCol; ++col) {
			var maxRow = dataMap[col].length;
			if (1 == this.mOrderType) {
				this.mDataColIndexList[col] = Math.floor(DataModel.getRandom()*(maxRow - 1) + 0.5);
			} else if (2 == this.mOrderType) {
				this.mDataColIndexList[col] = Math.floor(DataModel.getRandom()*(maxRow - 1) + 0.5);
			} else if (3 == this.mOrderType) {
				this.mDataColIndexList[col] = maxRow - 1;
			} else if (4 == this.mOrderType) {
				this.mDataColIndexList[col] = 0;
			}
	    }
	},
	//----------------------------------------------------------------------
	// 获取元素id
	getElementId: function(col, row) {
		col = col - 1;
		var row = this.mDataColIndexList[col];		// 当前列索引位置(对应到第几行)
		var elementId = this.mDataMap[row][col];	// 掉落数据表指定位置的数据
		var maxRow = this.mDataMap[row].length;
		if (1 == this.mOrderType) {
			row = row - 1;
			row =  (row < 0) ? (maxRow - 1) : row;
		} else if (2 == this.mOrderType) {
			row = row  + 1;
			row =  (row >= maxRow) ? 0 : row;
		} else if (3 == this.mOrderType) {
			row = row - 1;
			row =  (row < 0) ? (maxRow - 1) : row;
		} else if (4 == this.mOrderType) {
			row = row + 1;
			row =  (row >= maxRow) ? 0 : row;
		}
		this.mDataColIndexList[col] = row;
		return elementId
	},
	//----------------------------------------------------------------------
	// 生成元素
	generateElement: function(batch) {
		for (var i = 0, len = this.mBornCoordList.length; i < len; ++i) {
			var bornCoord = this.mBornCoordList[i];
			if (!this.mMap.getElement(bornCoord.row, bornCoord.col, CoreDef.ElementTag.object)) {   // 出生点无元素
				var elementId = this.getElementId(bornCoord.col, batch);
				if (!isNaN(elementId) && elementId > 0) {
					var element = this.mMap.createElement(elementId);
					var pos = this.getMaster().getPos(bornCoord.row, bornCoord.col);
					if (element.getNode()) {
						element.getNode().pos(pos.x, pos.y);
						element.getNode().visible = false;
					}
					element.is_new_flag = true;     // 新生成标识
					this.mMap.addElement(bornCoord.row, bornCoord.col, element);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	// 是否可掉落
	isCanDrop: function(row, col) {
		var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
		var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
		var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
		return (objectElement && objectElement.isCanDrop())
			&& (!attachElement || attachElement.isCanDrop())
			&& (!overlayElement || overlayElement.isCanDrop());
	},
	//----------------------------------------------------------------------
	// 是否可掉落到指定坐标
	isCanDropTo: function(coordSrc, coordTarget) {
		return this.mMap.isCanContact(coordSrc.row, coordSrc.col, coordTarget.row, coordTarget.col)
			&& CoreDef.GridType.normal == this.mMap.getGrid(coordTarget.row, coordTarget.col).getType()
			&& !this.mMap.getElement(coordTarget.row, coordTarget.col, CoreDef.ElementTag.object);
	},
	//----------------------------------------------------------------------
	// 掉落单个
	dropOne: function(row, col) {
		if (!this.getMaster().isCoordValid(row, col)) {
			return;
		}
		if (!this.isCanDrop(row, col)) {
			return;
		}
		// 搜索路径
		var rc = this.getMaster().getRowCol();
		var coordPath = CA.searchDropPath(rc.row, row, col, true, function(curr, down) {
			return this.isCanDropTo(curr, down,row, col);
		}, null, null, null, this);
		if (0 == coordPath.length) {	// 无掉落路径
			var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
			if (CoreDef.GridType.born == this.mMap.getGrid(row, col).getType() && objectElement.is_new_flag) {
				delete objectElement.is_new_flag;
				return {elements:[objectElement, attachElement, overlayElement], coord_begin:{row:row, col:col}, pos_path:[]};
			}
		} else {
			// 位置置换
			var coordTarget = coordPath[coordPath.length - 1];
			var objectElement = this.mMap.delElement(row, col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.delElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.delElement(row, col, CoreDef.ElementTag.overlay);
			this.mMap.addElement(coordTarget.row, coordTarget.col, objectElement);
			this.mMap.addElement(coordTarget.row, coordTarget.col, attachElement);
			this.mMap.addElement(coordTarget.row, coordTarget.col, overlayElement);
			// 信息返回
			var posPath = [];
			for (var i = 0, len = coordPath.length; i < len; ++i) {
				var pos = this.getMaster().getPos(coordPath[i].row, coordPath[i].col);
				posPath.push(pos);
			}
			return {
				elements: [objectElement, attachElement, overlayElement],
				coord_begin: {row:row, col:col},
				pos_path: posPath
			};
		}
	},
	//----------------------------------------------------------------------
	// 开始掉落
	startDrop: function(times, dropCB, target) {
		var rc = this.getMaster().getRowCol();
		// 搜索已有掉落
		var oldInfoList = [];
		CA.searchDropList(rc.row, rc.col, function(row, col, batch) {
			var oldInfo = this.dropOne(row, col);
			if (oldInfo) {
				oldInfo.batch = batch;
				oldInfoList.push(oldInfo);
				return true;
			}
		}, null, this);
		// 搜索新的掉落
		var newInfoList = [];
		CA.searchDropList(rc.row, rc.col, function(row, col, batch) {
			var newInfo = this.dropOne(row, col);
			if (newInfo) {
				newInfo.batch = batch;
				newInfoList.push(newInfo);
				return true;
			}
		}, function(batch) {
			this.generateElement(batch);
		}, this);
		// 新的掉落表现
		this.dropNewImplFunc = function() {
			var newDropCount = newInfoList.length;
			if (0 == newDropCount) {
				dropCB.apply(target, [true]);
			} else {
				for (var i = 0, len = newInfoList.length; i < len; ++i) {   // 播放动画
					var newInfo = newInfoList[i];
					var objectElement = newInfo.elements[0];
					var attachElement = newInfo.elements[1];
					var overlayElement = newInfo.elements[2];
					Action.playNewElementDrop(times, overlayElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, null, this);
					Action.playNewElementDrop(times, attachElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, null, this);
					Action.playNewElementDrop(times, objectElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, function() {
						if (--newDropCount <= 0) {
							dropCB.apply(target, [true]);
						}
					}, this);
				}	
			}
		};
		// 已有掉落表现
		var oldDropCount = oldInfoList.length;
		if (0 == oldDropCount) {
			this.dropNewImplFunc();
		} else {
			for (var i = 0, len = oldInfoList.length; i < len; ++i) {   // 播放动画
				var oldInfo = oldInfoList[i];
				var objectElement = oldInfo.elements[0];
				var attachElement = oldInfo.elements[1];
				var overlayElement = oldInfo.elements[2];
				Action.playOldElementDrop(times, overlayElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, null, this);
				Action.playOldElementDrop(times, attachElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, null, this);
				Action.playOldElementDrop(times, objectElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, function() {
					if (--oldDropCount <= 0) {
						this.dropNewImplFunc();
					}
				}, this);
			}
		}
	}
    //----------------------------------------------------------------------
});