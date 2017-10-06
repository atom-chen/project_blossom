/***********************************************************************
 ** Author:	lihq
 ** Date:	2016-09-27
 ** Brief:	游戏玩法说明界面
 ***********************************************************************/
UIGameDes = UIDEFINE("UIGameDes", GameDesUI);

UIGameDes.onStart = function() {
    this.getChild("img_background").skin = ResURL("image_map_bg_004.png");
    this.onClick(this.getChild("btn_sure"), this.onClickBtnSure, this, true, true);
    //设置提示图片
    var arr = [2,3,4,5,6];
    for(var i= 2;i<= 3;i++){
        var img = this.getChild("img_des_" + i);
        var index1 = Math.floor(DataModel.getRandom()*(arr.length - 1) + 0.5);
        img.skin = ResURL("image_utorial_0" + arr[index1] + ".png");
        arr.splice(index1, 1);
    }
    this.loopAction(this.getChild("btn_sure"));
};

UIGameDes.onClickBtnSure = function () {
    this.close();
    UIGame.openMiddle();   
}

UIGameDes.loopAction = function(img) { 
    var times = 0.3;
    var scaleXY = [1.1,0.9];
    laya.scaleFromTo(img, 0, 1, scaleXY[0], times, function(){
         laya.scaleFromTo(img, 0, scaleXY[0], 1, times, function(){
              laya.scaleFromTo(img, 0, 1, scaleXY[1], times, function(){
                    laya.scaleFromTo(img, 0, scaleXY[1], 1.0, times, function(){
                        UIGameDes.loopAction(UIGameDes.getChild("btn_sure"));
                    }, null)
                },null)
         },null)
    }, null);
}