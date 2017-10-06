/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	元素
 ***********************************************************************/
Element = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
        this.mId = 0;	                    // 元素id
        this.mTag = 0;                      // 元素标签
        this.mType = 0;	                    // 元素类型
        this.mSubType = 0;	                // 元素子类型
        this.mCanDrop = false;	            // 是否可掉落
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
    // 获取标签
    getTag: function() {
        return this.mTag;
    },
    //----------------------------------------------------------------------
    // 设置标签
    setTag: function(tag) {
        this.mTag = tag;
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
    // 获取子类型
    getSubType: function() {
        return this.mSubType;
    },
    //----------------------------------------------------------------------
    // 设置子类型
    setSubType: function(subType) {
        this.mSubType = subType;
    },
	//----------------------------------------------------------------------
	// 是否可掉落
	isCanDrop: function() {
		return this.mCanDrop;
	},
	//----------------------------------------------------------------------
	// 设置可掉落
	setCanDrop: function(canDrop) {
		this.mCanDrop = canDrop ? true : false;
	},
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        if (this.mNode && !this.mNode.destroyed) {
            return this.mNode;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 设置节点
    setNode: function(node) {
        var anchorX = 0.5;
        var anchorY = 0.5;
        var xPos = 0;
        var yPos = 0;
        var zOrder = 0;
        var parentNode = null;
        if (this.mNode && !this.mNode.destroyed) {
            anchorX = this.mNode.anchorX;
            anchorY = this.mNode.anchorY;
            xPos = this.mNode.x;
            yPos = this.mNode.y;
            zOrder = this.mNode.zOrder;
            parentNode = this.mNode.parent;
            this.mNode.removeSelf();
            this.mNode.destroy();
        }
        this.mNode = node;
        if (this.mNode && !this.mNode.destroyed) {
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
            this.mNode.x = xPos;
            this.mNode.y = yPos;
            this.mNode.zOrder = zOrder;
            if (parentNode && !parentNode.destroyed) {
                parentNode.addChild(this.mNode);
            }
        }
    }
    //----------------------------------------------------------------------
});