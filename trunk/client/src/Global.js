/***********************************************************************
 ** Author: jaron.ho
 ** Date: 2014-12-04
 ** Brief: 全局变量
 ***********************************************************************/
G={
    SHOW_FPS: false,                             // 显示帧率
    DESIGN_WIDTH: 960,                          // 设计宽度
    DESIGN_HEIGHT: 720,                         // 设计高度
    MAP_ROW: 6,                                 // 地图行数
    MAP_COL: 6,                                 // 地图列数
    GRID_WIDTH: 66,                             // 格子宽度
    GRID_HEIGHT: 66,                            // 格子高度
    GRID_GAP: 0,                                // 格子间距
    GRID_TOUCH_GAP: 0,                          // 格子触摸间距
    VIEW_OFFSET_X: 12,                          // 视图X轴偏移
    VIEW_OFFSET_Y: -195,                        // 视图Y轴偏移
	DROP_FIRST_GAP: 0.05,                       // 开始掉落列之间的时间间隔(秒数)
    DROP_FIRST_TIME: 0.15,                       // 开始掉落时间(秒数)
	DROP_TIME: 0.2,                            // 掉落时间(秒数)
    DROP_LAST_TIME: 0.15,                        // 最后掉落时间(秒数)
    DROP_LAST_GAP: 0.1,                        // 最后掉落列之间的时间间隔(秒数)
	CLEAR_COUNT: 5,                             // 可消除个数
    MAX_TIMES: 30,                              // 最大刷屏次数(当刷屏次数大于此值时,应该是掉落数据表配置不合理)
    FIRST_LEVEL_ID: 1001,                       // 第一关卡id
    MAX_STAR: 3,                                // 最大星级
    STAKE_LIST: [                               // 下注分档
        1, 2, 5,
        10, 20, 50,
        100, 200, 500
    ],
    TIMES_LIST: [                               // 自动开奖次数
        5, 10, 15, 20,
        25, 30, 35, 40
    ],
    BONUS_1: 20,                                // bonus1触发条件(常规阶段消除元素数量)
    BONUS_2: 4,                                 // bonus2触发条件(常规阶段刷屏次数
    ELEMENT_PRICE: {                            // 元素单价
        20101: 12,               // 红色
        20102: 10,               // 黄色
        20103: 8,               // 绿色
        20104: 6,               // 蓝色
        20105: 5,               // 紫色
        20106: 3,               // 粉红
        20107: 2,               // 李子
        20108: 0                // 百搭
    },
    SKILL_OBLIQUE_COUNT: 6,     // x消(一格)触发个数
    SKILL_CROSS_COUNT: 7,      	// 十字消触发个数
	AWARD_TIMES:[1,2,4],	 	 //金币动画播放规则,奖金是赌注的几倍
	LADY_BIRD_DELAY: 5,			//延迟多久后，再次播放瓢虫动画
	LEVEL_UP_STAY: 1.5,			//升星（级）界面停留时间
	LEVEL_UP_FADE: 1.0,			//升星（级）界面淡出时间
    WS_URL: "http://cai.pre.wesai.com/",                    // 微赛服务器地址
	WS_APP_ID: "5001299b5c21129de1e0f937802febb4",          // 微赛APPID
    WS_APP_KEY: "ba27af44-0de1-f374-8983-2253e331bb1c"      // 微赛APPKEY
};