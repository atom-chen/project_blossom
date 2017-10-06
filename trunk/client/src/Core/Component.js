/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	组件
 ***********************************************************************/
Component = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数(当子类重定义时,需显示调用父类析构函数)
	ctor: function(name) {
        if ('string' != typeof(name)) {
            throw new Error("not support for name type " + typeof(name));
        }
        this.is_component_type = true;      // 组件类型标示符
        this.mName = name;                  // 组件名
        this.mMaster = null;                // 宿主对象
        this.mChildrenInfoList = [];        // 子组件信息表
        this.mSiblingMap = {};              // 同级组件表
        this.mEventHandlerMap = {};         // 事件句柄表
        this.mTouchEnabled = true;          // 触摸启用
        this.mTouchSwallow = false;         // 触摸吞没
	},
    //----------------------------------------------------------------------
	// 析构函数(当子类重定义时,需显示调用父类析构函数)
	dtor: function() {
		this.mMaster = null;
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.dtor();
        }
		this.mChildrenInfoList = [];
		this.mSiblingMap = {};
		for (var eventId in this.mEventHandlerMap) {
            if (this.mEventHandlerMap.hasOwnProperty(eventId)) {
                EventCenter.unbind(eventId, this.mEventHandlerMap[eventId]);
            }
		}
		this.mEventHandlerMap = {};
        this.mTouchEnabled = true;
        this.mTouchSwallow = false;
	},
    //----------------------------------------------------------------------
    // 获取名称
    getName: function() {
        return this.mName;
    },
    //----------------------------------------------------------------------
	// 获取宿主
	getMaster: function() {
		return this.mMaster;
	},
    //----------------------------------------------------------------------
    // 添加子组件,priority:值越低,优先级越高
    addComponent: function(com, priority) {
        if (!com.is_component_type) {
            throw new Error("com must be componet type");
        }
        if (com == this) {
            throw new Error("can't add self to be child");
        }
        if (com.mMaster) {
            throw new Error("com has been added");
        }
        if (com == this.mMaster) {
            throw new Error("can't add master to be child");
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            if (com == this.mChildrenInfoList[i].com) {
                throw new Error("com has been added");
            }
            this.mChildrenInfoList[i].com.addSibling(com);
        }
        com.mMaster = this;
        var childInfo = {
            name: com.getName(),                                            // 组件名
            com: com,                                                       // 组件
            priority: priority ? priority : this.mChildrenInfoList.length   // 优先级
        };
        this.mChildrenInfoList.push(childInfo);
        this.mChildrenInfoList.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return com;
    },
    //----------------------------------------------------------------------
    // 移除子组件
    removeComponent: function(name) {
        for (var i = 0; i < this.mChildrenInfoList.length; ++i) {
            if (name == this.mChildrenInfoList[i].name) {
                this.mChildrenInfoList[i].com.mMaster = null;
                this.mChildrenInfoList.splice(i, 1);
            }
            this.mChildrenInfoList[i].com.removeSibling(name);
        }
    },
    //----------------------------------------------------------------------
    //获取子组件
    getComponent: function(name) {
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            if (name == this.mChildrenInfoList[i].name) {
                return this.mChildrenInfoList[i].com;
            }
        }
    },
    //----------------------------------------------------------------------
    // 添加同级组件
    addSibling: function(com) {
        if (!com.is_component_type) {
            throw new Error("com must be componet type");
        }
        var comName = com.getName();
        if (this.mSiblingMap[comName]) {
            return;
        }
        this.mSiblingMap[comName] = com;
        com.addSibling(this);
    },
    //----------------------------------------------------------------------
    // 移除同级组件
    removeSibling: function(name) {
        var sibling = this.mSiblingMap[name];
        if (!sibling) {
            return;
        }
        delete this.mSiblingMap[name];
        sibling.removeSibling(this.mName);
    },
    //----------------------------------------------------------------------
    // 获取同级组件
    getSibling: function(name) {
        var sibling = this.mSiblingMap[name];
        if (sibling) {
            return sibling;
        }
        if (!this.mMaster){
            return null;
        }
        return this.mMaster.getComponent(name);
    },
    //----------------------------------------------------------------------
    // 注册事件函数
    bind: function(eventId, handler, priority) {
        if (this.mEventHandlerMap[eventId]) {
            throw new Error("can't register same event " + eventId);
        }
        this.mEventHandlerMap[eventId] = handler;
        EventCenter.bind(eventId, this.mEventHandlerMap[eventId], this, priority);
    },
    //----------------------------------------------------------------------
    // 设置触摸启用
    setTouchEnabled: function(enabled) {
        this.mTouchEnabled = enabled;
    },
    //----------------------------------------------------------------------
    // 触摸是否启用
    isTouchEnabled: function() {
        return this.mTouchEnabled;
    },
    //----------------------------------------------------------------------
    // 设置触摸吞没
    setTouchSwallow: function(swallow) {
        this.mTouchSwallow = swallow;
    },
    //----------------------------------------------------------------------
    // 触摸是否吞没
    isTouchSwallow: function() {
        return this.mTouchSwallow;
    },
    //----------------------------------------------------------------------
	// 触摸开始
	onTouchBegan: function(touch, event) {
		if (!this.mTouchEnabled) {
			return;
		}
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchBegan.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸移动
	onTouchMoved: function(touch, event) {
		if (!this.mTouchEnabled) {
			return;
		}
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchMoved.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸结束
	onTouchEnded: function(touch, event) {
        if (!this.mTouchEnabled) {
            return;
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchEnded.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸取消
	onTouchCancelled: function(touch, event) {
        if (!this.mTouchEnabled) {
            return;
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchCancelled.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
    // 每帧更新
    onUpdate: function(dt) {
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onUpdate(dt);
        }
    }
    //----------------------------------------------------------------------
});