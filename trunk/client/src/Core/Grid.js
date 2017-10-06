/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	格子
 ***********************************************************************/
Grid = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
        this.mRow = 0;	                    // 行坐标
        this.mCol = 0;	                    // 列坐标
        this.mId = 0;	                    // 格子id
        this.mName = "";	                // 格子名称
        this.mType = 0;	                    // 格子类型
        this.mRowTo = 0;	                // 指向行坐标
        this.mColTo = 0;	                // 指向列坐标
        if (ifCreateNode) {
            this.mNode = new laya.ui.Image();
            this.mNode.cacheAs = "bitmap";
            this.mNode.graphics.drawRect(-G.GRID_WIDTH/2, -G.GRID_HEIGHT/2, G.GRID_WIDTH, G.GRID_HEIGHT, "#00ff00");
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
            this.mNode.alpha = 0;
        }
    },
    //----------------------------------------------------------------------
	// 析构函数(手动调用)
	dtor: function() {
        if (this.mNode) {
            this.mNode.removeSelf();
            this.mNode.destroy();
            delete this.mNode;
        }
    },
    //----------------------------------------------------------------------
    // 显示背景
    showBackground: function(show) {
        this.mNode.alpha = show ? 200/255 : 0;
    },
    //----------------------------------------------------------------------
    // 显示编号
    showNumber: function(show) {
        if (this.mNode) {
            if (show) {
                if (!this.mNumText) {
                    this.mNumText = new laya.ui.Label();
                    this.mNumText.anchorX = 0.5;
                    this.mNumText.anchorY = 0.5;
                    this.mNumText.size(G.GRID_WIDTH, G.GRID_HEIGHT);
                    this.mNumText.wordWrap = true;
                    this.mNumText.align = "center";
                    this.mNumText.valign = "middle";
                    this.mNumText.pos(0, 0);
                    this.mNumText.color = "#0000ff";
                    this.mNumText.fontSize = 24;
                    this.mNumText.zOrder = 1;
                    this.mNode.addChild(this.mNumText);
                }
                var coord = "(" + this.mRow + ", " + this.mCol + ")";
                this.mNumText.text = coord;
            } else if (this.mNumText) {
                this.mNumText.removeSelf();
                this.mNumText.destroy();
                delete this.mNumText;
            }
        }
    },
    //----------------------------------------------------------------------
    // 显示名称
    showName: function(show) {
        if (this.mNode) {
            if (show) {
                if (!this.mNameText) {
                    this.mNameText = new laya.ui.Label();
                    this.mNameText.anchorX = 0.5;
                    this.mNameText.anchorY = 0.5;
                    this.mNameText.size(G.GRID_WIDTH, G.GRID_HEIGHT);
                    this.mNameText.wordWrap = true;
                    this.mNameText.align = "center";
                    this.mNameText.valign = "middle";
                    this.mNumText.pos(0, 0);
                    this.mNameText.color = "#ff0000";
                    this.mNameText.fontSize = 20;
                    this.mNameText.bold = true;
                    this.mNameText.zOrder = 2;
                    this.mNode.addChild(this.mNameText);
                }
                this.mNameText.text = this.mName;
            } else if (this.mNameText) {
                this.mNameText.removeFromParent();
                delete this.mNameText;
            }
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
    // 获取名称
    getName: function() {
        return this.mName;
    },
    //----------------------------------------------------------------------
    // 设置名称
    setName: function(name) {
        this.mName = name;
    },
    //----------------------------------------------------------------------
    // 获取类型
    getType: function() {
        return this.mType;
    },
    //----------------------------------------------------------------------
    // 设置类型
    setType: function(ty) {
        this.mType = ty;
    },
    //----------------------------------------------------------------------
    // 获取指向坐标
    getCoordTo: function() {
        return {row:this.mRowTo, col:this.mColTo};
    },
    //----------------------------------------------------------------------
    // 设置指向坐标
    setCoordTo: function(row, col) {
        this.mRowTo = row;
        this.mColTo = col;
    },
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        return this.mNode;
    }
    //----------------------------------------------------------------------
});