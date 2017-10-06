/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-10
 ** Brief:	resource config
 ***********************************************************************/
var DEFAULT_DIR = "res/atlas/";	                    // 图集目录
var AUDIO_DIR = "res/Audio/";	                    // 音频目录
var EFFECT_DIR = "res/Effect/";	                    // 特效目录
var FONT_DIR = "res/Font/";	                        // 字体目录
var PICTURE_DIR = "res/Picture/";	                // 图片目录
var ROLE_DIR = "res/Role/";		                    // 角色目录
//----------------------------------------------------------------------
// 资源路径配置,标签:自定义
var ResourceConfig = {
    //----------------------------------------------------------------------
    // 图集
    atlas: [
        {url:DEFAULT_DIR + "comp.json", type:laya.net.Loader.ATLAS},
        {url:DEFAULT_DIR + "ui.json", type:laya.net.Loader.ATLAS}
    ],
	//----------------------------------------------------------------------
    // 音频
    audio: [
		{url:AUDIO_DIR + "background.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "bgm_02.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "bgm_03.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "bgm_04.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "bgm_bonus.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "button_click.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_1.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_2.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_3.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_4.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_5.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "Connect_6.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_element_change.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_element_clear.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_element_drop.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_element_fix.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_element_match.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_skill_cast.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_skill_rainbow.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_skill_ray.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_skill_swop.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_skill_walk.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_1.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_1.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_2.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_3.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_4.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_3.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_click.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_coin.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_level_clear.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "se_ui_level_up.mp3", type:laya.net.Loader.SOUND},
        {url:AUDIO_DIR + "se_wild.mp3", type:laya.net.Loader.SOUND}
    ],
	//----------------------------------------------------------------------
    // 特效
    effect: [
        {url:EFFECT_DIR + "b2zhuangtaidonghua.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "b2zhuangtaidonghua.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "baida.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "baida.sk", type:laya.net.Loader.BUFFER},
		{url:EFFECT_DIR + "bounstishi.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "bounstishi.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "caihongxiao.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "caihongxiao.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "chaoeshouyi.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "chaoeshouyi.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "ditushengji.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "ditushengji.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "duijiaobianse.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "duijiaobianse.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "guanqiaguoguan.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "guanqiaguoguan.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "piaochong.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "piaochong.sk", type:laya.net.Loader.BUFFER},
		{url:EFFECT_DIR + "quanpingsuijixiaochu.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "quanpingsuijixiaochu.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "shizixiaozhuangtai.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "shizixiaozhuangtai.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "suijimanbu.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "suijimanbu.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "suijitihuan.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "suijitihuan.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "xzixiao.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "xzixiao.sk", type:laya.net.Loader.BUFFER},
        {url:EFFECT_DIR + "yuansuxiaochu.png", type:laya.net.Loader.IMAGE},
        {url:EFFECT_DIR + "yuansuxiaochu.sk", type:laya.net.Loader.BUFFER}
    ],
	//----------------------------------------------------------------------
    // 字体
    font: [
    ],
    //----------------------------------------------------------------------
    // 图片
    picture: [
        {url:PICTURE_DIR + "image_bg_gray.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_bg_prompt.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_03.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_04.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_05.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_06.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_07.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_desc_08.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_03.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_04.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_05.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_06.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_07.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_lelve_titile_08.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_lockUp.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_attach_corss.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_attach_oblique.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_001.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_002.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_003.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_004.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_005.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_006.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_bg_007.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_blue_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_blue_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_green_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_green_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_pink_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_pink_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_boundary_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_boundary_03.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_plum_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_plum_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_purple_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_purple_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_red_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_red_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_wail_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_wail_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_yellow_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_object_normal_yellow_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_overlay_fixed.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_surface_glass_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_map_surface_glass_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_progress_bar.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_progress_bar_top.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_progress_bg.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_progress_mask.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_res_loading_bg.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_shizixiaolashen.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_small_map_gird.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_small_map_gird_01.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_small_map_gird_02.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_01.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_02.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_03.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_04.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_05.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_06.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_07.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_08.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_t_descrip_09.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_02.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_03.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_04.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_05.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_06.png", type:laya.net.Loader.IMAGE},
		{url:PICTURE_DIR + "image_utorial_07.png", type:laya.net.Loader.IMAGE},
        {url:PICTURE_DIR + "image_utorial_08.png", type:laya.net.Loader.IMAGE}
    ],
	//----------------------------------------------------------------------
    // 角色
    role: [
    ]
};