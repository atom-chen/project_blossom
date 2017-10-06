/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-17
 ** Brief:	提示
 ***********************************************************************/
UIOriTip = UIDEFINE("UIOriTip");

// 显示提示
UIOriTip.onStart = function() {
    var topImg = new laya.ui.Image();
	topImg.skin = ResURL("image_lockUp.png");
	topImg.pos(0,-100);
	topImg.size(960,840);
	topImg.anchorX = 0;
	topImg.anchorY = 0;
	topImg.sizeGrid = "0,0,0,0,0";
	this.mTopImg = topImg;
	this.node.addChild(topImg);
	this.root.zOrder = 100;
};

