/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	隔板
 ***********************************************************************/
Board = Class.extend({
	//----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
		this.mRow = 0;						// 行索引值
		this.mCol = 0;						// 列索引值
		this.mId = 0;						// 隔板id
		this.mDirect = 0;					// 隔板方向
		if (ifCreateNode) {
            this.mNode = new laya.ui.Image();
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
        }
	},
	//----------------------------------------------------------------------
	// 析构函数(手动调用)
	dtor: function() {
        if (this.mNode && !this.mNode.destroyed) {
            this.mNode.removeSelf();
            this.mNode.destroy();
            delete this.mNode;
        }
    },
	//----------------------------------------------------------------------
	// 获取坐标
	getCoord: function() {
		return {row:this.mRow, col:this.mCol};
	},
	//----------------------------------------------------------------------
	// 设置坐标
	setCoord: function(row, col) {
		this.mRow = row;
		this.mCol = col;
	},
    //----------------------------------------------------------------------
    // 获取id
    getId: function() {
        return this.mId;
    },
    //----------------------------------------------------------------------
    // 设置id
    setId: function(id) {
        this.mId = id;
    },
	//----------------------------------------------------------------------
	// 设置方向
	getDirect: function() {
		return this.mDirect;
	},
	//----------------------------------------------------------------------
	// 获取方向
	setDirect: function(direct) {
		this.mDirect = direct;
	},
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        if (this.mNode && !this.mNode.destroyed) {
            return this.mNode;
        }
        return null;
    }
    //----------------------------------------------------------------------
});