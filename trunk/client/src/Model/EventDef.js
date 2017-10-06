/***********************************************************************
** Author:	jaron.ho
** Date:	2015-08-06
** Brief:	event define
***********************************************************************/
function EventDef_enum(tb) {
	var enumTb = {};
	for (var i = 0, len = tb.length; i < len; ++i) {
		if (enumTb.hasOwnProperty(tb[i])) {
			throw new Error("duplicate event: " + tb[i] + " in EventDef");
		}
		enumTb[tb[i]] = i;
	}
	return enumTb;
}
//----------------------------------------------------------------------
var EventDef = [
	"ED_RES_LOADING",			// 资源加载
	"ED_CORE_CLEAR_SURFACE",	// 消除地表
	"ED_CORE_CLEAR_OBJECT",		// 消除物件
	"ED_ADD_TO_LIST",			// 添加到列表
	"ED_PROGRESS_BONUS1",		// bonus1进度
	"ED_PROGRESS_BONUS2",		// bonus2进度
	"ED_ON_BONUS",				// 触发bonus
	"ED_LEVEL_INFO",			// 关卡信息
	"ED_LEVEL_CLEAR",			// 自动开奖重置
	"ED_LEVEL_COIN",			// 自动开奖赛豆更新
	"ED_LEVEL_AUTO_TIMES"		// 自动开奖剩余次数更新
];
//----------------------------------------------------------------------
EventDef = EventDef_enum(EventDef);
//----------------------------------------------------------------------