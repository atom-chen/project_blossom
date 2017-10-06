/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-17
 ** Brief:	提示
 ***********************************************************************/
UIPrompt = UIDEFINE("UIPrompt");

// 显示提示
UIPrompt.show = function(text) {
    this.openTop();
	if ('string' != typeof(text) || 0 == text.length) {
		return;
	}
	// 文本
	var promptLabel = new laya.ui.Label(text);
    promptLabel.align = "center";
    promptLabel.valign = "middle";
    promptLabel.color = "#fd7878";
    promptLabel.fontSize = 26;
    promptLabel.anchorX = 0.5;
    promptLabel.anchorY = 0.5;
    var width = promptLabel.width + 20;
    var height = promptLabel.height + 20;
    promptLabel.pos((width + 120)/2, height/2);
	// 背景
	var promptBg = new laya.ui.Image(ResURL("image_bg_prompt.png"));
    promptBg.anchorX = 0.5;
    promptBg.anchorY = 0.5;
    promptBg.width = width + 120;
    promptBg.height = height + 3;
    promptBg.sizeGrid = "5,15,5,15,0";
    promptBg.pos(Laya.stage.width/2, Laya.stage.height/2);
	promptBg.addChild(promptLabel);
	this.node.addChild(promptBg);
	// 动作参数
    var moveDT = 0.6;
    var delayDT = 0.6;
    var fadeOutDT = 1.5;
    var movePosY = promptBg.y - 150;
    // 文本动作
    laya.runAction(promptLabel, [
        {props:{}, duration:(moveDT + delayDT)},
        {props:{alpha:0}, duration:fadeOutDT}
    ]);
    // 背景动作
    laya.runAction(promptBg, [
        {props:{y:movePosY}, duration:moveDT},
        {props:{}, duration:delayDT},
        {props:{alpha:0}, duration:fadeOutDT}
    ], function() {
        if (promptBg && !promptBg.destroyed) {
            promptBg.removeSelf();
            promptBg.destroy();
        }
    }, this);
};

