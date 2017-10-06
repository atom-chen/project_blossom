/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	b小地图控制器
 ***********************************************************************/
ControllerMinimap = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerMinimap");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function() {
        this.mMinimapNode = new laya.ui.View();     // 小地图根节点
        this.mMinimapNode.cacheAs = "bitmap";
        this.mMinimapDisplayMap = {};               // 小地图表现映射表
        var rc = this.getMaster().getRowCol();
        var posMap = this.getMaster().createPosMap(rc.row, rc.col, 17, 17, 0, 0, 0);
        for (var row = 1; row <= rc.row; ++row) {
            this.mMinimapDisplayMap[row] = {};
		    for (var col = 1; col <= rc.col; ++col) {
                var display = new laya.ui.Image();
                display.anchorX = 0.5;
                display.anchorY = 0.5;
                display.skin = ResURL("image_small_map_gird.png");
                display.pos(posMap[row][col].x, posMap[row][col].y);
                this.mMinimapNode.addChild(display);
                this.mMinimapDisplayMap[row][col] = display;
		    }
	    }
        this.bind(EventDef["ED_CORE_CLEAR_SURFACE"], this.onSurfaceClear);  // 注册地表被消除事件
    },
    //----------------------------------------------------------------------
    // 显示小地图
    show: function(parent, x, y, visible) {
        if (this.mMinimapNode.parent && parent != this.mMinimapNode.parent) {
            this.mMinimapNode.removeSelf();
        }
        if (parent) {
            parent.addChild(this.mMinimapNode);
        } else {
            Laya.stage.addChild(this.mMinimapNode);
        }
        this.mMinimapNode.pos(x, y);
        this.mMinimapNode.visible = visible ? true : false;
    },
    //----------------------------------------------------------------------
    // 根据地图数据重置
    resetByMapData: function(mapData) {
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
		    for (var col = 1; col <= rc.col; ++col) {
                var display = this.mMinimapDisplayMap[row][col];
                var id = mapData[row - 1][col - 1];
                if (0 == id) {
                    display.skin = ResURL("image_small_map_gird.png");
                } else {
                    display.skin = ResURL("image_small_map_gird_01.png");
                }
            }
        }
    },
    //----------------------------------------------------------------------
    // 地表被消除事件
    onSurfaceClear: function(surfaceId, row, col) {
        this.mMinimapDisplayMap[row][col].skin = ResURL("image_small_map_gird_02.png");
    }
    //----------------------------------------------------------------------
});