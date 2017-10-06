/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-12
 ** Brief:	枚举定义
 ***********************************************************************/
// 语言类型
language_type = {
	"chinese_simple" : 1,			// 简体中文
	"chinese_traditional" : 2,		// 繁体中文
	"english" : 3					// 英文
};

// 音频类型
audio_type = {
	"music" : 1,					// 音乐
	"sound" : 2						// 声音
};

// 游戏阶段
game_section = {
	"normal" : 1,					// 常规阶段
	"bonus1" : 2,					// bonus1阶段
	"bonus2" : 3,					// bonus2阶段
	"bonus3" : 4					// bonus3阶段
};

// bonus类型
bonus_type = {
	"random_replace" : 11,			// bonus1:随机替换
	"discolor_ray" : 12,			// bonus1:变色射线
	"diagonal_discolor" : 13,		// bonus1:对角变色
	"random_all_match" : 31,		// bonus3:随机百搭
	"fixed_all_match" : 32,			// bonus3:固定百搭
	"position_swap" : 33,			// bonus3:位置互换
	"element_fixed" : 34,			// bonus3:元素固定
	"random_ramble" : 35,			// bonus3:随机漫步
	"rainbow_clear" : 36,			// bonus3:彩虹消
	"screen_clear" : 37				// bonus3:全屏随机消除
};