var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

// 分辨率设计
Laya.init(G.DESIGN_WIDTH, G.DESIGN_HEIGHT, Laya.WebGL);
Laya.stage.scaleMode = "fixedwidth";
Laya.stage.screenMode = "horizontal";
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
// 运行游戏
Game.init();