/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	核心定义
 ***********************************************************************/
CoreDef = {
    GridType: {             // 格子类型
        none: 0,                    // 空格
        normal: 1,                  // 常规格
        born: 2,                    // 出生点
        door_in: 3,                 // 传送点(入口)
        door_out: 4,                // 传送点(出口)
        recycle: 5                  // 回收点
    },
    DirectType: {           // 方向类型
        hor: 1,                     // 横向
        ver: 2                      // 竖向
    },
	EffectType: {           // 特效类型
		image: 1,                   // 图片
		skeleton: 2,                // 骨骼
		frame: 3,                   // 帧动画
		particle: 4                 // 粒子
	},
    ElementTag: {           // 元素标签
        surface: 1,                 // 地表
        object: 2,                  // 物件
        attach: 3,                  // 附件
        overlay: 4                  // 覆盖
    },
    BaseType: {	            // 基础类型
        red: 1,                     // 红色
        yellow: 2,                  // 黄色
        green: 3,                   // 绿色
        blue: 4,                    // 蓝色
        purple: 5,                  // 紫色
        pink: 6,                    // 粉红
        plum: 7,                    // 李子
        wail: 8                     // 百搭
    },
    SurfaceType: {          // 地表类型
        glass: 1                    // 玻璃
    },
    ObjectType: {           // 物件类型
        normal: 1                   // 普通
    },
    AttachType: {           // 附件类型
        cross: 1,                   // 十字消
        oblique: 2                  // X消,一格
    },
    OverlayType: {          // 覆盖类型
        fixed: 1                    // 固定
    }
};