/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	地图控制器
 ***********************************************************************/
ComponentMap = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ComponentMap");
        this.mMapBackground = null;         // 地图背景
        this.mMapGrid = {};                 // 地图格子
        this.mMapBoard = {};                // 地图隔板
        this.mMapBoundary = {};             // 地图边框
        this.mMapElement = {};              // 地图元素
		this.mIfShowDisplay = true;			// 是否显示表现
    },
    //----------------------------------------------------------------------
    // 初始化函数
    init: function(mapCfg, ifShowDisplay) {
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            this.mMapGrid[row] = {};
            this.mMapBoard[row] = {};
            this.mMapElement[row] = {};
            for (var col = 1; col <= rc.col; ++col) {
                this.mMapGrid[row][col] = this.createGrid(row, col);
                this.mMapBoard[row][col] = {};
                this.mMapElement[row][col] = {};
            }
        }
        for (var r = 1; r <= rc.row + 1; ++r) {
            this.mMapBoundary[row] = {};
            for (var c = 1; c <= rc.col + 1; ++c) {
                this.mMapBoundary[row][col] = {};
            }
        }
        // 解析地图
        if (mapCfg && 'object' == typeof(mapCfg) && !(mapCfg instanceof Array)) {
            this.setMapBackground(mapCfg.background);
            this.parseMapGrid(mapCfg.grid, mapCfg.line);
            this.parseMapBoard(mapCfg.board);
            this.parseMapBoundary(mapCfg.boundary);
        }
		this.mIfShowDisplay = ifShowDisplay;
    },
    //----------------------------------------------------------------------
    // 获取指定行的中心点
    getRowPos: function(row) {
        var rc = this.getMaster().getRowCol();
        var startPos = this.getMaster().getPos(row, 1);
        var endPos = this.getMaster().getPos(row, rc.col);
        return {x:startPos.x + (endPos.x - startPos.x)/2, y:startPos.y};
    },
    //----------------------------------------------------------------------
    // 获取指定列的中心点
    getColPos: function(col) {
        var rc = this.getMaster().getRowCol();
        var startPos = this.getMaster().getPos(1, col);
        var endPos = this.getMaster().getPos(rc.row, col);
        return {x:startPos.x, y:endPos.y + (startPos.y - endPos.y)/2};
    },
    //----------------------------------------------------------------------
    // 设置地图背景
    setMapBackground: function(fileName) {
		if (!this.mIfShowDisplay) {
			return;
		}
        if ('string' == typeof(fileName) && fileName.length > 0) {
            if (!this.mMapBackground || this.mMapBackground.destroyed) {
                this.mMapBackground = new laya.ui.Image();
				this.mMapBackground.anchorX = 0.5;
				this.mMapBackground.anchorY = 0.5;
                this.mMapBackground.pos(Laya.stage.width/2, Laya.stage.height/2);
				this.mMapBackground.zOrder = 0;
                this.getMaster().getBackgroundLayer().addChild(this.mMapBackground);
            }
            this.mMapBackground.skin = ResURL(fileName);
            this.mMapBackground.file = fileName;
        } else if (this.mMapBackground && !this.mMapBackground.destroyed) {
            this.mMapBackground.removeSelf();
			this.mMapBackground.destroy();
            delete this.mMapBackground;
        }
    },
    //----------------------------------------------------------------------
    // 获取地图背景
    getMapBackground: function() {
        return this.mMapBackground;
    },
    //----------------------------------------------------------------------
    // 解析地图格子
    parseMapGrid: function(gridMap, lineList) {
        if (!(gridMap && 'object' == typeof(gridMap) && !(gridMap instanceof Array))) {
            return;
        }
        for (var row in gridMap) {
            if (gridMap.hasOwnProperty(row)) {
                for (var col in gridMap[row]) {
                    if (gridMap[row].hasOwnProperty(col)) {
                        var gridId = gridMap[row][col][0];      // 格子id
                        var elementIdList = [
                            gridMap[row][col][1],               // 地表元素id
                            gridMap[row][col][2],               // 物件元素id
                            gridMap[row][col][3],               // 附件元素id
                            gridMap[row][col][4]                // 覆盖元素id
                        ];
	                    var grid = this.setGridProperty(row, col, lineList, gridId);
	                    // 解析元素
	                    for (var i = 0, len = elementIdList.length; i < len; ++i) {
		                    var element = this.createElement(elementIdList[i]);
		                    if (element) {
			                    element.setPosition(grid.getPosition());
			                    this.addElement(row, col, element);
		                    }
	                    }
                    }
                }
            }
        }
    },
    //----------------------------------------------------------------------
    // 解析地图隔板
    parseMapBoard: function(boardMap) {
        if (!(boardMap && 'object' == typeof(boardMap) && !(boardMap instanceof Array))) {
            return;
        }
	    for (var row in boardMap) {
		    if (boardMap.hasOwnProperty(row)) {
			    for (var col in boardMap[row]) {
				    if (boardMap[row].hasOwnProperty(col)) {
					    var boardIdH = boardMap[row][col][0];     // 横向隔板id
					    var boardIdV = boardMap[row][col][1];     // 竖向隔板id
					    this.addBoard(row, col, boardIdH);
					    this.addBoard(row, col, boardIdV);
				    }
			    }
		    }
	    }
    },
    //----------------------------------------------------------------------
    // 解析地图边框
    parseMapBoundary: function(boundaryMap) {
        if (!(boundaryMap && 'object' == typeof(boundaryMap) && !(boundaryMap instanceof Array))) {
            return;
        }
	    for (var row in boundaryMap) {
		    if (boundaryMap.hasOwnProperty(row)) {
			    for (var col in boundaryMap[row]) {
				    if (boundaryMap[row].hasOwnProperty(col)) {
					    var boundaryIdH = boundaryMap[row][col][0];     // 横向边框id
					    var boundaryIdV = boundaryMap[row][col][1];     // 竖向竖向id
					    this.addBoundary(row, col, boundaryIdH);
					    this.addBoundary(row, col, boundaryIdV);
				    }
			    }
		    }
	    }
    },
    //----------------------------------------------------------------------
    // 创建格子
    createGrid: function(row, col) {
        var pos = this.getMaster().getPos(row, col);
        var grid = new Grid(this.mIfShowDisplay);
        grid.setCoord(row, col);
		if (grid.getNode()) {
			grid.getNode().pos(pos.x, pos.y);
			grid.getNode().zOrder = 2;
			this.getMaster().getBackgroundLayer().addChild(grid.getNode());
		}
        return grid;
    },
	//----------------------------------------------------------------------
	// 设置格子属性
	setGridProperty: function(row, col, lineList, gridId) {
		var grid = this.getGrid(row, col);
		if (isNaN(gridId) || gridId <= 0) {
			return grid;
		}
		var data = DataTB.get("map_grid_tplt", gridId, true, true);
		grid.setId(gridId);
		grid.setName(data.name);
		grid.setType(data.type);
		if (data.file.length > 0) {
			if (grid.getNode()) {
				grid.getNode().skin = ResURL(data.file)
			}
		}
		// 设置传送坐标
		if (CoreDef.GridType.door_in == data.type && lineList instanceof Array && lineList.length > 0) {
			var lineData = null;
			for (var i = 0, len = lineList.length; i < len; ++i) {
				var lineDataTemp = lineList[i];
				var srcCoord = {row:lineDataTemp[0][0], col:lineDataTemp[0][1]};      // 传送入口坐标
				var targetCoord = {row:lineDataTemp[1][0], col:lineDataTemp[1][1]};   // 传送出口坐标
				if (row == srcCoord.row && col == srcCoord.col) {
					if (0 == targetCoord.row || 0 == targetCoord.col) {
						console.log("door in (" + row + ", " + col + ") doesn't point to door out");
					}
					lineData = lineDataTemp;
					break;
				}
			}
			if (lineData) {
				var targetCoord = {row:lineData[1][0], col:lineData[1][1]}; // 传送出口坐标
				grid.setCoordTo(targetCoord.row, targetCoord.col);
			} else {
				console.log("door in (" + row + ", " + col + ") doesn't point to door out");
			}
		}
		return grid;
	},
	//----------------------------------------------------------------------
	// 删除格子
	delGrid: function(row, col) {
		var grid = this.mMapGrid[row][col];
		delete this.mMapGrid[row][col];
		return grid;
	},
    //----------------------------------------------------------------------
    // 获取格子
    getGrid: function(row, col) {
        if (this.mMapGrid[row]) {
            return this.mMapGrid[row][col];
        }
    },
	//----------------------------------------------------------------------
	// 添加隔板
	addBoard: function(row, col, boardId) {
		if (isNaN(boardId) || boardId <= 0) {
			return;
		}
		var data = DataTB.get("map_board_tplt", boardId, true, true);
		if (this.mMapBoard[row][col][data.direct]) {
			throw new Error("coord (" + row + ", " + col + ") [" + data.direct + "] exist board");
		}
		if (data.file.length <= 0) {
			return;
		}
		var board = new Board(this.mIfShowDisplay);
		board.setCoord(row, col);
		board.setId(boardId);
		board.setDirect(data.direct);
		if (board.getNode()) {
			board.getNode().skin = ResURL(data.file);
			var pos = this.getMaster().getPos(row, col);
			if (CoreDef.DirectType.hor == data.direct) {
				board.getNode().pos(pos.down.x, pos.down.y);
			} else if (CoreDef.DirectType.ver == data.direct) {
				board.getNode().pos(pos.right.x, pos.right.y);
			} else {
				throw new Error("can't handle board [" + boardId + "] direct: " + data.direct);
			}
			board.getNode().zOrder = 10;
			this.getMaster().getMapLayer().addChild(board.getNode());
		}
		this.mMapBoard[row][col][data.direct] = board;
		return board;
	},
	//----------------------------------------------------------------------
	// 删除隔板
	delBoard: function(row, col, direct) {
		var board = this.mMapBoard[row][col][direct];
		delete this.mMapBoard[row][col][direct];
		return board;
	},
	//----------------------------------------------------------------------
	// 获取隔板
	getBoard: function(row, col, direct) {
		return this.mMapBoard[row][col][direct];
	},
	//----------------------------------------------------------------------
	// 获取周边隔板
	getAroundBoard: function(row, col) {
		var around = {
			down: this.mMapBoard[row][col][CoreDef.DirectType.hor],
			right: this.mMapBoard[row][col][CoreDef.DirectType.hor]
		};
		if (this.mMapBoard[row - 1]) {
			around.up = this.mMapBoard[row - 1][col][CoreDef.DirectType.hor];
		}
		if (this.mMapBoard[row][col - 1]) {
			around.left = this.mMapBoard[row][col - 1][CoreDef.DirectType.ver];
		}
		return around;
	},
	//----------------------------------------------------------------------
	// 添加边框,row:[1, 行数+1],col:[1, 列数+1]
	addBoundary: function(row, col, boundaryId) {
		if (isNaN(boundaryId) || boundaryId <= 0 || !this.mIfShowDisplay) {
			return;
		}
		var data = DataTB.get("map_boundary_tplt", boundaryId, true, true);
		if (this.mMapBoundary[row][col][data.direct]) {
			throw new Error("coord (" + row + ", " + col + ") [" + data.direct + "] exist boundary");
		}
		var anchorX = 0.5, anchorY = 0.5;
		var x = 0, y = 0;
		var grid = this.getGrid(row, col);
		if (CoreDef.DirectType.hor == data.direct) {
			anchorX = 0.5;
			anchorY = 0;
			if (!grid || CoreDef.GridType.none == grid.getType()) {
				grid = this.getGrid(row - 1, col);
				if (grid) {
					anchorX = 0.5;
					anchorY = 1;
					x = grid.getNode().x;
					y = grid.getNode().y - grid.getNode().height/2
				}
			} else {
				x = grid.getNode().x;
				y = grid.getNode().y + grid.getNode().height/2;
			}
		} else if (CoreDef.DirectType.ver == data.direct) {
			anchorX = 1;
			anchorY = 0.5;
			if (!grid || CoreDef.GridType.none == grid.getType()) {
				grid = this.getGrid(row, col - 1);
				if (grid) {
					anchorX = 0;
					anchorY = 0.5;
					x = grid.getNode().x + grid.getNode().width/2;
					y = grid.getNode().y;
				}
			} else {
				x = grid.getNode().x - grid.getNode().width/2;
				y = grid.getNode().y;
			}
		} else {
			throw new Error("can't handle boundary [" + boundaryId + "] direct: " + data.direct);
		}
		if (data.file.length <= 0) {
			return;
		}
		var boundary = new laya.ui.Image(ResURL(data.file));
		boundary.anchorX = anchorX;
		boundary.anchorY = anchorY;
		boundary.pos(x, y);
		boundary.zOrder = 20;
		this.getMaster().getMapLayer().addChild(boundary);
		this.mMapBoundary[row][col][data.direct] = boundary;
		return boundary;
	},
	//----------------------------------------------------------------------
	// 删除边框,row:[1, 行数+1],col:[1, 列数+1]
	delBoundary: function(row, col, direct) {
		var boundary = this.mMapBoundary[row][col][direct];
		delete this.mMapBoundary[row][col][direct];
		return boundary;
	},
	//----------------------------------------------------------------------
	// 获取边框,row:[1, 行数+1],col:[1, 列数+1]
	getBoundary: function(row, col, direct) {
		return this.mMapBoundary[row][col][direct];
	},
	//----------------------------------------------------------------------
	// 创建元素
	createElement: function(idOrData) {
		var elementId = 0;
		var data = null;
		if ('number' == typeof(idOrData) && idOrData > 0) {
			elementId = idOrData;
			data = DataTB.get("map_element_tplt", idOrData, true, true);
		} else if (idOrData && 'object' == typeof(idOrData) && !(idOrData instanceof Array)) {
			elementId = idOrData.id;
			data = idOrData;
		} else {
			return;
		}
		var element = new Element(this.mIfShowDisplay);
		element.setId(elementId);
		element.setTag(data.tag);
		element.setType(data.type);
		element.setSubType(data.sub_type);
		if (data.file.length > 0) {
			if (element.getNode()) {
				element.getNode().skin = ResURL(data.file);
			}
		}
		element.setCanDrop(data.can_drop);
		if (element.getNode()) {
			var zOrder = CoreDef.ElementTag.surface == data.tag ? 30 : 33;
			element.getNode().zOrder = zOrder + data.tag;
			this.getMaster().getMapLayer().addChild(element.getNode());
		}
		return element;
	},
	//----------------------------------------------------------------------
	// 添加元素
	addElement: function(row, col, element) {
		if (!element) {
			return;
		}
		var tag = element.getTag();
		if (this.mMapElement[row][col][tag]) {
			throw new Error("coord (" + row + ", " + col + ") exist tag: " + tag);
		}
		this.mMapElement[row][col][tag] = element;
	},
	//----------------------------------------------------------------------
	// 删除元素
	delElement: function(row, col, tag) {
		var element = this.mMapElement[row][col][tag];
		delete this.mMapElement[row][col][tag];
		return element;
	},
	//----------------------------------------------------------------------
	// 获取元素
	getElement: function(row, col, tag) {
		return this.mMapElement[row][col][tag];
	},
	//----------------------------------------------------------------------
	// 清空元素列表
	clearElementTb: function(row, col) {
		var elementTb = {};
		for (var tag in this.mMapElement[row][col]) {
			if (this.mMapElement[row][col].hasOwnProperty(tag)) {
				elementTb[tag] = this.mMapElement[row][col][tag];
			}
		}
		this.mMapElement[row][col] = {};
		return elementTb;
	},
	//----------------------------------------------------------------------
	// 获取元素列表
	getElementTb: function(row, col) {
		var elementTb = {};
		for (var tag in this.mMapElement[row][col]) {
			if (this.mMapElement[row][col].hasOwnProperty(tag)) {
				elementTb[tag] = this.mMapElement[row][col][tag];
			}
		}
		return elementTb;
	},
	//----------------------------------------------------------------------
	// 两个坐标是否可联系(受距离,隔板,空格影响)
	isCanContact: function(row1, col1, row2, col2) {
		if (!this.getMaster().isCoordValid(row1, col1) || !this.getMaster().isCoordValid(row2, col2)) {
			return false;
		}
		// 坐标不相邻
		if (Math.abs(row1 - row2) > 1 || Math.abs(col1 - col2) > 1) {
			return false;
		}
		var around1 = this.getAroundBoard(row1, col1);      // 坐标1周围隔板
		var around2 = this.getAroundBoard(row2, col2);      // 坐标2周围隔板
		// 以坐标1为中心,判断坐标2的方位
		if (row1 == row2 && col1 > col2) {          // 2在1正左方
			return around1.left ? false : true;
		} else if (row1 == row2 && col1 < col2) {   // 2在1正右方
			return around1.right ? false : true;
		} else if (row1 > row2 && col1 == col2) {   // 2在1正上方
			return around1.up ? false : true;
		} else if (row1 < row2 && col1 == col2) {   // 2在1正下方
			return around1.down ? false : true;
		} else if (row1 > row2 && col1 > col2) {    // 2在1左上角
			return !((around1.up && around1.left) || (around2.right && around2.down)
					|| (around1.up && around2.down) || (around2.right && around1.left)
					|| (around1.up && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.right && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.left && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.down && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 > row2 && col1 < col2) {    // 2在1右上角
			return !((around1.up && around1.right) || (around2.left && around2.down)
					|| (around1.up && around2.down) || (around2.left && around1.right)
					|| (around1.up && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.left && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.right && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.down && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 < row2 && col1 > col2) {    // 2在1左下角
			return !((around1.left && around1.down) || (around2.up && around2.right)
					|| (around1.left && around2.right) || (around2.up && around1.down)
					|| (around1.down && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.right && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.left && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.up && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 < row2 && col1 < col2) {    // 2在1右下角
			return !((around1.right && around1.down) || (around2.up && around2.left)
					|| (around1.right && around2.left) || (around2.up && around1.down)
					|| (around1.down && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.left && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.right && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.up && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		}
		return false;
	},
    //----------------------------------------------------------------------
    // 显示提示,gridBgFlag:格子背景,gridNumFlag:格子编号,gridNameFlag:格子名称
    showTips: function(gridBgFlag, gridNumFlag, gridNameFlag) {
        // 格子提示
        for (var row in this.mMapGrid) {
            if (this.mMapGrid.hasOwnProperty(row)) {
                for (var col in this.mMapGrid[row]) {
                    if (this.mMapGrid[row].hasOwnProperty(col)) {
                        var grid = this.mMapGrid[row][col];
                        grid.showBackground(gridBgFlag);
                        grid.showNumber(gridNumFlag);
                        grid.showName(gridNameFlag);
                    }
                }
            }
        }
    }
    //----------------------------------------------------------------------
});