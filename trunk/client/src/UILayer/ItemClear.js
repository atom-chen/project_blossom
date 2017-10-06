/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	消除选项
 ***********************************************************************/
function ItemClear() {
    ItemClear.__super.call(this);
    this.size(141, 50);
    // 背景
    this.mBgImg = new laya.ui.Image();
    this.addChild(this.mBgImg);
    this.setBg = function(bg) {	        // 设置背景
        this.mBgImg.skin = bg;
    };
    // 个数
    this.mNumLabel = new laya.ui.Label("");
    this.mNumLabel.align = "center";
    this.mNumLabel.valign = "middle";
    this.mNumLabel.color = "#fec840";
    this.mNumLabel.stroke = 1;
    this.mNumLabel.strokeColor = "#4d1d27";
    this.mNumLabel.fontSize = 20;
    this.mNumLabel.bold = true;
    this.mNumLabel.italic = true;
    this.mBgImg.addChild(this.mNumLabel);
    this.setNum = function(num) {       // 设置个数
        this.mNumLabel.text = num + "X";
        this.mNumLabel.anchorX = 1;
        this.mNumLabel.anchorY = 0.5;
        this.mNumLabel.pos(40, 25);
    };
    // 图片
    this.mImg = new laya.ui.Image();
    this.mImg.scaleX = 0.6;
    this.mImg.scaleY = 0.6;
    this.mImg.anchorX = 0.5;
    this.mImg.anchorY = 0.5;
    this.mImg.pos(65, 25);
    this.mBgImg.addChild(this.mImg);
    this.setImg = function(img) {       // 设置图片
        this.mImg.skin = img;
    };
    // 分数
    this.mScoreLabel = new laya.ui.Label();
    this.mScoreLabel.align = "center";
    this.mScoreLabel.valign = "middle";
    this.mScoreLabel.color = "#fff7c5";
    this.mScoreLabel.stroke = 1;
    this.mScoreLabel.strokeColor = "#4b1b27";
    this.mScoreLabel.fontSize = 20;
    this.mScoreLabel.bold = true;
    this.mScoreLabel.italic = true;
    this.mBgImg.addChild(this.mScoreLabel);
    this.setScore = function(score) {   // 设置分数
        score = parseFloat((score + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";  // 保留2位小数点
        this.mScoreLabel.text = score;
        this.mScoreLabel.anchorX = 0;
        this.mScoreLabel.anchorY = 0.5;
        this.mScoreLabel.pos(90, 25);
    };
}
Laya.class(ItemClear, "ItemClear", laya.ui.Box);