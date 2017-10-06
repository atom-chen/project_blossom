/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-10-12
 ** Brief:	游戏玩法界面说明
 ***********************************************************************/
UIGamePlayDes = UIDEFINE("UIGamePlayDes", GamePlayDesUI);

UIGamePlayDes.onStart = function() {
    this.onClick(this.getChild("btn_close"), function(){
		this.close();
	}, this, true, true);
	
	this.pageNum = 1;

	this.leftBtn = this.getChild("btn_left");
	this.rightBtn = this.getChild("btn_right");
	
	this.initBtns();
	
	this.onClick(this.leftBtn, function(){
		this.pageNum = this.pageNum - 1;
		this.initBtns();
	}, this, true, true);
	
	this.onClick(this.rightBtn, function(){
		this.pageNum = this.pageNum + 1;
		this.initBtns();
	}, this, true, true);
};


UIGamePlayDes.initBtns = function(){
	if(this.pageNum <= 0){
		this.pageNum = 1;
	}
	this.getChild("image_content").skin = ResURL("image_t_descrip_0" + this.pageNum + ".png");
	this.getChild("label_page").text = this.pageNum + "-9";
    if(this.pageNum == 1){
		this.leftBtn.gray = true;
		this.leftBtn.mouseEnabled = false;
		this.rightBtn.gray = false;
		this.rightBtn.mouseEnabled = true;
	}else if(this.pageNum == 9){
		this.leftBtn.gray = false;
		this.leftBtn.mouseEnabled = true;
		this.rightBtn.gray = true;
		this.rightBtn.mouseEnabled = false;
		this.getChild("label_page").text = this.pageNum;
	}else{
		this.leftBtn.gray = false;
		this.leftBtn.mouseEnabled = true;
		this.rightBtn.gray = false;
		this.rightBtn.mouseEnabled = true;
	}
}
