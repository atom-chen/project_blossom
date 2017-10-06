/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	视图组件
 ***********************************************************************/
ComponentView = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ComponentView");
        this.mRowCount = 0;                                 // 行数
        this.mColCount = 0;                                 // 列数
        this.mGridWidth = 0;                                // 格子宽度
        this.mGridHeight = 0;                               // 格子高度
        this.mGridGap = 0;                                  // 格子间距
        this.mGridTouchGap = 0;                             // 格子触摸间距
        this.mTouchArea = {x:0, y:0, width:0, height:0};    // 触摸区域
        this.mPosMap = {};                                  // 坐标映射表
        this.mTouchFlag = 0;                                // 触摸标识
        this.mTouchLayer = null;                            // 触摸层(root)
        this.mBackgroundLayer = null;                       // 背景层(底层)
        this.mMapLayer = null;                              // 地图层(中层)
        this.mSceneLayer = null;                            // 场景层(上层)
        this.mTouchAreaTips = null;                         // 触摸区域提示
        this.mLineTipsList = [];                            // 界线提示列表
    },
    //----------------------------------------------------------------------
    // 计算地图大小
    calcMapSize: function(rowCount, colCount, gridW, gridH, gridGap) {
        if (isNaN(rowCount)) {
            throw new Error("row count is not number");
        }
        if (isNaN(colCount)) {
            throw new Error("col count is not number");
        }
        if (isNaN(gridW)) {
            throw new Error("grid width is not number");
        }
        if (isNaN(gridH)) {
            throw new Error("grid height is not number");
        }
        if (isNaN(gridGap)) {
            throw new Error("grid gap is not number");
        }
        return {
            width: colCount*(gridW + gridGap) + gridGap,
            height: rowCount*(gridH + gridGap) + gridGap
        };
    },
    //----------------------------------------------------------------------
    // 初始化
    init: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, offsetX, offsetY) {
        if (isNaN(rowCount)) {
            throw new Error("row count is not number");
        }
        if (isNaN(colCount)) {
            throw new Error("col count is not number");
        }
        if (isNaN(gridW)) {
            throw new Error("grid width is not number");
        }
        if (isNaN(gridH)) {
            throw new Error("grid height is not number");
        }
        if (isNaN(gridGap)) {
            throw new Error("grid gap is not number");
        }
        if (isNaN(gridTouchGap)) {
            throw new Error("grid touch gap is not number");
        }
        if (isNaN(offsetX)) {
            throw new Error("offset x is not number");
        }
        if (isNaN(offsetY)) {
            throw new Error("offset y is not number");
        }
    	this.mRowCount = rowCount;
        this.mColCount = colCount;
        this.mGridWidth = gridW;
        this.mGridHeight = gridH;
        this.mGridGap = gridGap;
        this.mGridTouchGap = gridTouchGap;
        this.mTouchArea = this.calcMapSize(rowCount, colCount, gridW, gridH, gridGap);
        this.mTouchArea.x = offsetX;
        this.mTouchArea.y = offsetY;
        this.mPosMap = this.createPosMap(rowCount, colCount, gridW, gridH, gridGap, offsetX, offsetY);
        // 触摸层
        this.mTouchLayer = this.createTouchLayer(function(event) {
            this.onEvent(event);
            return true;
        }, this);
        // 背景层
        this.mBackgroundLayer = new laya.ui.View();
        this.mBackgroundLayer.cacheAs = "bitmap";
        this.mBackgroundLayer.size(Laya.stage.width, Laya.stage.height);
        this.mBackgroundLayer.anchorX = 0.5;
		this.mBackgroundLayer.anchorY = 0.5;
		this.mBackgroundLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mBackgroundLayer.mouseEnabled = true;
		this.mBackgroundLayer.mouseThrough = true;
        this.mBackgroundLayer.zOrder = 1;
        this.mTouchLayer.addChild(this.mBackgroundLayer);
        // 地图层
        this.mMapLayer = new laya.ui.View();
        this.mMapLayer.size(Laya.stage.width, Laya.stage.height);
        this.mMapLayer.anchorX = 0.5;
		this.mMapLayer.anchorY = 0.5;
		this.mMapLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mMapLayer.mouseEnabled = true;
		this.mMapLayer.mouseThrough = true;
        this.mMapLayer.zOrder = 2;
        this.mTouchLayer.addChild(this.mMapLayer);
        // 场景层
        this.mSceneLayer = new laya.ui.View();
        this.mSceneLayer.size(Laya.stage.width, Laya.stage.height);
        this.mSceneLayer.anchorX = 0.5;
		this.mSceneLayer.anchorY = 0.5;
		this.mSceneLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mSceneLayer.mouseEnabled = true;
		this.mSceneLayer.mouseThrough = true;
        this.mSceneLayer.zOrder = 3;
        this.mTouchLayer.addChild(this.mSceneLayer, 3);
    },
    //----------------------------------------------------------------------
    // 创建坐标映射表,行号从上到下(坐标系为右上角,所以行的y坐标从小到大),列号从左到右
    createPosMap: function(rowCount, colCount, gridW, gridH, gridGap, offsetX, offsetY) {
        var posMap = {};
        for (var row = 1; row <= rowCount; ++row) {
            posMap[row] = {};
            for (var col = 1; col <= colCount; ++col) {
                var x = col*gridGap + (col - 1)*gridW + gridW/2 + offsetX;
                var y = row*gridGap + (row - 1)*gridH + gridH/2 + offsetY;
                posMap[row][col] = {
                    x: x,                                       // 格子x坐标
                    y: y,                                       // 格子y坐标
                    up: {x:x, y:y - gridH/2 - gridGap/2},		// 格子上间距坐标
                    right: {x:x + gridW/2 + gridGap/2, y:y},    // 格子右间距坐标
                    down: {x:x, y:y + gridH/2 + gridGap/2},		// 格子下间距坐标
                    left: {x:x - gridW/2 - gridGap/2, y:y}		// 格子左间距坐标
                }
            }
        }
        return posMap;
    },
    //----------------------------------------------------------------------
    // 计算格子坐标
    calcGridCoord: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, x, y) {
        // 限定触摸区域
        var maxX = colCount*(gridW + gridGap) + gridGap;
        var maxY = rowCount*(gridH + gridGap) + gridGap;
        if (x < 0 || x > maxX || y < 0 || y > maxY) {
            return {row:0, col:0};
        }
        // 计算行索引
        var row = Math.ceil(y/(gridH + gridGap));
        if (0 == row) {
            row = 1;
        } else if (row > rowCount) {
            row = rowCount;
        }
        // 限定格子触摸高度
        var minRowY = row*gridGap + (row - 1)*gridH + gridTouchGap;
        var maxRowY = row*gridGap + row*gridH - gridTouchGap;
        if (y < minRowY || y > maxRowY) {
            row = 0;
        }
        // 计算列索引
        var col = Math.ceil(x/(gridW + gridGap));
        if (0 == col) {
            col = 1;
        } else if (col > colCount) {
            col = colCount;
        }
        // 限定格子触摸宽度
        var minColX = col*gridGap + (col - 1)*gridW + gridTouchGap;
        var maxColX = col*gridGap + col*gridW - gridTouchGap;
        if (x < minColX || x > maxColX) {
            col = 0;
        }
        return {row:row, col:col};
    },
    //----------------------------------------------------------------------
    // 获取坐标位置
    getCoordPos: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, touchArea, posMap, x, y) {
        if (x < touchArea.x || x > touchArea.x + touchArea.width || y < touchArea.y || y > touchArea.y + touchArea.height) {
            return null;
        }
        // 转换为在触摸区域的坐标
        x = x - touchArea.x;
        y = y - touchArea.y;
        // 转换左边为格子索引
        var coord = this.calcGridCoord(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, x, y);
        if (0 == coord.row || 0 == coord.col) {
            return null;
        }
        var pos = this.mPosMap[coord.row][coord.col];
        return {
            row: coord.row,                             // 格子行索引值
            col: coord.col,                             // 格子列索引值
            pos: {
                x: pos.x,                               // 格子x坐标
                y: pos.y,                               // 格子y坐标
                up: {x:pos.up.x, y:pos.up.y},			// 格子上间距坐标
                right: {x:pos.right.x, y:pos.right.y},  // 格子右间距坐标
                down: {x:pos.down.x, y:pos.down.y},		// 格子下间距坐标
                left: {x:pos.left.x, y:pos.left.y}		// 格子左间距坐标
            }
        };
    },
    //----------------------------------------------------------------------
    // 创建触摸层
    createTouchLayer: function(onEventCF, target) {
        var touchLayer = new laya.ui.View();
        touchLayer.size(Laya.stage.width, Laya.stage.height);
        touchLayer.anchorX = 0.5;
		touchLayer.anchorY = 0.5;
		touchLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        touchLayer.mouseEnabled = true;
		touchLayer.mouseThrough = false;
        function onEvent(event) {
			if ('function' == typeof(onEventCF) && event) {
				onEventCF.apply(target, [event]);
			}
		}
		touchLayer.on(laya.events.Event.ADDED, this, onEvent);
		touchLayer.on(laya.events.Event.CLICK, this, onEvent);
		touchLayer.on(laya.events.Event.DISPLAY, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_END, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_MOVE, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_START, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_DOWN, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_MOVE, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_OUT, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_OVER, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_UP, this, onEvent);
		touchLayer.on(laya.events.Event.REMOVED, this, onEvent);
		touchLayer.on(laya.events.Event.UNDISPLAY, this, onEvent);
        return touchLayer;
    },
    //----------------------------------------------------------------------
    // 事件
    onEvent: function(event) {
        if (!this.isTouchEnabled()) {
            return;
        }
        var location = {x:event.target.mouseX, y:event.target.mouseY};
        var cp = this.getCoordPos(this.mRowCount, this.mColCount, this.mGridWidth, this.mGridHeight,
                                  this.mGridGap, this.mGridTouchGap, this.mTouchArea, this.mPosMap,
                                  location.x, location.y);
        if (laya.events.Event.MOUSE_DOWN == event.type) {
            if (this.mTouchFlag <= 0) {
                this.mTouchFlag = 1;
                this.onTouchBegan(event, cp);
            }
        } else if (laya.events.Event.MOUSE_MOVE == event.type) {
            if (this.mTouchFlag > 0) {
                this.onTouchMoved(event, cp);
            }
        } else if (laya.events.Event.MOUSE_UP == event.type || laya.events.Event.MOUSE_OUT == event.type) {
            this.mTouchFlag--;
            if (0 == this.mTouchFlag) {
                this.onTouchEnded(event, cp);
            }
        }
    },
    //----------------------------------------------------------------------
    // 坐标是否合法
    isCoordValid: function(row, col) {
        return row >= 1 && row <= this.mRowCount && col >= 1 && col <= this.mColCount;
    },
    //----------------------------------------------------------------------
    // 获取视图行列
    getRowCol: function() {
        return {row:this.mRowCount, col:this.mColCount};
    },
    //----------------------------------------------------------------------
    // 获取格子大小
    getGridSize: function() {
        return {width:this.mGridWidth, height:this.mGridHeight};
    },
    //----------------------------------------------------------------------
    // 获取格子间距
    getGridGap: function() {
        return this.mGridGap;
    },
    //----------------------------------------------------------------------
    // 获取触摸区域
    getTouchArea: function() {
        return {
            x: this.mTouchArea.x,
            y: this.mTouchArea.y,
            width: this.mTouchArea.width,
            height: this.mTouchArea.height
        };
    },
    //----------------------------------------------------------------------
    // 获取位置信息
    getPos: function(row, col) {
        if (this.mPosMap[row] && this.mPosMap[row][col]) {
            var pos = this.mPosMap[row][col];
            return {
                x: pos.x,								// 格子x坐标
                y: pos.y,								// 格子y坐标
                up: {x:pos.up.x, y:pos.up.y},			// 格子上间距坐标
                right: {x:pos.right.x, y:pos.right.y},	// 格子右间距坐标
                down: {x:pos.down.x, y:pos.down.y},     // 格子下间距坐标
                left: {x:pos.left.x, y:pos.left.y}		// 格子左间距坐标
                };
        }
    },
    //----------------------------------------------------------------------
    // 获取坐标信息
    getCoord: function(x, y) {
        var cp = this.getCoordPos(this.mRowCount, this.mColCount, this.mGridWidth, this.mGridHeight,
                                  this.mGridGap, this.mGridTouchGap, this.mTouchArea, this.mPosMap, x, y);
        if (cp) {
            return {row:cp.row, col:cp.col};
        }
    },
    //----------------------------------------------------------------------
    // 获取触摸标识
    getTouchFlag: function() {
        return this.mTouchFlag;
    },
    //----------------------------------------------------------------------
    // 获取根节点
    getRoot: function() {
        if (this.mTouchLayer && !this.mTouchLayer.destroyed) {
            return this.mTouchLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取背景层
    getBackgroundLayer: function() {
        if (this.mBackgroundLayer && !this.mBackgroundLayer.destroyed) {
            return this.mBackgroundLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取地图层
    getMapLayer: function() {
        if (this.mMapLayer && !this.mMapLayer.destroyed) {
            return this.mMapLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取场景层
    getSceneLayer: function() {
        if (this.mSceneLayer && !this.mSceneLayer.destroyed) {
            return this.mSceneLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 显示提示,touchAreaFlag:触摸区域,lineFlag:网线
    showTips: function(touchAreaFlag, lineFlag) {
        // 视图提示
        if (touchAreaFlag) {
            if (!this.mTouchAreaTips) {
                this.mTouchAreaTips = new laya.display.Sprite();
                this.mTouchAreaTips.graphics.drawRect(this.mTouchArea.x, this.mTouchArea.y, this.mTouchArea.width, this.mTouchArea.height, "#808080");
                this.mTouchAreaTips.alpha = 200/255;
                this.mTouchAreaTips.zOrder = 1;
                this.mBackgroundLayer.addChild(this.mTouchAreaTips);
            }
        } else if (this.mTouchAreaTips && !this.mTouchAreaTips.destroyed) {
            this.mTouchAreaTips.removeSelf();
            this.mTouchAreaTips.destroy();
            delete this.mTouchAreaTips;
        }
        // 界线提示
        this.createLineFunc = function(direct, x, y) {
            var line = new laya.display.Sprite();
            if (1 == direct) {  // 横线
                line.graphics.drawLine(x - this.mTouchArea.width/2, y, x + this.mTouchArea.width/2, y, "#000000", 1);
            } else {    // 2 == direct, 竖线
                line.graphics.drawLine(x, y - this.mTouchArea.height/2, x, y + this.mTouchArea.height/2, "#000000", 1);
            }
            line.zOrder = 3;
            this.mBackgroundLayer.addChild(line);
            return line;
        };
        if (lineFlag) {
            if (!(this.mLineTipsList instanceof Array) || 0 == this.mLineTipsList.length) {
                this.mLineTipsList = [];
                for (var row = 1; row <= this.mRowCount + 1; ++row) {   // 横线
                    var x = this.mTouchArea.x + this.mTouchArea.width/2;
                    if (row == this.mRowCount + 1) {
                        this.mLineTipsList.push(this.createLineFunc(1, x, this.getPos(row - 1, 1).up.y));
                    } else {
                        this.mLineTipsList.push(this.createLineFunc(1, x, this.getPos(row, 1).down.y));
                    }
                }
                for (var col = 1; col <= this.mColCount + 1; ++col) {   // 竖线
                    var y = this.mTouchArea.y + this.mTouchArea.height/2;
                    if (col == this.mColCount + 1) {
                        this.mLineTipsList.push(this.createLineFunc(2, this.getPos(1, col - 1).right.x, y));
                    } else {
                        this.mLineTipsList.push(this.createLineFunc(2, this.getPos(1, col).left.x, y));
                    }
                }
            }
        } else if (this.mLineTipsList instanceof Array) {
            for (var i = 0, len = this.mLineTipsList.length; i < len; ++i) {
                var lineTips = this.mLineTipsList[i];
                if (lineTips && !lineTips.destroyed) {
                    this.mLineTipsList[i].removeSelf();
                    this.mLineTipsList[i].destroy();
                }
            }
            this.mLineTipsList = [];
        }
    }
    //----------------------------------------------------------------------
});