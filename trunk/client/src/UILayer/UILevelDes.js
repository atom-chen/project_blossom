/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-09-28
 ** Brief:	关卡过关界面说明
 ***********************************************************************/
UILevelDes = UIDEFINE("UILevelDes", LevelDesUI);

UILevelDes.onStart = function(paramArr) {
     this.paramArr = paramArr;
     this.onClick(this.getChild("btn_close"), this.onClickBtnClose, this, true, true);
     this.getChild("img_title").skin = ResURL("image_lelve_titile_0" + paramArr[0] + ".png");
     this.getChild("img_content").skin =  ResURL("image_lelve_desc_0" + paramArr[0] + ".png");
};

UILevelDes.onClickBtnClose = function(){
    UIGame.restartGame(this.paramArr[1]);
    this.close();
}
