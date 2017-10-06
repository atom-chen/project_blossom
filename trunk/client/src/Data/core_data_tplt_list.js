core_data_tplt_list={   // 核心数据表
map_grid_tplt:{	            // 地图格子表(不要修改)
1001:{id:1001,name:"普通格",type:1,file:""},
2001:{id:2001,name:"出生点",type:2,file:""},
3001:{id:3001,name:"传送点(入口)",type:3,file:""},
4001:{id:4001,name:"传送点(出口)",type:4,file:""},
5001:{id:5001,name:"回收点",type:5,file:""}
},
map_board_tplt:{	        // 地图隔板表(不要修改)
1001:{id:1001,name:"横板",direct:1,file:""},
2001:{id:2001,name:"竖版",direct:2,file:""}
},
map_boundary_tplt:{	        // 地图边框表(不要修改)
1001:{id:1001,name:"横框",direct:1,file:""},
2001:{id:2001,name:"竖框",direct:2,file:""}
},
map_element_tplt:{	        // 地图元素表(慎重修改)
10100:{id:10100,name:"地表",tag:1,type:1,sub_type:0,file:"image_map_surface_glass_01.png",can_drop:0},
20101:{id:20101,name:"物件(红色)",tag:2,type:1,sub_type:1,file:"image_map_object_normal_red_01.png",can_drop:1},
20102:{id:20102,name:"物件(黄色)",tag:2,type:1,sub_type:2,file:"image_map_object_normal_yellow_01.png",can_drop:1},
20103:{id:20103,name:"物件(绿色)",tag:2,type:1,sub_type:3,file:"image_map_object_normal_green_01.png",can_drop:1},
20104:{id:20104,name:"物件(蓝色)",tag:2,type:1,sub_type:4,file:"image_map_object_normal_blue_01.png",can_drop:1},
20105:{id:20105,name:"物件(紫色)",tag:2,type:1,sub_type:5,file:"image_map_object_normal_purple_01.png",can_drop:1},
20106:{id:20106,name:"物件(粉红)",tag:2,type:1,sub_type:6,file:"image_map_object_normal_pink_01.png",can_drop:1},
20107:{id:20107,name:"物件(李子)",tag:2,type:1,sub_type:7,file:"image_map_object_normal_plum_01.png",can_drop:1},
20108:{id:20108,name:"物件(百搭)",tag:2,type:1,sub_type:8,file:"image_map_object_normal_wail_01.png",can_drop:1},
30100:{id:30000,name:"附件(十字消)",tag:3,type:1,sub_type:0,file:"image_map_attach_corss.png",can_drop:1},
30200:{id:30000,name:"附件(X消,一格)",tag:3,type:2,sub_type:0,file:"image_map_attach_oblique.png",can_drop:1},
40100:{id:40000,name:"覆盖(固定)",tag:4,type:1,sub_type:0,file:"image_map_overlay_fixed.png",can_drop:0}
}
};