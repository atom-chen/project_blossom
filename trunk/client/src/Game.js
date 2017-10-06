/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	游戏逻辑
 ***********************************************************************/
Game = {};
//----------------------------------------------------------------------
// 创建基础节点
Game.createBaseNodes = function() {
	var nodes = {
		root: new laya.ui.Component(),		// 根节点(不允许挂载)
		back: new laya.ui.Component(),		// 底层UI节点(挂载游戏背景等最底层UI)
		scene: new laya.ui.Component(),		// 场景节点(挂载游戏战斗场景)
		middle: new laya.ui.Component(),	// 中层UI节点(挂载非模态UI)
		front: new laya.ui.Component(),		// 上层UI节点(挂载模态UI)
		top: new laya.ui.Component()		// 顶层UI节点(挂载游戏提示等最顶层UI)
	};
    function setBaseNodeProperty(node, zOrder, parent) {
        node.size(Laya.stage.width, Laya.stage.height);
        node.anchorX = 0.5;
        node.anchorY = 0.5;
        node.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        if ('number' == typeof(zOrder)) {
            node.zOrder = zOrder;
        }
        node.mouseEnabled = true;
        node.mouseThrough = true;
        if (parent) {
            parent.addChild(node);
        }
    }
    setBaseNodeProperty(nodes.root);
    setBaseNodeProperty(nodes.back, 1, nodes.root);
    setBaseNodeProperty(nodes.scene, 2, nodes.root);
    setBaseNodeProperty(nodes.middle, 3, nodes.root);
    setBaseNodeProperty(nodes.front, 4, nodes.root);
    setBaseNodeProperty(nodes.top, 5, nodes.root);
    return nodes;
};
//----------------------------------------------------------------------
// 初始游戏(只能调用一次)
Game.init = function() {
    try {
        // 游戏节点
        var nodes = this.createBaseNodes();
        this.NODE_UI_BACK = nodes.back;
        this.NODE_SCENE = nodes.scene;
        this.NODE_UI_MIDDLE = nodes.middle;
        this.NODE_UI_FRONT = nodes.front;
        this.NODE_UI_TOP = nodes.top;
        Laya.stage.addChild(nodes.root);
        // 初始化
        if (G.SHOW_FPS) {
            laya.utils.Stat.show();
        }
        loadResource(this.run, this);
    } catch (exception) {
        alert(exception.stack);
    }
};
//----------------------------------------------------------------------
// 运行游戏
Game.run = function() {
    try {
        DataTB.init(core_data_tplt_list);
	    DataTB.reload("audio_tplt", audio_tplt);
        DataTB.reload("effect_tplt", effect_tplt);
	    DataTB.reload("level_tplt", level_tplt);
        DataTB.reload("map_tplt", map_tplt);
        AudioModel.init();
        Controller.create(true);
        UIGameDes.openFront(true, true, true);
    } catch (exception) {
        alert(exception.stack);
    }
};
//----------------------------------------------------------------------
// 页面关闭,刷新
// window.onbeforeunload = function() {
//     return '';
// };
//----------------------------------------------------------------------