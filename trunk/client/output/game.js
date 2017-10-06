///<jscompress sourcefile="layaUI.max.all.js" />
var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AutoUI=(function(_super){
		function AutoUI(){
			

			AutoUI.__super.call(this);
		}

		CLASS$(AutoUI,'ui.AutoUI',_super);
		var __proto__=AutoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AutoUI.uiView);
		}

		STATICATTR$(AutoUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":480,"y":270,"skin":"ui/image_auto.png","anchorX":0.5,"anchorY":0.5},"type":"Image"},{"props":{"x":245,"y":179,"skin":"ui/button_arrow.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_stake_left"},"type":"Button"},{"props":{"x":706,"y":179,"skin":"ui/button_arrow.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_stake_right","rotation":180},"type":"Button"},{"props":{"x":338,"y":179,"skin":"ui/button_bet_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_stake1","label":"88","labelBold":true,"labelSize":28,"labelColors":"#F0B137"},"type":"Button"},{"props":{"x":477,"y":179,"skin":"ui/button_bet_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_stake2","label":"7253","labelBold":true,"labelSize":28,"labelColors":"#F0B137"},"type":"Button"},{"props":{"x":617,"y":179,"skin":"ui/button_bet_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_stake3","label":"1000","labelBold":true,"labelSize":28,"labelColors":"#F0B137"},"type":"Button"},{"props":{"x":245,"y":309,"skin":"ui/button_arrow.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times_left"},"type":"Button"},{"props":{"x":706,"y":309,"skin":"ui/button_arrow.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times_right","rotation":180},"type":"Button"},{"props":{"x":332,"y":309,"skin":"ui/button_times_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times1","label":"5","labelBold":true,"labelSize":28,"labelColors":"#fff7c5"},"type":"Button"},{"props":{"x":427,"y":309,"skin":"ui/button_times_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times2","label":"10","labelBold":true,"labelSize":28,"labelColors":"#fff7c5"},"type":"Button"},{"props":{"x":523,"y":309,"skin":"ui/button_times_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times3","label":"15","labelBold":true,"labelSize":28,"labelColors":"#fff7c5"},"type":"Button"},{"props":{"x":619,"y":309,"skin":"ui/button_times_02.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_times4","label":"20","labelBold":true,"labelSize":28,"labelColors":"#fff7c5"},"type":"Button"},{"props":{"x":364,"y":414,"skin":"ui/button_cancel.png","stateNum":"1","name":"btn_cancel","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":580,"y":414,"skin":"ui/button_start.png","stateNum":"1","name":"btn_start","labelBold":true,"labelStrokeColor":"#c88d11","labelStroke":2,"width":152,"height":77,"pivotX":76,"pivotY":38.5,"labelSize":25,"labelPadding":"-2","labelColors":"#ffffff"},"type":"Button"}],"props":{"width":960,"height":540}};}
		]);
		return AutoUI;
	})(View)
var GameUI=(function(_super){
		function GameUI(){
			

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":480,"y":270,"width":960,"height":720,"anchorX":0.5,"anchorY":0.5,"name":"img_cover","mouseThrough":true,"mouseEnabled":true,"visible":true,"sizeGrid":"0,0,0,0","skin":"ui/image_touming.png"},"type":"Image"},{"props":{"x":855,"y":436,"skin":"ui/button_start.png","name":"btn_start","stateNum":"1","anchorX":0.5,"anchorY":0.5,"labelSize":25,"labelBold":true,"labelStroke":2,"labelColors":"#ffffff","labelStrokeColor":"#1f1e1a","labelPadding":"-3"},"type":"Button"},{"props":{"x":858,"y":511,"skin":"ui/button_auto.png","name":"btn_auto","stateNum":"1","anchorX":0.5,"anchorY":0.5,"labelStroke":2,"labelStrokeColor":"#d79814","labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"labelSize":25,"width":137,"height":68},"type":"Button"},{"type":"Box","child":[{"props":{"skin":"ui/image_left.png","x":9,"y":31},"type":"Image"},{"props":{"text":"100,112,000","color":"#fff7c5","fontSize":20,"anchorX":0,"anchorY":0.5,"name":"label_coin","italic":true,"bold":true,"x":66,"y":471,"align":"center","width":120,"height":20},"type":"Label"},{"props":{"x":-6,"y":15,"skin":"ui/button_setup.png","name":"btn_set","stateNum":"1","anchorX":0,"anchorY":0.5},"type":"Button"}],"props":{"x":4,"y":30,"width":228,"height":511,"name":"box_left","mouseThrough":true,"mouseEnabled":true}},{"props":{"text":"1000","color":"#fcce13","fontSize":36,"bold":true,"name":"label_award","x":138,"y":424,"align":"center","width":120,"height":36,"anchorX":0.5,"anchorY":0.5},"type":"Label"},{"type":"Box","child":[{"props":{"x":76,"y":101,"skin":"ui/image_main_area.png","name":"image_main_area"},"type":"Image"},{"props":{"skin":"ui/image_main.png","name":"image_middle_bg","mouseEnabled":false,"mouseThrough":false},"type":"Image"},{"props":{"skin":"ui/button_arrow.png","name":"btn_left","stateNum":"1","anchorX":0.5,"anchorY":0.5,"x":36,"y":540},"type":"Button"},{"props":{"x":536,"skin":"ui/button_arrow.png","name":"btn_right","stateNum":"1","rotation":180,"anchorX":0.5,"anchorY":0.5,"y":540},"type":"Button"},{"props":{"x":134,"skin":"ui/button_bet_02.png","label":"0.5","name":"btn_stake1","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelSize":28,"labelBold":true,"labelColors":"#F0B137","y":540,"labelPadding":"0"},"type":"Button"},{"props":{"x":281,"skin":"ui/button_bet_02.png","label":"2","name":"btn_stake2","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelBold":true,"labelSize":28,"labelColors":"#F0B137","y":540,"labelPadding":"0"},"type":"Button"},{"props":{"x":431,"skin":"ui/button_bet_02.png","label":"5","name":"btn_stake3","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelSize":28,"labelBold":true,"labelColors":"#F0B137","y":540,"labelPadding":"0"},"type":"Button"}],"props":{"x":209,"y":-33,"name":"box_middle","mouseEnabled":true,"mouseThrough":true}},{"type":"Box","child":[{"props":{"skin":"ui/image_game_name.png"},"type":"Image"},{"props":{"x":102,"y":46,"text":"Level 1","name":"label_level","color":"#fff0cd","bold":true,"fontSize":24,"stroke":5,"strokeColor":"#894503","italic":true,"width":81.38671875,"height":24,"pivotX":40.693359375,"pivotY":12},"type":"Label"},{"props":{"skin":"ui/image_small_map.png","name":"image_small_map","x":108,"y":316,"anchorX":0.5,"anchorY":0.5},"type":"Image"},{"props":{"x":179,"y":369,"skin":"ui/image_star_gray.png","anchorX":0.5,"anchorY":0.5,"name":"image_star1"},"type":"Image"},{"props":{"x":179,"y":337,"skin":"ui/image_star_gray.png","anchorX":0.5,"anchorY":0.5,"name":"image_star2"},"type":"Image"},{"props":{"x":179,"y":305,"skin":"ui/image_star_gray.png","anchorX":0.5,"anchorY":0.5,"name":"image_star3"},"type":"Image"}],"props":{"x":747,"y":3,"width":212,"height":539,"name":"box_right","mouseEnabled":true,"mouseThrough":true}},{"props":{"x":19,"y":82,"skin":"ui/image_touming.png","width":200,"height":300,"name":"left_list_cover"},"type":"Image"},{"props":{"x":196,"y":504,"skin":"ui/button_chrage_01.png","name":"btn_charge","stateNum":"1","anchorX":0.5,"anchorY":0.5},"type":"Button"}],"props":{"width":960,"height":540,"x":0,"y":0,"mouseThrough":true,"mouseEnabled":true}};}
		]);
		return GameUI;
	})(View)
var GameDesUI=(function(_super){
		function GameDesUI(){
			

			GameDesUI.__super.call(this);
		}

		CLASS$(GameDesUI,'ui.GameDesUI',_super);
		var __proto__=GameDesUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameDesUI.uiView);
		}

		STATICATTR$(GameDesUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":480,"y":270,"skin":"ui/image_main_area.png","anchorX":0.5,"anchorY":0.5,"width":960,"height":720,"name":"img_background"},"type":"Image"},{"props":{"x":-31,"y":-24,"skin":"ui/image_ui_utorial_01.png"},"type":"Image"},{"props":{"y":51,"skin":"ui/image_ui_utorial_01.png","anchorX":0.5,"anchorY":0.5,"skewX":0,"skewY":0,"scaleX":-1,"x":887},"type":"Image"},{"props":{"x":366,"y":10,"skin":"ui/image_ui_utorial_02.png"},"type":"Image"},{"type":"Box","child":[{"props":{"skin":"ui/image_ui_utorial_03.png"},"type":"Image"},{"props":{"x":-3,"y":23,"skin":"ui/image_utorial_01.png","name":"img_des_1"},"type":"Image"}],"props":{"x":56,"y":118,"name":"box_1"}},{"type":"Box","child":[{"props":{"skin":"ui/image_ui_utorial_03.png"},"type":"Image"},{"props":{"x":124,"y":162,"skin":"ui/image_utorial_01.png","name":"img_des_2","anchorX":0.5,"anchorY":0.5},"type":"Image"}],"props":{"x":367,"y":117,"name":"box_2"}},{"type":"Box","child":[{"props":{"skin":"ui/image_ui_utorial_03.png"},"type":"Image"},{"props":{"x":126,"y":165,"skin":"ui/image_utorial_01.png","name":"img_des_3","anchorX":0.5,"anchorY":0.5},"type":"Image"}],"props":{"x":665,"y":119,"name":"box_3"}},{"props":{"x":490,"y":492,"skin":"ui/button_utorial_01.png","stateNum":"1","name":"btn_sure","anchorX":0.5,"anchorY":0.5},"type":"Button"}],"props":{"width":960,"height":540}};}
		]);
		return GameDesUI;
	})(View)
var GamePlayDesUI=(function(_super){
		function GamePlayDesUI(){
			

			GamePlayDesUI.__super.call(this);
		}

		CLASS$(GamePlayDesUI,'ui.GamePlayDesUI',_super);
		var __proto__=GamePlayDesUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePlayDesUI.uiView);
		}

		STATICATTR$(GamePlayDesUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":480,"y":270,"skin":"ui/image_descrip.png","anchorX":0.5,"anchorY":0.5},"type":"Image"},{"props":{"x":760,"y":80,"skin":"ui/button_close_04.png","stateNum":"1","anchorX":0.5,"anchorY":0.5,"name":"btn_close"},"type":"Button"},{"props":{"x":411,"y":455,"skin":"ui/button_arrow.png","anchorX":0.5,"anchorY":0.5,"stateNum":"1","name":"btn_left","scaleX":0.8,"scaleY":0.8},"type":"Button"},{"props":{"x":569,"y":455,"skin":"ui/button_arrow.png","anchorX":0.5,"anchorY":0.5,"stateNum":"1","scaleX":-0.8,"name":"btn_right","scaleY":0.8},"type":"Button"},{"props":{"x":492,"y":455,"text":"1-9","color":"#fbf6f6","fontSize":25,"name":"label_page","anchorX":0.5,"anchorY":0.5},"type":"Label"},{"props":{"x":480,"y":258,"skin":"ui/image_main_area.png","anchorX":0.5,"anchorY":0.5,"width":613,"height":283,"name":"image_content"},"type":"Image"}],"props":{"width":960,"height":540}};}
		]);
		return GamePlayDesUI;
	})(View)
var GMUI=(function(_super){
		function GMUI(){
			

			GMUI.__super.call(this);
		}

		CLASS$(GMUI,'ui.GMUI',_super);
		var __proto__=GMUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GMUI.uiView);
		}

		STATICATTR$(GMUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":344,"y":454,"skin":"ui/button_return_01.png","stateNum":"1","name":"btn_close","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":610,"y":454,"skin":"ui/button_start.png","stateNum":"1","name":"btn_start","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":480,"y":101,"skin":"comp/textinput.png","text":"1","anchorX":0.5,"anchorY":0.5,"name":"textinput_stake","bold":true,"width":150,"height":44,"fontSize":30},"type":"TextInput"},{"props":{"x":480,"y":175,"skin":"comp/textinput.png","text":"1","name":"textinput_count","bold":true,"width":150,"height":44,"pivotX":75,"pivotY":22,"fontSize":30},"type":"TextInput"},{"props":{"x":243,"y":87,"text":"下注：","fontSize":30,"bold":true,"color":"#f90400"},"type":"Label"},{"props":{"x":243,"y":161,"text":"开奖次数：","fontSize":30,"bold":true,"color":"#f90400"},"type":"Label"},{"props":{"x":243,"y":230,"text":"总共奖励：","fontSize":30,"bold":true,"color":"#f90400"},"type":"Label"},{"props":{"x":406,"y":230,"text":"0","fontSize":30,"bold":true,"color":"#ffea00","width":300,"name":"label_award_total"},"type":"Label"},{"props":{"x":243,"y":292,"text":"平均奖励：","fontSize":30,"bold":true,"color":"#f90400"},"type":"Label"},{"props":{"x":406,"y":292,"text":"0","fontSize":30,"bold":true,"color":"#ffea00","width":300,"name":"label_award_per"},"type":"Label"},{"props":{"x":243,"y":350,"text":"总耗时：","fontSize":30,"bold":true,"color":"#f90400"},"type":"Label"},{"props":{"x":406,"y":350,"text":"0时0分0秒","fontSize":30,"bold":true,"color":"#ffffff","width":300,"name":"label_cost_time"},"type":"Label"}],"props":{"width":960,"height":540}};}
		]);
		return GMUI;
	})(View)
var LevelDesUI=(function(_super){
		function LevelDesUI(){
			

			LevelDesUI.__super.call(this);
		}

		CLASS$(LevelDesUI,'ui.LevelDesUI',_super);
		var __proto__=LevelDesUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LevelDesUI.uiView);
		}

		STATICATTR$(LevelDesUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":327,"y":119,"skin":"ui/image_ui_level_01.png"},"type":"Image"},{"props":{"x":473,"y":455,"skin":"ui/button_utorial_01.png","stateNum":"1","name":"btn_close","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":471,"y":166,"skin":"ui/image_game_name.png","anchorX":0.5,"anchorY":0.5,"name":"img_title"},"type":"Image"},{"props":{"x":477,"y":314,"skin":"ui/image_ui_utorial_03.png","anchorX":0.5,"anchorY":0.5,"name":"img_content"},"type":"Image"}],"props":{"width":960,"height":540}};}
		]);
		return LevelDesUI;
	})(View)
var LevelUpUI=(function(_super){
		function LevelUpUI(){
			

			LevelUpUI.__super.call(this);
		}

		CLASS$(LevelUpUI,'ui.LevelUpUI',_super);
		var __proto__=LevelUpUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LevelUpUI.uiView);
		}

		STATICATTR$(LevelUpUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"props":{"x":337,"y":129,"skin":"ui/image_ui_level_01.png"},"type":"Image"},{"props":{"x":486,"y":181,"skin":"ui/image_lelve_titile_01.png","anchorX":0.5,"anchorY":0.5,"name":"img_title"},"type":"Image"},{"props":{"x":397,"y":224,"skin":"ui/image_lelve_desc_01.png"},"type":"Image"},{"props":{"x":521,"y":372,"text":"恭喜您通过KingDom 1-1！","width":300,"height":24,"color":"#a4614d","bold":true,"fontSize":19,"anchorX":0.5,"anchorY":0.5,"strokeColor":"#a4614d","stroke":0.5,"name":"label_level_now"},"type":"Label"},{"props":{"x":506,"y":401,"text":"接下来您将挑战KingDom 1-1！","width":300,"height":24,"color":"#a4614d","bold":true,"fontSize":19,"anchorX":0.5,"anchorY":0.5,"strokeColor":"#a4614d","stroke":0.5,"name":"label_level_next"},"type":"Label"}],"props":{"width":960,"height":540}};}
		]);
		return LevelUpUI;
	})(View)
var NewGuideUI=(function(_super){
		function NewGuideUI(){
			

			NewGuideUI.__super.call(this);
		}

		CLASS$(NewGuideUI,'ui.NewGuideUI',_super);
		var __proto__=NewGuideUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NewGuideUI.uiView);
		}

		STATICATTR$(NewGuideUI,
		['uiView',function(){return this.uiView={"type":"View","child":[{"type":"Box","child":[{"props":{"x":481,"y":302,"skin":"ui/image_main_area.png","width":960,"height":720,"anchorX":0.5,"anchorY":0.5,"name":"game_bg"},"type":"Image"},{"props":{"skin":"ui/image_left.png","x":25,"y":61},"type":"Image"},{"props":{"x":858,"y":436,"skin":"ui/button_start.png","name":"btn_start","stateNum":"1","anchorX":0.5,"anchorY":0.5,"labelSize":25,"labelBold":true,"labelStroke":2,"labelColors":"#ffffff","labelStrokeColor":"#1f1e1a","labelPadding":"-3"},"type":"Button"},{"props":{"x":859,"y":511,"skin":"ui/button_auto.png","name":"btn_auto","stateNum":"1","anchorX":0.5,"anchorY":0.5,"labelStroke":2,"labelStrokeColor":"#d79814","labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"labelSize":25,"width":137,"height":68},"type":"Button"},{"props":{"skin":"ui/image_main.png","name":"image_middle_bg","mouseEnabled":false,"mouseThrough":false,"x":211,"y":-37},"type":"Image"},{"props":{"skin":"ui/button_arrow.png","name":"btn_left","stateNum":"1","anchorX":0.5,"anchorY":0.5,"x":251,"y":500},"type":"Button"},{"props":{"x":726,"skin":"ui/button_arrow.png","name":"btn_right","stateNum":"1","rotation":180,"anchorX":0.5,"anchorY":0.5,"y":501},"type":"Button"},{"props":{"x":352,"skin":"ui/button_bet_01.png","label":"1","name":"btn_stake1","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelSize":28,"labelBold":true,"labelColors":"#633b29","y":503,"labelPadding":"0"},"type":"Button"},{"props":{"x":492,"skin":"ui/button_bet_02.png","label":"2","name":"btn_stake2","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelBold":true,"labelSize":28,"labelColors":"#F0B137","y":504,"labelPadding":"0"},"type":"Button"},{"props":{"x":628,"skin":"ui/button_bet_02.png","label":"5","name":"btn_stake3","anchorX":0.5,"anchorY":0.5,"stateNum":"1","labelSize":28,"labelBold":true,"labelColors":"#F0B137","y":503,"labelPadding":"0"},"type":"Button"},{"props":{"text":"0.00","color":"#fcce13","fontSize":36,"bold":true,"name":"label_award","x":144,"y":425,"align":"center","width":120,"height":36,"anchorX":0.5,"anchorY":0.5},"type":"Label"}],"props":{"x":480,"y":270,"width":960,"height":540,"name":"box_middle","mouseThrough":true,"mouseEnabled":true,"anchorX":0.5,"anchorY":0.5}},{"props":{"x":479,"y":270,"skin":"ui/image_touming.png","width":960,"height":540,"name":"game_touch","mouseEnabled":true,"pivotX":480,"pivotY":270},"type":"Image"},{"props":{"x":360,"y":406,"skin":"ui/image_xs_word_1.png","name":"img_word_1"},"type":"Image"},{"props":{"x":739,"y":339,"skin":"ui/image_xs_word_2.png","name":"img_word_2"},"type":"Image"},{"props":{"x":773,"y":390,"skin":"ui/image_xs_word_3.png","name":"img_word_3"},"type":"Image"},{"props":{"x":296,"y":116,"skin":"ui/image_xs_word_5.png","name":"img_word_5"},"type":"Image"},{"props":{"x":690,"y":81,"skin":"ui/image_xs_word_6.png","name":"img_word_6"},"type":"Image"},{"props":{"x":228,"y":400,"skin":"ui/image_xs_word_7.png","name":"img_word_4"},"type":"Image"}],"props":{"width":960,"height":540}};}
		]);
		return NewGuideUI;
	})(View)
var SetUpUI=(function(_super){
		function SetUpUI(){
			

			SetUpUI.__super.call(this);
		}

		CLASS$(SetUpUI,'ui.SetUpUI',_super);
		var __proto__=SetUpUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SetUpUI.uiView);
		}

		STATICATTR$(SetUpUI,
		['uiView',function(){return this.uiView={"type":"Dialog","child":[{"props":{"skin":"ui/image_set.png","centerY":0.5,"y":47,"centerX":0.5},"type":"Image"},{"props":{"x":473,"y":411,"skin":"ui/button_return_01.png","name":"btn_close","stateNum":"1","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":395,"y":203,"skin":"ui/button_switch_01.png","stateNum":"1","name":"btn_music","anchorX":0.5,"anchorY":0.5},"type":"Button"},{"props":{"x":605,"y":201,"skin":"ui/button_switch_02.png","sizeGrid":"0,0,0,0","stateNum":"1","name":"btn_effect","width":48,"height":50,"pivotX":24,"pivotY":25},"type":"Button"},{"props":{"x":476,"y":305,"skin":"ui/button_desc_01.png","stateNum":"1","name":"btn_des","anchorX":0.5,"anchorY":0.5},"type":"Button"}],"props":{"width":960,"height":540}};}
		]);
		return SetUpUI;
	})(Dialog)
///<jscompress sourcefile="EventDispatcher.js" />
/***********************************************************************
** Author:	jaron.ho
** Date:	2015-08-06
** Brief:	event dispathcer system
***********************************************************************/
function CreateEventDispatcher() {
	var mEventHandlerMap = {};
	var dispathcer = {};
	// subscribe event handler: eventId(number,string);func(function);target(object);priority(number),1>2>3
	dispathcer.subscribe = function (eventId, func, target, priority) {
		if ('string' != typeof(eventId) && 'number' != typeof(eventId)) {
			throw new Error("eventId is not number or string, it's type is " + typeof(eventId));
		}
		if ('function' != typeof(func)) {
			throw new Error("func is not function, it's type is " + typeof(func));
		}
		var handlers = mEventHandlerMap[eventId];
		if (!(handlers instanceof Array)) {
			handlers = [];
			if ('number' != typeof(priority)) {
				priority = handlers.length;
			}
			handlers.push({func: func, target: target, priority: priority});
			mEventHandlerMap[eventId] = handlers;
			return true;
		}
		for (var i = 0, len = handlers.length; i < len; ++i) {
			if (func == handlers[i].func) {
				return false;
			}
		}
		if ('number' != typeof(priority)) {
			priority = handlers.length;
		}
		mEventHandlerMap[eventId].push({func: func, target: target, priority: priority});
		mEventHandlerMap[eventId].sort(function (a, b) {
			return a.priority - b.priority;
		});
		return true;
	};
	// unsubscribe event: eventId(number,string);func(function)
	dispathcer.unsubscribe = function (eventId, func) {
		if ('string' != typeof(eventId) && 'number' != typeof(eventId)) {
			throw new Error("eventId is not number or string, it's type is " + typeof(eventId));
		}
		var handlers = mEventHandlerMap[eventId];
		if (!(handlers instanceof Array)) {
			return;
		}
		if ('function' != typeof(func)) {
			delete mEventHandlerMap[eventId];
			return;
		}
		for (var i = 0, len = handlers.length; i < len; ++i) {
			if (handlers[i] && 'object' == typeof(handlers[i]) && func == handlers[i].func) {
				handlers.splice(i, 1);
				break;
			}
		}
		if (0 == handlers.length) {
			delete mEventHandlerMap[eventId];
		}
	};
	// post event: eventId(number,string)
	dispathcer.post = function (eventId) {
		if ('string' != typeof(eventId) && 'number' != typeof(eventId)) {
			throw new Error("eventId is not number or string, it's type is " + typeof(eventId));
		}
		var handlers = mEventHandlerMap[eventId];
		if (!(handlers instanceof Array) || 0 == handlers.length) {
			return false;
		}
		for (var i = 0, len = handlers.length; i < len; ++i) {
			if (handlers[i] && 'object' == typeof(handlers[i]) && 'function' == typeof(handlers[i].func)) {
				handlers[i].func.apply(handlers[i].target, Array.prototype.slice.call(arguments, 1));
			}
		}
		return true;
	};
	return dispathcer;
}
/**********************************************************************/
var EventCenter = (function () {
	var mEventDispatcher = CreateEventDispatcher();
	var mEventCenter = {};
	// bind event
	mEventCenter.bind = function(eventId, func, target, priority) {
		return mEventDispatcher.subscribe(eventId, func, target, priority);
	};
	// unbind event
	mEventCenter.unbind = function(eventId, func) {
		mEventDispatcher.unsubscribe(eventId, func);
	};
	// post event
	mEventCenter.post = function(eventId) {
		return mEventDispatcher.post.apply(mEventDispatcher, arguments);
	};
	return mEventCenter;
})();
/**********************************************************************/
///<jscompress sourcefile="EventDispatcherHang.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-011
 ** Brief:	event dispathcer hang
 ***********************************************************************/
function EventDispatcherHang(obj) {
	if (!obj || ('object' != typeof(obj) && 'function' != typeof(obj))) {
		throw new Error("not support for obj type '" + typeof(obj) + "'");
	}
	obj.bind = function (eventId, handler, priority) {
		obj._eventHandlerMap = 'object' == typeof(obj._eventHandlerMap) ? obj._eventHandlerMap : {};
		if (obj._eventHandlerMap[eventId]) {
			throw new Error("can't subscribe two same event " + eventId);
		}
		obj._eventHandlerMap[eventId] = handler;
		EventCenter.bind(eventId, obj._eventHandlerMap[eventId], obj, priority);
	};
	obj.unbind = function (eventId) {
		obj._eventHandlerMap = 'object' == typeof(obj._eventHandlerMap) ? obj._eventHandlerMap : {};
		if (eventId) {		// remove single event
			if (obj._eventHandlerMap[eventId]) {
				EventCenter.unbind(eventId, obj._eventHandlerMap[eventId]);
				delete obj._eventHandlerMap[eventId];
			}
		} else {			// clear all event
			for (var key in obj._eventHandlerMap) {
				if (obj._eventHandlerMap.hasOwnProperty(key)) {
					EventCenter.unbind(key, obj._eventHandlerMap[key]);
				}
			}
			obj._eventHandlerMap = {};
		}
	};
}
//----------------------------------------------------------------------
///<jscompress sourcefile="Class.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	define type of class
 ***********************************************************************/
//----------------------------------------------------------------------
function setobjectclone(obj) {
    function copyObj(obj) {
        if (undefined == obj || null == obj || 'object' != typeof(obj) || obj instanceof HTMLElement) {
            return obj;
        }
        var newObj = obj.constructor ? new obj.constructor : {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = copyObj(obj[key]);
            } else {
                newObj[key] = copyObj(obj[key]);
            }
        }
        return newObj;
    }
    return copyObj(obj);
}
//----------------------------------------------------------------------
// define getter setter, proto:Object, prop:String, getter:function, setter:function, getterName:String, setterName:String
function definegettersetter(proto, prop, getter, setter, getterName, setterName) {
    if (proto.__defineGetter__) {
        getter && proto.__defineGetter__(prop, getter);
        setter && proto.__defineSetter__(prop, setter);
    } else if (Object.defineProperty) {
        var desc = {enumerable: false, configurable: true};
        getter && (desc.get = getter);
        setter && (desc.set = setter);
        Object.defineProperty(proto, prop, desc);
    } else {
        throw new Error("browser does not support getters");
    }
    if (!getterName && !setterName) {
        // lookup getter/setter function
        var hasGetter = (null != getter), hasSetter = (undefined != setter), props = Object.getOwnPropertyNames(proto);
        for (var i = 0; i < props.length; i++) {
            var name = props[i];
            if ((proto.__lookupGetter__ ? proto.__lookupGetter__(name) : Object.getOwnPropertyDescriptor(proto, name)) || 'function' != typeof(proto[name])) {
                continue;
            }
            var func = proto[name];
            if (hasGetter && func == getter) {
                getterName = name;
                if (!hasSetter || setterName) {
                    break;
                }
            }
            if (hasSetter && func == setter) {
                setterName = name;
                if (!hasGetter || getterName) {
                    break;
                }
            }
        }
    }
    // found getter/setter
    var ctor = proto.constructor;
    if (getterName) {
        if (!ctor.__getters__) {
            ctor.__getters__ = {};
        }
        ctor.__getters__[getterName] = prop;
    }
    if (setterName) {
        if (!ctor.__setters__) {
            ctor.__setters__ = {};
        }
        ctor.__setters__[setterName] = prop;
    }
}
//----------------------------------------------------------------------
var mClassManager = {
    id: (0|(Math.random()*998)),
    instanceId: (0|(Math.random()*998)),
    getNewID: function() {
        return this.id++;
    },
    getNewInstanceId: function() {
        return this.instanceId++;
    }
};
//----------------------------------------------------------------------
// based on John Resig's Simple JavaScript Inheritance http://ejohn.org/blog/simple-javascript-inheritance/
Class=(function() {
    var fnTest = /\b_super\b/;
    // the base class implementation (does nothing)
    var Superclass = function(){};
    //----------------------------------------------------------------------
    // create a new class that inherits from this class, props:object, return:function
    Superclass.extend = function(props) {
        var _super = this.prototype;
        // instantiate a base class (but only create the instance, don't run the init constructor)
        var prototype = Object.create(_super);
        var classId = mClassManager.getNewID();
        mClassManager[classId] = _super;
        // copy the properties over onto the new prototype
        var desc = {writable: true, enumerable: false, configurable: true};
	    prototype.__instanceId = null;
	    // the dummy class constructor
	    function Subclass() {
		    this.__instanceId = mClassManager.getNewInstanceId();
		    // all construction is actually done in the init method
		    if ('function' == typeof(this.ctor)) {
                this.ctor.apply(this, arguments);
            }
	    }
        Subclass.id = classId;
	    desc.value = classId;
	    Object.defineProperty(prototype, '__pid', desc);
	    // populate our constructed prototype object
        Subclass.prototype = prototype;
	    // enforce the constructor to be what we expect
	    desc.value = Subclass;
	    Object.defineProperty(Subclass.prototype, 'constructor', desc);
	    // copy getter/setter
	    this.__getters__ && (Subclass.__getters__ = setobjectclone(this.__getters__));
	    this.__setters__ && (Subclass.__setters__ = setobjectclone(this.__setters__));
        for (var idx = 0, li = arguments.length; idx < li; ++idx) {
            var prop = arguments[idx];
            for (var name in prop) {
                var isFunc = ('function' == typeof(prop[name]));
                var override = ('function' == typeof(_super[name]));
                var hasSuperCall = fnTest.test(prop[name]);
                if (isFunc && override && hasSuperCall) {
                    desc.value = (function(name, fn) {
                        return function() {
                            var tmp = this._super;
                            // add a new ._super() method that is the same method but on the super-class
                            this._super = _super[name];
                            // the method only need to be bound temporarily, so we remove it when we're done executing
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;
                            return ret;
                        };
                    })(name, prop[name]);
                    Object.defineProperty(prototype, name, desc);
                } else if (isFunc) {
                    desc.value = prop[name];
                    Object.defineProperty(prototype, name, desc);
                } else {
                    prototype[name] = prop[name];
                }
                if (isFunc) {
                    // override registered getter/setter
                    var getter, setter, propertyName;
                    if (this.__getters__ && this.__getters__[name]) {
                        propertyName = this.__getters__[name];
                        for (var i in this.__setters__) {
                            if (this.__setters__[i] == propertyName) {
                                setter = i;
                                break;
                            }
                        }
                        definegettersetter(prototype, propertyName, prop[name], prop[setter] ? prop[setter] : prototype[setter], name, setter);
                    }
                    if (this.__setters__ && this.__setters__[name]) {
                        propertyName = this.__setters__[name];
                        for (var j in this.__getters__) {
                            if (this.__getters__[j] == propertyName) {
                                getter = j;
                                break;
                            }
                        }
                        definegettersetter(prototype, propertyName, prop[getter] ? prop[getter] : prototype[getter], prop[name], getter, name);
                    }
                }
            }
        }
        // and make this class extendable
        Subclass.extend = Class.extend;
        // add implementation method
        Subclass.implement = function(prop) {
            for (var name in prop) {
                prototype[name] = prop[name];
            }
        };
        return Subclass;
    };
    return Superclass;
})();
//----------------------------------------------------------------------
///<jscompress sourcefile="Page.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	page
 ***********************************************************************/
Page = {};
//----------------------------------------------------------------------
// 获取指定数据,beginIndex:从0开始,(数据范围从beginIndex -> beginIndex + numPerPage)
Page.getData = function(arr, numPerPage, beginIndex) {
    if (!(arr instanceof Array)) {
        throw new Error("not support for arr type " + typeof(arr));
    }
    if (isNaN(numPerPage) || numPerPage <= 0) {
        throw new Error("not support for numPerPage");
    }
    if (isNaN(beginIndex) || beginIndex < 0) {
        throw new Error("not support for beginIndex");
    }
    var dataArr = [];
    var arrCount = arr.length;
    if (0 == arrCount || beginIndex < 0 || beginIndex >= arrCount) {
        return dataArr;
    }
    if (arrCount < numPerPage) {    // 不足一页
        beginIndex = 0;
    }
    var endIndex = beginIndex + numPerPage; // 结束索引号
    if (endIndex > arrCount) {  // 结束索引号 > 总个数
        endIndex = arrCount;
    }
    for (var i = beginIndex; i < endIndex; ++i) {
        dataArr.push(arr[i]);
    }
    return dataArr;
};
//----------------------------------------------------------------------
// 获取总页数,如:[1,2,3],[4,5,6],[7,8,9] => 3页
Page.getCountA = function(totalCount, numPerPage) {
    if (isNaN(totalCount) || totalCount < 0) {
        throw new Error("not support for totalCount");
    }
    if (isNaN(numPerPage) || numPerPage <= 0) {
        throw new Error("not support for numPerPage");
    }
    if (0 == totalCount) {
        return 0;
    }
    var div = Math.floor(totalCount/numPerPage);
    var rem = totalCount%numPerPage;
    if (0 == rem) {
        return div;
    }
    return div + 1;
};
//----------------------------------------------------------------------
// 获取指定页数据,currPage:从0开始,如:[1,2,3],[4,5,6],[7,8,9],第2页=>[4,5,6]
Page.getDataA = function(arr, numPerPage, currPage) {
    if (!(arr instanceof Array)) {
        throw new Error("not support for arr type " + typeof(arr));
    }
    if (isNaN(numPerPage) || numPerPage <= 0) {
        throw new Error("not support for numPerPage");
    }
    if (isNaN(currPage) || currPage < 0) {
        throw new Error("not support for currPage");
    }
    var dataArr = [];
    var arrCount = arr.length;
    var pageCount = this.getCountA(arrCount, numPerPage);
    if (0 == pageCount || currPage >= pageCount) {
        return dataArr;
    }
    var beginIndex = numPerPage*currPage;   // 开始索引号
    if (arrCount < numPerPage) {    // 不足一页
        beginIndex = 0;
    }
    var endIndex = beginIndex + numPerPage; // 结束索引号
    if (endIndex > arrCount) {  // 结束索引号 > 总个数
        endIndex = arrCount;
    }
    for (var i = beginIndex; i < endIndex; ++i) {
        dataArr.push(arr[i]);
    }
    return dataArr;
};
//----------------------------------------------------------------------
// 获取总页数,如:[1,2,3],[3,4,5],[5,6,7] => 3页
Page.getCountB = function(totalCount, numPerPage) {
    if (isNaN(totalCount) || totalCount < 0) {
        throw new Error("not support for totalCount");
    }
    if (isNaN(numPerPage) || numPerPage <= 0) {
        throw new Error("not support for numPerPage");
    }
    if (0 == totalCount) {
        return 0;
    }
    var div = Math.floor(totalCount/(numPerPage - 1));
    var rem = totalCount%(numPerPage - 1);
    if (1 >= rem) {
        return div;
    }
    return div + 1;
};
//----------------------------------------------------------------------
// 获取指定页数据,currPage:从0开始,如:[1,2,3],[3,4,5],[5,6,7],第2页=>[3,4,5]
Page.getDataB = function(arr, numPerPage, currPage) {
    if (!(arr instanceof Array)) {
        throw new Error("not support for arr type " + typeof(arr));
    }
    if (isNaN(numPerPage) || numPerPage <= 0) {
        throw new Error("not support for numPerPage");
    }
    if (isNaN(currPage) || currPage < 0) {
        throw new Error("not support for currPage");
    }
    var dataArr = [];
    var arrCount = arr.length;
    var pageCount = this.getCountB(arrCount, numPerPage);
    if (0 == pageCount || currPage >= pageCount) {
        return dataArr;
    }
    var beginIndex = (numPerPage - 1)*currPage; // 开始索引号
    if (arrCount < numPerPage) {    // 不足一页
        beginIndex = 0;
    }
    var endIndex = beginIndex + numPerPage; // 结束索引号
    if (endIndex > arrCount) {  // 结束索引号 > 总个数
        endIndex = arrCount;
    }
    for (var i = beginIndex; i < endIndex; ++i) {
        dataArr.push(arr[i]);
    }
    return dataArr;
};
//----------------------------------------------------------------------
// 创建页管理器,dataList:数据内容,numPerPage:每页显示几条;beginIndex:从0开始
Page.create = function(dataList, numPerPage, beginIndex) {
    var MoveType = {            // 移动类型
        MT_NONE: 0,                 // 无
        MT_ONE_PREV: 1,             // 向前移动一个
        MT_ONE_NEXT: 2,             // 向后移动一个
        MT_PAGE_PREV: 3,            // 向前移动一页(这里后一页的第一个是前一页的最后个)
        MT_PAGE_NEXT: 4,            // 向后移动一页(这里前一页的最后个是后一页的第一个)
        MT_PAGE_FIRST: 5,           // 移动到第一页
        MT_PAGE_LAST: 6             // 移动到最后页
    };
    var mDataList = [];         // 数据列表
    var mNumPerPage = 1;        // 每页显示几条
    var mBeginIndex = 0;        // 开始索引
    var page = {};              // 页管理器
    var self = this;
    //----------------------------------------------------------------------
    // 移动页面
    function movePage(moveType) {
        var dataCount = mDataList.length;
        if (0 == dataCount) {    // 数据为空
            return [];
        }
        if (dataCount < mNumPerPage) {  // 数据不足一页
            mBeginIndex = 0;
            return self.getData(mDataList, mNumPerPage, mBeginIndex);
        }
        if (mBeginIndex > dataCount - mNumPerPage) {    // 开始索引>最后页的开始索引
            mBeginIndex = dataCount - mNumPerPage;
            return self.getData(mDataList, mNumPerPage, mBeginIndex);
        }
	    if (MoveType.MT_ONE_PREV == moveType) {
		    if (mBeginIndex > 0) {
			    --mBeginIndex;
		    }
	    } else if (MoveType.MT_ONE_NEXT == moveType) {
		    if (mBeginIndex + mNumPerPage < dataCount) {
			    ++mBeginIndex;
		    }
	    } else if (MoveType.MT_PAGE_PREV == moveType) {
		    if (mBeginIndex - mNumPerPage > 0) {
			    mBeginIndex -= mNumPerPage - 1;
		    } else {
			    mBeginIndex = 0;
		    }
	    } else if (MoveType.MT_PAGE_NEXT == moveType) {
		    if (mBeginIndex + mNumPerPage*2 < dataCount) {
			    mBeginIndex += mNumPerPage - 1;
		    } else {
			    mBeginIndex = dataCount - mNumPerPage;
		    }
	    } else if (MoveType.MT_PAGE_FIRST == moveType) {
		    mBeginIndex = 0;
	    } else if (MoveType.MT_PAGE_LAST == moveType) {
		    mBeginIndex = dataCount - mNumPerPage;
	    }
        return self.getData(mDataList, mNumPerPage, mBeginIndex);
    }
    //----------------------------------------------------------------------
    // 重置
    page.reset = function(dataList, numPerPage, beginIndex) {
        if (!(dataList instanceof Array)) {
            throw new Error("not support for dataList type " + typeof(dataList));
        }
        numPerPage = isNaN(numPerPage) || numPerPage <= 0 ? 1 : numPerPage;
        beginIndex = isNaN(beginIndex) || beginIndex < 0 ? 0 : beginIndex;
        mDataList = dataList;
        mNumPerPage = numPerPage;
        mBeginIndex = beginIndex;
    };
    //----------------------------------------------------------------------
    // 是否可以前移
    page.isCanMovePrev = function() {
        return !(0 == mDataList.length || 0 == mBeginIndex);
    };
    //----------------------------------------------------------------------
    // 是否可以后移
    page.isCanMoveNext = function() {
        return !(0 == mDataList.length || mNumPerPage == mDataList.length || mBeginIndex >= mDataList.length - mNumPerPage);
    };
    //----------------------------------------------------------------------
    // 获取索引值
    page.getBeginIndex = function() {
        return mBeginIndex;
    };
    //----------------------------------------------------------------------
    // 获取每页条数
    page.getNumPerPage = function() {
        return mNumPerPage;
    };
    //----------------------------------------------------------------------
    // 获取当前页
    page.getCurrPage = function() {
        return movePage(MoveType.MT_NONE);
    };
    //----------------------------------------------------------------------
    // 向前移一个
    page.moveOnePrev = function() {
        return movePage(MoveType.MT_ONE_PREV);
    };
    //----------------------------------------------------------------------
    // 向后移一个
    page.moveOneNext = function() {
        return movePage(MoveType.MT_ONE_NEXT);
    };
    //----------------------------------------------------------------------
    // 向前移一页
    page.movePagePrev = function() {
        return movePage(MoveType.MT_PAGE_PREV);
    };
    //----------------------------------------------------------------------
    // 向后移一页
    page.movePageNext = function() {
        return movePage(MoveType.MT_PAGE_NEXT);
    };
    //----------------------------------------------------------------------
    // 移动到第一页
    page.movePageFirst = function() {
        return movePage(MoveType.MT_PAGE_FIRST);
    };
    //----------------------------------------------------------------------
    // 移动到最后页
    page.movePageLast = function() {
        return movePage(MoveType.MT_PAGE_LAST);
    };
    //----------------------------------------------------------------------
    // 移动到索引所在页面index:从0开始
    page.moveToIndex = function(index) {
        var num = Math.floor(index/mNumPerPage);
        mBeginIndex = mNumPerPage*num ;
        return movePage();
    };
    //----------------------------------------------------------------------
    page.reset(dataList, numPerPage, beginIndex);
    return page;
};
//----------------------------------------------------------------------
///<jscompress sourcefile="Probability.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-12
 ** Brief:	calculate probability by weight list
 ***********************************************************************/
// create probability object,weightList:[[1,20],[2,60]],contains two random value: 1.value,20.weight;2.value,60.weight
function CreateProbability(weightList) {
	if (!(weightList instanceof Array)) {
		throw new Error("weightList is not table, it's type is " + typeof(weightList));
	}
	var weightListInit = [];
	for (var i = 0, len = weightList.length; i < len; ++i) {
		var factor = weightList[i];
		if (!(factor instanceof Array)) {
			throw new Error("weight list at index [" + i + "] is not table, it't type is " + typeof(factor));
		}
		if (undefined == factor[0] || null == factor[0]) {
			throw new Error("weight list at index [" + i + "] format is error, not support value type " + typeof(factor[0]));
		}
		if (isNaN(factor[1])) {
			throw new Error("weight list at index [" + i + "] format is error, not support weight type " + typeof(factor[1]));
		}
		if (factor[1] < 0) {
			throw new Error("weight list at index [" + i + "] is error, not support weight value " + factor[1] + " < 0");
		}
		weightListInit[i] = [factor[0], factor[1]];
	}
	// private member variables
	var mThreshold = 1;
	var mWeightRange = [];
	var probability = {};
	// private methods
	function random(min, max) {
		return Math.floor(Math.random() * (max - min) + min + 0.5);
	}
	function parseWeightList() {
		for (var index = 0, count = weightList.length; index < count; ++index) {
			var randIndex = random(0, index);
			if (randIndex != index) {
				var temp = weightList[randIndex];
				weightList[randIndex] = weightList[index];
				weightList[index] = temp;
			}
		}
		mThreshold = 1;
		mWeightRange = [];
		for (var i = 0, len = weightList.length; i < len; ++i) {
			var factor = weightList[i];
			if (!(factor instanceof Array) || isNaN(factor[1])) {
				throw new Error("weightList format is error");
			}
			var value = factor[0];
			var weight = factor[1];
			if (weight > 0) {
				var range = {value: value, begin: mThreshold, end: mThreshold + weight - 1};
				mWeightRange.push(range);
				mThreshold += weight;
			}
		}
	}
	// public methods
	probability.getValue = function() {
		if (1 == mThreshold) {
			return;
		}
		var index = random(1, mThreshold - 1);
		for (var i = 0, len = mWeightRange.length; i < len; ++i) {
			var range = mWeightRange[i];
			if (index >= range.begin && index <= range.end) {
				return range.value;
			}
		}
	};
	probability.getWeight = function(value) {
		for (var i = 0, len = weightList.length; i < len; ++i) {
			var factor = weightList[i];
			if (value == factor[0]) {
				return factor[1];
			}
		}
		return 0;
	};
	probability.getTotalWeight = function() {
		var totalWeight = 0;
		for (var i = 0, len = weightList.length; i < len; ++i) {
			var factor = weightList[i];
			totalWeight += factor[1];
		}
		return totalWeight;
	};
	probability.setWeight = function(value, weight) {
		if (undefined == value || null == value) {
			throw new Error("not support value type " + typeof(value));
		}
		if (isNaN(weight)) {
			throw new Error("not support weight type " + typeof(value));
		}
		if (weight < 0) {
			throw new Error("not support weight value " + weight + " < 0");
		}
		var isFind = false;
		for (var i = 0, len = weightList.length; i < len; ++i) {
			if (value == weightList[i][0]) {
				weightList[i][1] = weight;
				isFind = true;
				break;
			}
		}
		if (!isFind) {
			weightList.push([value, weight]);
		}
		parseWeightList();
	};
	probability.reset = function() {
		weightList = [];
		for (var i = 0, len = weightListInit.length; i < len; ++i) {
			var factor = weightListInit[i];
			weightList[i] = [factor[0], factor[1]];
		}
		parseWeightList();
	};
	// initialize weight list
	parseWeightList();
	return probability;
}
//----------------------------------------------------------------------
///<jscompress sourcefile="Action.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-12
 ** Brief:	动作集
 ***********************************************************************/
Action = {
	mImageList:[]		// 图片列表(临时)
};
//----------------------------------------------------------------------
// 清空图片列表
Action.clearImageList = function() {
	for (var i = 0, len = this.mImageList.length; i < len; ++i) {
		this.mImageList[i].removeSelf();
		this.mImageList[i].destroy();
	}
	this.mImageList = [];
};
//----------------------------------------------------------------------
// 已有元素掉落动作
Action.playOldElementDrop = function(times, element, coordBegin, posPath, batch, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (element && element.getNode()) {	// 有表现时,才执行动作
		var display = element.getNode();
		var pos = posPath[posPath.length - 1];
		if (pos) {
			display.timerOnce(batch*G.DROP_TIME, null, function() {
				var duraton = G.DROP_TIME * posPath.length;
				laya.moveTo(display, {x:pos.x, y:pos.y}, duraton, null, function() {
					if (CoreDef.ObjectType.normal == element.getType()) {
						AudioModel.playSound(3003);
					}
					callback.apply(target, []);
				}, target);
			});
		} else {
			callback.apply(target, []);
		}
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 新的元素掉落动作
Action.playNewElementDrop = function(times, element, coordBegin, posPath, batch, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (element && element.getNode()) {	// 有表现时,才执行动作
		var display = element.getNode();
		var pos = posPath[posPath.length - 1];
		var duraton = 0;
		var delay = 0;
		var offX = 2;
		var oldX = display.x;
		var oldY = display.y;
		var action = laya.utils.Ease.strongIn;
		display.pos(oldX, oldY - (batch + 1)*G.GRID_HEIGHT);
		display.frameLoop(0.01, null, posCheckFunc);
		// 位置检测函数(用来控制元素掉落到某个位置时才显示)
		function posCheckFunc() {
			display = element.getNode();
			if (display && display.y >= oldY - G.GRID_HEIGHT) {
				display.visible = true;
				display.clearTimer(null, posCheckFunc);
			}
		}
		if (pos) {	// 元素有实际掉落路径
			if (0 == times) {				// 首批掉落元素
				duraton = G.DROP_FIRST_TIME * (posPath.length + 1 + batch);
				delay = (coordBegin.col - 1) * G.DROP_FIRST_GAP;
			} else {
				duraton = G.DROP_TIME * (posPath.length + 1 + batch);
			}
			laya.moveTo(display, {x:pos.x, y:pos.y}, duraton + delay, action, function() {
				if (CoreDef.ObjectType.normal == element.getType()) {
					AudioModel.playSound(3003);
				}
				laya.moveTo(display, {x:pos.x, y:pos.y - offX}, 0.1, action, function() {
					laya.moveTo(display, {x:pos.x, y:pos.y}, 0.1, action, function() {
						callback.apply(target, []);
					}, target);
				}, target);	
			}, target);
		} else {	// 元素无实际掉落路径
			if (0 == times) {				// 首批掉落元素 
				duraton = G.DROP_FIRST_TIME * (batch + 1);
				delay = (coordBegin.col - 1) * G.DROP_FIRST_GAP;
			} else {
				duraton = G.DROP_TIME * (batch + 1);
			}
			laya.moveTo(display, {x:oldX, y:oldY}, duraton + delay, action, function() {
				if (CoreDef.ObjectType.normal == element.getType()) {
					AudioModel.playSound(3003);
				}
				laya.moveTo(display, {x:oldX, y:oldY - offX}, 0.1, action, function() {
					laya.moveTo(display, {x:oldX, y:oldY}, 0.1, action, function() {
						callback.apply(target, []);
					}, target);
				}, target);	
			}, target);
		}
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 地表消除动作
Action.playSurfaceClear = function(surface, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3002);
	if (surface) {
		var display = surface.getNode();
		if (display) {	// 有表现时,才执行动作
			var image = new laya.ui.Image(ResURL("image_map_surface_glass_02.png"));
			image.anchorX = 0.5;
			image.anchorY = 0.5;
			image.zOrder = display.zOrder;
			image.pos(display.x, display.y);
			display.parent.addChild(image);
			surface.dtor();
			this.mImageList.push(image);
		}
	}
	callback.apply(target, []);
};
//----------------------------------------------------------------------
// 消除特效
Action.playClearEffect = function(object, clearType, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (object && 1 == clearType) {
		var display = object.getNode();
		if (display) {	// 有表现时,才执行动作
			var imageCfgList = {
				20101:["image_map_object_normal_red_01.png", "image_map_object_normal_red_02.png"],
				20102:["image_map_object_normal_yellow_01.png", "image_map_object_normal_yellow_02.png"],
				20103:["image_map_object_normal_green_01.png", "image_map_object_normal_green_02.png"],
				20104:["image_map_object_normal_blue_01.png", "image_map_object_normal_blue_02.png"],
				20105:["image_map_object_normal_purple_01.png", "image_map_object_normal_purple_02.png"],
				20106:["image_map_object_normal_pink_01.png", "image_map_object_normal_pink_02.png"],
				20107:["image_map_object_normal_plum_01.png", "image_map_object_normal_plum_02.png"],
				20108:["image_map_object_normal_wail_01.png", "image_map_object_normal_wail_02.png"]
			};
			var delay = 150;
			var imageCfg = imageCfgList[object.getId()];
			display.skin = ResURL(imageCfg[1]);
			display.timerOnce(delay, this, function() {
				display.skin = ResURL(imageCfg[0]);
				display.timerOnce(delay, this, function() {
					display.skin = ResURL(imageCfg[1]);
					display.timerOnce(delay, this, function() {
						display.skin = ResURL(imageCfg[0]);
						display.timerOnce(delay, this, function() {
							callback.apply(target, []);
						});
					});
				});
			});
			return;
		}
	}
	callback.apply(target, []);
};
//----------------------------------------------------------------------
// 物件消除动作
Action.playObjectClear = function(object, pos, clearType, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (object) {
		if (object.getNode()) {	// 有表现时,才执行动作
			object.dtor();
			AudioModel.playSound(3002);
			var ani = laya.createArmature(ResURL("yuansuxiaochu.png"), ResURL("yuansuxiaochu.sk"), false, null, null, function() {
				ani.removeSelf();
				ani.destroy();
				callback.apply(target, []);
			}, this);
			if (1 == clearType) {
				ani.play("ue_clear_1");
			} else {
				ani.play("ue_clear_2");
			}
			ani.pos(pos.x, pos.y);
			Controller.getView().getSceneLayer().addChild(ani);
		} else {
			callback.apply(target, []);
		}
		return;
	}
	callback.apply(target, []);
};
//----------------------------------------------------------------------
// 附件消除动作
Action.playAttachClear = function(attach, coord, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (attach) {
		var display = attach.getNode();
		if (display) {	// 有表现时,才执行动作
			if (CoreDef.AttachType.cross == attach.getType()) {				// 十字消
				AudioModel.playSound(3010);
				attach.dtor();
				var count = 4;
				function innerFunc(distance, direct) {
					if (0 == distance) {
						if (--count <= 0) {
							callback.apply(target, []);
						}
						return;
					}
					var img = new laya.ui.Image(ResURL("image_shizixiaolashen.png"));
					img.anchorX = 0;
					img.anchorY = 0.5;
					if ("up" == direct) {			// 向上
						img.rotation = 270;
						img.pos(pos.x, pos.y + G.GRID_HEIGHT/2);
					} else if ("down" == direct) {	// 向下
						img.rotation = 90;
						img.pos(pos.x, pos.y - G.GRID_HEIGHT/2);
					} else if ("left" == direct) {	// 向左
						img.rotation = 180;
						img.pos(pos.x + G.GRID_WIDTH/2, pos.y);
					} else if ("right" == direct) {	// 向右
						img.rotation = 0;
						img.pos(pos.x - G.GRID_WIDTH/2, pos.y);
					}
					img.zOrder = 100;
					Controller.getView().getSceneLayer().addChild(img);
					laya.scaleFromTo(img, 1, 1, distance + 1, 0.4, function() {
						laya.fadeOut(img, 0.3, function() {
							img.removeSelf();
							img.destroy();
							if (--count <= 0) {
								callback.apply(target, []);
							}
						}, this);
					}, this);
				}
				innerFunc(coord.row - 1, "up");
				innerFunc(G.MAP_ROW - coord.row, "down");
				innerFunc(coord.col - 1, "left");
				innerFunc(G.MAP_COL - coord.col, "right");
			} else if (CoreDef.AttachType.oblique == attach.getType()) {	// x消
				AudioModel.playSound(3008);
				var ani = laya.createArmature(ResURL("xzixiao.png"), ResURL("xzixiao.sk"), false, null, null, function() {
					ani.removeSelf();
					ani.destroy();
					attach.dtor();
					callback.apply(target, []);
				}, this);
				ani.play("skill_x_blast");
				ani.pos(pos.x, pos.y - 10);
				Controller.getView().getSceneLayer().addChild(ani);
			} else {
				attach.dtor();
				callback.apply(target, []);
			}
		} else {
			attach.dtor();
			callback.apply(target, []);
		}
		return;
	}
	callback.apply(target, []);
};
//----------------------------------------------------------------------
// 元素清屏动作
Action.playElementScreenOut = function(element, coord, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (element) {
		var display = element.getNode();
		if (display) {	// 有表现时,才执行动作
			var posTarget = {x:pos.x, y:pos.y + G.GRID_HEIGHT*(G.MAP_ROW - coord.row + 1)};
			var duraton = G.DROP_LAST_TIME*(G.MAP_ROW - coord.row + 1);
			var delay = (coord.col - 1) * G.DROP_LAST_GAP;
			laya.delayWith(display, delay, function() {	// 先延迟
				laya.moveTo(display, posTarget, duraton, laya.utils.Ease.strongOut, function() {
					element.dtor();
					callback.apply(target, []);
				});
			});
		} else {
			callback.apply(target, []);
		}
		return;
	}
	callback.apply(target, []);
};
//----------------------------------------------------------------------
// 随机替换动画
Action.playRandomReplaceAction = function(srcElement, targetElement, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3001);
	var srcDisplay = srcElement.getNode();
	var targetDisplay = targetElement.getNode();
	if (srcDisplay && targetDisplay) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("suijitihuan.png"), ResURL("suijitihuan.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			srcElement.dtor();
			targetDisplay.visible = true;
			callback.apply(target, []);
		}, this);
		ani.play("bonus_01_01_cast");
		ani.pos(pos.x, pos.y);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 变色射线动画1
Action.playDiscolorRayAction1 = function(srcElement, targetElement, pos, index, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3001);
	var srcDisplay = srcElement.getNode();
	var targetDisplay = targetElement.getNode();
	if (srcDisplay && targetDisplay) {	// 有表现时,才执行动作
		laya.delayWith(targetDisplay, 0.1*(index + 1), function() {
			var ani = laya.createArmature(ResURL("suijitihuan.png"), ResURL("suijitihuan.sk"), false, null, null, function() {
				ani.removeSelf();
				ani.destroy();
				srcElement.dtor();
				targetDisplay.visible = true;
				callback.apply(target, []);
			}, this);
			ani.play("bonus_01_01_cast");
			ani.pos(pos.x, pos.y);
			Controller.getView().getSceneLayer().addChild(ani);
		}, this);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 变色射线动画2
Action.playDiscolorRayAction2 = function(pos, direct, distance, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3001);
	if (distance > 0 && Controller.isShowDisplay()) {	// 距离>0，且有表现时,才执行动作
		var img = new laya.ui.Image(ResURL("image_shizixiaolashen.png"));
		img.anchorX = 1;
		img.anchorY = 0.5;
		var xOffset = 0;
		var yOffset = 0;
		if ("up" == direct) {			// 向上
			img.rotation = 270;
			img.pos(pos.x, pos.y - G.GRID_HEIGHT/2);
			yOffset = -G.GRID_HEIGHT * distance;
		} else if ("down" == direct) {	// 向下
			img.rotation = 90;
			img.pos(pos.x, pos.y + G.GRID_HEIGHT/2);
			yOffset = G.GRID_HEIGHT * distance;
		} else if ("left" == direct) {	// 向左
			img.rotation = 180;
			img.pos(pos.x - G.GRID_WIDTH/2, pos.y);
			xOffset = -G.GRID_WIDTH * distance;
		} else if ("right" == direct) {	// 向右
			img.rotation = 0;
			img.pos(pos.x + G.GRID_WIDTH/2, pos.y);
			xOffset = G.GRID_WIDTH * distance;
		}
		img.zOrder = 100;
		Controller.getView().getSceneLayer().addChild(img);
		laya.scaleFromTo(img, 2, 1, 1.4, 0.5, null, null);
		laya.moveBy(img, {x:xOffset, y:yOffset}, 0.5, null, function() {
			laya.scaleFromTo(img, 1, 1, 0, 0.5, function() {
				img.removeSelf();
				img.destroy();
				callback.apply(target, []);
			}, this);
		}, this);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 对角变色动画
Action.playDiagonalDiscolorAction1 = function(coord, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3001);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("duijiaobianse.png"), ResURL("duijiaobianse.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bonus_01_03_cast");
		if (1 == coord.row && 1 == coord.col) {			// 左上角
			ani.pos(pos.x + 165, pos.y + 190);
		} else if (1 == coord.row && 6 == coord.col) {	// 右上角
			ani.rotation = 90;
			ani.pos(pos.x - 190, pos.y + 165);
		} else if (6 == coord.row && 1 == coord.col) {	// 左下角
			ani.rotation = 270;
			ani.pos(pos.x + 190, pos.y - 165);
		} else if (6 == coord.row && 6 == coord.col) {	// 右下角
			ani.rotation = 180;
			ani.pos(pos.x - 165, pos.y - 190);
		}
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 随机百搭动画
Action.playRandomAllMatchAction = function(srcElement, targetElement, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3007);
	var srcDisplay = srcElement.getNode();
	var targetDisplay = targetElement.getNode();
	if (srcDisplay && targetDisplay) {	// 有表现时,才执行动作
		srcElement.dtor();
		var display = laya.createArmature(ResURL("baida.png"), ResURL("baida.sk"), false, null, null, function() {
			callback.apply(target, []);
		}, this);
		display.play("bonus_03_01_cast");
		targetElement.setNode(display);
		laya.setPositionOffset(display, {x:-5, y:2});
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 固定百搭动画
Action.playFixedAllMatchAction = function(srcElement, targetElement, overlayElement, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3007);
	var srcDisplay = srcElement.getNode();
	var targetDisplay = targetElement.getNode();
	var overlayDisplay = overlayElement.getNode();
	if (srcDisplay && targetDisplay && overlayDisplay) {	// 有表现时,才执行动作
		srcElement.dtor();
		targetDisplay.visible = true;
		var display = laya.createArmature(ResURL("baida.png"), ResURL("baida.sk"), false, null, null, function() {
			callback.apply(target, []);
		}, this);
		display.play("bonus_03_02_cast");
		overlayElement.setNode(display);
		laya.setPositionOffset(display, {x:-5, y:2});
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 位置互换动画1
Action.playPositionSwapAction1 = function(elementTb, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (elementTb.length > 0) {
		var count = elementTb.length;
		for (var i = 0, len = elementTb.length; i < len; ++i) {
			var element = elementTb[i];
			if (element && element.getNode()) {
				laya.moveTo(element.getNode(), pos, 0.8, laya.utils.Ease.strongOut, function() {
					if (--count <= 0) {
						laya.callAfter(0.8, callback, target);
					}
				}, this);
			} else {
				if (--count <= 0) {
					callback.apply(target, []);
				}
			}
		}
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 元素固定动画
Action.playElementFixedAction = function(overlayElement, pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3004);
	var overlayDisplay = overlayElement.getNode();
	if (overlayDisplay) {	// 有表现时,才执行动作
		var display = laya.createArmature(ResURL("baida.png"), ResURL("baida.sk"), false, null, null, function() {
			callback.apply(target, []);
		}, this);
		display.play("bonus_03_02_cast");
		overlayElement.setNode(display);
		laya.setPositionOffset(display, {x:-5, y:2});
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 随机漫步动画1
Action.playRandomRambleAction1 = function(pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("suijimanbu.png"), ResURL("suijimanbu.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bonus_03_05_cast_1");
		ani.pos(pos.x - 10, pos.y + 20);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 随机漫步动画2
Action.playRandomRambleAction2 = function(pos, preCoord, currCoord, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	if (Controller.isShowDisplay() && currCoord) {	// 有表现时,才执行动作
		laya.callAfter(0.2, function() {
			var ani = laya.createArmature(ResURL("suijimanbu.png"), ResURL("suijimanbu.sk"), false, null, null, function() {
				ani.removeSelf();
				ani.destroy();
				callback.apply(target, []);
			}, this);
			ani.play("bonus_03_05_cast_2");
			if (preCoord.row < currCoord.row) {	// 往下
				ani.pos(pos.down.x - 3, pos.down.y - 10);
			} else if (preCoord.row > currCoord.row) {	// 往上
				ani.rotation = 180;
				ani.pos(pos.up.x + 3, pos.up.y + 10);
			} else if (preCoord.col < currCoord.col) {	// 往右
				ani.rotation = 270;
				ani.pos(pos.right.x - 10, pos.right.y + 3);
			} else if (preCoord.col > currCoord.col) {	// 往左
				ani.rotation = 90;
				ani.pos(pos.left.x + 10, pos.left.y - 3);
			}
			Controller.getView().getSceneLayer().addChild(ani);
		}, this);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 彩虹消动画
Action.playRainbowClearAction = function(pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("caihongxiao.png"), ResURL("caihongxiao.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bonus_03_06_cast");
		ani.pos(pos.x, pos.y - 15);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 全屏随机消除爆炸动画
Action.playScreenClearCastAction = function(pos, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("quanpingsuijixiaochu.png"), ResURL("quanpingsuijixiaochu.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bonus_03_07_cast");
		ani.pos(Controller.getCenterPos().x, Controller.getCenterPos().y);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 全屏随机消除火星动画
Action.playScreenClearFlyAction = function(pos, coord, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		laya.delayWith(Controller.getView().getSceneLayer(), 1.0, function() {	// 先延迟
			var ani = laya.createArmature(ResURL("quanpingsuijixiaochu.png"), ResURL("quanpingsuijixiaochu.sk"), false, null, null, function() {
			}, this);
			ani.play("bonus_03_07_cast_fly");
			ani.pos(Controller.getCenterPos().x, Controller.getCenterPos().y);
			var duration = 0.9;	
			laya.moveTo(ani, {x:pos.x, y:pos.y - 15}, duration, null, function(){
				ani.removeSelf();
				ani.destroy();
				callback.apply(target, []);
			}, target);
			Controller.getView().getSceneLayer().addChild(ani,-5);
		});
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// bonus1提示动画
Action.playBonus1HintAction = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	//AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("bounstishi.png"), ResURL("bounstishi.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bouns_01_hint");
		ani.pos(Controller.getCenterPos().x, Controller.getCenterPos().y);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
//bonus2提示动画
Action.playBonus2HintAction = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	//AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("bounstishi.png"), ResURL("bounstishi.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bouns_02_hint");
		ani.pos(Controller.getCenterPos().x, Controller.getCenterPos().y);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// bonus3提示动画
Action.playBonus3HintAction = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	//AudioModel.playSound(3009);
	if (Controller.isShowDisplay()) {	// 有表现时,才执行动作
		var ani = laya.createArmature(ResURL("bounstishi.png"), ResURL("bounstishi.sk"), false, null, null, function() {
			ani.removeSelf();
			ani.destroy();
			callback.apply(target, []);
		}, this);
		ani.play("bouns_03_hint");
		ani.pos(Controller.getCenterPos().x, Controller.getCenterPos().y);
		Controller.getView().getSceneLayer().addChild(ani);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
///<jscompress sourcefile="LayaEx.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-12
 ** Brief:	laya扩展函数
 ***********************************************************************/
laya = laya || {};
//----------------------------------------------------------------------
// 延迟调用,duration:延迟时间(秒数)
laya.callAfter = function(duration, callCF, target) {
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	if (isNaN(duration) || duration <= 0) {
		Laya.timer.callLater(target, callCF, Array.prototype.slice.call(arguments, 3));
		return;
	} 
	Laya.timer.once(duration*1000, target, callCF, Array.prototype.slice.call(arguments, 3));
};
//----------------------------------------------------------------------
// 改变节点父节点
laya.changeParent = function(sprite, parent, zOrder) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	if (!parent || parent.destroyed) {
		throw new Error("parent is null");
	}
	sprite.removeSelf();
	sprite.zOrder = 'number' == typeof(zOrder) ? zOrder : sprite.zOrder;
	parent.addChild(sprite);
};
//----------------------------------------------------------------------
// 获取世界坐标
laya.getWorldPosition = function(sprite) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	sprite.anchorX = isNaN(sprite.anchorX) ? 0 : sprite.anchorX;
	sprite.anchorY = isNaN(sprite.anchorY) ? 0 : sprite.anchorY;
	var pos = {x:sprite.anchorX*sprite.width, y:sprite.anchorY*sprite.height};
	return sprite.localToGlobal(pos, false);
};
//----------------------------------------------------------------------
// 获取本地坐标
laya.getLocalPosition = function(sprite, worldPos) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	return sprite.globalToLocal(worldPos, false);
};
//----------------------------------------------------------------------
// 设置坐标偏移
laya.setPositionOffset = function(sprite, offsetPos) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	sprite.pos(sprite.x + offsetPos.x, sprite.y + offsetPos.y);
};
//----------------------------------------------------------------------
// 创建骨骼动画,例.fullTextureName:"res/Effect/test.png",fullDataName:"res/Effect/test.sk",isSupportDressup:是否支持换装
laya.createArmature = function(fullTextureName, fullDataName, isSupportDressup, playCF, pauseCF, stopCF, target) {
	// 获取资源
	var texture = laya.net.Loader.getRes(fullTextureName);
	var data = laya.net.Loader.getRes(fullDataName);
	// 解析骨骼
	var factory = new laya.ani.bone.Templet();
	var armature = null;
	factory.on(laya.events.Event.COMPLETE, this, function() {
		// 创建骨骼动画
		armature = factory.buildArmature(isSupportDressup ? 1 : 0);
		armature.on(laya.events.Event.PLAYED, this, function() {
			if ('function' == typeof(playCF)) {
				armature.timer.callLater(target, playCF, Array.prototype.slice.call(arguments, 7));
			}
		});
		armature.on(laya.events.Event.PAUSED, this, function() {
			if ('function' == typeof(pauseCF)) {
				armature.timer.callLater(target, pauseCF, Array.prototype.slice.call(arguments, 7));
			}
		});
		armature.on(laya.events.Event.STOPPED, this, function() {
			if ('function' == typeof(stopCF)) {
				armature.timer.callLater(target, stopCF, Array.prototype.slice.call(arguments, 7));
			}
		});
	});
	factory.parseData(texture, data, 60);
	return armature;
};
//----------------------------------------------------------------------
// 创建粒子节点,例.path:"res/Effect/",fileName:"test.part",autoRemove:粒子播放完自动删除
laya.createParticle = function(path, fileName, autoRemove) {
	if ('/' != path[path.length - 1] && '\\' != path[path.length - 1]) {
		path += '/';
	}
	var oldBasePath = Laya.URL.basePath;
	Laya.URL.basePath += path;
	if (-1 == fileName.lastIndexOf('.part')) {
		fileName += '.part';
	}
	var particle = new Laya.Particle2D();
	Laya.loader.load(fileName, Handler.create(this, function(setting) {
        particle.setParticleSetting(setting);
		Laya.URL.basePath = oldBasePath;
		if (autoRemove) {
			particle.timerOnce(setting.duration*1000, this, function() {
				particle.stop();
				particle.removeSelf();
				particle.destroy();
				particle = undefined;
			})
		}
    }), null, Loader.JSON);
	return particle;
};
//----------------------------------------------------------------------
// 创建进度条,bgImage:进度条背景资源路径,barImage:进度条资源路径(大小需要同背景一样),barMaskImage:遮罩资源路径(大小需要同进度条一样),duration:缓动时间(秒数)
laya.createProgress = function(bgImage, barImage, barMaskImage, duration) {
	duration = (isNaN(duration) || duration <= 0) ? 1 : duration;
	// 进度条背景
	var progressBg = new laya.display.Sprite();
	progressBg.loadImage(bgImage);
	progressBg.cacheAs = "bitmap";
	// 进度条
	var progressBar = new laya.display.Sprite();
	progressBar.loadImage(barImage);
	progressBar.pos((progressBg.width - progressBar.width)/2, (progressBar.height - progressBg.height)/2);
	progressBg.addChild(progressBar);
	// 进度条遮罩
	var progressBarMask = new laya.display.Sprite();
	progressBarMask.loadImage(barMaskImage);
	progressBarMask.scaleX = 1;
	progressBar.mask = progressBarMask;
	// 外部接口定义
	var progressValue = progressBarMask.scaleX;
	var delta = 1/(duration*60);
	progressBarMask.frameLoop(1, this, function() {
		if (progressBarMask.scaleX < progressValue) {
			progressBarMask.scaleX += delta;
			progressBarMask.scaleX = progressBarMask.scaleX > progressValue ? progressValue : progressBarMask.scaleX;
		} else if (progressBarMask.scaleX > progressValue) {
			progressBarMask.scaleX -= delta;
			progressBarMask.scaleX = progressBarMask.scaleX < progressValue ? progressValue : progressBarMask.scaleX;
		} else {
			return;
		}
		progressBar.repaint();
	});
	progressBg.getValue = function() {		// 获取进度(0-1)
		return progressValue;
	};
	progressBg.setValue = function(value, tweenFlag) {	// 设置进度,value:进度值(0-1),tweenFlag:是否缓动
		value = (isNaN(value) || value < 0) ? 0 : (value > 1 ? 1 : value);
		progressValue = value;
		if (!tweenFlag) {	// 立即执行
			progressBarMask.scaleX = progressValue;
			progressBar.repaint();
		}
	};
	progressBg.setValue(0);
	return progressBg;
};
//----------------------------------------------------------------------
// 延迟动作,duration:延迟时间(秒数)
laya.delayWith = function(sprite, duration, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	if (duration <= 0) {
		callCF.apply(target, Array.prototype.slice.call(arguments, 4));
		return;
	}
	sprite.timerOnce(duration*1000, target, callCF, Array.prototype.slice.call(arguments, 4));
};
//----------------------------------------------------------------------
// 执行动作,actions:动作列表,每个动作为{props:{},duration:1,ease:null},props为属性(当为空对象时表示暂停),duration为动作时间(秒数),ease为缓动类型(参考laya.utils.Ease)
laya.runAction = function(sprite, actions, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	var args = Array.prototype.slice.call(arguments, 4);
	function innerImpl() {
		if (0 == actions.length) {
			callCF.apply(target, args);
			return;
		}
		var action = actions[0];
		if (sprite && !sprite.destroyed) {
			if (!action.props || (action.props instanceof Array) || 'object' != typeof(action.props)) {
				action.props = {};
			}
			laya.utils.Tween.to(sprite, action.props, action.duration*1000, action.ease, laya.utils.Handler.create(this, function() {
				actions.splice(0, 1);
				innerImpl();
			}, null, false));
		} else {
			callCF.apply(target, args);
		}
	}
	innerImpl();
};
//----------------------------------------------------------------------
// 移动动作,pos:目标坐标,duration:移动时间(秒数),ease:缓动类型(参考laya.utils.Ease)
laya.moveTo = function(sprite, pos, duration, ease, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	laya.utils.Tween.to(sprite, {x:pos.x, y:pos.y}, duration*1000, ease, laya.utils.Handler.create(this, function() {
		if (sprite && !sprite.destroyed) {
			sprite.pos(pos.x, pos.y);
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
	}, null, false));
}
//----------------------------------------------------------------------
// 移动运动(跟随轨迹),posArray:轨迹数组,duration:移动时间(秒数)
laya.moveToWithPath = function(sprite, posArray, duration, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	if (0 == posArray.length) {
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
		return;
	}
	var timeLine = new Laya.TimeLine();
	for (var i = 0, len = posArray.length; i < len; ++i) {
		timeLine.to(sprite, {x:posArray[i].x, y:posArray[i].y}, duration*1000);
	}
	timeLine.on(laya.events.Event.COMPLETE, this, function() {
		var endPos = posArray[posArray.length - 1];
		if (sprite && !sprite.destroyed) {
			sprite.pos(endPos.x, endPos.y);
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
	});
	timeLine.play(0, false);
};
//----------------------------------------------------------------------
// 位移运动,pos:坐标偏差,duration:移动时间(秒数),ease:缓动类型(参考laya.utils.Ease)
laya.moveBy = function(sprite, pos, duration, ease, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	var oldPos = {x:sprite.x, y:sprite.y};
	laya.utils.Tween.to(sprite, {x:oldPos.x + pos.x, y:oldPos.y + pos.y}, duration*1000, ease, laya.utils.Handler.create(this, function() {
		if (sprite && !sprite.destroyed) {
			sprite.pos(oldPos.x + pos.x, oldPos.y + pos.y);
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
	}, null, false));
}
//----------------------------------------------------------------------
// 淡入动作,duration:淡入时间(秒数)
laya.fadeIn = function(sprite, duration, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	sprite.alpha = 0;
	laya.utils.Tween.to(sprite, {alpha:1}, duration*1000, null, laya.utils.Handler.create(this, function() {
		if (sprite && !sprite.destroyed) {
			sprite.alpha = 1;
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
	}, null, false));
};
//----------------------------------------------------------------------
// 淡出动作,duration:淡出时间(秒数)
laya.fadeOut = function(sprite, duration, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	sprite.alpha = 1;
	laya.utils.Tween.to(sprite, {alpha:0}, duration*1000, null, laya.utils.Handler.create(this, function() {
		if (sprite && !sprite.destroyed) {
			sprite.alpha = 0;
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 5));
	}, null, false));
};
//----------------------------------------------------------------------
// 缩放动作,scaleType:缩放类型(0.xy缩放,1.x缩放,2.y缩放),fromScale:起始缩放系数,toScale:目标缩放系数,duration:缩放时间(秒数)
laya.scaleFromTo = function(sprite, scaleType, fromScale, toScale, duration, callCF, target) {
	if (!sprite || sprite.destroyed) {
		throw new Error("sprite is null");
	}
	callCF = 'function' == typeof(callCF) ? callCF : function(){};
	scaleType = 1 == scaleType ? 1 : (2 == scaleType ? 2 : 0);
	if (0 == scaleType || 1 == scaleType) {
		sprite.scaleX = fromScale;
	}
	if (0 == scaleType || 2 == scaleType) {
		sprite.scaleY = fromScale;
	}
	var props = {
		scaleX: (2 == scaleType ? sprite.scaleX : toScale),
		scaleY: (1 == scaleType ? sprite.scaleY : toScale)
	};
	laya.utils.Tween.to(sprite, props, duration*1000, null, laya.utils.Handler.create(this, function() {
		if (sprite && !sprite.destroyed) {
			if (0 == scaleType || 1 == scaleType) {
				sprite.scaleX = toScale;
			}
			if (0 == scaleType || 2 == scaleType) {
				sprite.scaleY = toScale;
			}
		}
		callCF.apply(target, Array.prototype.slice.call(arguments, 6));
	}, null, false));
};
//----------------------------------------------------------------------
///<jscompress sourcefile="UI.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	ui manager
 ***********************************************************************/
function UIManager() {
	var mUITable = {};
	var manager = {};
	manager.createUI = function(name, node, onEventCF, target, modal) {
		if (mUITable[name]) {
			throw new Error("exist ui [" + name + "] aleady");
		}
		node = node || new laya.ui.View();
		node.size(node.width || Laya.stage.width, node.height || Laya.stage.height);
		node.anchorX = 0.5;
		node.anchorY = 0.5;
		node.pos(Laya.stage.width / 2, Laya.stage.height / 2);
		node.mouseEnabled = true;
		node.mouseThrough = true;
		node.zOrder = 2;	// add to zOrder 2
		var root = new laya.ui.View();
		root.size(Laya.stage.width, Laya.stage.height);
		root.anchorX = 0.5;
		root.anchorY = 0.5;
		root.pos(Laya.stage.width / 2, Laya.stage.height / 2);
		root.mouseEnabled = true;
		root.mouseThrough = 'boolean' == typeof(modal) ? (modal ? false : true) : true;
		function onEvent(event) {
			if ('function' == typeof(onEventCF) && event) {
				onEventCF.apply(target, [event]);
			}
		}
		root.on(laya.events.Event.ADDED, this, onEvent);
		root.on(laya.events.Event.CLICK, this, onEvent);
		root.on(laya.events.Event.DISPLAY, this, onEvent);
		root.on(laya.events.Event.DRAG_END, this, onEvent);
		root.on(laya.events.Event.DRAG_MOVE, this, onEvent);
		root.on(laya.events.Event.DRAG_START, this, onEvent);
		root.on(laya.events.Event.MOUSE_DOWN, this, onEvent);
		root.on(laya.events.Event.MOUSE_MOVE, this, onEvent);
		root.on(laya.events.Event.MOUSE_OUT, this, onEvent);
		root.on(laya.events.Event.MOUSE_OVER, this, onEvent);
		root.on(laya.events.Event.MOUSE_UP, this, onEvent);
		root.on(laya.events.Event.REMOVED, this, onEvent);
		root.on(laya.events.Event.UNDISPLAY, this, onEvent);
		root.addChild(node);
		var ui = {name: name, root: root, node: node};
		mUITable[name] = ui;
		return ui;
	};
	manager.destroyUI = function(name) {
		var ui = mUITable[name];
		if (!ui) {
			return;
		}
		ui.root.removeSelf();
		ui.root.destroy();
		delete mUITable[name];
	};
	manager.destroyAllUI = function() {
		for (var name in mUITable) {
			if (mUITable.hasOwnProperty(name)) {
				mUITable[name].root.removeSelf();
				mUITable[name].root.destroy();
			}
		}
		mUITable = {};
	};
	manager.getUI = function(name) {
		return mUITable[name];
	};
	return manager;
}
//----------------------------------------------------------------------
UI = 'undefined' == typeof(UI) ? UIManager() : UI;
UI.mLayerTable = 'undefined' == typeof(UI.mLayerTable) ? [] : UI.mLayerTable;
// open ui
UI.open = function(layer, name, node, modal, onEventCF, parent) {
	var ui = this.getUI(name);
	if (ui) {
		return ui;
	}
	ui = this.createUI(name, node, function ( event) {
		if ('function' == typeof(onEventCF)) {
			onEventCF(event);
		}
		if ('function' == typeof(layer.onTouch)) {
			layer.onTouch(event);
		}
	}, this, modal);
	if (parent) {
		parent.addChild(ui.root);
	}
	EventDispatcherHang(layer);
	layer.root = ui.root;
	layer.node = ui.node;
	if ('function' == typeof(layer.onStart)) {
        layer.onStart.apply(layer, Array.prototype.slice.call(arguments, 6));
	}
	this.mLayerTable.push(layer);
	return ui;
};
//----------------------------------------------------------------------
// close single ui
UI.close = function(layer, name) {
	var ui = this.getUI(name);
	if (!ui) {
		return false;
	}
	for (var i = 0, len = this.mLayerTable.length; i < len; ++i) {
		if (layer == this.mLayerTable[i]) {
			this.mLayerTable.splice(i, 1);
			break;
		}
	}
	if ('function' == typeof(layer.unbind)) {
		layer.unbind();
	}
	if ('function' == typeof(layer.onDestroy)) {
		layer.onDestroy();
	}
	delete layer.root;
	delete layer.node;
	this.destroyUI(name);
	return true;
};
//----------------------------------------------------------------------
// close all ui
UI.closeAll = function() {
	for (var i = 0, len = this.mLayerTable.length; i < len; ++i) {
		if ('function' == typeof(this.mLayerTable[i].unbind)) {
			this.mLayerTable[i].unbind();
		}
		if ('function' == typeof(this.mLayerTable[i].onDestroy)) {
			this.mLayerTable[i].onDestroy();
		}
		delete this.mLayerTable[i].root;
		delete this.mLayerTable[i].node;
	}
	this.destroyAllUI();
	this.mLayerTable = [];
};
//----------------------------------------------------------------------
// update ui per frames
UI.update = function(dt) {
	for (var i = 0, len = this.mLayerTable.length; i < len; ++i) {
		if ('function' == typeof(this.mLayerTable[i].onUpdate)) {
			this.mLayerTable[i].onUpdate(dt);
		}
	}
};
//----------------------------------------------------------------------
// get latest ui
UI.getLatest = function() {
	if (0 == this.mLayerTable.length) {
		return;
	}
	return this.mLayerTable.indexOf(this.mLayerTable.length - 1);
};
//----------------------------------------------------------------------
// check is ui open
UI.isOpened = function(layer) {
	if (!layer) {
		return false;
	}
	for (var i = 0, len = this.mLayerTable.length; i < len; ++i) {
		if (layer == this.mLayerTable[i]) {
			return true;
		}
	}
	return false;
};
//----------------------------------------------------------------------
// get child node
UI.getChild = function(root, children, childName) {
	if (undefined == root || null == root) {
		throw new Error("not support root for null");
	}
	if (!(children && !(children instanceof Array) && 'object' == typeof(children))) {
		throw new Error("not support children for " + typeof(children));
	}
	if (undefined != children[childName] && null != children[childName]) {
		return children[childName];
	}
	function getChildImpl(node) {
		if (!node) {
			return null;
		}
		for (var i = 0; i < node.numChildren; ++i) {
			var child = node.getChildAt(i);
            children[child.name] = child;
			if (childName == child.name) {
				return child;
			}
			child = getChildImpl(child);
			if (child) {
				return child;
			}
		}
	}
	return getChildImpl(root);
};
//----------------------------------------------------------------------
///<jscompress sourcefile="UIDEFINE.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	ui define
 ***********************************************************************/
//----------------------------------------------------------------------
// 定义界面
function UIDEFINE(clsName, nodeCls) {
	var cls = {};
	cls._className = clsName;
	var parent = null;
	var isParentStage = false;
	// 检测父节点
	function checkParent(parentNode) {
		if (!parent) {
			parent = Laya.stage;
			isParentStage = true;
		}
		if (parentNode) {
			if (parent != parentNode) {
				cls.close();
			}
			parent = parentNode;
			isParentStage = false;
		}
	}
	// 获取节点
	function getNode() {
		if ('function' == typeof(nodeCls)) {
			return new nodeCls();
		}
	}
	// 打开底层界面(显示在底层)
	cls.openBack = function() {
		try {
			checkParent(Game.NODE_UI_BACK);
            if (UI.isOpened(cls)) {
                return;
            }
			console.log("open back ui >>> className: " + cls._className);
			cls._children = {};
			var args = [cls, cls._className, getNode(), false, null, parent];
			for (var i = 0, len = arguments.length; i < len; ++i) {
				args.push(arguments[i]);
			}
            var ui = UI.open.apply(UI, args);
			if (isParentStage) {
				ui.root.zOrder = 1;
			}
		} catch (exception) {
			alert(exception.stack);
		}
	}
	// 打开中间界面(显示在中间层,触摸事件可穿透给低层界面)
	cls.openMiddle = function () {
		try {
			checkParent(Game.NODE_UI_MIDDLE);
            if (UI.isOpened(cls)) {
                return;
            }
			console.log("open middle ui >>> className: " + cls._className);
			cls._children = {};
			var args = [cls, cls._className, getNode(), false, null, parent];
			for (var i = 0, len = arguments.length; i < len; ++i) {
				args.push(arguments[i]);
			}
            var ui = UI.open.apply(UI, args);
			if (isParentStage) {
				ui.root.zOrder = 2;
			}
		} catch (exception) {
			alert(exception.stack);
		}
	};
	// 打开上层界面(显示在上层,并吞吃低层界面的触摸事件)
	cls.openFront = function (focus, showGray, showBounce) {
		try {
			checkParent(Game.NODE_UI_FRONT);
            if (UI.isOpened(cls)) {
                return;
            }
			console.log("open front ui >>> className: " + cls._className);
			cls._children = {};
			var args = [cls, cls._className, getNode(), true, function (event) {
				if (laya.events.Event.CLICK == event.type && !focus) {
					cls.close();
				}
			}, parent];
			for (var i = 3, len = arguments.length; i < len; ++i) {
				args.push(arguments[i]);
			}
			var ui = UI.open.apply(UI, args);
			if (isParentStage) {
				ui.root.zOrder = 3;
			}
			// 显示灰色背景
			if ('boolean' != typeof(showGray) || showGray) {
				var grayImage = new laya.ui.Image(ResURL("image_bg_gray.png"));
				grayImage.scaleX = G.DESIGN_WIDTH / grayImage.width;
				grayImage.scaleY = G.DESIGN_HEIGHT / grayImage.height;
				grayImage.anchorX = 0.5;
				grayImage.anchorY = 0.5;
				grayImage.pos(Laya.stage.width / 2, Laya.stage.height / 2);
				grayImage.zOrder = 1;
				ui.root.addChild(grayImage);
				// 灰色背景管理
				UI.mFrontGrayTable = 'undefined' == typeof(UI.mFrontGrayTable) ? [] : UI.mFrontGrayTable;
				var maxZOrder = -1/0;
				var maxZOrderGray = null;
				for (var j = 0, l = UI.mFrontGrayTable.length; j < l; ++j) {
					var zOrder = UI.mFrontGrayTable[j].root.zOrder;
					if (zOrder >= maxZOrder) {
						maxZOrder = zOrder;
						maxZOrderGray = UI.mFrontGrayTable[j].image;
					}
				}
				if (ui.root.zOrder >= maxZOrder) {
					if (maxZOrderGray) {
						maxZOrderGray.visible = false;
					}
					grayImage.visible = true;
				} else {
					if (maxZOrderGray) {
						maxZOrderGray.visible = true;
					}
					grayImage.visible = false;
				}
				UI.mFrontGrayTable.push({name:cls._className, root:ui.root, image:grayImage});
			}
			// 弹性效果
			if ('boolean' != typeof(showBounce) || showBounce) {
				var orignalScaleX = ui.node.scaleX;
				var orignalScaleY = ui.node.scaleY;
				laya.utils.Tween.to(ui.node, {scaleX:orignalScaleX * 1.1, scaleY:orignalScaleY * 1.1}, 120, null, laya.utils.Handler.create(null, function() {
					laya.utils.Tween.to(ui.node, {scaleX:orignalScaleX, scaleY:orignalScaleY}, 120);
				}, null, false));
			}
		} catch (exception) {
			console.log(exception);
			alert(exception.stack);
		}
	};
	// 打开顶层界面(显示在顶层,触摸事件可穿透给低层界面)
	cls.openTop = function () {
		try {
			checkParent(Game.NODE_UI_TOP);
            if (UI.isOpened(cls)) {
                return;
            }
			console.log("open top ui >>> className: " + cls._className);
			cls._children = {};
			var args = [cls, cls._className, getNode(), false, null, parent];
			for (var i = 0, len = arguments.length; i < len; ++i) {
				args.push(arguments[i]);
			}
            var ui = UI.open.apply(UI, args);
			if (isParentStage) {
				ui.root.zOrder = 4;
			}
		} catch (exception) {
			alert(exception.stack);
		}
	};
	// 关闭界面
	cls.close = function () {
		try {
            if (!UI.isOpened(cls)) {
                return;
            }
			console.log("close ui <<< className: " + cls._className);
			UI.close(cls, cls._className);
			for (var key in cls) {
				if (cls.hasOwnProperty(key) && 'function' != typeof(cls[key]) && '_className' != key) {
					delete cls[key];
				}
			}
			cls._children = {};
			// 灰色背景管理
			UI.mFrontGrayTable = 'undefined' == typeof(UI.mFrontGrayTable) ? [] : UI.mFrontGrayTable;
			for (var i = 0, len = UI.mFrontGrayTable.length; i < len; ++i) {
				if (UI.mFrontGrayTable[i].name == cls._className) {
					UI.mFrontGrayTable.splice(i, 1);
					break;
				}
			}
			var maxZOrder = -1/0;
			var maxZOrderGray = null;
			for (var j = 0, l = UI.mFrontGrayTable.length; j < l; ++j) {
				var zOrder = UI.mFrontGrayTable[j].root.zOrder;
				if (zOrder >= maxZOrder) {
					maxZOrder = zOrder;
					maxZOrderGray = UI.mFrontGrayTable[j].image;
				}
			}
			if (maxZOrderGray) {
				maxZOrderGray.visible = true;
			}
		} catch (exception) {
			alert(exception.stack);
		}
	};
	// 获取子节点
	cls.getChild = function (childName) {
		return UI.getChild(cls.root, cls._children, childName);
	};
	// 获取类名
	cls.getClassName = function () {
		return cls._className;
	};
	// 注册点击事件:scaleFlag-开启缩放,soundFlag-开启声音|声音id
	cls.onClick = function (sprite, clickCB, target, scaleFlag, soundFlag) {
		if (!sprite) {
			throw new Error("sprite is null");
		}
		if ('function' != typeof(clickCB)) {clickCB = function(){};}
		var orignalScaleX = sprite.scaleX;
		var orignalScaleY = sprite.scaleY;
		function onScaleAction(scale) {	// 按钮缩放动作
			if (scaleFlag) {
				sprite.scaleX = orignalScaleX*('number' == typeof(scale) ? scale : 1);
				sprite.scaleY = orignalScaleY*('number' == typeof(scale) ? scale : 1);
			}
		}
		function onSoundAction() {		// 按钮按下声音
			if ('boolean' == typeof(soundFlag) && soundFlag) {
                AudioModel.playSound(2001);
            } else if ('number' == typeof(soundFlag) && soundFlag > 0) {
                AudioModel.playSound(soundFlag);
            }
		}
		var mouseDownFlag = false
		sprite.on(laya.events.Event.MOUSE_DOWN, null, function() {
			mouseDownFlag = true;
			onScaleAction(0.9);
			onSoundAction();
		})
		sprite.on(laya.events.Event.MOUSE_OVER, null, function() {
			if (mouseDownFlag) {
				onScaleAction(0.9);
			}
		})
		sprite.on(laya.events.Event.MOUSE_UP, null, function() {
			mouseDownFlag = false;
			onScaleAction(1);
		})
		sprite.on(laya.events.Event.MOUSE_OUT, null, function() {
			mouseDownFlag = false;
			onScaleAction(1);
		})
		if (laya.ui.Button == sprite.constructor || laya.ui.CheckBox == sprite.constructor || laya.ui.Radio == sprite.constructor) {
			sprite.clickHandler = laya.utils.Handler.create(this, function() {
				mouseDownFlag = false;
				clickCB.apply(target, [sprite]);
			}, [], false);
		} else {
			sprite.on(laya.events.Event.CLICK, null, function(event) {
				mouseDownFlag = false;
				clickCB.apply(target, [sprite]);
			});
		}
	};
	return cls;
}
//----------------------------------------------------------------------
// 更新界面
function UIUPDATE(dt) {
	if ('object' == typeof(UI) && 'function' == typeof(UI.update)) {
		UI.update(dt);
	}
}
//----------------------------------------------------------------------
// 清空界面
function UICLEAR() {
	UI.closeAll();
	UI.mClsTable = 'undefined' == typeof(UI.mClsTable) ? {} : UI.mClsTable;
	for (var key in UI.mClsTable) {
		if (UI.mClsTable.hasOwnProperty(key)) {
			for (var k in UI.mClsTable[key]) {
				if (UI.mClsTable[key].hasOwnProperty(k)) {
					if ('function' != typeof(UI.mClsTable[key][k]) && '_className' != k) {
						delete UI.mClsTable[key][k];
					}
				}
			}
		}
	}
	UI.mDelayLayerTable = [];
	UI.mCurrDelayLayer = null;
	UI.mFrontGrayTable = [];
}
//----------------------------------------------------------------------
// 添加延迟界面
function UIDELAYPUSH(layer, focus, showGray, showBounce) {
	UI.mDelayLayerTable = 'undefined' == typeof(UI.mDelayLayerTable) ? [] : UI.mDelayLayerTable;
	var delay = {};
	delay.layer = layer;
    delay.focus = 'boolean' != typeof(focus) ? true : focus;
    delay.show_gray = 'boolean' != typeof(showGray) ? true : showGray;
    delay.show_bounce = 'boolean' != typeof(showBounce) ? true : showBounce;
	delay.params = Array.prototype.slice.call(arguments, 4);
	UI.mDelayLayerTable.push(delay);
}
//----------------------------------------------------------------------
// 弹出延迟界面
function UIDELAYPOP(layer) {
	if (UI.isOpened(layer) || UI.isOpened(UI.mCurrDelayLayer)) {
		return false;
	}
	UI.mDelayLayerTable = 'undefined' == typeof(UI.mDelayLayerTable) ? [] : UI.mDelayLayerTable;
	for (var i = 0, len = UI.mDelayLayerTable.length; i < len; ++i) {
		if (!layer || layer === UI.mDelayLayerTable[i].layer) {
            var delay = UI.mDelayLayerTable[i];
			UI.mCurrDelayLayer = delay.layer;
			var args = [delay.focus, delay.show_gray, delay.show_bounce];
			for (var j = 0, l = delay.params.length; j < l; ++j) {
				args.push(delay.params[j]);
			}
			openFront.apply(delay.layer, args);
			UI.mDelayLayerTable.splice(i, 1);
			return true;
		}
	}
    UI.mCurrDelayLayer = null;
    return false;
}
//----------------------------------------------------------------------
///<jscompress sourcefile="audio_tplt.js" />
audio_tplt={    // 音频表,字段说明,例.1001:音频id,type:音频类型(1.背景音乐,2.音效),file:音频文件
1001:{type:1,file:"background.mp3"},
1002:{type:1,file:"background.mp3"},
1003:{type:1,file:"background.mp3"},
1004:{type:1,file:"background.mp3"},

1999:{type:1,file:"background.mp3"},

2001:{type:2,file:"se_ui_click.mp3"},
2002:{type:2,file:"se_ui_coin.mp3"},
2003:{type:2,file:"se_ui_level_clear.mp3"},
2004:{type:2,file:"se_ui_level_up.mp3"},
2005:{type:2,file:"se_ui_bonus_1.mp3"},
2006:{type:2,file:"se_ui_bonus_2_1.mp3"},
2007:{type:2,file:"se_ui_bonus_2_2.mp3"},
2008:{type:2,file:"se_ui_bonus_2_3.mp3"},
2009:{type:2,file:"se_ui_bonus_2_4.mp3"},

3001:{type:2,file:"se_element_change.mp3"},
3002:{type:2,file:"se_element_clear.mp3"},
3003:{type:2,file:"se_element_drop.mp3"},
3004:{type:2,file:"se_element_fix.mp3"},
3005:{type:2,file:"se_element_match.mp3"},

3007:{type:2,file:"se_wild.mp3"},
3008:{type:2,file:"se_skill_cast.mp3"},
3009:{type:2,file:"se_skill_rainbow.mp3"},
3010:{type:2,file:"se_skill_ray.mp3"},
3011:{type:2,file:"se_skill_swop.mp3"},
3012:{type:2,file:"se_skill_walk.mp3"},

4001:{type:2,file:"Connect_1.mp3"},
4002:{type:2,file:"Connect_2.mp3"},
4003:{type:2,file:"Connect_3.mp3"},
4004:{type:2,file:"Connect_4.mp3"},
4005:{type:2,file:"Connect_5.mp3"},
4006:{type:2,file:"Connect_6.mp3"},
4007:{type:2,file:"Connect_6.mp3"},
4008:{type:2,file:"Connect_6.mp3"},
4009:{type:2,file:"Connect_6.mp3"},
4010:{type:2,file:"Connect_6.mp3"},
4011:{type:2,file:"Connect_6.mp3"},
4012:{type:2,file:"Connect_6.mp3"},
4013:{type:2,file:"Connect_6.mp3"},
4014:{type:2,file:"Connect_6.mp3"},
4015:{type:2,file:"Connect_6.mp3"}
};
///<jscompress sourcefile="core_data_tplt_list.js" />
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
///<jscompress sourcefile="core_map_config.js" />
core_map_config={   // 核心配置(不可修改)
background:"",
grid:{
1:{1:[2001,0,0,0,0],2:[2001,0,0,0,0],3:[2001,0,0,0,0],4:[2001,0,0,0,0],5:[2001,0,0,0,0],6:[2001,0,0,0,0]},
2:{1:[1001,0,0,0,0],2:[1001,0,0,0,0],3:[1001,0,0,0,0],4:[1001,0,0,0,0],5:[1001,0,0,0,0],6:[1001,0,0,0,0]},
3:{1:[1001,0,0,0,0],2:[1001,0,0,0,0],3:[1001,0,0,0,0],4:[1001,0,0,0,0],5:[1001,0,0,0,0],6:[1001,0,0,0,0]},
4:{1:[1001,0,0,0,0],2:[1001,0,0,0,0],3:[1001,0,0,0,0],4:[1001,0,0,0,0],5:[1001,0,0,0,0],6:[1001,0,0,0,0]},
5:{1:[1001,0,0,0,0],2:[1001,0,0,0,0],3:[1001,0,0,0,0],4:[1001,0,0,0,0],5:[1001,0,0,0,0],6:[1001,0,0,0,0]},
6:{1:[1001,0,0,0,0],2:[1001,0,0,0,0],3:[1001,0,0,0,0],4:[1001,0,0,0,0],5:[1001,0,0,0,0],6:[1001,0,0,0,0]}
},
board:{
1:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]},
2:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]},
3:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]},
4:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]},
5:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]},
6:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0]}
},
boundary:{
1:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
2:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
3:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
4:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
5:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
6:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},
7:{1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]}
},
effect:{
1:{1:0,2:0,3:0,4:0,5:0,6:0},
2:{1:0,2:0,3:0,4:0,5:0,6:0},
3:{1:0,2:0,3:0,4:0,5:0,6:0},
4:{1:0,2:0,3:0,4:0,5:0,6:0},
5:{1:0,2:0,3:0,4:0,5:0,6:0},
6:{1:0,2:0,3:0,4:0,5:0,6:0}
},
line:{
}
};
///<jscompress sourcefile="drop_tplt.js" />
drop_tplt=[	// 掉落表,N x 6
[20106,20107,20107,20107,20107,20101],
[20103,20105,20107,20107,20101,20107],
[20107,20107,20106,20101,20103,20107],
[20106,20107,20106,20107,20106,20107],
[20105,20106,20106,20101,20107,20102],
[20106,20107,20104,20103,20107,20107],
[20105,20103,20107,20104,20103,20106],
[20106,20106,20104,20104,20101,20105],
[20106,20106,20104,20105,20107,20107],
[20107,20104,20107,20105,20104,20106],
[20106,20103,20105,20106,20106,20107],
[20106,20102,20101,20106,20106,20103],
[20104,20107,20107,20102,20102,20106],
[20105,20104,20103,20106,20103,20104],
[20107,20103,20106,20106,20103,20104],
[20101,20107,20101,20106,20107,20102],
[20105,20104,20101,20105,20106,20106],
[20103,20105,20105,20104,20103,20105],
[20105,20106,20105,20104,20102,20107],
[20107,20107,20107,20107,20107,20101],
[20107,20107,20107,20106,20106,20107],
[20101,20107,20103,20106,20106,20107],
[20102,20103,20107,20107,20103,20104],
[20104,20107,20107,20105,20101,20104],
[20104,20107,20101,20104,20106,20106],
[20104,20101,20107,20107,20106,20104],
[20103,20101,20103,20105,20107,20101],
[20107,20104,20107,20107,20107,20106],
[20105,20107,20106,20103,20106,20101],
[20106,20103,20105,20106,20105,20107],
[20104,20106,20106,20105,20107,20107],
[20103,20105,20106,20107,20107,20106],
[20104,20104,20104,20106,20104,20104],
[20107,20106,20105,20103,20106,20104],
[20102,20107,20107,20104,20105,20104],
[20102,20103,20104,20104,20106,20102],
[20106,20102,20104,20107,20101,20107],
[20106,20102,20107,20104,20103,20102],
[20107,20107,20105,20102,20107,20105],
[20107,20101,20103,20106,20103,20104],
[20107,20103,20106,20107,20107,20105],
[20104,20105,20102,20104,20107,20104],
[20104,20105,20102,20107,20105,20101],
[20107,20107,20107,20107,20107,20106],
[20107,20103,20103,20106,20106,20107],
[20101,20106,20104,20106,20105,20105],
[20107,20101,20106,20105,20101,20105],
[20104,20104,20107,20105,20106,20107],
[20107,20106,20102,20102,20106,20107],
[20104,20106,20107,20106,20104,20104],
[20101,20107,20107,20107,20104,20107],
[20106,20107,20106,20104,20105,20104],
[20107,20106,20106,20104,20101,20106],
[20101,20102,20102,20103,20106,20106],
[20107,20104,20105,20103,20105,20105],
[20103,20104,20101,20107,20102,20106],
[20106,20107,20103,20106,20107,20107],
[20107,20106,20104,20103,20104,20107],
[20104,20107,20103,20106,20105,20104],
[20105,20106,20106,20105,20107,20102],
[20107,20105,20107,20107,20106,20101],
[20107,20107,20102,20107,20105,20107],
[20104,20107,20107,20101,20104,20103],
[20103,20105,20103,20106,20105,20107],
[20107,20107,20106,20102,20104,20106],
[20107,20107,20106,20102,20104,20101],
[20104,20106,20102,20107,20103,20107],
[20105,20104,20106,20105,20105,20107],
[20107,20106,20105,20105,20103,20101],
[20106,20107,20105,20102,20107,20105],
[20106,20104,20107,20102,20106,20103],
[20105,20105,20101,20107,20104,20107],
[20105,20107,20104,20107,20103,20105],
[20105,20101,20103,20102,20105,20107],
[20103,20106,20106,20101,20105,20103],
[20107,20107,20104,20103,20102,20106],
[20103,20106,20104,20107,20104,20105],
[20104,20105,20103,20105,20102,20105],
[20102,20107,20104,20106,20102,20103],
[20107,20106,20106,20104,20103,20105],
[20105,20106,20105,20107,20102,20105],
[20102,20102,20105,20104,20104,20105],
[20106,20104,20106,20103,20106,20106],
[20103,20105,20105,20104,20106,20107],
[20103,20102,20107,20105,20104,20105],
[20104,20105,20107,20106,20104,20107],
[20102,20102,20101,20107,20103,20103],
[20103,20106,20105,20106,20107,20107],
[20102,20102,20106,20101,20104,20104],
[20107,20104,20103,20105,20105,20104],
[20103,20102,20105,20102,20107,20106],
[20102,20104,20106,20103,20105,20103],
[20105,20106,20104,20107,20103,20107],
[20107,20102,20106,20106,20106,20103],
[20106,20104,20106,20106,20103,20107],
[20106,20107,20104,20107,20103,20106],
[20106,20102,20107,20107,20104,20106],
[20105,20102,20102,20103,20105,20106],
[20106,20106,20105,20101,20107,20102],
[20105,20104,20102,20104,20102,20107]
];
///<jscompress sourcefile="effect_tplt.js" />
effect_tplt={   // 效果表,字段说明,例.1001:效果id,type:效果类型,value:相应效果类型的参数数值
1001:{type:11,value:[]},										//随机替换
1002:{type:12,value:[]},										//四向变色
1003:{type:13,value:[]},										//对角变色
3001:{type:31,value:[[1,600],[2,400]]},							//随机百搭
3002:{type:32,value:[[1,600],[2,400]]},							//固定百搭
3003:{type:33,value:[]},										//四角调换
3004:{type:34,value:[]},										//固定符号
3005:{type:35,value:[]},										//随机漫步
3006:{type:36,value:[]},										//彩虹消除
3007:{type:37,value:[[3,500],[5,300],[7,200]]}					//随机消除
};
///<jscompress sourcefile="level_tplt.js" />
level_tplt={    // 关卡表,字段说明,例.1001:关卡id,name:关卡名称,file:关卡背景图片,music:背景音乐id,maps:关卡地图id列表,rate_normal,rate_bonus1,rate_bonus2,rate_bonus3:刷屏倍率,bonus1,bonus3:触发几率,next_id:下一关关卡id
1001:{
    name:"Kingdom 1",
    file:"image_map_bg_001.png",
    music:1001,
    maps:[101,102,103],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3001,0]],
    next_id:1002
},
1002:{
    name:"Kingdom 2",
    file:"image_map_bg_002.png",
    music:1001,
    maps:[201,202,203],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3001,200]],
    next_id:1003
},
1003:{
    name:"Kingdom 3",
    file:"image_map_bg_003.png",
    music:1001,
    maps:[301,302,303],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3003,200]],
    next_id:1004},
1004:{
    name:"Kingdom 4",
    file:"image_map_bg_004.png",
    music:1001,
    maps:[401,402,403],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3004,200]],
    next_id:1005
},
1005:{
    name:"Kingdom 5",
    file:"image_map_bg_005.png",
    music:1001,
    maps:[501,502,503],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3005,200]],
    next_id:1006
},
1006:{
    name:"Kingdom 6",
    file:"image_map_bg_006.png",
    music:1001,
    maps:[601,602,603],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3006,200]],
    next_id:1007
},
1007:{
    name:"Kingdom 7",
    file:"image_map_bg_007.png",
    music:1001,
    maps:[701,702,703],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3007,200]],
    next_id:1008
},
1008:{
    name:"Kingdom 8",
    file:"image_map_bg_004.png",
    music:1001,
    maps:[801,802,803],
    rate_normal:[1,1],
    rate_bonus1:[1,1],
    rate_bonus2:[1,1],
    rate_bonus3:[1,1],
    bonus1:[[1001,300],[1002,300],[1003,400]],
    bonus3:[[3001,33],[3002,0],[3003,33],[3004,33],[3005,33],[3006,33],[3007,33]],
    next_id:1001
}
};
///<jscompress sourcefile="map_tplt.js" />
map_tplt={  // 地图表,字段说明,例.101:地图id,地图配置6 x 6矩阵,10100表示需要点亮
101:[
[0,0,10100,10100,0,0],
[0,10100,10100,10100,0,0],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0],
[0,10100,10100,10100,10100,0]
],
102:[
[0,0,10100,10100,0,0],
[0,10100,0,0,10100,0],
[0,0,0,10100,0,0],
[0,0,10100,0,0,0],
[0,10100,0,0,0,0],
[0,0,10100,10100,10100,0]

],
103:[
[0,0,10100,10100,0,0],
[0,10100,0,0,10100,0],
[10100,0,0,0,0,10100],
[10100,0,0,0,0,10100],
[0,10100,0,0,10100,0],
[0,0,10100,10100,0,0]

],
201:[
[0,10100,10100,10100,10100,0],
[0,10100,0,0,0,10100],
[0,10100,0,0,10100,0],
[0,10100,10100,10100,0,0],
[0,10100,0,0,10100,0],
[0,10100,0,0,0,10100]

],
202:[
[0,10100,0,0,10100,0],
[0,10100,0,10100,0,0],
[0,10100,10100,0,0,0],
[0,10100,10100,0,0,0],
[0,10100,0,10100,0,0],
[0,10100,0,0,10100,0]

],
203:[
[0,10100,10100,10100,10100,0],
[0,10100,0,0,0,0],
[0,10100,0,0,0,0],
[0,10100,10100,10100,10100,0],
[0,10100,0,0,0,0],
[0,10100,0,0,0,0]

],
301:[
[10100,0,10100,10100,0,10100],
[10100,10100,10100,10100,10100,10100],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[10100,10100,10100,10100,10100,10100],
[10100,0,10100,10100,0,10100]

],
302:[
[10100,0,10100,10100,0,10100],
[0,10100,10100,10100,10100,0],
[10100,10100,0,0,10100,10100],
[0,10100,10100,10100,10100,0],
[0,0,10100,10100,0,0],
[10100,10100,0,0,10100,10100]

],
303:[
[10100,0,0,0,0,10100],
[10100,10100,10100,10100,10100,10100],
[10100,10100,0,0,10100,10100],
[10100,10100,0,0,10100,10100],
[10100,10100,10100,10100,10100,10100],
[10100,0,0,0,0,10100]

],
401:[
[0,10100,0,0,10100,0],
[10100,0,10100,10100,0,10100],
[10100,0,0,0,0,10100],
[0,10100,0,0,10100,0],
[0,0,10100,10100,0,0],
[10100,10100,0,0,10100,10100]

],
402:[
[10100,0,10100,0,10100,0],
[0,10100,0,10100,0,10100],
[10100,0,10100,0,10100,0],
[0,10100,0,10100,0,10100],
[10100,0,10100,0,10100,0],
[0,10100,0,10100,0,10100]

],
403:[
[10100,10100,10100,10100,10100,10100],
[10100,10100,10100,10100,10100,0],
[10100,10100,10100,10100,0,0],
[10100,10100,10100,0,0,10100],
[10100,10100,0,0,10100,10100],
[10100,0,0,10100,10100,10100]

],
501:[
[0,0,10100,10100,0,0],
[10100,10100,10100,10100,10100,10100],
[10100,0,10100,10100,0,10100],
[10100,10100,10100,10100,10100,10100],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0]

],
502:[
[10100,10100,10100,10100,10100,10100],
[0,0,10100,10100,0,0],
[10100,10100,10100,10100,10100,10100],
[10100,0,10100,10100,0,10100],
[10100,0,0,0,0,10100],
[10100,10100,10100,10100,10100,10100]

],
503:[
[10100,0,0,10100,10100,10100],
[10100,0,0,10100,0,0],
[10100,10100,10100,10100,0,0],
[0,0,10100,10100,10100,10100],
[0,0,10100,0,0,10100],
[10100,10100,10100,0,0,10100]

],
601:[
[10100,0,10100,10100,0,10100],
[0,10100,0,0,10100,0],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[0,10100,0,0,10100,0],
[10100,0,10100,10100,0,10100]
],
602:[
[10100,0,0,0,0,10100],
[10100,10100,0,0,10100,10100],
[10100,10100,10100,10100,10100,10100],
[10100,10100,10100,10100,10100,10100],
[10100,10100,0,0,10100,10100],
[10100,0,0,0,0,10100]

],
603:[
[0,0,10100,10100,0,0],
[0,10100,10100,10100,10100,0],
[0,0,10100,10100,0,0],
[10100,10100,10100,10100,10100,10100],
[0,0,10100,10100,0,0],
[0,10100,10100,10100,10100,0]

],
701:[
[0,0,10100,10100,0,0],
[0,10100,10100,10100,10100,0],
[10100,0,10100,10100,0,10100],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0]

],
702:[
[10100,10100,10100,10100,10100,10100],
[10100,0,0,0,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,0,0,0,10100],
[10100,10100,10100,10100,10100,10100]

],
703:[
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0],
[10100,10100,10100,10100,10100,10100],
[10100,10100,10100,10100,10100,10100],
[0,0,10100,10100,0,0],
[0,0,10100,10100,0,0]

],
801:[
[10100,0,0,0,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,0,0,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,0,0,0,10100],
[10100,0,10100,10100,0,10100]

],
802:[
[10100,10100,10100,10100,10100,10100],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[10100,0,10100,10100,0,10100],
[10100,10100,10100,10100,10100,10100]

],
803:[
[10100,0,10100,10100,0,10100],
[0,10100,10100,10100,10100,0],
[10100,10100,10100,10100,10100,10100],
[10100,10100,10100,10100,10100,10100],
[0,10100,10100,10100,10100,0],
[10100,0,10100,10100,0,10100]


]
};
///<jscompress sourcefile="AudioModel.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	audio Model
 ***********************************************************************/
AudioModel = {
	mIsMusicEnabled: true,		// 音乐是否开启
	mIsSoundEnabled: true,		// 音效是否开启
	mCurrMusicURL: ""			// 当前播放音乐
};

// 初始化
AudioModel.init = function() {
    // 音乐
    var musicOn = laya.net.LocalStorage.getItem("MusicOn");
    if ('string' == typeof(musicOn) && musicOn.length > 0) {
        musicOn = parseInt(musicOn) ? true : false;
    } else {
        musicOn = true;
    }
    this.setMusicEnabled(musicOn);
    // 音效
    var soundOn = laya.net.LocalStorage.getItem("SoundOn");
    if ('string' == typeof(soundOn) && soundOn.length > 0) {
        soundOn = parseInt(soundOn) ? true : false;
    } else {
        soundOn = true;
    }
	this.setSoundEnabled(soundOn);
};

// 暂停音频
AudioModel.pause = function() {
	laya.media.SoundManager.stopMusic();
	laya.media.SoundManager.stopAll();
};

// 恢复音频
AudioModel.resume = function() {
	if (this.mIsMusicEnabled) {
		if (this.mCurrMusicURL.length > 0) {
			laya.media.SoundManager.playMusic(this.mCurrMusicURL);
		}
	}
};

// 设置音乐音量
AudioModel.setMusicVolume = function(volume) {
	laya.media.SoundManager.setMusicVolume(volume);
};

// 设置音效音量
AudioModel.setSoundVolume = function(volume) {
	laya.media.SoundManager.setSoundVolume(volume);
};

// 获取音乐音量
AudioModel.getMusicVolume = function() {
	return laya.media.SoundManager.musicVolume;
};

// 获取音效音量
AudioModel.getSoundVolume = function() {
	return laya.media.SoundManager.soundVolume;
};

// 设置音乐开启
AudioModel.setMusicEnabled = function(enabled) {
	if (enabled) {
		if (this.mCurrMusicURL.length > 0) {
			laya.media.SoundManager.playMusic(this.mCurrMusicURL);
		}
	} else {
		laya.media.SoundManager.stopMusic();
	}
	this.mIsMusicEnabled = enabled ? true : false;
	laya.net.LocalStorage.setItem("MusicOn", this.mIsMusicEnabled ? "1" : "0");
};

// 设置音效开启
AudioModel.setSoundEnabled = function(enabled) {
	if (!enabled) {
		laya.media.SoundManager.stopSound();
	}
	this.mIsSoundEnabled = enabled ? true : false;
	laya.net.LocalStorage.setItem("SoundOn", this.mIsSoundEnabled ? "1" : "0");
};

// 音乐是否开启
AudioModel.isMusicEnabled = function() {
	return this.mIsMusicEnabled;
};

// 音效是否开启
AudioModel.isSoundEnabled = function() {
	return this.mIsSoundEnabled;
};

// 播放音乐
AudioModel.playMusic = function(musicId) {
	this.stopMusic();
	if (this.mIsMusicEnabled) {
		var musicData = DataTB.get("audio_tplt", musicId, false);
		if (musicData) {
			this.mCurrMusicURL = ResURL(musicData.file)
			laya.media.SoundManager.playMusic(this.mCurrMusicURL);
		}
	}
};

// 停止音乐
AudioModel.stopMusic = function() {
	laya.media.SoundManager.stopMusic();
};

// 播放音效
AudioModel.playSound = function(effectId) {
	if (this.mIsSoundEnabled) {
		var soundData = DataTB.get("audio_tplt", effectId, false);
		if (soundData) {
			laya.media.SoundManager.playSound(ResURL(soundData.file));
		}
	}
};

///<jscompress sourcefile="DataModel.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-13
 ** Brief:	数据模型
 ***********************************************************************/
DataModel = {};
//----------------------------------------------------------------------
// 获取掉落数据
DataModel.getDropData = function() {
	return drop_tplt;
};
//----------------------------------------------------------------------
// 获取bonus1的效果
DataModel.getBonus1Effect = function(levelIdOrData) {
	var levelData = null;
	if ('number' == typeof(levelIdOrData) && levelIdOrData > 0) {
		levelData = DataTB.get("level_tplt", levelIdOrData, true);
	} else if (levelIdOrData && 'object' == typeof(levelIdOrData) && !(levelIdOrData instanceof Array)) {
		levelData = levelIdOrData;
	} else {
		return;
	}
	var effectProbability = CreateProbability(levelData.bonus1);	// 把百分比转为权重计算方法
	var effectTotalWeight = effectProbability.getTotalWeight();
	if (1000 != effectTotalWeight) {	// 由于百分比(10表示1%),所以1000表示百分百,这里必须确保所有效果id的概率相加为百分百(必须有一个效果命中)
		throw new Error("关卡[" + levelData.name +"]中的bonus1配置出错,概率相加不等于百分百");
	}
	var effectId = effectProbability.getValue();	// 效果id
	if (0 == effectId) {
		return;
	}
	var effectData = DataTB.get("effect_tplt", effectId, true);
	var valueProbability = CreateProbability(effectData.value);
	var valueTotalWeight = valueProbability.getTotalWeight();
	if (valueTotalWeight > 0 && 1000 != valueTotalWeight) {
		throw new Error("特效表[" + effectId +"]中的概率相加不等于百分百");
	}
	var data = {
		type: effectData.type,						// 效果类型
		value: valueProbability.getValue()			// 效果值
	}
	return data;
};
//----------------------------------------------------------------------
// 获取bonus3的效果
DataModel.getBonus3Effect = function(levelIdOrData) {
	var levelData = null;
	if ('number' == typeof(levelIdOrData) && levelIdOrData > 0) {
		levelData = DataTB.get("level_tplt", levelIdOrData, true);
	} else if (levelIdOrData && 'object' == typeof(levelIdOrData) && !(levelIdOrData instanceof Array)) {
		levelData = levelIdOrData;
	} else {
		return;
	}
	var effectProbability = CreateProbability(levelData.bonus3);	// 把百分比转为权重计算方法
	var effectTotalWeight = effectProbability.getTotalWeight();
	if (effectTotalWeight < 0 || effectTotalWeight > 1000) {	// 由于百分比(10表示1%),所以1000表示百分百,这里必须确保所有效果id的概率相加为<百分百(有概率命中)
		throw new Error("关卡[" + levelData.name +"]中的bonus3配置出错,概率相加出错");
	}
	effectProbability.setWeight(0, 1000 - effectTotalWeight);
	var effectId = effectProbability.getValue();	// 效果id
	if (0 == effectId) {
		return;
	}
	var effectData = DataTB.get("effect_tplt", effectId, true);
	var valueProbability = CreateProbability(effectData.value);
	var valueTotalWeight = valueProbability.getTotalWeight();
	if (valueTotalWeight > 0 && 1000 != valueTotalWeight) {
		throw new Error("特效表[" + effectId +"]中的概率相加不等于百分百");
	}
	var data = {
		type: effectData.type,						// 效果类型
		value: valueProbability.getValue()			// 效果值
	}
	return data;
};
//----------------------------------------------------------------------
// 计算奖励数据,screenTimes:刷屏次数
DataModel.calcAwardData = function(levelId, gameSection, screenTimes, objectId, count) {
	var levelData = DataTB.get("level_tplt", levelId, true);
    var rateList = [];
    if (game_section["normal"] == gameSection) {              // 常规刷屏
        rateList = levelData.rate_normal;
    } else if (game_section["bonus1"] == gameSection) {       // bonus1刷屏
        rateList = levelData.rate_bonus1;
    } else if (game_section["bonus2"] == gameSection) {       // bonus2刷屏
        rateList = levelData.rate_bonus2;
    } else if (game_section["bonus3"] == gameSection) {       // bonus3刷屏
        rateList = levelData.rate_bonus3;
    } else {
        rateList = levelData.rate_normal;
    }
    screenTimes = (screenTimes >= rateList.length) ? rateList.length - 1 : screenTimes;
    var rate = rateList[screenTimes];   // 刷屏倍率
    var elementData = DataTB.get("map_element_tplt", objectId, true);
    var price = G.ELEMENT_PRICE[objectId];  // 元素单价
    var value = price * count * rate;   // 元素价值=元素单价*数量*刷屏倍率
    var data = {
        count: count,                   // 元素数量
        image: elementData.file,        // 元素图片
        value: value                    // 元素价值
    };
	return data;
};
//----------------------------------------------------------------------
///<jscompress sourcefile="DataTB.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-13
 ** Brief:	数据表
 ***********************************************************************/
DataTB = {mTpltList:{}};
//----------------------------------------------------------------------
// 拷贝数据
DataTB.copydata = function(data) {
	function innerFunc(data) {
        if (undefined == data || null == data || 'object' != typeof(data) || data instanceof HTMLElement) {
            return data;
        }
        var newObj = data.constructor ? new data.constructor : {};
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                newObj[key] = innerFunc(data[key]);
            } else {
                newObj[key] = innerFunc(data[key]);
            }
        }
        return newObj;
	}
	return innerFunc(data);
};
//----------------------------------------------------------------------
// 初始化
DataTB.init = function(tpltList) {
	if (!(tpltList && !(tpltList instanceof Array) && 'object' == typeof(tpltList))) {
		throw new Error("can't support tpltList type " + typeof(tpltList));
	}
	this.mTpltList = {};
	for (var key in tpltList) {
		if (tpltList.hasOwnProperty(key)) {
			this.mTpltList[key] = this.copydata(tpltList[key]);
		}
	}
};
//----------------------------------------------------------------------
// 重载数据文件
DataTB.reload = function(fileName, tplt) {
	if ('string' != typeof(fileName)) {
		throw new Error("can't support for fileName type " + typeof(fileName));
	}
	if ("_tplt" != fileName.substring(fileName.length - 5)) {
		throw new Error("data table '" + fileName + "' name format is error");
	}
	this.mTpltList[fileName] = this.copydata(tplt);
};
//----------------------------------------------------------------------
// 获取单条数据
DataTB.get = function(fileName, key, mustExist, isRef) {
	if ('string' != typeof(fileName)) {
		throw new Error("can't support for fileName type " + typeof(fileName));
	}
	if ("_tplt" != fileName.substring(fileName.length - 5)) {
		throw new Error("data table '" + fileName + "' name format is error");
	}
	var dataMap = this.mTpltList[fileName];
    if (undefined == dataMap || null == dataMap) {
        throw new Error("dosen't exist data table '" + fileName + "'");
    }
	if ('string' != typeof(key) && 'number' != typeof(key)) {
		throw new Error("can't not support for key type " + typeof(key));
	}
    var row = dataMap[key];
    if (undefined == row || null == row) {
        if (mustExist) {
            throw new Error("can't find key '" + key + "' in data table '" + fileName + "'");
        }
        return;
    }
    return isRef ? row : this.copydata(row);
};
//----------------------------------------------------------------------
// 按条件获取数据
DataTB.filter = function(fileName, filterFunc, isList, isRef) {
	if ('string' != typeof(fileName)) {
		throw new Error("can't support for fileName type " + typeof(fileName));
	}
	if ("_tplt" != fileName.substring(fileName.length - 5)) {
		throw new Error("data table '" + fileName + "' name format is error");
	}
	var dataMap = this.mTpltList[fileName];
    if (undefined == dataMap || null == dataMap) {
		throw new Error("dosen't exist data table '" + fileName + "'");
    }
    var dataList = [];
    if ('function' == typeof(filterFunc)) {
        for (var key in dataMap) {
            if (dataMap.hasOwnProperty(key) && filterFunc(dataMap[key])) {
				if (isList) {
					dataList.push(dataMap[key]);
				} else {
					return isRef ? dataMap[key] : this.copydata(dataMap[key]);
				}
            }
        }
    }
	if (isList) {
		return isRef ? dataList : this.copydata(dataList);
	}
    return null;
};
//----------------------------------------------------------------------
// 获取所有数据
DataTB.getAll = function(fileName, isRef) {
	if ('string' != typeof(fileName)) {
		throw new Error("can't support for fileName type " + typeof(fileName));
	}
	if ("_tplt" != fileName.substring(fileName.length - 5)) {
		throw new Error("data table '" + fileName + "' name format is error");
	}
	var dataMap = this.mTpltList[fileName];
    if (undefined == dataMap || null == dataMap) {
		throw new Error("dosen't exist data table '" + fileName + "'");
    }
	var dataList = [];
	for (var key in dataMap) {
		if (dataMap.hasOwnProperty(key)) {
			dataList.push(dataMap[key]);
		}
	}
    return isRef ? dataList : this.copydata(dataList);
};
//----------------------------------------------------------------------
///<jscompress sourcefile="EnumDef.js" />
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
///<jscompress sourcefile="EventDef.js" />
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
///<jscompress sourcefile="Board.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	隔板
 ***********************************************************************/
Board = Class.extend({
	//----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
		this.mRow = 0;						// 行索引值
		this.mCol = 0;						// 列索引值
		this.mId = 0;						// 隔板id
		this.mDirect = 0;					// 隔板方向
		if (ifCreateNode) {
            this.mNode = new laya.ui.Image();
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
        }
	},
	//----------------------------------------------------------------------
	// 析构函数(手动调用)
	dtor: function() {
        if (this.mNode && !this.mNode.destroyed) {
            this.mNode.removeSelf();
            this.mNode.destroy();
            delete this.mNode;
        }
    },
	//----------------------------------------------------------------------
	// 获取坐标
	getCoord: function() {
		return {row:this.mRow, col:this.mCol};
	},
	//----------------------------------------------------------------------
	// 设置坐标
	setCoord: function(row, col) {
		this.mRow = row;
		this.mCol = col;
	},
    //----------------------------------------------------------------------
    // 获取id
    getId: function() {
        return this.mId;
    },
    //----------------------------------------------------------------------
    // 设置id
    setId: function(id) {
        this.mId = id;
    },
	//----------------------------------------------------------------------
	// 设置方向
	getDirect: function() {
		return this.mDirect;
	},
	//----------------------------------------------------------------------
	// 获取方向
	setDirect: function(direct) {
		this.mDirect = direct;
	},
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        if (this.mNode && !this.mNode.destroyed) {
            return this.mNode;
        }
        return null;
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="Component.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	组件
 ***********************************************************************/
Component = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数(当子类重定义时,需显示调用父类析构函数)
	ctor: function(name) {
        if ('string' != typeof(name)) {
            throw new Error("not support for name type " + typeof(name));
        }
        this.is_component_type = true;      // 组件类型标示符
        this.mName = name;                  // 组件名
        this.mMaster = null;                // 宿主对象
        this.mChildrenInfoList = [];        // 子组件信息表
        this.mSiblingMap = {};              // 同级组件表
        this.mEventHandlerMap = {};         // 事件句柄表
        this.mTouchEnabled = true;          // 触摸启用
        this.mTouchSwallow = false;         // 触摸吞没
	},
    //----------------------------------------------------------------------
	// 析构函数(当子类重定义时,需显示调用父类析构函数)
	dtor: function() {
		this.mMaster = null;
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.dtor();
        }
		this.mChildrenInfoList = [];
		this.mSiblingMap = {};
		for (var eventId in this.mEventHandlerMap) {
            if (this.mEventHandlerMap.hasOwnProperty(eventId)) {
                EventCenter.unbind(eventId, this.mEventHandlerMap[eventId]);
            }
		}
		this.mEventHandlerMap = {};
        this.mTouchEnabled = true;
        this.mTouchSwallow = false;
	},
    //----------------------------------------------------------------------
    // 获取名称
    getName: function() {
        return this.mName;
    },
    //----------------------------------------------------------------------
	// 获取宿主
	getMaster: function() {
		return this.mMaster;
	},
    //----------------------------------------------------------------------
    // 添加子组件,priority:值越低,优先级越高
    addComponent: function(com, priority) {
        if (!com.is_component_type) {
            throw new Error("com must be componet type");
        }
        if (com == this) {
            throw new Error("can't add self to be child");
        }
        if (com.mMaster) {
            throw new Error("com has been added");
        }
        if (com == this.mMaster) {
            throw new Error("can't add master to be child");
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            if (com == this.mChildrenInfoList[i].com) {
                throw new Error("com has been added");
            }
            this.mChildrenInfoList[i].com.addSibling(com);
        }
        com.mMaster = this;
        var childInfo = {
            name: com.getName(),                                            // 组件名
            com: com,                                                       // 组件
            priority: priority ? priority : this.mChildrenInfoList.length   // 优先级
        };
        this.mChildrenInfoList.push(childInfo);
        this.mChildrenInfoList.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return com;
    },
    //----------------------------------------------------------------------
    // 移除子组件
    removeComponent: function(name) {
        for (var i = 0; i < this.mChildrenInfoList.length; ++i) {
            if (name == this.mChildrenInfoList[i].name) {
                this.mChildrenInfoList[i].com.mMaster = null;
                this.mChildrenInfoList.splice(i, 1);
            }
            this.mChildrenInfoList[i].com.removeSibling(name);
        }
    },
    //----------------------------------------------------------------------
    //获取子组件
    getComponent: function(name) {
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            if (name == this.mChildrenInfoList[i].name) {
                return this.mChildrenInfoList[i].com;
            }
        }
    },
    //----------------------------------------------------------------------
    // 添加同级组件
    addSibling: function(com) {
        if (!com.is_component_type) {
            throw new Error("com must be componet type");
        }
        var comName = com.getName();
        if (this.mSiblingMap[comName]) {
            return;
        }
        this.mSiblingMap[comName] = com;
        com.addSibling(this);
    },
    //----------------------------------------------------------------------
    // 移除同级组件
    removeSibling: function(name) {
        var sibling = this.mSiblingMap[name];
        if (!sibling) {
            return;
        }
        delete this.mSiblingMap[name];
        sibling.removeSibling(this.mName);
    },
    //----------------------------------------------------------------------
    // 获取同级组件
    getSibling: function(name) {
        var sibling = this.mSiblingMap[name];
        if (sibling) {
            return sibling;
        }
        if (!this.mMaster){
            return null;
        }
        return this.mMaster.getComponent(name);
    },
    //----------------------------------------------------------------------
    // 注册事件函数
    bind: function(eventId, handler, priority) {
        if (this.mEventHandlerMap[eventId]) {
            throw new Error("can't register same event " + eventId);
        }
        this.mEventHandlerMap[eventId] = handler;
        EventCenter.bind(eventId, this.mEventHandlerMap[eventId], this, priority);
    },
    //----------------------------------------------------------------------
    // 设置触摸启用
    setTouchEnabled: function(enabled) {
        this.mTouchEnabled = enabled;
    },
    //----------------------------------------------------------------------
    // 触摸是否启用
    isTouchEnabled: function() {
        return this.mTouchEnabled;
    },
    //----------------------------------------------------------------------
    // 设置触摸吞没
    setTouchSwallow: function(swallow) {
        this.mTouchSwallow = swallow;
    },
    //----------------------------------------------------------------------
    // 触摸是否吞没
    isTouchSwallow: function() {
        return this.mTouchSwallow;
    },
    //----------------------------------------------------------------------
	// 触摸开始
	onTouchBegan: function(touch, event) {
		if (!this.mTouchEnabled) {
			return;
		}
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchBegan.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸移动
	onTouchMoved: function(touch, event) {
		if (!this.mTouchEnabled) {
			return;
		}
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchMoved.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸结束
	onTouchEnded: function(touch, event) {
        if (!this.mTouchEnabled) {
            return;
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchEnded.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
	// 触摸取消
	onTouchCancelled: function(touch, event) {
        if (!this.mTouchEnabled) {
            return;
        }
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onTouchCancelled.apply(this.mChildrenInfoList[i].com, arguments);
            if (this.mChildrenInfoList[i].com.isTouchSwallow()) {
                return;
            }
        }
	},
    //----------------------------------------------------------------------
    // 每帧更新
    onUpdate: function(dt) {
        for (var i = 0, len = this.mChildrenInfoList.length; i < len; ++i) {
            this.mChildrenInfoList[i].com.onUpdate(dt);
        }
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ComponentMap.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	地图控制器
 ***********************************************************************/
ComponentMap = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ComponentMap");
        this.mMapBackground = null;         // 地图背景
        this.mMapGrid = {};                 // 地图格子
        this.mMapBoard = {};                // 地图隔板
        this.mMapBoundary = {};             // 地图边框
        this.mMapElement = {};              // 地图元素
		this.mIfShowDisplay = true;			// 是否显示表现
    },
    //----------------------------------------------------------------------
    // 初始化函数
    init: function(mapCfg, ifShowDisplay) {
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            this.mMapGrid[row] = {};
            this.mMapBoard[row] = {};
            this.mMapElement[row] = {};
            for (var col = 1; col <= rc.col; ++col) {
                this.mMapGrid[row][col] = this.createGrid(row, col);
                this.mMapBoard[row][col] = {};
                this.mMapElement[row][col] = {};
            }
        }
        for (var r = 1; r <= rc.row + 1; ++r) {
            this.mMapBoundary[row] = {};
            for (var c = 1; c <= rc.col + 1; ++c) {
                this.mMapBoundary[row][col] = {};
            }
        }
        // 解析地图
        if (mapCfg && 'object' == typeof(mapCfg) && !(mapCfg instanceof Array)) {
            this.setMapBackground(mapCfg.background);
            this.parseMapGrid(mapCfg.grid, mapCfg.line);
            this.parseMapBoard(mapCfg.board);
            this.parseMapBoundary(mapCfg.boundary);
        }
		this.mIfShowDisplay = ifShowDisplay;
    },
    //----------------------------------------------------------------------
    // 获取指定行的中心点
    getRowPos: function(row) {
        var rc = this.getMaster().getRowCol();
        var startPos = this.getMaster().getPos(row, 1);
        var endPos = this.getMaster().getPos(row, rc.col);
        return {x:startPos.x + (endPos.x - startPos.x)/2, y:startPos.y};
    },
    //----------------------------------------------------------------------
    // 获取指定列的中心点
    getColPos: function(col) {
        var rc = this.getMaster().getRowCol();
        var startPos = this.getMaster().getPos(1, col);
        var endPos = this.getMaster().getPos(rc.row, col);
        return {x:startPos.x, y:endPos.y + (startPos.y - endPos.y)/2};
    },
    //----------------------------------------------------------------------
    // 设置地图背景
    setMapBackground: function(fileName) {
		if (!this.mIfShowDisplay) {
			return;
		}
        if ('string' == typeof(fileName) && fileName.length > 0) {
            if (!this.mMapBackground || this.mMapBackground.destroyed) {
                this.mMapBackground = new laya.ui.Image();
				this.mMapBackground.anchorX = 0.5;
				this.mMapBackground.anchorY = 0.5;
                this.mMapBackground.pos(Laya.stage.width/2, Laya.stage.height/2);
				this.mMapBackground.zOrder = 0;
                this.getMaster().getBackgroundLayer().addChild(this.mMapBackground);
            }
            this.mMapBackground.skin = ResURL(fileName);
            this.mMapBackground.file = fileName;
        } else if (this.mMapBackground && !this.mMapBackground.destroyed) {
            this.mMapBackground.removeSelf();
			this.mMapBackground.destroy();
            delete this.mMapBackground;
        }
    },
    //----------------------------------------------------------------------
    // 获取地图背景
    getMapBackground: function() {
        return this.mMapBackground;
    },
    //----------------------------------------------------------------------
    // 解析地图格子
    parseMapGrid: function(gridMap, lineList) {
        if (!(gridMap && 'object' == typeof(gridMap) && !(gridMap instanceof Array))) {
            return;
        }
        for (var row in gridMap) {
            if (gridMap.hasOwnProperty(row)) {
                for (var col in gridMap[row]) {
                    if (gridMap[row].hasOwnProperty(col)) {
                        var gridId = gridMap[row][col][0];      // 格子id
                        var elementIdList = [
                            gridMap[row][col][1],               // 地表元素id
                            gridMap[row][col][2],               // 物件元素id
                            gridMap[row][col][3],               // 附件元素id
                            gridMap[row][col][4]                // 覆盖元素id
                        ];
	                    var grid = this.setGridProperty(row, col, lineList, gridId);
	                    // 解析元素
	                    for (var i = 0, len = elementIdList.length; i < len; ++i) {
		                    var element = this.createElement(elementIdList[i]);
		                    if (element) {
			                    element.setPosition(grid.getPosition());
			                    this.addElement(row, col, element);
		                    }
	                    }
                    }
                }
            }
        }
    },
    //----------------------------------------------------------------------
    // 解析地图隔板
    parseMapBoard: function(boardMap) {
        if (!(boardMap && 'object' == typeof(boardMap) && !(boardMap instanceof Array))) {
            return;
        }
	    for (var row in boardMap) {
		    if (boardMap.hasOwnProperty(row)) {
			    for (var col in boardMap[row]) {
				    if (boardMap[row].hasOwnProperty(col)) {
					    var boardIdH = boardMap[row][col][0];     // 横向隔板id
					    var boardIdV = boardMap[row][col][1];     // 竖向隔板id
					    this.addBoard(row, col, boardIdH);
					    this.addBoard(row, col, boardIdV);
				    }
			    }
		    }
	    }
    },
    //----------------------------------------------------------------------
    // 解析地图边框
    parseMapBoundary: function(boundaryMap) {
        if (!(boundaryMap && 'object' == typeof(boundaryMap) && !(boundaryMap instanceof Array))) {
            return;
        }
	    for (var row in boundaryMap) {
		    if (boundaryMap.hasOwnProperty(row)) {
			    for (var col in boundaryMap[row]) {
				    if (boundaryMap[row].hasOwnProperty(col)) {
					    var boundaryIdH = boundaryMap[row][col][0];     // 横向边框id
					    var boundaryIdV = boundaryMap[row][col][1];     // 竖向竖向id
					    this.addBoundary(row, col, boundaryIdH);
					    this.addBoundary(row, col, boundaryIdV);
				    }
			    }
		    }
	    }
    },
    //----------------------------------------------------------------------
    // 创建格子
    createGrid: function(row, col) {
        var pos = this.getMaster().getPos(row, col);
        var grid = new Grid(this.mIfShowDisplay);
        grid.setCoord(row, col);
		if (grid.getNode()) {
			grid.getNode().pos(pos.x, pos.y);
			grid.getNode().zOrder = 2;
			this.getMaster().getBackgroundLayer().addChild(grid.getNode());
		}
        return grid;
    },
	//----------------------------------------------------------------------
	// 设置格子属性
	setGridProperty: function(row, col, lineList, gridId) {
		var grid = this.getGrid(row, col);
		if (isNaN(gridId) || gridId <= 0) {
			return grid;
		}
		var data = DataTB.get("map_grid_tplt", gridId, true, true);
		grid.setId(gridId);
		grid.setName(data.name);
		grid.setType(data.type);
		if (data.file.length > 0) {
			if (grid.getNode()) {
				grid.getNode().skin = ResURL(data.file)
			}
		}
		// 设置传送坐标
		if (CoreDef.GridType.door_in == data.type && lineList instanceof Array && lineList.length > 0) {
			var lineData = null;
			for (var i = 0, len = lineList.length; i < len; ++i) {
				var lineDataTemp = lineList[i];
				var srcCoord = {row:lineDataTemp[0][0], col:lineDataTemp[0][1]};      // 传送入口坐标
				var targetCoord = {row:lineDataTemp[1][0], col:lineDataTemp[1][1]};   // 传送出口坐标
				if (row == srcCoord.row && col == srcCoord.col) {
					if (0 == targetCoord.row || 0 == targetCoord.col) {
						console.log("door in (" + row + ", " + col + ") doesn't point to door out");
					}
					lineData = lineDataTemp;
					break;
				}
			}
			if (lineData) {
				var targetCoord = {row:lineData[1][0], col:lineData[1][1]}; // 传送出口坐标
				grid.setCoordTo(targetCoord.row, targetCoord.col);
			} else {
				console.log("door in (" + row + ", " + col + ") doesn't point to door out");
			}
		}
		return grid;
	},
	//----------------------------------------------------------------------
	// 删除格子
	delGrid: function(row, col) {
		var grid = this.mMapGrid[row][col];
		delete this.mMapGrid[row][col];
		return grid;
	},
    //----------------------------------------------------------------------
    // 获取格子
    getGrid: function(row, col) {
        if (this.mMapGrid[row]) {
            return this.mMapGrid[row][col];
        }
    },
	//----------------------------------------------------------------------
	// 添加隔板
	addBoard: function(row, col, boardId) {
		if (isNaN(boardId) || boardId <= 0) {
			return;
		}
		var data = DataTB.get("map_board_tplt", boardId, true, true);
		if (this.mMapBoard[row][col][data.direct]) {
			throw new Error("coord (" + row + ", " + col + ") [" + data.direct + "] exist board");
		}
		if (data.file.length <= 0) {
			return;
		}
		var board = new Board(this.mIfShowDisplay);
		board.setCoord(row, col);
		board.setId(boardId);
		board.setDirect(data.direct);
		if (board.getNode()) {
			board.getNode().skin = ResURL(data.file);
			var pos = this.getMaster().getPos(row, col);
			if (CoreDef.DirectType.hor == data.direct) {
				board.getNode().pos(pos.down.x, pos.down.y);
			} else if (CoreDef.DirectType.ver == data.direct) {
				board.getNode().pos(pos.right.x, pos.right.y);
			} else {
				throw new Error("can't handle board [" + boardId + "] direct: " + data.direct);
			}
			board.getNode().zOrder = 10;
			this.getMaster().getMapLayer().addChild(board.getNode());
		}
		this.mMapBoard[row][col][data.direct] = board;
		return board;
	},
	//----------------------------------------------------------------------
	// 删除隔板
	delBoard: function(row, col, direct) {
		var board = this.mMapBoard[row][col][direct];
		delete this.mMapBoard[row][col][direct];
		return board;
	},
	//----------------------------------------------------------------------
	// 获取隔板
	getBoard: function(row, col, direct) {
		return this.mMapBoard[row][col][direct];
	},
	//----------------------------------------------------------------------
	// 获取周边隔板
	getAroundBoard: function(row, col) {
		var around = {
			down: this.mMapBoard[row][col][CoreDef.DirectType.hor],
			right: this.mMapBoard[row][col][CoreDef.DirectType.hor]
		};
		if (this.mMapBoard[row - 1]) {
			around.up = this.mMapBoard[row - 1][col][CoreDef.DirectType.hor];
		}
		if (this.mMapBoard[row][col - 1]) {
			around.left = this.mMapBoard[row][col - 1][CoreDef.DirectType.ver];
		}
		return around;
	},
	//----------------------------------------------------------------------
	// 添加边框,row:[1, 行数+1],col:[1, 列数+1]
	addBoundary: function(row, col, boundaryId) {
		if (isNaN(boundaryId) || boundaryId <= 0 || !this.mIfShowDisplay) {
			return;
		}
		var data = DataTB.get("map_boundary_tplt", boundaryId, true, true);
		if (this.mMapBoundary[row][col][data.direct]) {
			throw new Error("coord (" + row + ", " + col + ") [" + data.direct + "] exist boundary");
		}
		var anchorX = 0.5, anchorY = 0.5;
		var x = 0, y = 0;
		var grid = this.getGrid(row, col);
		if (CoreDef.DirectType.hor == data.direct) {
			anchorX = 0.5;
			anchorY = 0;
			if (!grid || CoreDef.GridType.none == grid.getType()) {
				grid = this.getGrid(row - 1, col);
				if (grid) {
					anchorX = 0.5;
					anchorY = 1;
					x = grid.getNode().x;
					y = grid.getNode().y - grid.getNode().height/2
				}
			} else {
				x = grid.getNode().x;
				y = grid.getNode().y + grid.getNode().height/2;
			}
		} else if (CoreDef.DirectType.ver == data.direct) {
			anchorX = 1;
			anchorY = 0.5;
			if (!grid || CoreDef.GridType.none == grid.getType()) {
				grid = this.getGrid(row, col - 1);
				if (grid) {
					anchorX = 0;
					anchorY = 0.5;
					x = grid.getNode().x + grid.getNode().width/2;
					y = grid.getNode().y;
				}
			} else {
				x = grid.getNode().x - grid.getNode().width/2;
				y = grid.getNode().y;
			}
		} else {
			throw new Error("can't handle boundary [" + boundaryId + "] direct: " + data.direct);
		}
		if (data.file.length <= 0) {
			return;
		}
		var boundary = new laya.ui.Image(ResURL(data.file));
		boundary.anchorX = anchorX;
		boundary.anchorY = anchorY;
		boundary.pos(x, y);
		boundary.zOrder = 20;
		this.getMaster().getMapLayer().addChild(boundary);
		this.mMapBoundary[row][col][data.direct] = boundary;
		return boundary;
	},
	//----------------------------------------------------------------------
	// 删除边框,row:[1, 行数+1],col:[1, 列数+1]
	delBoundary: function(row, col, direct) {
		var boundary = this.mMapBoundary[row][col][direct];
		delete this.mMapBoundary[row][col][direct];
		return boundary;
	},
	//----------------------------------------------------------------------
	// 获取边框,row:[1, 行数+1],col:[1, 列数+1]
	getBoundary: function(row, col, direct) {
		return this.mMapBoundary[row][col][direct];
	},
	//----------------------------------------------------------------------
	// 创建元素
	createElement: function(idOrData) {
		var elementId = 0;
		var data = null;
		if ('number' == typeof(idOrData) && idOrData > 0) {
			elementId = idOrData;
			data = DataTB.get("map_element_tplt", idOrData, true, true);
		} else if (idOrData && 'object' == typeof(idOrData) && !(idOrData instanceof Array)) {
			elementId = idOrData.id;
			data = idOrData;
		} else {
			return;
		}
		var element = new Element(this.mIfShowDisplay);
		element.setId(elementId);
		element.setTag(data.tag);
		element.setType(data.type);
		element.setSubType(data.sub_type);
		if (data.file.length > 0) {
			if (element.getNode()) {
				element.getNode().skin = ResURL(data.file);
			}
		}
		element.setCanDrop(data.can_drop);
		if (element.getNode()) {
			var zOrder = CoreDef.ElementTag.surface == data.tag ? 30 : 33;
			element.getNode().zOrder = zOrder + data.tag;
			this.getMaster().getMapLayer().addChild(element.getNode());
		}
		return element;
	},
	//----------------------------------------------------------------------
	// 添加元素
	addElement: function(row, col, element) {
		if (!element) {
			return;
		}
		var tag = element.getTag();
		if (this.mMapElement[row][col][tag]) {
			throw new Error("coord (" + row + ", " + col + ") exist tag: " + tag);
		}
		this.mMapElement[row][col][tag] = element;
	},
	//----------------------------------------------------------------------
	// 删除元素
	delElement: function(row, col, tag) {
		var element = this.mMapElement[row][col][tag];
		delete this.mMapElement[row][col][tag];
		return element;
	},
	//----------------------------------------------------------------------
	// 获取元素
	getElement: function(row, col, tag) {
		return this.mMapElement[row][col][tag];
	},
	//----------------------------------------------------------------------
	// 清空元素列表
	clearElementTb: function(row, col) {
		var elementTb = {};
		for (var tag in this.mMapElement[row][col]) {
			if (this.mMapElement[row][col].hasOwnProperty(tag)) {
				elementTb[tag] = this.mMapElement[row][col][tag];
			}
		}
		this.mMapElement[row][col] = {};
		return elementTb;
	},
	//----------------------------------------------------------------------
	// 获取元素列表
	getElementTb: function(row, col) {
		var elementTb = {};
		for (var tag in this.mMapElement[row][col]) {
			if (this.mMapElement[row][col].hasOwnProperty(tag)) {
				elementTb[tag] = this.mMapElement[row][col][tag];
			}
		}
		return elementTb;
	},
	//----------------------------------------------------------------------
	// 两个坐标是否可联系(受距离,隔板,空格影响)
	isCanContact: function(row1, col1, row2, col2) {
		if (!this.getMaster().isCoordValid(row1, col1) || !this.getMaster().isCoordValid(row2, col2)) {
			return false;
		}
		// 坐标不相邻
		if (Math.abs(row1 - row2) > 1 || Math.abs(col1 - col2) > 1) {
			return false;
		}
		var around1 = this.getAroundBoard(row1, col1);      // 坐标1周围隔板
		var around2 = this.getAroundBoard(row2, col2);      // 坐标2周围隔板
		// 以坐标1为中心,判断坐标2的方位
		if (row1 == row2 && col1 > col2) {          // 2在1正左方
			return around1.left ? false : true;
		} else if (row1 == row2 && col1 < col2) {   // 2在1正右方
			return around1.right ? false : true;
		} else if (row1 > row2 && col1 == col2) {   // 2在1正上方
			return around1.up ? false : true;
		} else if (row1 < row2 && col1 == col2) {   // 2在1正下方
			return around1.down ? false : true;
		} else if (row1 > row2 && col1 > col2) {    // 2在1左上角
			return !((around1.up && around1.left) || (around2.right && around2.down)
					|| (around1.up && around2.down) || (around2.right && around1.left)
					|| (around1.up && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.right && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.left && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.down && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 > row2 && col1 < col2) {    // 2在1右上角
			return !((around1.up && around1.right) || (around2.left && around2.down)
					|| (around1.up && around2.down) || (around2.left && around1.right)
					|| (around1.up && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.left && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.right && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.down && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 < row2 && col1 > col2) {    // 2在1左下角
			return !((around1.left && around1.down) || (around2.up && around2.right)
					|| (around1.left && around2.right) || (around2.up && around1.down)
					|| (around1.down && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.right && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.left && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.up && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		} else if (row1 < row2 && col1 < col2) {    // 2在1右下角
			return !((around1.right && around1.down) || (around2.up && around2.left)
					|| (around1.right && around2.left) || (around2.up && around1.down)
					|| (around1.down && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around2.left && CoreDef.GridType.none == this.getGrid(row1, col2).getType())
					|| (around1.right && CoreDef.GridType.none == this.getGrid(row2, col1).getType())
					|| (around2.up && CoreDef.GridType.none == this.getGrid(row2, col1).getType()));
		}
		return false;
	},
    //----------------------------------------------------------------------
    // 显示提示,gridBgFlag:格子背景,gridNumFlag:格子编号,gridNameFlag:格子名称
    showTips: function(gridBgFlag, gridNumFlag, gridNameFlag) {
        // 格子提示
        for (var row in this.mMapGrid) {
            if (this.mMapGrid.hasOwnProperty(row)) {
                for (var col in this.mMapGrid[row]) {
                    if (this.mMapGrid[row].hasOwnProperty(col)) {
                        var grid = this.mMapGrid[row][col];
                        grid.showBackground(gridBgFlag);
                        grid.showNumber(gridNumFlag);
                        grid.showName(gridNameFlag);
                    }
                }
            }
        }
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ComponentView.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	视图组件
 ***********************************************************************/
ComponentView = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ComponentView");
        this.mRowCount = 0;                                 // 行数
        this.mColCount = 0;                                 // 列数
        this.mGridWidth = 0;                                // 格子宽度
        this.mGridHeight = 0;                               // 格子高度
        this.mGridGap = 0;                                  // 格子间距
        this.mGridTouchGap = 0;                             // 格子触摸间距
        this.mTouchArea = {x:0, y:0, width:0, height:0};    // 触摸区域
        this.mPosMap = {};                                  // 坐标映射表
        this.mTouchFlag = 0;                                // 触摸标识
        this.mTouchLayer = null;                            // 触摸层(root)
        this.mBackgroundLayer = null;                       // 背景层(底层)
        this.mMapLayer = null;                              // 地图层(中层)
        this.mSceneLayer = null;                            // 场景层(上层)
        this.mTouchAreaTips = null;                         // 触摸区域提示
        this.mLineTipsList = [];                            // 界线提示列表
    },
    //----------------------------------------------------------------------
    // 计算地图大小
    calcMapSize: function(rowCount, colCount, gridW, gridH, gridGap) {
        if (isNaN(rowCount)) {
            throw new Error("row count is not number");
        }
        if (isNaN(colCount)) {
            throw new Error("col count is not number");
        }
        if (isNaN(gridW)) {
            throw new Error("grid width is not number");
        }
        if (isNaN(gridH)) {
            throw new Error("grid height is not number");
        }
        if (isNaN(gridGap)) {
            throw new Error("grid gap is not number");
        }
        return {
            width: colCount*(gridW + gridGap) + gridGap,
            height: rowCount*(gridH + gridGap) + gridGap
        };
    },
    //----------------------------------------------------------------------
    // 初始化
    init: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, offsetX, offsetY) {
        if (isNaN(rowCount)) {
            throw new Error("row count is not number");
        }
        if (isNaN(colCount)) {
            throw new Error("col count is not number");
        }
        if (isNaN(gridW)) {
            throw new Error("grid width is not number");
        }
        if (isNaN(gridH)) {
            throw new Error("grid height is not number");
        }
        if (isNaN(gridGap)) {
            throw new Error("grid gap is not number");
        }
        if (isNaN(gridTouchGap)) {
            throw new Error("grid touch gap is not number");
        }
        if (isNaN(offsetX)) {
            throw new Error("offset x is not number");
        }
        if (isNaN(offsetY)) {
            throw new Error("offset y is not number");
        }
    	this.mRowCount = rowCount;
        this.mColCount = colCount;
        this.mGridWidth = gridW;
        this.mGridHeight = gridH;
        this.mGridGap = gridGap;
        this.mGridTouchGap = gridTouchGap;
        this.mTouchArea = this.calcMapSize(rowCount, colCount, gridW, gridH, gridGap);
        this.mTouchArea.x = offsetX;
        this.mTouchArea.y = offsetY;
        this.mPosMap = this.createPosMap(rowCount, colCount, gridW, gridH, gridGap, offsetX, offsetY);
        // 触摸层
        this.mTouchLayer = this.createTouchLayer(function(event) {
            this.onEvent(event);
            return true;
        }, this);
        // 背景层
        this.mBackgroundLayer = new laya.ui.View();
        this.mBackgroundLayer.cacheAs = "bitmap";
        this.mBackgroundLayer.size(Laya.stage.width, Laya.stage.height);
        this.mBackgroundLayer.anchorX = 0.5;
		this.mBackgroundLayer.anchorY = 0.5;
		this.mBackgroundLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mBackgroundLayer.mouseEnabled = true;
		this.mBackgroundLayer.mouseThrough = true;
        this.mBackgroundLayer.zOrder = 1;
        this.mTouchLayer.addChild(this.mBackgroundLayer);
        // 地图层
        this.mMapLayer = new laya.ui.View();
        this.mMapLayer.size(Laya.stage.width, Laya.stage.height);
        this.mMapLayer.anchorX = 0.5;
		this.mMapLayer.anchorY = 0.5;
		this.mMapLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mMapLayer.mouseEnabled = true;
		this.mMapLayer.mouseThrough = true;
        this.mMapLayer.zOrder = 2;
        this.mTouchLayer.addChild(this.mMapLayer);
        // 场景层
        this.mSceneLayer = new laya.ui.View();
        this.mSceneLayer.size(Laya.stage.width, Laya.stage.height);
        this.mSceneLayer.anchorX = 0.5;
		this.mSceneLayer.anchorY = 0.5;
		this.mSceneLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.mSceneLayer.mouseEnabled = true;
		this.mSceneLayer.mouseThrough = true;
        this.mSceneLayer.zOrder = 3;
        this.mTouchLayer.addChild(this.mSceneLayer, 3);
    },
    //----------------------------------------------------------------------
    // 创建坐标映射表,行号从上到下(坐标系为右上角,所以行的y坐标从小到大),列号从左到右
    createPosMap: function(rowCount, colCount, gridW, gridH, gridGap, offsetX, offsetY) {
        var posMap = {};
        for (var row = 1; row <= rowCount; ++row) {
            posMap[row] = {};
            for (var col = 1; col <= colCount; ++col) {
                var x = col*gridGap + (col - 1)*gridW + gridW/2 + offsetX;
                var y = row*gridGap + (row - 1)*gridH + gridH/2 + offsetY;
                posMap[row][col] = {
                    x: x,                                       // 格子x坐标
                    y: y,                                       // 格子y坐标
                    up: {x:x, y:y - gridH/2 - gridGap/2},		// 格子上间距坐标
                    right: {x:x + gridW/2 + gridGap/2, y:y},    // 格子右间距坐标
                    down: {x:x, y:y + gridH/2 + gridGap/2},		// 格子下间距坐标
                    left: {x:x - gridW/2 - gridGap/2, y:y}		// 格子左间距坐标
                }
            }
        }
        return posMap;
    },
    //----------------------------------------------------------------------
    // 计算格子坐标
    calcGridCoord: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, x, y) {
        // 限定触摸区域
        var maxX = colCount*(gridW + gridGap) + gridGap;
        var maxY = rowCount*(gridH + gridGap) + gridGap;
        if (x < 0 || x > maxX || y < 0 || y > maxY) {
            return {row:0, col:0};
        }
        // 计算行索引
        var row = Math.ceil(y/(gridH + gridGap));
        if (0 == row) {
            row = 1;
        } else if (row > rowCount) {
            row = rowCount;
        }
        // 限定格子触摸高度
        var minRowY = row*gridGap + (row - 1)*gridH + gridTouchGap;
        var maxRowY = row*gridGap + row*gridH - gridTouchGap;
        if (y < minRowY || y > maxRowY) {
            row = 0;
        }
        // 计算列索引
        var col = Math.ceil(x/(gridW + gridGap));
        if (0 == col) {
            col = 1;
        } else if (col > colCount) {
            col = colCount;
        }
        // 限定格子触摸宽度
        var minColX = col*gridGap + (col - 1)*gridW + gridTouchGap;
        var maxColX = col*gridGap + col*gridW - gridTouchGap;
        if (x < minColX || x > maxColX) {
            col = 0;
        }
        return {row:row, col:col};
    },
    //----------------------------------------------------------------------
    // 获取坐标位置
    getCoordPos: function(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, touchArea, posMap, x, y) {
        if (x < touchArea.x || x > touchArea.x + touchArea.width || y < touchArea.y || y > touchArea.y + touchArea.height) {
            return null;
        }
        // 转换为在触摸区域的坐标
        x = x - touchArea.x;
        y = y - touchArea.y;
        // 转换左边为格子索引
        var coord = this.calcGridCoord(rowCount, colCount, gridW, gridH, gridGap, gridTouchGap, x, y);
        if (0 == coord.row || 0 == coord.col) {
            return null;
        }
        var pos = this.mPosMap[coord.row][coord.col];
        return {
            row: coord.row,                             // 格子行索引值
            col: coord.col,                             // 格子列索引值
            pos: {
                x: pos.x,                               // 格子x坐标
                y: pos.y,                               // 格子y坐标
                up: {x:pos.up.x, y:pos.up.y},			// 格子上间距坐标
                right: {x:pos.right.x, y:pos.right.y},  // 格子右间距坐标
                down: {x:pos.down.x, y:pos.down.y},		// 格子下间距坐标
                left: {x:pos.left.x, y:pos.left.y}		// 格子左间距坐标
            }
        };
    },
    //----------------------------------------------------------------------
    // 创建触摸层
    createTouchLayer: function(onEventCF, target) {
        var touchLayer = new laya.ui.View();
        touchLayer.size(Laya.stage.width, Laya.stage.height);
        touchLayer.anchorX = 0.5;
		touchLayer.anchorY = 0.5;
		touchLayer.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        touchLayer.mouseEnabled = true;
		touchLayer.mouseThrough = false;
        function onEvent(event) {
			if ('function' == typeof(onEventCF) && event) {
				onEventCF.apply(target, [event]);
			}
		}
		touchLayer.on(laya.events.Event.ADDED, this, onEvent);
		touchLayer.on(laya.events.Event.CLICK, this, onEvent);
		touchLayer.on(laya.events.Event.DISPLAY, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_END, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_MOVE, this, onEvent);
		touchLayer.on(laya.events.Event.DRAG_START, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_DOWN, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_MOVE, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_OUT, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_OVER, this, onEvent);
		touchLayer.on(laya.events.Event.MOUSE_UP, this, onEvent);
		touchLayer.on(laya.events.Event.REMOVED, this, onEvent);
		touchLayer.on(laya.events.Event.UNDISPLAY, this, onEvent);
        return touchLayer;
    },
    //----------------------------------------------------------------------
    // 事件
    onEvent: function(event) {
        if (!this.isTouchEnabled()) {
            return;
        }
        var location = {x:event.target.mouseX, y:event.target.mouseY};
        var cp = this.getCoordPos(this.mRowCount, this.mColCount, this.mGridWidth, this.mGridHeight,
                                  this.mGridGap, this.mGridTouchGap, this.mTouchArea, this.mPosMap,
                                  location.x, location.y);
        if (laya.events.Event.MOUSE_DOWN == event.type) {
            if (this.mTouchFlag <= 0) {
                this.mTouchFlag = 1;
                this.onTouchBegan(event, cp);
            }
        } else if (laya.events.Event.MOUSE_MOVE == event.type) {
            if (this.mTouchFlag > 0) {
                this.onTouchMoved(event, cp);
            }
        } else if (laya.events.Event.MOUSE_UP == event.type || laya.events.Event.MOUSE_OUT == event.type) {
            this.mTouchFlag--;
            if (0 == this.mTouchFlag) {
                this.onTouchEnded(event, cp);
            }
        }
    },
    //----------------------------------------------------------------------
    // 坐标是否合法
    isCoordValid: function(row, col) {
        return row >= 1 && row <= this.mRowCount && col >= 1 && col <= this.mColCount;
    },
    //----------------------------------------------------------------------
    // 获取视图行列
    getRowCol: function() {
        return {row:this.mRowCount, col:this.mColCount};
    },
    //----------------------------------------------------------------------
    // 获取格子大小
    getGridSize: function() {
        return {width:this.mGridWidth, height:this.mGridHeight};
    },
    //----------------------------------------------------------------------
    // 获取格子间距
    getGridGap: function() {
        return this.mGridGap;
    },
    //----------------------------------------------------------------------
    // 获取触摸区域
    getTouchArea: function() {
        return {
            x: this.mTouchArea.x,
            y: this.mTouchArea.y,
            width: this.mTouchArea.width,
            height: this.mTouchArea.height
        };
    },
    //----------------------------------------------------------------------
    // 获取位置信息
    getPos: function(row, col) {
        if (this.mPosMap[row] && this.mPosMap[row][col]) {
            var pos = this.mPosMap[row][col];
            return {
                x: pos.x,								// 格子x坐标
                y: pos.y,								// 格子y坐标
                up: {x:pos.up.x, y:pos.up.y},			// 格子上间距坐标
                right: {x:pos.right.x, y:pos.right.y},	// 格子右间距坐标
                down: {x:pos.down.x, y:pos.down.y},     // 格子下间距坐标
                left: {x:pos.left.x, y:pos.left.y}		// 格子左间距坐标
                };
        }
    },
    //----------------------------------------------------------------------
    // 获取坐标信息
    getCoord: function(x, y) {
        var cp = this.getCoordPos(this.mRowCount, this.mColCount, this.mGridWidth, this.mGridHeight,
                                  this.mGridGap, this.mGridTouchGap, this.mTouchArea, this.mPosMap, x, y);
        if (cp) {
            return {row:cp.row, col:cp.col};
        }
    },
    //----------------------------------------------------------------------
    // 获取触摸标识
    getTouchFlag: function() {
        return this.mTouchFlag;
    },
    //----------------------------------------------------------------------
    // 获取根节点
    getRoot: function() {
        if (this.mTouchLayer && !this.mTouchLayer.destroyed) {
            return this.mTouchLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取背景层
    getBackgroundLayer: function() {
        if (this.mBackgroundLayer && !this.mBackgroundLayer.destroyed) {
            return this.mBackgroundLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取地图层
    getMapLayer: function() {
        if (this.mMapLayer && !this.mMapLayer.destroyed) {
            return this.mMapLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 获取场景层
    getSceneLayer: function() {
        if (this.mSceneLayer && !this.mSceneLayer.destroyed) {
            return this.mSceneLayer;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 显示提示,touchAreaFlag:触摸区域,lineFlag:网线
    showTips: function(touchAreaFlag, lineFlag) {
        // 视图提示
        if (touchAreaFlag) {
            if (!this.mTouchAreaTips) {
                this.mTouchAreaTips = new laya.display.Sprite();
                this.mTouchAreaTips.graphics.drawRect(this.mTouchArea.x, this.mTouchArea.y, this.mTouchArea.width, this.mTouchArea.height, "#808080");
                this.mTouchAreaTips.alpha = 200/255;
                this.mTouchAreaTips.zOrder = 1;
                this.mBackgroundLayer.addChild(this.mTouchAreaTips);
            }
        } else if (this.mTouchAreaTips && !this.mTouchAreaTips.destroyed) {
            this.mTouchAreaTips.removeSelf();
            this.mTouchAreaTips.destroy();
            delete this.mTouchAreaTips;
        }
        // 界线提示
        this.createLineFunc = function(direct, x, y) {
            var line = new laya.display.Sprite();
            if (1 == direct) {  // 横线
                line.graphics.drawLine(x - this.mTouchArea.width/2, y, x + this.mTouchArea.width/2, y, "#000000", 1);
            } else {    // 2 == direct, 竖线
                line.graphics.drawLine(x, y - this.mTouchArea.height/2, x, y + this.mTouchArea.height/2, "#000000", 1);
            }
            line.zOrder = 3;
            this.mBackgroundLayer.addChild(line);
            return line;
        };
        if (lineFlag) {
            if (!(this.mLineTipsList instanceof Array) || 0 == this.mLineTipsList.length) {
                this.mLineTipsList = [];
                for (var row = 1; row <= this.mRowCount + 1; ++row) {   // 横线
                    var x = this.mTouchArea.x + this.mTouchArea.width/2;
                    if (row == this.mRowCount + 1) {
                        this.mLineTipsList.push(this.createLineFunc(1, x, this.getPos(row - 1, 1).up.y));
                    } else {
                        this.mLineTipsList.push(this.createLineFunc(1, x, this.getPos(row, 1).down.y));
                    }
                }
                for (var col = 1; col <= this.mColCount + 1; ++col) {   // 竖线
                    var y = this.mTouchArea.y + this.mTouchArea.height/2;
                    if (col == this.mColCount + 1) {
                        this.mLineTipsList.push(this.createLineFunc(2, this.getPos(1, col - 1).right.x, y));
                    } else {
                        this.mLineTipsList.push(this.createLineFunc(2, this.getPos(1, col).left.x, y));
                    }
                }
            }
        } else if (this.mLineTipsList instanceof Array) {
            for (var i = 0, len = this.mLineTipsList.length; i < len; ++i) {
                var lineTips = this.mLineTipsList[i];
                if (lineTips && !lineTips.destroyed) {
                    this.mLineTipsList[i].removeSelf();
                    this.mLineTipsList[i].destroy();
                }
            }
            this.mLineTipsList = [];
        }
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="Controller.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	控制器
 ***********************************************************************/
Controller = {};
//----------------------------------------------------------------------
// 创建视图
Controller.createView = function(gridGap, gridTouchGap) {
    var view = new ComponentView();
    var mapSize = view.calcMapSize(G.MAP_ROW, G.MAP_COL, G.GRID_WIDTH, G.GRID_HEIGHT, gridGap);
    var offsetX = (G.DESIGN_WIDTH - mapSize.width)/2 + G.VIEW_OFFSET_X;
    var offsetY = Laya.stage.height/2 + G.VIEW_OFFSET_Y;
    view.init(G.MAP_ROW, G.MAP_COL, G.GRID_WIDTH, G.GRID_HEIGHT, gridGap, gridTouchGap, offsetX, offsetY);
    Game.NODE_SCENE.addChild(view.getRoot());
    return view;
};
//----------------------------------------------------------------------
// 创建
Controller.create = function(showDisplay) {
    this.destroy();
    // 视图
    this.mView = this.createView(G.GRID_GAP, G.GRID_TOUCH_GAP);
	this.mView.setTouchEnabled(true);
	this.mView.showTips(false, false);
    // 地图控制器
    var mapCtrl = this.mView.addComponent(new ComponentMap());
	mapCtrl.init(core_map_config, showDisplay);
	mapCtrl.showTips(false, false, false);
	// 掉落控制器
	var dropCtrl = this.mView.addComponent(new ControllerDrop());
	dropCtrl.init();
	// 消除控制器
	var clearCtrl = this.mView.addComponent(new ControllerClear());
	clearCtrl.init();
	// 小地图控制器
	var minimapCtrl = this.mView.addComponent(new ControllerMinimap());
	minimapCtrl.init();
	// 收获控制器
	var gainCtrl = this.mView.addComponent(new ControllerGain());
	gainCtrl.init(showDisplay);
	// 数据初始化
	this.mShowDisplay = showDisplay;
	this.mLevelId = G.FIRST_LEVEL_ID;
	this.mStar = 1;
};
//----------------------------------------------------------------------
// 销毁
Controller.destroy = function() {
    if (this.mView) {
        this.mView.dtor();
        this.mView.getRoot().removeSelf();
		this.mView.getRoot().destroy();
        delete this.mView;
    }
};
//----------------------------------------------------------------------
// 获取视图
Controller.getView = function() {
    return this.mView;
};
//----------------------------------------------------------------------
// 获取组件
Controller.getComp = function(name) {
    if (this.mView) {
        return this.mView.getComponent(name);
    }
};
//----------------------------------------------------------------------
// 清除地表
Controller.clearSurface = function() {
	Action.clearImageList();
	var mapCtrl = this.getComp("ComponentMap");
	var rc = this.mView.getRowCol();
	for (var row = 1; row <= rc.row; ++row) {
		for (var col = 1; col <= rc.col; ++col) {
			var surfaceElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.surface);
			if (surfaceElement) {
				surfaceElement.dtor();
			}
		}
	}
};
//----------------------------------------------------------------------
// 清除物件
Controller.clearObject = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	var mapCtrl = this.getComp("ComponentMap");
	var rc = this.mView.getRowCol();
	var objectCount = rc.row * rc.col;
	for (var row = 1; row <= rc.row; ++row) {
		for (var col = 1; col <= rc.col; ++col) {
			var pos = this.mView.getPos(row, col);
			var objectElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.object);
			var attachElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = mapCtrl.delElement(row, col, CoreDef.ElementTag.overlay);
			if (overlayElement) {
				overlayElement.dtor();
			}
			Action.playElementScreenOut(attachElement, {row:row, col:col}, pos, null, this);
			Action.playElementScreenOut(objectElement, {row:row, col:col}, pos, function() {
				if (--objectCount <= 0) {
					if ('function' == typeof(callback)) {
						callback.apply(target, []);
					}
				}
			}, this);
		}
	}
};
//----------------------------------------------------------------------
// 检查是否升级地图/是否过关,0:地图不升级,未过关,1.地图升级,2.过关
Controller.checkMapAndLevel = function() {
	if (this.getComp("ControllerClear").isExistSurface()) {
		return 0;
	}
	// 地图中的地表元素都被消除,进入下一张地图
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	this.mStar += 1;
	if (this.mStar <= G.MAX_STAR) {
		return 1;
	}
	// 关卡所有地图都已完成,进入下一关卡
	var levelData = DataTB.get("level_tplt", this.mLevelId, true);
	this.mLevelId = (isNaN(levelData.next_id) || levelData.next_id <= 0) ? G.FIRST_LEVEL_ID : levelData.next_id;
	this.mStar = 1;
	this.mLevelChange = true;
	return 2;
};
//----------------------------------------------------------------------
// 关卡
Controller.onLevel = function(isResetMap, isClearObject, callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	var levelData = DataTB.get("level_tplt", this.mLevelId, true);
	// 设置关卡信息
	EventCenter.post(EventDef["ED_LEVEL_INFO"], levelData.name, this.mStar, this.mLevelId);
	// 获取地表数据
	var mapId = levelData.maps[this.mStar - 1];
	var mapData = DataTB.get("map_tplt", mapId, true);
	// 重置数据
	this.getComp("ControllerDrop").setDropData(DataModel.getDropData(), 1);
	this.getComp("ControllerGain").resetGain();
	this.getComp("ControllerClear").resetShowSkills();
	// 重置地图
	if (isResetMap) {
		var mapCtrl = this.getComp("ComponentMap");
		this.mLevelChange = isNaN(this.mLevelChange) ? true : this.mLevelChange;
		if (this.mLevelChange) {
			this.mLevelChange = false;
			mapCtrl.setMapBackground(levelData.file);	// 设置关卡背景
			AudioModel.playMusic(levelData.music);	// 设置关卡音乐
		}
		this.clearSurface();
		for (var row = 0; row < G.MAP_ROW; ++row) {
			for (var col = 0; col < G.MAP_COL; ++col) {
				var surfaceId = mapData[row][col];
				var element = mapCtrl.createElement(surfaceId);
				if (element) {
					var pos = this.mView.getPos(row + 1, col + 1);
					if (element.getNode()) {
						element.getNode().pos(pos.x, pos.y);
					}
					mapCtrl.addElement(row + 1, col + 1, element);
				}
			}
		}
	this.getComp("ControllerMinimap").resetByMapData(mapData);
	}
	// 消除物件
	if (isClearObject) {
		this.clearObject(callback, target);
	} else {
		callback.apply(target, []);
	}
};
//----------------------------------------------------------------------
// 掉落
Controller.onDrop = function(count, times, timesCB, callback, target) {
	count = isNaN(count) ? 0 : count;
	times = isNaN(times) ? 0 : times;
	timesCB = 'function' == typeof(timesCB) ? timesCB : function(){};
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.getComp("ControllerDrop").startDrop(times, function(hasDrop) {
		if (hasDrop) {
			laya.callAfter(this.mShowDisplay ? 0.3 : 0, function() {
				this.getComp("ControllerClear").startClear(function(clearCount) {
					count += clearCount;
					if (clearCount > 0) {
						times += 1;
						timesCB.apply(target, [times]);
						this.getComp("ControllerGain").updateGain(times);
						if (times >= G.MAX_TIMES) {	// 当刷屏次数较大时,这里给中断掉
							if (this.mShowDisplay) {
								UIPrompt.show("太多次刷屏,请检查掉落数据表");
							}
							callback.apply(target, [count, times]);
						} else {
							this.onDrop(count, times, timesCB, callback, target);
						}
					} else {
						callback.apply(target, [count, times]);
					}
				}, this);
			}, this);
		} else {
			callback.apply(target, [count, times]);
		}
	}, this);
};
//----------------------------------------------------------------------
// 收获
Controller.onGain = function(count, times, effect1, effect3, callback, target) {
	if (this.mShowDisplay) {
		console.log("消除个数: " + count + ", 刷屏次数: " + times);
	}
	count = isNaN(count) ? 0 : count;
	times = isNaN(times) ? 0 : times;
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.getComp("ControllerGain").triggerBonus(count, times, effect1, effect3, function(gameSection, isOver) {
		count = 0;
		times = 0;
		if (isOver) {	// 本次操作结束
			callback.apply(target, []);
		} else {	// 操作未结束
			if (game_section["bonus2"] == gameSection) {	// bonus2清屏结束后,执行掉落操作
				this.getComp("ControllerDrop").setDropData(DataModel.getDropData(), 1);	// 数据重置
				this.onDrop(count, times, null, function() {
					this.onGain(count, times, effect1, effect3, callback, target);
				}, this);
			} else {
				laya.callAfter(this.mShowDisplay ? 0.5 : 0, function() {
					this.getComp("ControllerClear").startClear(function(clearCount) {
						count += clearCount;
						if (clearCount > 0) {
							times += 1;
							this.getComp("ControllerGain").updateGain(times);
							this.onDrop(count, times, null, function() {
								this.onGain(count, times, effect1, effect3, callback, target);
							}, this);
						} else {
							this.onGain(count, times, effect1, effect3, callback, target);
						}
					}, this);
				}, this);
			}
		}
	}, this);
};
//----------------------------------------------------------------------
// 开始
Controller.onStart = function(startCount, mapUpgradeCB, levelPassCB, countCB, callback, target) {
	startCount = isNaN(startCount) ? 1 : startCount;
	mapUpgradeCB = 'function' == typeof(mapUpgradeCB) ? mapUpgradeCB : function(cb){cb();};
	levelPassCB = 'function' == typeof(levelPassCB) ? levelPassCB : function(cb){cb();};
	countCB = 'function' == typeof(countCB) ? countCB : function(){};
	callback = 'function' == typeof(callback) ? callback : function(){};
	this.mStartCount = startCount - 1;
	// 更新剩余自动开奖次数
	EventCenter.post(EventDef["ED_LEVEL_AUTO_TIMES"], this.mStartCount);
	// 自动开奖赛豆更新，更新所得奖励
	EventCenter.post(EventDef["ED_LEVEL_COIN"], 1);
	if (this.mStartCount < 0) {
		callback.apply(target, []);
		return;
	}
	// 扣除赛豆
	EventCenter.post(EventDef["ED_LEVEL_COIN"], 2);
	// 自动开奖重置
	EventCenter.post(EventDef["ED_LEVEL_CLEAR"]);
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	var effect1 = DataModel.getBonus1Effect(this.mLevelId);
    var effect3 = DataModel.getBonus3Effect(this.mLevelId);
	if (this.mShowDisplay) {
    	console.log("============================== 开始");
	}
    this.onLevel(false, true, function() {
        this.onDrop(0, 0, function(times) {
            EventCenter.post(EventDef["ED_PROGRESS_BONUS2"], times);
        }, function(count, times) {
            this.onGain(count, times, effect1, effect3, function() {
				var mapAndLevel = this.checkMapAndLevel();
				if (this.mShowDisplay) {
                	console.log("============================== 结束" + (0 == mapAndLevel ? "" : (1 == mapAndLevel ? ": 地图升级" : ": 过关")));
				}
				countCB.apply(target, []);
                if (1 == mapAndLevel) {     // 地图升级
					if (this.mShowDisplay) {		// 显示表现
						AudioModel.playSound(2004);
						mapUpgradeCB.apply(target, [function() {
							this.onLevel(true, false);
							this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
						}.bind(this)]);
						return;
					} else {
						this.onLevel(true, false);
					}
                } else if (2 == mapAndLevel) {  // 过关
					if (this.mShowDisplay) {		// 显示表现
						AudioModel.playSound(2003);
						levelPassCB.apply(target, [function() {
							this.onLevel(true, false);
							if(this.mLevelId%1000 > 1){
								 UILevelDes.openFront(true, true, true, [this.mLevelId%1000,this.mStartCount]);
							}else{
								this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
							}
						}.bind(this)]);
						return;
					} else {
						this.onLevel(true, false);
					}
                }
				this.onStart(this.mStartCount, mapUpgradeCB, levelPassCB, countCB, callback, target);
            }, this);
        }, this);
    }, this);
};
//----------------------------------------------------------------------
// 停止
Controller.onStop = function() {
	this.mStartCount = 0;
};
//----------------------------------------------------------------------
// 是否显示表现
Controller.isShowDisplay = function() {
	return this.mShowDisplay;
};
//----------------------------------------------------------------------
// 获取关卡id
Controller.getLevelId = function() {
	this.mLevelId = isNaN(this.mLevelId) ? G.FIRST_LEVEL_ID : this.mLevelId;
	return this.mLevelId;
};
//----------------------------------------------------------------------
// 获取星级
Controller.getStar = function() {
	this.mStar = isNaN(this.mStar) ? 1 : this.mStar;
	return this.mStar;
};
//----------------------------------------------------------------------
// 一进入游戏就开始掉落
Controller.onInitDrop = function(callback, target) {
	callback = 'function' == typeof(callback) ? callback : function(){};
	var dropData = [
	[20101,20102,20103,20104,20105,20106],
	[20101,20102,20103,20104,20105,20106],
	[20102,20103,20104,20105,20106,20107],
	[20102,20103,20104,20105,20106,20107],
	[20103,20104,20105,20106,20107,20101],
	[20103,20104,20105,20106,20107,20101]
	];
	this.getComp("ControllerDrop").setDropData(dropData, 4);
	this.getComp("ControllerDrop").startDrop(0, function(hasDrop) {
		callback.apply(target, []);
	}, this);	
};
//----------------------------------------------------------------------
// 获取地图居中位置
Controller.getCenterPos = function() {
	var posTb = this.mView.getPos(3,3);
	return {x: posTb.x + 30, y: posTb.y + 30};
};
//----------------------------------------------------------------------
///<jscompress sourcefile="ControllerClear.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	消除控制器
 ***********************************************************************/
ControllerClear = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerClear");
		this.mClearBoundary = [];				// 保存消除的元素的边框
		this.mShowSkills = [];					// 这一局触发过的技能
    },
    //----------------------------------------------------------------------
    // 初始化函数
    init: function() {
	    this.mMap = this.getSibling("ComponentMap");
    },
	//----------------------------------------------------------------------
    // 重置技能触发
    resetShowSkills: function() {
	    this.mShowSkills = [];
    },
	//----------------------------------------------------------------------
	// 生成技能
	generateSkill: function(objectId, skillId, row, col) {
		var pos = this.getMaster().getPos(row, col);
		// 物件
		var objectElement = this.mMap.createElement(objectId);
		if (objectElement.getNode()) {
			objectElement.getNode().pos(pos.x, pos.y);
		}
		objectElement.is_old = true;
		this.mMap.addElement(row, col, objectElement);
		// 附件
		var attachElement = this.mMap.createElement(skillId);
		if (attachElement.getNode()) {
			var display = null;
			if (30100 == skillId) {			// 十字消
				display = laya.createArmature(ResURL("shizixiaozhuangtai.png"), ResURL("shizixiaozhuangtai.sk"), false, null, null, null, null);
				display.play("skill_cross_state", true);
			} else if (30200 == skillId) {	// x消
				display = laya.createArmature(ResURL("xzixiao.png"), ResURL("xzixiao.sk"), false, null, null, null, null);
				display.play("skill_x_state", true);
			}
			if (display) {
				attachElement.setNode(display);
			}
			attachElement.getNode().pos(pos.x, pos.y);
		}
		attachElement.is_old = true;
		this.mMap.addElement(row, col, attachElement);
	},
	//----------------------------------------------------------------------
	// 检查技能生成
	checkSkillGenerate: function(coordList) {
		var skillId = 0;
		if (G.SKILL_OBLIQUE_COUNT == coordList.length) {		// x消
			skillId = 30200;
		} else if (coordList.length >= G.SKILL_CROSS_COUNT) {	// 十字消
			skillId = 30100;
		} else {
			return;
		}
		if (game_section["bonus2"] == this.getSibling("ControllerGain").getGameSection()) {	// bonus2阶段不产生技能
			return;
		}
		for (var i = 0; i < this.mShowSkills.length; ++i) {
			if (skillId == this.mShowSkills[i]) {
				return;
			}
		}
		// 获取随机位置
		var randomCoordList = [];
		for (var i = 0, len = coordList.length; i < len; ++i) {
			var coord = coordList[i];
			var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.overlay);
			if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != objectElement.getSubType()
				&& !attachElement && !overlayElement) {	// 可生成技能位置:普通元素,且非百搭,且无技能,无固定元素
				randomCoordList.push(coord);
			}
		}
		var randomIndex = Math.floor(Math.random()*(randomCoordList.length - 1) + 0.5);
		var randomCoord = randomCoordList[randomIndex];
		if (randomCoord) {
			return {
				skill_id: skillId,			// 技能id
				row: randomCoord.row,		// 行坐标
				col: randomCoord.col		// 列坐标
			}
		}
	},
	//----------------------------------------------------------------------
	// 检查技能消除
	checkSkillClear: function(coord, searchedList, clearList) {
		function innerFunc(coord) {
			if (!this.getMaster().isCoordValid(coord.row, coord.col) || CA.getCoordIndex(searchedList, coord) >= 0) {	// 坐标无效,坐标被使用
				return;
			}
			CA.addCoord(searchedList, coord);
			var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
			if (!objectElement) {
				return;
			}
			if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(被技能)
				clearList.push({coord:coord, object_ids:[], clear_type:2});
			} else {	// 普通元素
				clearList.push({coord:coord, object_ids:[objectElement.getId()], clear_type:2});
			}
			this.checkSkillClear(coord, searchedList, clearList);
		}
		var attachElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.attach);
		if (attachElement) {
			if (CoreDef.AttachType.cross == attachElement.getType()) {	// 十字消
				var crossCoordList = CA.getCrossRange(coord.row, coord.col, G.MAP_ROW);
				for (var i = 0, len = crossCoordList.length; i < len; ++i) {
					innerFunc.apply(this, [crossCoordList[i]]);
				}
			} else if (CoreDef.AttachType.oblique == attachElement.getType()) {	// x消
				var obliqueCoordList = CA.getObliqueRange(coord.row, coord.col, 1);
				for (var j = 0, l = obliqueCoordList.length; j < l; ++j) {
					innerFunc.apply(this, [obliqueCoordList[j]]);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	// 搜索消除
	searchList: function() {
		var infoList = [];
		var searchedList = [];
		// 遍历地图
		var rc = this.getMaster().getRowCol();
		for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
				var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if (!objectElement || CoreDef.ObjectType.normal != objectElement.getType()) {	// 不为普通元素
					continue;
				}
				if (CA.getCoordIndex(searchedList, CA.makeCoord(row, col)) >= 0) {	// 位置已被搜索,不能作为起始点
					continue;
				}
				if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭不能作为起始点
					continue;
				}
				// 可消除元素判断
				var subType = 0;	// 消除的元素子类型
				var coordList = CA.searchConnectList(row, col, function(row1, col1, row2, col2) {
					if (this.getMaster().isCoordValid(row1, col1) && this.getMaster().isCoordValid(row2, col2)) {
						if ((row1 == row2 - 1 && col1 == col2) || (row1 == row2 && col1 == col2 - 1)
							|| (row1 == row2 + 1 && col1 == col2) || (row1 == row2 && col1 == col2 + 1)) {  // 上,右,下,左
							var objectElement1 = this.mMap.getElement(row1, col1, CoreDef.ElementTag.object);
							var objectElement2 = this.mMap.getElement(row2, col2, CoreDef.ElementTag.object);
							if (objectElement1 && CoreDef.ObjectType.normal == objectElement1.getType()
								&& objectElement2 && CoreDef.ObjectType.normal == objectElement2.getType()) {	// 元素不为空,且为普通元素
								if (0 == subType) {
									if (CoreDef.BaseType.wail != objectElement1.getSubType()) {
										subType = objectElement1.getSubType();
									} else if (CoreDef.BaseType.wail != objectElement2.getSubType()) {
										subType = objectElement2.getSubType();
									}
								}
								if (objectElement1.getSubType() == objectElement2.getSubType()) {	// 元素子类型相同
									return true;
								}
								if (CoreDef.BaseType.wail == objectElement1.getSubType()) {	// 元素1为百搭,元素2必须为指定的子类型
									return subType == objectElement2.getSubType();
								}
								if (CoreDef.BaseType.wail == objectElement2.getSubType()) {	// 元素2为百搭,元素1必须为指定的子类型
									return subType == objectElement1.getSubType();
								}
								return false;
							}
						}
					}
				}, this);
				// 保存已搜索坐标
				for (var i = 0, len = coordList.length; i < len; ++i) {
					CA.addCoord(searchedList, coordList[i]);
				}
				// 消除个数条件判断
				if (coordList.length >= G.CLEAR_COUNT) {
					infoList.push(coordList);
				}
			}
		}
		return infoList;
	},
	//----------------------------------------------------------------------
	// 搜索消除信息
	searchClearInfo: function(infoList, isMatch) {
		var searchedList = [];
		var clearList = [];			// 消除列表
		var skillList = [];			// 技能列表
		// 计算消除信息(正常消除)
		for (var i = 0, len = infoList.length; i < len; ++i) {
			var coordList = infoList[i];
			var coordStart = coordList[0];
			var firstObjectId = this.mMap.getElement(coordStart.row, coordStart.col, CoreDef.ElementTag.object).getId();
			for (var j = 0, l = coordList.length; j < l; ++j) {
				var coord = coordList[j];
				var objectElement = this.mMap.getElement(coord.row, coord.col, CoreDef.ElementTag.object);
				var objectId = objectElement.getId();
				var coordIndex = CA.getCoordIndex(searchedList, coord);
				if (coordIndex >= 0) {	// 坐标已使用
					if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(被多次匹配)
						if (isMatch) {
							clearList[coordIndex].object_ids.push(firstObjectId);
						}
					}
				} else {	// 坐标未使用
					CA.addCoord(searchedList, coord);
					// coord:坐标,object_ids:坐标上被消除的对象id,clear_type:消除类型(1.匹配消除,2.被动消除)
					if (CoreDef.BaseType.wail == objectElement.getSubType()) {	// 百搭(第1次匹配)
						if (isMatch) {
							clearList.push({coord:coord, object_ids:[firstObjectId], clear_type:1});
						} else {
							clearList.push({coord:coord, object_ids:[], clear_type:2});
						}
					} else {	// 普通元素
						clearList.push({coord:coord, object_ids:[objectId], clear_type:(isMatch ? 1 : 2)});
					}
				}
			}
			// 生成技能信息
			var skillInfo = this.checkSkillGenerate(coordList);
			if (skillInfo) {
				skillList.push(skillInfo);
			}
		}
		// 计算消除信息(技能消除)
		for (var i = 0, len = infoList.length; i < len; ++i) {
			for (var j = 0, l = infoList[i].length; j < l; ++j) {
				this.checkSkillClear(infoList[i][j], searchedList, clearList);
			}
		}
		return {clear_list:clearList, skill_list:skillList};
	},
	//----------------------------------------------------------------------
	// 消除元素
	clearElement: function(info, skillList, callback, target) {
		var pos = this.getMaster().getPos(info.coord.row, info.coord.col);
		var surfaceElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.surface);
		var objectElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.object);
		var attachElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.attach);
		var overlayElement = this.mMap.getElement(info.coord.row, info.coord.col, CoreDef.ElementTag.overlay);
		if (!overlayElement) {	// 有固定元素,不可消除物件
			objectElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.object);
			attachElement = this.mMap.delElement(info.coord.row, info.coord.col, CoreDef.ElementTag.attach);
		}
		var surfaceId = surfaceElement ? surfaceElement.getId() : 0;	// 地表id
		var objectIds = info.object_ids;								// 物件id列表
		var skillId = 0;												// 技能id
		var clearType = info.clear_type;								// 消除类型(1.匹配消除,2.被动消除)
		for (var i = 0, len = skillList.length; i < len; ++i) {
			var skillInfo = skillList[i];
			if (info.coord.row == skillInfo.row && info.coord.col == skillInfo.col) {
				skillId = skillInfo.skill_id;
				skillList.splice(i, 1);
				break;
			}
		}
		// 消除表现
		var playCount = 3;
		function innerFunc() {
			if (--playCount <= 0) {
				callback.apply(target, []);
			}
		}
		Action.playSurfaceClear(surfaceElement, pos, function() {
			innerFunc();
		}, this);
		if (overlayElement) {	// 有固定元素,不可消除物件/附件
			innerFunc();
			innerFunc();
		} else {
			Action.playClearEffect(objectElement, info.clear_type, function() {
				Action.playAttachClear(attachElement, info.coord, pos, function() {
					if(attachElement && CoreDef.AttachType.cross == attachElement.getType()){
						this.mShowSkills.push(30100);
					}else if(attachElement && CoreDef.AttachType.oblique == attachElement.getType()){
						this.mShowSkills.push(30200);
					}
					innerFunc();
				}, this);
				Action.playObjectClear(objectElement, pos, clearType, function() {
					if (skillId > 0 && objectIds.length > 0) {
						this.generateSkill(objectIds[0], skillId, info.coord.row, info.coord.col);
					}
					innerFunc()
				}, this);
			}, this);
		}
		// 事件派发
		if (surfaceId > 0) {
			EventCenter.post(EventDef["ED_CORE_CLEAR_SURFACE"], surfaceId, info.coord.row, info.coord.col);
		}
		for (var j = 0, l = objectIds.length; j < l; ++j) {
			EventCenter.post(EventDef["ED_CORE_CLEAR_OBJECT"], objectIds[j], info.coord.row, info.coord.col);
		}
	},
	//----------------------------------------------------------------------
	// 是否存在地表
	isExistSurface: function() {
		var rc = this.getMaster().getRowCol();
		for (var row = 1; row <= rc.row; ++row) {
			for (var col = 1; col <= rc.col; ++col) {
				if (this.mMap.getElement(row, col, CoreDef.ElementTag.surface)) {
					return true;
				}
			}
		}
		return false;
	},
	//----------------------------------------------------------------------
	// 开始消除(自动寻找可消除元素)
	startClear: function(clearCB, target) {
		var infoList = this.searchList();
		this.getSibling("ControllerGain").resetTimesGain();
		if (0 == infoList.length) {	// 无可消除
			clearCB.apply(target, [0]);
		} else {		// 有可消除
			// 消除元素
			var clearInfo = this.searchClearInfo(infoList, true);
			var clearCount = clearInfo.clear_list.length;
			for (var i = 0, len = clearInfo.clear_list.length; i < len; ++i) {
				this.clearElement(clearInfo.clear_list[i], clearInfo.skill_list, function() {
					if (--clearCount <= 0) {
						clearCB.apply(target, [clearInfo.clear_list.length]);
					}
				}, this);
			}
			// 消除区域效果
			if (Controller.isShowDisplay()) {
				for (var j = 0, l = infoList.length; j < l; ++j) {
					this.createClearBoundary(infoList[j]);
					laya.callAfter(j * 0.25, function() {
						AudioModel.playSound(4001 + j);
					});
				}
				laya.callAfter(0.6, function() {
					AudioModel.playSound(3002);
					this.deleteClearBoundary();
				}, this);
			}
		}
	},
	//----------------------------------------------------------------------
	// 开始消除(消除指定元素)
	startClearEx: function(coordList, clearCB, target) {
		if (0 == coordList.length) {
			clearCB.apply(target, []);
			return;
		}
		this.getSibling("ControllerGain").resetTimesGain();
		var infoList = [coordList];
		var clearInfo = this.searchClearInfo(infoList, false);
		var clearCount = clearInfo.clear_list.length;
		AudioModel.playSound(3002);
		for (var i = 0, len = clearInfo.clear_list.length; i < len; ++i) {
			this.clearElement(clearInfo.clear_list[i], clearInfo.skill_list, function() {
				if (--clearCount <= 0) {
					clearCB.apply(target, [clearInfo.clear_list.length]);
				}
			}, this);
		}
	},
	//----------------------------------------------------------------------
	//添加边框
	createClearBoundary: function(coordList) {
		this.createHorBoundary(coordList);
		this.createVerBoundary(coordList);
		this.createCornerBoundary(coordList);
	},
	//----------------------------------------------------------------------
	//判断要不要创建横向边框
	showHorBoundary: function(coordList, row7, col6){
		var upRow = row7 - 1;
		var dowRow = row7
		var upFlag = false;
		var downFlag = false;
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(row == upRow && col6 == col) {
				upFlag = true;
			} 
			if (row  == dowRow && col == col6){
				downFlag = true;
			}
		}
		if (upFlag && downFlag){
			return false;
		}
		if(upFlag || downFlag){
			return true;
		}
		return false;
	},
	//----------------------------------------------------------------------
	//创建横向边框
	createHorBoundary: function(coordList){
		for(var i = 1; i <= 7; ++i){
			for(var j = 1;j <= 6; ++j){
				if(this.showHorBoundary(coordList, i, j)){
					var anchorX = 0.5, anchorY = 1;
					var x = 0, y = 0;
					var pos = this.getMaster().getPos(i > 6?6:i, j);
					var horLineNOde = new Laya.Image(ResURL("image_map_boundary_01.png"));
					horLineNOde.anchorX = anchorX;
					horLineNOde.width = 49;
					horLineNOde.anchorY = anchorY;
					horLineNOde.pos(pos.x, pos.y - G.GRID_HEIGHT/2 + 6);
					if(i == 7){
						horLineNOde.pos(pos.x, pos.y + G.GRID_HEIGHT/2 + 6);
					}
					horLineNOde.zOrder = 50;
					Controller.getView().getSceneLayer().addChild(horLineNOde);
					this.mClearBoundary.push(horLineNOde);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//判断要不要创建纵向边框
	showVerBoundary: function(coordList, row6, col7){
		var leftCol = col7 - 1;
		var rightCol = col7
		var leftFlag = false;
		var rightFlag = false;
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(col == leftCol && row == row6) {
				leftFlag = true;
			} 
			if (col == rightCol && row == row6){
				rightFlag = true;
			}
		}
		if (leftFlag && rightFlag){
			return false;
		}
		if(leftFlag || rightFlag){
			return true;
		}
		return false;
	},
	//----------------------------------------------------------------------
	//创建纵向边框
	createVerBoundary: function(coordList){
		for(var i = 1; i <= 6; ++i){
			for(var j = 1;j <= 7; ++j){
				if(this.showVerBoundary(coordList, i, j)){
					var anchorX = 0.5, anchorY = 1;
					var x = 0, y = 0;
					var pos = this.getMaster().getPos(i, j > 6 ? 6: j);
					var verLineNOde = new Laya.Image(ResURL("image_map_boundary_01.png"));
					verLineNOde.anchorX = anchorX;
					verLineNOde.rotation = 90;
					verLineNOde.anchorY = anchorY;
					verLineNOde.width = 49;
					verLineNOde.pos(pos.x- G.GRID_HEIGHT/2 - 5, pos.y );
					if(j == 7){
						verLineNOde.pos(pos.x + G.GRID_HEIGHT/2 - 5, pos.y );
					}
					verLineNOde.zOrder = 50;
					Controller.getView().getSceneLayer().addChild(verLineNOde);
					this.mClearBoundary.push(verLineNOde);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//判断创建四角边框的方向(1=右下角 , 2=左下角, 3=右上角, 4=左上角, 5=横线,
						   //6=竖线， 7=不创建, 8=左上右下，9=左下右上)
	calCornerType: function(coordList, row7, col7 ){
		var direct1Flag = false;	//左上是否有元素
		var direct2Flag = false;	//上方是否有元素
		var direct3Flag = false;	//左边是否有元素
		var direct4Flag = false;	//该位置是否有元素
		for (var i = 0, len = coordList.length; i< len; ++i){
			var row = coordList[i].row;
			var col = coordList[i].col;
			if(row7 == row && col7 == col){
				direct4Flag = true;
			}
			if(row7 == 1 && col > 1 && (col7 - 1 == col) && row == 1 && direct4Flag){
				direct3Flag = true;
			}
			if(col == 1 && col7 == col && row > 1 && (row7 - 1 == row) && direct4Flag){
				direct2Flag = true;
			}
			if(row7 > 1 && row7 - 1 == row && col7 == col){
				direct2Flag = true;
			}
			if (row7 > 1 && col7 > 1 && row7 - 1 == row && col7 - 1 == col){
				direct1Flag = true;
			}
			if (col7 > 1 && row7 == row && col7 - 1 == col){
				direct3Flag = true;
			}
		}
		//console.log("453+++++++++++++++",direct1Flag, direct2Flag,direct3Flag,direct4Flag);
		if ((direct4Flag && !direct1Flag && !direct2Flag && !direct3Flag) || (!direct4Flag && direct1Flag && direct2Flag && direct3Flag)){	return 4; }
		if((direct4Flag && !direct1Flag && direct2Flag && !direct3Flag) || (direct1Flag && !direct2Flag && direct3Flag && !direct4Flag)){ return 6; }
		if((direct4Flag && direct1Flag && direct2Flag && !direct3Flag) || (!direct4Flag && !direct1Flag && !direct2Flag && direct3Flag )){ return 3;}
		if((direct4Flag && !direct1Flag && !direct2Flag && direct3Flag) || (direct1Flag && direct2Flag && !direct3Flag && !direct4Flag)){ return 5; }
		if((direct4Flag && !direct1Flag && direct2Flag && direct3Flag) || (direct1Flag && !direct2Flag && !direct3Flag && !direct4Flag)){ return 1; }
		if((direct4Flag && direct1Flag && !direct2Flag && direct3Flag ) || (!direct1Flag && direct2Flag && !direct3Flag && !direct4Flag)){ return 2; }
		if((direct4Flag && direct1Flag && direct2Flag && direct3Flag) || (!direct1Flag && !direct2Flag && !direct3Flag)){
			return 7;
		}
		if(direct1Flag && !direct2Flag && !direct3Flag && direct4Flag){return 8;}
		if(!direct1Flag && direct2Flag && direct3Flag && !direct4Flag){return 9;}
		return 7;
	},
	//----------------------------------------------------------------------
	//创建四角边框
	createCornerBoundary: function(coordList){
		for(var i = 1; i <= 7; ++i){
			for(var j = 1;j <= 7; ++j){
				var anchorX = 0.5, anchorY = 0.5;
				var x = 0, y = 0;
				var pos = this.getMaster().getPos(i > 6 ? 6: i, j > 6 ? 6: j);
				var image = ResURL("image_map_boundary_03.png");
				var rotation = 0;
				var width = 19
				var directType = this.calCornerType(coordList, i, j);
				if (directType != 7){
					//console.log("471++++++++++++++",i,j, directType);
					if(directType == 1){			//右下角
						rotation = 180;
						x = pos.x -  G.GRID_WIDTH/2 - 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 - 4;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 -4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 - 4;
						}
					}else if(directType == 2){		//左下角
						rotation = 270;
						x = pos.x -  G.GRID_WIDTH/2 + 5 ;
						y = pos.y -  G.GRID_HEIGHT/2 - 4;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 + 5 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 - 4;
						}
					}else if(directType == 3){		//右上角
						rotation = 90;
						x = pos.x -  G.GRID_WIDTH/2 - 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 + 5;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 - 4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 + 5;
						}
					}else if(directType == 4){		//左上角
						rotation = 0;
						x = pos.x -  G.GRID_WIDTH/2 + 4 ;
						y = pos.y -  G.GRID_HEIGHT/2 + 5;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2 + 4 ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2 + 5;
						}
					}else if(directType == 5){		//横线
						image = ResURL("image_map_boundary_01.png");
						x = pos.x - 35;
						width = 32;
						y = pos.y - G.GRID_HEIGHT/2;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2;
						}
					}
					else if(directType == 6){		//竖线
						image = ResURL("image_map_boundary_01.png");
						rotation = 90;
						width = 32;
						x = pos.x -  G.GRID_WIDTH/2 ;
						y = pos.y - 35;
						if(j == 7){
							x = pos.x +  G.GRID_WIDTH/2  ;
						}
						if(i == 7){
							y = pos.y +  G.GRID_HEIGHT/2;
						}
					}
					var cornerNode = new Laya.Image(image);
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}
				if(directType == 8){
					var cornerNode1 = new Laya.Image(image);	//左上边框（左上方元素的右下角）右下角类型
					rotation = 180;
					x = pos.x -  G.GRID_WIDTH/2 - 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 - 4;
					cornerNode1.anchorX = anchorX;
					cornerNode1.rotation = rotation;
					cornerNode1.anchorY = anchorY;
					cornerNode1.width = width;
					cornerNode1.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode1);
					this.mClearBoundary.push(cornerNode1);
					
					var cornerNode = new Laya.Image(image);	//右下（该位置左上角）	左上角类型
					rotation = 0;
					x = pos.x -  G.GRID_WIDTH/2 + 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 + 5;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}else if(directType == 9){
					var cornerNode = new Laya.Image(image);	//右上边框（右上方元素的左下角）  左下角类型
					rotation = 270;
					x = pos.x -  G.GRID_WIDTH/2 + 5 ;
					y = pos.y -  G.GRID_HEIGHT/2 - 4;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
					
					var cornerNode = new Laya.Image(image);	//右下（左边元素的右上角）  右上角类型
					rotation = 90;
					x = pos.x -  G.GRID_WIDTH/2 - 4 ;
					y = pos.y -  G.GRID_HEIGHT/2 + 5;
					cornerNode.anchorX = anchorX;
					cornerNode.rotation = rotation;
					cornerNode.anchorY = anchorY;
					cornerNode.width = width;
					cornerNode.pos(x, y );
					Controller.getView().getSceneLayer().addChild(cornerNode);
					this.mClearBoundary.push(cornerNode);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	//删除边框数据
	deleteClearBoundary: function(){
		for (var i = 0, len = this.mClearBoundary.length; i< len; ++i){
			var node = this.mClearBoundary[i];
			node.removeSelf();
			node.destroy();
		}
		this.mClearBoundary = [];
	}
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ControllerDrop.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	掉落控制器
 ***********************************************************************/
ControllerDrop = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerDrop");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function() {
	    this.mMap = this.getSibling("ComponentMap");
		this.mBornCoordList = [];       // 出现点列表
	    var rc = this.getMaster().getRowCol();
	    for (var row = 1; row <= rc.row; ++row) {
		    for (var col = 1; col <= rc.col; ++col) {
			    if (CoreDef.GridType.born == this.mMap.getGrid(row, col).getType()) {
				    this.mBornCoordList.push({row:row, col:col});
			    }
		    }
	    }
    },
	//----------------------------------------------------------------------
	// 设置掉落数据,dataMap:数据表(二维数组),orderType:数据获取顺序类型(1.随机初始row,row递减,2.随机初始row,row递增,3.初始row=maxRow,row递减,4.初始row=0,row递增)
	setDropData: function(dataMap, orderType) {
		this.mDataMap= dataMap;					// 掉落数据表
		this.mOrderType = (1 == orderType || 2 == orderType || 3 == orderType || 4 == orderType) ? orderType : 1;
	    this.mDataColIndexList = [];			// 数据列索引表(对应到第几行)
	    for (var col = 0, maxCol = this.getMaster().getRowCol().col; col < maxCol; ++col) {
			var maxRow = dataMap[col].length;
			if (1 == this.mOrderType) {
				this.mDataColIndexList[col] = Math.floor(Math.random()*(maxRow - 1) + 0.5);
			} else if (2 == this.mOrderType) {
				this.mDataColIndexList[col] = Math.floor(Math.random()*(maxRow - 1) + 0.5);
			} else if (3 == this.mOrderType) {
				this.mDataColIndexList[col] = maxRow - 1;
			} else if (4 == this.mOrderType) {
				this.mDataColIndexList[col] = 0;
			}
	    }
	},
	//----------------------------------------------------------------------
	// 获取元素id
	getElementId: function(col, row) {
		col = col - 1;
		var row = this.mDataColIndexList[col];		// 当前列索引位置(对应到第几行)
		var elementId = this.mDataMap[row][col];	// 掉落数据表指定位置的数据
		var maxRow = this.mDataMap[row].length;
		if (1 == this.mOrderType) {
			row = row - 1;
			row =  (row < 0) ? (maxRow - 1) : row;
		} else if (2 == this.mOrderType) {
			row = row  + 1;
			row =  (row >= maxRow) ? 0 : row;
		} else if (3 == this.mOrderType) {
			row = row - 1;
			row =  (row < 0) ? (maxRow - 1) : row;
		} else if (4 == this.mOrderType) {
			row = row + 1;
			row =  (row >= maxRow) ? 0 : row;
		}
		this.mDataColIndexList[col] = row;
		return elementId
	},
	//----------------------------------------------------------------------
	// 生成元素
	generateElement: function(batch) {
		for (var i = 0, len = this.mBornCoordList.length; i < len; ++i) {
			var bornCoord = this.mBornCoordList[i];
			if (!this.mMap.getElement(bornCoord.row, bornCoord.col, CoreDef.ElementTag.object)) {   // 出生点无元素
				var elementId = this.getElementId(bornCoord.col, batch);
				if (!isNaN(elementId) && elementId > 0) {
					var element = this.mMap.createElement(elementId);
					var pos = this.getMaster().getPos(bornCoord.row, bornCoord.col);
					if (element.getNode()) {
						element.getNode().pos(pos.x, pos.y);
						element.getNode().visible = false;
					}
					element.is_new_flag = true;     // 新生成标识
					this.mMap.addElement(bornCoord.row, bornCoord.col, element);
				}
			}
		}
	},
	//----------------------------------------------------------------------
	// 是否可掉落
	isCanDrop: function(row, col) {
		var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
		var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
		var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
		return (objectElement && objectElement.isCanDrop())
			&& (!attachElement || attachElement.isCanDrop())
			&& (!overlayElement || overlayElement.isCanDrop());
	},
	//----------------------------------------------------------------------
	// 是否可掉落到指定坐标
	isCanDropTo: function(coordSrc, coordTarget) {
		return this.mMap.isCanContact(coordSrc.row, coordSrc.col, coordTarget.row, coordTarget.col)
			&& CoreDef.GridType.normal == this.mMap.getGrid(coordTarget.row, coordTarget.col).getType()
			&& !this.mMap.getElement(coordTarget.row, coordTarget.col, CoreDef.ElementTag.object);
	},
	//----------------------------------------------------------------------
	// 掉落单个
	dropOne: function(row, col) {
		if (!this.getMaster().isCoordValid(row, col)) {
			return;
		}
		if (!this.isCanDrop(row, col)) {
			return;
		}
		// 搜索路径
		var rc = this.getMaster().getRowCol();
		var coordPath = CA.searchDropPath(rc.row, row, col, true, function(curr, down) {
			return this.isCanDropTo(curr, down,row, col);
		}, null, null, null, this);
		if (0 == coordPath.length) {	// 无掉落路径
			var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
			if (CoreDef.GridType.born == this.mMap.getGrid(row, col).getType() && objectElement.is_new_flag) {
				delete objectElement.is_new_flag;
				return {elements:[objectElement, attachElement, overlayElement], coord_begin:{row:row, col:col}, pos_path:[]};
			}
		} else {
			// 位置置换
			var coordTarget = coordPath[coordPath.length - 1];
			var objectElement = this.mMap.delElement(row, col, CoreDef.ElementTag.object);
			var attachElement = this.mMap.delElement(row, col, CoreDef.ElementTag.attach);
			var overlayElement = this.mMap.delElement(row, col, CoreDef.ElementTag.overlay);
			this.mMap.addElement(coordTarget.row, coordTarget.col, objectElement);
			this.mMap.addElement(coordTarget.row, coordTarget.col, attachElement);
			this.mMap.addElement(coordTarget.row, coordTarget.col, overlayElement);
			// 信息返回
			var posPath = [];
			for (var i = 0, len = coordPath.length; i < len; ++i) {
				var pos = this.getMaster().getPos(coordPath[i].row, coordPath[i].col);
				posPath.push(pos);
			}
			return {
				elements: [objectElement, attachElement, overlayElement],
				coord_begin: {row:row, col:col},
				pos_path: posPath
			};
		}
	},
	//----------------------------------------------------------------------
	// 开始掉落
	startDrop: function(times, dropCB, target) {
		var rc = this.getMaster().getRowCol();
		// 搜索已有掉落
		var oldInfoList = [];
		CA.searchDropList(rc.row, rc.col, function(row, col, batch) {
			var oldInfo = this.dropOne(row, col);
			if (oldInfo) {
				oldInfo.batch = batch;
				oldInfoList.push(oldInfo);
				return true;
			}
		}, null, this);
		// 搜索新的掉落
		var newInfoList = [];
		CA.searchDropList(rc.row, rc.col, function(row, col, batch) {
			var newInfo = this.dropOne(row, col);
			if (newInfo) {
				newInfo.batch = batch;
				newInfoList.push(newInfo);
				return true;
			}
		}, function(batch) {
			this.generateElement(batch);
		}, this);
		// 新的掉落表现
		this.dropNewImplFunc = function() {
			var newDropCount = newInfoList.length;
			if (0 == newDropCount) {
				dropCB.apply(target, [true]);
			} else {
				for (var i = 0, len = newInfoList.length; i < len; ++i) {   // 播放动画
					var newInfo = newInfoList[i];
					var objectElement = newInfo.elements[0];
					var attachElement = newInfo.elements[1];
					var overlayElement = newInfo.elements[2];
					Action.playNewElementDrop(times, overlayElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, null, this);
					Action.playNewElementDrop(times, attachElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, null, this);
					Action.playNewElementDrop(times, objectElement, newInfo.coord_begin, newInfo.pos_path, newInfo.batch, function() {
						if (--newDropCount <= 0) {
							dropCB.apply(target, [true]);
						}
					}, this);
				}	
			}
		};
		// 已有掉落表现
		var oldDropCount = oldInfoList.length;
		if (0 == oldDropCount) {
			this.dropNewImplFunc();
		} else {
			for (var i = 0, len = oldInfoList.length; i < len; ++i) {   // 播放动画
				var oldInfo = oldInfoList[i];
				var objectElement = oldInfo.elements[0];
				var attachElement = oldInfo.elements[1];
				var overlayElement = oldInfo.elements[2];
				Action.playOldElementDrop(times, overlayElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, null, this);
				Action.playOldElementDrop(times, attachElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, null, this);
				Action.playOldElementDrop(times, objectElement, oldInfo.coord_begin, oldInfo.pos_path, oldInfo.batch, function() {
					if (--oldDropCount <= 0) {
						this.dropNewImplFunc();
					}
				}, this);
			}
		}
	}
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ControllerGain.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	目标控制器
 ***********************************************************************/
ControllerGain = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerGain");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function(showDisplay) {
        this.mMap = this.getSibling("ComponentMap");
        this.mShowDisplay = showDisplay;
		this.mGameSection = game_section["normal"];     // 游戏阶段
    	this.mNormalClearCount = 0;                 	// 常规阶段元素消除数量
    	this.mNormalScreenTimes = 0;                	// 常规阶段刷屏次数
		this.mTimesNormalMap = {};
		this.mTimesBonus1Map = {};
		this.mTimesBonus2Map = {};
		this.mTimesBonus3Map = {};
        this.bind(EventDef["ED_CORE_CLEAR_OBJECT"], this.onObjectClear);  // 注册物件被消除事件
    },
    //----------------------------------------------------------------------
    // 物件被消除事件
    onObjectClear: function(objectId, row, col) {
        if (game_section["normal"] == this.mGameSection) {          // 常规阶段
			this.mTimesNormalMap[objectId] = isNaN(this.mTimesNormalMap[objectId]) ? 1 : ++this.mTimesNormalMap[objectId];
            ++this.mNormalClearCount;
            EventCenter.post(EventDef["ED_PROGRESS_BONUS1"], this.mNormalClearCount);
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段
			this.mTimesBonus1Map[objectId] = isNaN(this.mTimesBonus1Map[objectId]) ? 1 : ++this.mTimesBonus1Map[objectId];
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段
			this.mTimesBonus2Map[objectId] = isNaN(this.mTimesBonus2Map[objectId]) ? 1 : ++this.mTimesBonus2Map[objectId];
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段
			this.mTimesBonus3Map[objectId] = isNaN(this.mTimesBonus3Map[objectId]) ? 1 : ++this.mTimesBonus3Map[objectId];
        }
    },
	//----------------------------------------------------------------------
    // 获取当前的状态
    getGameSection: function() {
		return this.mGameSection;
    },
	//----------------------------------------------------------------------
    // 重置每次的收获
    resetTimesGain: function() {
		this.mTimesNormalMap = {};
		this.mTimesBonus1Map = {};
		this.mTimesBonus2Map = {};
		this.mTimesBonus3Map = {};
    },
    //----------------------------------------------------------------------
    // 重置收获
    resetGain: function() {
        this.mGameSection = game_section["normal"];
        this.mNormalClearCount = 0;
        this.mNormalScreenTimes = 0;
		this.resetTimesGain();
    },
	 //----------------------------------------------------------------------
    // 每次都更新左边收获
    updateGain:function(times) {
		if (game_section["normal"] == this.mGameSection) {          // 常规阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["normal"], times, this.mTimesNormalMap);
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus1"], times, this.mTimesBonus1Map);
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段结束 
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus2"], times, this.mTimesBonus2Map);
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段结束
            EventCenter.post(EventDef["ED_ADD_TO_LIST"], game_section["bonus3"], times, this.mTimesBonus3Map);
        }
		this.resetTimesGain();
    },
	//----------------------------------------------------------------------
	// 触发bonus,count:消除个数,times:刷屏次数,effect1:bonus1产生的效果,effect3:bonus3产生的效果
	triggerBonus: function(count, times, effect1, effect3, checkCB, target) {
		if (game_section["normal"] == this.mGameSection) {          // 常规阶段结束
            if (this.mShowDisplay) {
                console.log("常规阶段结束");
            }
            this.mNormalClearCount = count;
            this.mNormalScreenTimes = times;
            if (this.mNormalClearCount >= G.BONUS_1) {                      // 触发bonus1
                AudioModel.playSound(2005);
                this.mGameSection = game_section["bonus1"];
				Action.playBonus1HintAction(function() {
					this.onBonus1(effect1, function() {
						checkCB.apply(target, [game_section["bonus1"], false]);
					}, this);
				}, this)
            } else if (this.mNormalScreenTimes >= G.BONUS_2) {              // 触发bonus2
                this.mGameSection = game_section["bonus2"];
				Action.playBonus2HintAction(function() {
					this.onBonus2(function() {
						checkCB.apply(target, [game_section["bonus2"], false]);
					}, this);
				}, this)
            } else {	                                                    // 几率触发bonus3(常规阶段无触发bonus1,bonus2)
                if (effect3) {  // 触发bonus3
                    this.mGameSection = game_section["bonus3"];
					Action.playBonus3HintAction(function() {
						this.onBonus3(effect3, function() {
							checkCB.apply(target, [game_section["bonus3"], false]);
						}, this);
					},this)
                } else {        // 不触发bonus3
                    checkCB.apply(target, [game_section["normal"], true]);
                }
            }
            return;
        } else if (game_section["bonus1"] == this.mGameSection) {   // bonus1阶段结束
            if (this.mShowDisplay) {
                console.log("bonus1阶段结束");
            }
            if (this.mNormalScreenTimes >= G.BONUS_2) {                     // 触发bonus2
                this.mGameSection = game_section["bonus2"];
				Action.playBonus2HintAction(function() {
					this.onBonus2(function() {
						checkCB.apply(target, [game_section["bonus2"], false]);
					}, this);
				},this)
                return;
            }
            checkCB.apply(target, [game_section["bonus1"], true]);
        } else if (game_section["bonus2"] == this.mGameSection) {   // bonus2阶段结束
            if (this.mShowDisplay) {
                console.log("bonus2阶段结束");
            }
           checkCB.apply(target, [game_section["bonus2"], true]);
        } else if (game_section["bonus3"] == this.mGameSection) {   // bonus3阶段结束
            if (this.mShowDisplay) {
                console.log("bonus3阶段结束");
            }
            checkCB.apply(target, [game_section["bonus3"], true]);
        }
	},
    //----------------------------------------------------------------------
    // 触发bonus1
    onBonus1: function(effect1, callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus1");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus1"]);
        if (bonus_type["random_replace"] == effect1.type) {             // 随机替换
            this.doRandomReplace(callback, target);
        } else if (bonus_type["discolor_ray"] == effect1.type) {        // 变色射线
            this.doDiscolorRay(callback, target);
        } else if (bonus_type["diagonal_discolor"] == effect1.type) {   // 对角变色
            this.doDiagonalDiscolor(callback, target);
        } else {
            console.log("特效类型: " + effect1.type);
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 触发bonus2
    onBonus2: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus2");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus2"]);
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            for (var col = 1; col <= rc.col; ++col) {
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (!overlayElement || CoreDef.OverlayType.fixed != overlayElement.getType()) {
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 清屏操作
        var count = coordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            AudioModel.playMusic(1999);
            for (var i = 0, len = coordList.length; i < len; ++i) {
                var coord = coordList[i];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var objectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.attach);
                Action.playElementScreenOut(attachElement, coord, pos, null, this);
                Action.playElementScreenOut(objectElement, coord, pos, function() {
                    if (--count <= 0) {
                        var levelData = DataTB.get("level_tplt", Controller.getLevelId(), true);
                        AudioModel.playMusic(levelData.music);
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 触发bonus3
    onBonus3: function(effect3, callback, target) {
        if (this.mShowDisplay) {
            console.log("触发bonus3");
        }
        EventCenter.post(EventDef["ED_ON_BONUS"], game_section["bonus3"]);
        if (bonus_type["random_all_match"] == effect3.type) {           // 随机百搭
            this.doRandomAllMatch(effect3.value, callback, target);
        } else if (bonus_type["fixed_all_match"] == effect3.type) {     // 固定百搭
            this.doFixedAllMatch(effect3.value, callback, target);
        } else if (bonus_type["position_swap"] == effect3.type) {       // 位置互换
            AudioModel.playSound(3011);
            this.doPositionSwap(callback, target);
        } else if (bonus_type["element_fixed"] == effect3.type) {       // 元素固定
            this.doElementFixed(callback, target);
        } else if (bonus_type["random_ramble"] == effect3.type) {       // 随机漫步
            AudioModel.playSound(3012);
            this.doRandomRamble(callback, target);
        } else if (bonus_type["rainbow_clear"] == effect3.type) {       // 彩虹消
            this.doRainbowClear(callback, target);
        } else if (bonus_type["screen_clear"] == effect3.type) {        // 全屏随机消除
            this.doScreenClear(effect3.value, callback, target);
        } else  {
            console.log("特效类型: " + effect3.type);
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 替换物件元素
    replaceObject: function(row, col, newObjectId) {
        var pos = this.getMaster().getPos(row, col);
        var oldObjectElement = this.mMap.delElement(row, col, CoreDef.ElementTag.object);
        var newObjectElement = this.mMap.createElement(newObjectId);
        if (newObjectElement.getNode()) {
            newObjectElement.getNode().pos(pos.x, pos.y);
            newObjectElement.getNode().visible = false;
        }
        this.mMap.addElement(row, col, newObjectElement);
        return {old_object: oldObjectElement, new_object: newObjectElement, pos: pos};
    },
    //----------------------------------------------------------------------
    // 随机替换
    doRandomReplace: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("随机替换");
        }
        var infoMap = {};
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
						infoMap[baseType] = infoMap[baseType] || [];
						infoMap[baseType].push({row:row, col:col, object_id:objectElement.getId()});
					}
				}
            }
        }
        // 元素基础类型列表
        var baseTypeList = []
        for (var key in infoMap) {
            if (infoMap.hasOwnProperty(key)) {
                baseTypeList.push(key);
            }
        }
        // 随机出元素类型(目标元素类型,要被替换的元素类型)
        var targetIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var targetBaseType = baseTypeList[targetIndex];
        var targetInfoList = infoMap[targetBaseType];
        var targetObjectId = targetInfoList[0].object_id;
        baseTypeList.splice(targetIndex, 1);
        var srcIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var srcBaseType = baseTypeList[srcIndex];
        var srcInfoList = infoMap[srcBaseType];
        // 替换操作
        var count = srcInfoList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var i = 0, len = srcInfoList.length; i < len; ++i) {
                var srcInfo = srcInfoList[i];
                var info = this.replaceObject(srcInfo.row, srcInfo.col, targetObjectId);
                // 操作动画
                Action.playRandomReplaceAction(info.old_object, info.new_object, info.pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 变色射线
    doDiscolorRay: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("变色射线");
        }
        var coordList = [];
        // 遍历场上中间4x4区域
        var rc = this.getMaster().getRowCol();
        for (var row = 2; row <= 5; ++row) {
			for (var col = 2; col <= 5; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
						coordList.push(CA.makeCoord(row, col));
					}
				}
            }
        }
        // 随机出元素信息
        var targetIndex = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
        var targetCoord = coordList[targetIndex];
        // 获取变色区域
        var upCoordList = [];        // 上方向区域
        var downCoordList = [];      // 下方向区域
        var leftCoordList = [];      // 左方向区域
        var rightCoordList = [];     // 右方向区域
        var crossCoordList = CA.getCrossRange(targetCoord.row, targetCoord.col, G.MAP_ROW);
        for (var i = 0, len = crossCoordList.length; i < len; ++i) {
            var srcCoord = crossCoordList[i];
            if (this.getMaster().isCoordValid(srcCoord.row, srcCoord.col)) {
                var srcObjectElement = this.mMap.getElement(srcCoord.row, srcCoord.col, CoreDef.ElementTag.object);
                if (srcObjectElement && CoreDef.ObjectType.normal == srcObjectElement.getType()) {  // 普通元素
                    if (srcCoord.row < targetCoord.row && srcCoord.col == targetCoord.col) {	    // 上方向
                        upCoordList.push(srcCoord);
                    } else if (srcCoord.row > targetCoord.row && srcCoord.col == targetCoord.col) {	// 下方向
                        downCoordList.push(srcCoord);
                    } else if (srcCoord.row == targetCoord.row && srcCoord.col < targetCoord.col) {	// 左方向
                        leftCoordList.push(srcCoord);
                    } else if (srcCoord.row == targetCoord.row && srcCoord.col > targetCoord.col) {	// 右方向
                        rightCoordList.push(srcCoord);
                    }
                }
            }
        }
        // 替换操作
        var count = upCoordList.length + downCoordList.length + leftCoordList.length + rightCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            var targetPos = this.getMaster().getPos(targetCoord.row, targetCoord.col);
            var targetObjectIds = [20101, 20102, 20103, 20104, 20105, 20106, 20107];
            // 上方向替换
            var upIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var upObjectId = targetObjectIds[upIndex];
            for (var i = 0, len = upCoordList.length; i < len; ++i) {
                var upCoord = upCoordList[i];
                var info = this.replaceObject(upCoord.row, upCoord.col, upObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "up", upCoordList.length, null, null);
            // 下方向替换
            var downIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var downObjectId = targetObjectIds[downIndex];
            for (var i = 0, len = downCoordList.length; i < len; ++i) {
                var downCoord = downCoordList[i];
                var info = this.replaceObject(downCoord.row, downCoord.col, downObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "down", downCoordList.length, null, null);
            // 左方向替换
            var leftIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var leftObjectId = targetObjectIds[leftIndex];
            for (var i = 0, len = leftCoordList.length; i < len; ++i) {
                var leftCoord = leftCoordList[i];
                var info = this.replaceObject(leftCoord.row, leftCoord.col, leftObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "left", leftCoordList.length, null, null);
            // 右方向替换
            var rightIndex = Math.floor(Math.random()*(targetObjectIds.length - 1) + 0.5);
            var rightObjectId = targetObjectIds[rightIndex];
            for (var i = 0, len = rightCoordList.length; i < len; ++i) {
                var rightCoord = rightCoordList[i];
                var info = this.replaceObject(rightCoord.row, rightCoord.col, rightObjectId);
                // 操作动画
                Action.playDiscolorRayAction1(info.old_object, info.new_object, info.pos, i, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
            Action.playDiscolorRayAction2(targetPos, "right", rightCoordList.length, null, null);
        }
    },
    //----------------------------------------------------------------------
    // 对角变色
    doDiagonalDiscolor: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("对角变色");
        }
        var infoList = [];
        // 遍历4个对角
        var coordList = [[1, 1], [1, 6], [6, 1], [6, 6]];   // 对角坐标
        for (var i = 0, len = coordList.length; i < len; ++i) {
            var row = coordList[i][0];
            var col = coordList[i][1];
            var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
			if(objectElement){
				var baseType = objectElement.getSubType();
				if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType) {  // 普通元素,且非百搭
					infoList.push({row:row, col:col, object_id:objectElement.getId()});
				}
			}  
        }
        // 随机1个对角
        var targetIndex = Math.floor(Math.random()*(infoList.length - 1) + 0.5);
        var targetInfo = infoList[targetIndex];
        var targetObjectId = targetInfo.object_id;
        // 获取变色区域
        var diagonalCoordList = [];
        if (1 == targetInfo.row && 1 == targetInfo.col) {
            diagonalCoordList = [[2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
        } else if (1 == targetInfo.row && 6 == targetInfo.col) {
            diagonalCoordList = [[2, 5], [3, 4], [4, 3], [5, 2], [6, 1]];
        } else if (6 == targetInfo.row && 1 == targetInfo.col) {
            diagonalCoordList = [[5, 2], [4, 3], [3, 4], [2, 5], [1, 6]];
        } else if (6 == targetInfo.row && 6 == targetInfo.col) {
            diagonalCoordList = [[5, 5], [4, 4], [3, 3], [2, 2], [1, 1]];
        }
        var srcInfoList = [];
        for (var j = 0, l = diagonalCoordList.length; j < l; ++j) {
            var srcRow = diagonalCoordList[j][0];
            var srcCol = diagonalCoordList[j][1];
            var srcObjectElement = this.mMap.getElement(srcRow, srcCol, CoreDef.ElementTag.object);
            if (srcObjectElement && CoreDef.ObjectType.normal == srcObjectElement.getType()) {  // 普通元素
                srcInfoList.push({row:srcRow, col:srcCol, object_id:srcObjectElement.getId()});
            }
        }
        // 替换操作
        var count = srcInfoList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            var pos = this.getMaster().getPos(targetInfo.row, targetInfo.col);
            Action.playDiagonalDiscolorAction1(CA.makeCoord(targetInfo.row, targetInfo.col), pos, null, null);
            for (var i = 0, len = srcInfoList.length; i < len; ++i) {
                var srcInfo = srcInfoList[i];
                var info = this.replaceObject(srcInfo.row, srcInfo.col, targetObjectId);
                // 操作动画(随机替换动画)
                Action.playRandomReplaceAction(info.old_object, info.new_object, info.pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 随机百搭
    doRandomAllMatch: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("随机百搭: " + value);
        }
        if (0 == value) {
            callback.apply(target, []);
            return;
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (objectElement && CoreDef.ObjectType.normal == objectElement.getType()
                    && CoreDef.BaseType.wail != objectElement.getSubType()
                    && !attachElement && !overlayElement) {  // 普通元素,且非百搭,且无附件,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
        // 生成百搭元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var j = 0, len = randomCoordList.length; j < len; ++j) {
                var coord = randomCoordList[j];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var srcObjectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var targetObjectElement = this.mMap.createElement(20108);   // 百搭
                if (targetObjectElement.getNode()) {
                    targetObjectElement.getNode().pos(pos.x, pos.y);
                    targetObjectElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, targetObjectElement);
                // 操作动画
                Action.playRandomAllMatchAction(srcObjectElement, targetObjectElement, pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 固定百搭
    doFixedAllMatch: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("固定百搭: " + value);
        }
        if (0 == value) {
            callback.apply(target, []);
            return;
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 2; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (CoreDef.ObjectType.normal == objectElement.getType()
                    && CoreDef.BaseType.wail != objectElement.getSubType()
                    && !attachElement && !overlayElement) {  // 普通元素,且非百搭,且无附件,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
        // 生成固定百搭元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var j = 0, len = randomCoordList.length; j < len; ++j) {
				AudioModel.playSound(3004);
                var coord = randomCoordList[j];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var srcObjectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                var targetObjectElement = this.mMap.createElement(20108);   // 百搭
                if (targetObjectElement.getNode()) {
                    targetObjectElement.getNode().pos(pos.x, pos.y);
                    targetObjectElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, targetObjectElement);
                var overlayElement = this.mMap.createElement(40100);    // 固定
                if (overlayElement.getNode()) {
                    overlayElement.getNode().pos(pos.x, pos.y);
                    overlayElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, overlayElement);
                // 操作动画
                Action.playFixedAllMatchAction(srcObjectElement, targetObjectElement, overlayElement, pos, function() {
                    if (--count <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 位置互换
    doPositionSwap: function(callback, target) {
        // 四个对角坐标列表
        var leftUpCoordList = [];
        var rightUpCoordList = [];
        var leftDownCoordList = [];
        var rightDownCoordList = [];
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
            for (var col = 1; col <= rc.col; ++col) {
                if (row >= 1 && row <= rc.row/2) {
                    if (col >= 1 && col <= rc.col/2) { // 左上角
                        leftUpCoordList.push(CA.makeCoord(row, col));
                    } else {    // 右上角
                        rightUpCoordList.push(CA.makeCoord(row, col));
                    }
                } else {
                    if (col >= 1 && col <= rc.col/2) { // 左下角
                        leftDownCoordList.push(CA.makeCoord(row, col));
                    } else {    // 右下角
                        rightDownCoordList.push(CA.makeCoord(row, col));
                    }
                }
            }
        }
        // 随机出互换方法
        var swapTypeList = [1,2,3,4,5]; // 互换方法:1.顺时针,2.逆时针,3.交叉,4.横向,5.竖向
        var randomIndex = Math.floor(Math.random()*(swapTypeList.length - 1) + 0.5);
        var swapType = swapTypeList[randomIndex];
        // 互换操作
        this.swapImplFunc1 = function(coordList1, coordList2, coordList3, coordList4) {
            var infoList = [];
            var count = coordList1.length;
            for (var i = 0; i < count; ++i) {
                var coord1 = coordList1[i];
                var pos1 = this.getMaster().getPos(coord1.row, coord1.col);
                var coord2 = coordList2[i];
                var pos2 = this.getMaster().getPos(coord2.row, coord2.col);
                var coord3 = coordList3[i];
                var pos3 = this.getMaster().getPos(coord3.row, coord3.col);
                var coord4 = coordList4[i];
                var pos4 = this.getMaster().getPos(coord4.row, coord4.col);
                // 元素互换
                var objectElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.object);
                var attachElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.attach);
                var overlayElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.overlay);
                var objectElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.object);
                var attachElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.attach);
                var overlayElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.overlay);
                var objectElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.object);
                var attachElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.attach);
                var overlayElement3 = this.mMap.delElement(coord3.row, coord3.col, CoreDef.ElementTag.overlay);
                var objectElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.object);
                var attachElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.attach);
                var overlayElement4 = this.mMap.delElement(coord4.row, coord4.col, CoreDef.ElementTag.overlay);
                this.mMap.addElement(coord1.row, coord1.col, objectElement4);
                this.mMap.addElement(coord1.row, coord1.col, attachElement4);
                this.mMap.addElement(coord1.row, coord1.col, overlayElement4);
                this.mMap.addElement(coord2.row, coord2.col, objectElement1);
                this.mMap.addElement(coord2.row, coord2.col, attachElement1);
                this.mMap.addElement(coord2.row, coord2.col, overlayElement1);
                this.mMap.addElement(coord3.row, coord3.col, objectElement2);
                this.mMap.addElement(coord3.row, coord3.col, attachElement2);
                this.mMap.addElement(coord3.row, coord3.col, overlayElement2);
                this.mMap.addElement(coord4.row, coord4.col, objectElement3);
                this.mMap.addElement(coord4.row, coord4.col, attachElement3);
                this.mMap.addElement(coord4.row, coord4.col, overlayElement3);
                //
                var info1 = {
                    elements: [objectElement1, attachElement1, overlayElement1],
                    pos:{x:pos2.x, y:pos2.y}
                };
                var info2 = {
                    elements: [objectElement2, attachElement2, overlayElement2],
                    pos:{x:pos3.x, y:pos3.y}
                };
                var info3 = {
                    elements: [objectElement3, attachElement3, overlayElement3],
                    pos:{x:pos4.x, y:pos4.y}
                };
                var info4 = {
                    elements: [objectElement4, attachElement4, overlayElement4],
                    pos:{x:pos1.x, y:pos1.y}
                };
                infoList.push(info1);
                infoList.push(info2);
                infoList.push(info3);
                infoList.push(info4);
            }
            return infoList;
        };
        this.swapImplFunc2 = function(coordList1, coordList2) {
            var infoList = [];
            var count = coordList1.length;
            for (var i = 0; i < count; ++i) {
                var coord1 = coordList1[i];
                var pos1 = this.getMaster().getPos(coord1.row, coord1.col);
                var coord2 = coordList2[i];
                var pos2 = this.getMaster().getPos(coord2.row, coord2.col);
                // 元素互换
                var objectElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.object);
                var attachElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.attach);
                var overlayElement1 = this.mMap.delElement(coord1.row, coord1.col, CoreDef.ElementTag.overlay);
                var objectElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.object);
                var attachElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.attach);
                var overlayElement2 = this.mMap.delElement(coord2.row, coord2.col, CoreDef.ElementTag.overlay);
                this.mMap.addElement(coord1.row, coord1.col, objectElement2);
                this.mMap.addElement(coord1.row, coord1.col, attachElement2);
                this.mMap.addElement(coord1.row, coord1.col, overlayElement2);
                this.mMap.addElement(coord2.row, coord2.col, objectElement1);
                this.mMap.addElement(coord2.row, coord2.col, attachElement1);
                this.mMap.addElement(coord2.row, coord2.col, overlayElement1);
                //
                var info1 = {
                    elements: [objectElement1, attachElement1, overlayElement1],
                    pos:{x:pos2.x, y:pos2.y}
                };
                var info2 = {
                    elements: [objectElement2, attachElement2, overlayElement2],
                    pos:{x:pos1.x, y:pos1.y}
                };
                infoList.push(info1);
                infoList.push(info2);
            }
            return infoList;
        };
        if (1 == swapType) {        // 顺时针:左上角->右上角->右下角->左下角->左上角
            if (this.mShowDisplay) {
                console.log("位置互换,顺时针");
            }
            var infoList = this.swapImplFunc1(leftUpCoordList, rightUpCoordList, rightDownCoordList, leftDownCoordList);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (2 == swapType) { // 逆时针:左上角->左下角->右下角->右上角->左上角
            if (this.mShowDisplay) {
                console.log("位置互换,逆时针");
            }
            var infoList = this.swapImplFunc1(leftUpCoordList, leftDownCoordList, rightDownCoordList, rightUpCoordList);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (3 == swapType) { // 交叉:左上角<->右下角,右上角<->左下角
            if (this.mShowDisplay) {
                console.log("位置互换,交叉");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, rightDownCoordList);
            var infoList2 = this.swapImplFunc2(rightUpCoordList, leftDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (4 == swapType) { // 横向:左上角<->右上角,左下角<->右下角
            if (this.mShowDisplay) {
                console.log("位置互换,横向");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, rightUpCoordList);
            var infoList2 = this.swapImplFunc2(leftDownCoordList, rightDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else if (5 == swapType) { // 竖向:左上角<->左下角,右上角<->右下角
            if (this.mShowDisplay) {
                console.log("位置互换,竖向");
            }
            var infoList1 = this.swapImplFunc2(leftUpCoordList, leftDownCoordList);
            var infoList2 = this.swapImplFunc2(rightUpCoordList, rightDownCoordList);
            var infoList = infoList1.concat(infoList2);
            var infoCount = infoList.length;
            for (var i = 0, len = infoList.length; i < len; ++i) {
                Action.playPositionSwapAction1(infoList[i].elements, infoList[i].pos, function() {
                    if (--infoCount <= 0) {
                        callback.apply(target, []);
                    }
                }, this);
            }
        } else {
            if (this.mShowDisplay) {
                console.log("位置互换,未知类型: " + swapType);
            }
            callback.apply(target, []);
        }
    },
    //----------------------------------------------------------------------
    // 元素固定
    doElementFixed: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("元素固定");
        }
        var coordMap= {};
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 2; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var attachElement = this.mMap.getElement(row, col, CoreDef.ElementTag.attach);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
				if(objectElement){
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && CoreDef.BaseType.wail != baseType
						&& !attachElement && !overlayElement) {  // 普通元素,且非百搭,且无附件,且无覆盖
						coordMap[baseType] = coordMap[baseType] || [];
						coordMap[baseType].push(CA.makeCoord(row, col));
					}
				} 
            }
        }
        // 元素基础类型列表
        var baseTypeList = []
        for (var key in coordMap) {
            if (coordMap.hasOwnProperty(key)) {
                baseTypeList.push(key);
            }
        }
        // 随机出元素类型
        var randomIndex = Math.floor(Math.random()*(baseTypeList.length - 1) + 0.5);
        var randomBaseType = baseTypeList[randomIndex];
        var randomCoordList = coordMap[randomBaseType];
        // 清屏操作
        function innerScreenClear() {
            // 遍历地图可清屏坐标
            var coordList = [];
            var rc = this.getMaster().getRowCol();
            for (var row = rc.row; row >= 1; --row) {
                for (var col = 1; col <= rc.col; ++col) {
                    var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                    var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                    if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {
                        coordList.push(CA.makeCoord(row, col));
                    }
                }
            }
            // 执行动作
            var count = coordList.length;
            if (0 == count) {
                callback.apply(target, []);
            } else {
                for (var i = 0, len = coordList.length; i < len; ++i) {
                    var coord = coordList[i];
                    var pos = this.getMaster().getPos(coord.row, coord.col);
                    var objectElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.object);
                    var attachElement = this.mMap.delElement(coord.row, coord.col, CoreDef.ElementTag.attach);
                    Action.playElementScreenOut(attachElement, coord, pos, null, this);
                    Action.playElementScreenOut(objectElement, coord, pos, function() {
                        if (--count <= 0) {
                            Controller.onDrop(0, 0, null, callback, target);
                        }
                    }, this);
	            }
            }
        }
        // 生成固定元素
        var count = randomCoordList.length;
        if (0 == count) {
            callback.apply(target, []);
        } else {
            for (var i = 0, len = randomCoordList.length; i < len; ++i) {
                var coord = randomCoordList[i];
                var pos = this.getMaster().getPos(coord.row, coord.col);
                var overlayElement = this.mMap.createElement(40100);    // 固定
                if (overlayElement.getNode()) {
                    overlayElement.getNode().pos(pos.x, pos.y);
                    overlayElement.getNode().visible = false;
                }
                this.mMap.addElement(coord.row, coord.col, overlayElement);
                // 操作动画
                Action.playElementFixedAction(overlayElement, pos, function() {
                    if (--count <= 0) {
                        innerScreenClear.apply(this, []);
                    }
                }, this);
            }
        }
    },
    //----------------------------------------------------------------------
    // 随机漫步
    doRandomRamble: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("随机漫步");
        }
        var coordList = [];
        // 遍历场上中间4x4区域
        var rc = this.getMaster().getRowCol();
        for (var row = 2; row <= 5; ++row) {
			for (var col = 2; col <= 5; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
				if (objectElement) {
                    var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
					var baseType = objectElement.getSubType();
					if (CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
						coordList.push(CA.makeCoord(row, col));
					}
				}
            }
        }
        // 随机出起始位置
        var beginIndex = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
        var beginCoord = coordList[beginIndex];
        // 从四个方向获取随机一个坐标(不回头,根据前一个坐标)
        var directs = {to_up:true, to_down:true, to_left:true, to_right:true};
        this.getRandomCrossCoord = function(preCoord, currCoord) {
            if (preCoord) { // 不能回头
                if (preCoord.row > currCoord.row) { // 之前往上走,不能往下走
                    directs.to_down = false;
                } else if (preCoord.row < currCoord.row) { // 之前往下走,不能往上走
                    directs.to_up = false;
                } else if (preCoord.col > currCoord.col) {	// 之前往左走,不能往右走
                    directs.to_right = false;
                } else if (preCoord.col < currCoord.col) { // 之前往右走,不能往左走
                    directs.to_left = false;
                }
            } 
            if (1 == currCoord.row || rc.row == currCoord.row || 1 == currCoord.col || rc.col == currCoord.col) {
                return;
            }
            var randomCoordList = [];
            var crossCoordList = CA.getCrossRange(currCoord.row, currCoord.col, 1);
            for (var i = 0, len = crossCoordList.length; i < len; ++i) {
                var crossCoord = crossCoordList[i];
                if (this.getMaster().isCoordValid(crossCoord.row, crossCoord.col)) {
                    if (crossCoord.row < currCoord.row && crossCoord.col == currCoord.col) {   // 往上方向
                        if (directs.to_up) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row > currCoord.row && crossCoord.col == currCoord.col) {   // 往下方向
                        if (directs.to_down) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row == currCoord.col && crossCoord.col < currCoord.col) {   // 往左方向
                        if (directs.to_left) {
                            randomCoordList.push(crossCoord);
                        }
                    } else if (crossCoord.row == currCoord.col && crossCoord.col >= currCoord.col) {   // 往右方向
                        if (directs.to_right) {
                            randomCoordList.push(crossCoord);
                        }
                    }
                }
            }
            var randomIndex = Math.floor(Math.random()*(randomCoordList.length - 1) + 0.5);
            return randomCoordList[randomIndex];
        }
        // 漫步表现
        this.rambleImplFunc = function(preCoord, currCoord) {
            var coord = this.getRandomCrossCoord(preCoord, currCoord);
            var objectElement = this.mMap.getElement(currCoord.row, currCoord.col, CoreDef.ElementTag.object);
            var pos = this.getMaster().getPos(currCoord.row, currCoord.col);
            if (objectElement) {
                Action.playRandomRambleAction1(pos, function() {
                    Action.playRandomRambleAction2(pos, currCoord, coord, null, this);
                    this.getSibling("ControllerClear").startClearEx([currCoord], function() {
                        this.updateGain(1);
                        if (coord) {
                            this.rambleImplFunc(currCoord, coord);
                        } else {
                            Controller.onDrop(0, 1, null, callback, target);
                        }
                    }, this);
                }, this);
            } else {
                if (coord) {
                    this.rambleImplFunc(currCoord, coord);
                } else {
                    Controller.onDrop(0, 0, null, callback, target);
                }
            }
        };
        this.rambleImplFunc(null, beginCoord);
    },
    //----------------------------------------------------------------------
    // 彩虹消
    doRainbowClear: function(callback, target) {
        if (this.mShowDisplay) {
            console.log("彩虹消");
        }
        // 所有彩虹消坐标列表
        var allRainbowCoordList = [
            [[2,1],[1,2],[1,3],[1,4],[1,5],[2,6]],
            [[3,1],[2,2],[2,3],[2,4],[2,5],[3,6]],
            [[4,1],[3,2],[3,3],[3,4],[3,5],[4,6]],
            [[5,1],[4,2],[4,3],[4,4],[4,5],[5,6]],
            [[6,1],[5,2],[5,3],[5,4],[5,5],[6,6]]
        ];
        // 随机出坐标列表
        var randomIndex = Math.floor(Math.random()*(allRainbowCoordList.length - 1) + 0.5);
        var randomCoordList = allRainbowCoordList[randomIndex];
        var coordList = [];
        for (var i = 0, len = randomCoordList.length; i < len; ++i) {
            var row = randomCoordList[i][0];
            var col = randomCoordList[i][1];
            var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
            var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
            if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
                coordList.push(CA.makeCoord(row, col));
            }
        }
        //
        var pos = this.mMap.getRowPos(randomCoordList[0][0]);
        Action.playRainbowClearAction(pos, function() {
            this.getSibling("ControllerClear").startClearEx(coordList, function() {
				this.updateGain(1);
				Controller.onDrop(0, 1, null, callback, target);
            }, this);
        }, this);
    },
    //----------------------------------------------------------------------
    // 全屏随机消除
    doScreenClear: function(value, callback, target) {
        if (this.mShowDisplay) {
            console.log("全屏随机消除: " + value);
        }
        var coordList = [];
        // 遍历地图元素分布
        var rc = this.getMaster().getRowCol();
        for (var row = rc.row; row >= 1; --row) {
			for (var col = 1; col <= rc.col; ++col) {
                var objectElement = this.mMap.getElement(row, col, CoreDef.ElementTag.object);
                var overlayElement = this.mMap.getElement(row, col, CoreDef.ElementTag.overlay);
                if (objectElement && CoreDef.ObjectType.normal == objectElement.getType() && !overlayElement) {  // 普通元素,且无覆盖
                    coordList.push(CA.makeCoord(row, col));
                }
            }
        }
        // 随机出元素信息
        var randomCoordList = [];
        for (var i = 0; i < value; ++i) {
            if (0 == coordList.length) {
                break;
            }
            var index = Math.floor(Math.random()*(coordList.length - 1) + 0.5);
            var randomCoord = coordList[index];
            coordList.splice(index, 1);
            randomCoordList.push(randomCoord);
        }
		for(var j = 0, len = randomCoordList.length; j < len; ++j){
			var pos = this.getMaster().getPos(randomCoordList[j].row, randomCoordList[j].col);
			Action.playScreenClearFlyAction(pos,randomCoordList[j],function(){
				var ani = laya.createArmature(ResURL("yuansuxiaochu.png"), ResURL("yuansuxiaochu.sk"), false, null, null, function() {
					ani.removeSelf();
					ani.destroy();
				}, this);
				ani.play("ue_clear_2");
				ani.pos(pos.x, pos.y);
				Controller.getView().getSceneLayer().addChild(ani);
			},this);
		}
		Action.playScreenClearCastAction(null,function(){
			this.getSibling("ControllerClear").startClearEx(randomCoordList, function() {
				this.updateGain(1);
				Controller.onDrop(0, 1, null, callback, target);
			}, this);
		},this);
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ControllerMinimap.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	b小地图控制器
 ***********************************************************************/
ControllerMinimap = Component.extend({
    //----------------------------------------------------------------------
    // 构造函数
    ctor: function () {
        this._super("ControllerMinimap");
    },
	//----------------------------------------------------------------------
    // 初始化函数
    init: function() {
        this.mMinimapNode = new laya.ui.View();     // 小地图根节点
        this.mMinimapNode.cacheAs = "bitmap";
        this.mMinimapDisplayMap = {};               // 小地图表现映射表
        var rc = this.getMaster().getRowCol();
        var posMap = this.getMaster().createPosMap(rc.row, rc.col, 17, 17, 0, 0, 0);
        for (var row = 1; row <= rc.row; ++row) {
            this.mMinimapDisplayMap[row] = {};
		    for (var col = 1; col <= rc.col; ++col) {
                var display = new laya.ui.Image();
                display.anchorX = 0.5;
                display.anchorY = 0.5;
                display.skin = ResURL("image_small_map_gird.png");
                display.pos(posMap[row][col].x, posMap[row][col].y);
                this.mMinimapNode.addChild(display);
                this.mMinimapDisplayMap[row][col] = display;
		    }
	    }
        this.bind(EventDef["ED_CORE_CLEAR_SURFACE"], this.onSurfaceClear);  // 注册地表被消除事件
    },
    //----------------------------------------------------------------------
    // 显示小地图
    show: function(parent, x, y, visible) {
        if (this.mMinimapNode.parent && parent != this.mMinimapNode.parent) {
            this.mMinimapNode.removeSelf();
        }
        if (parent) {
            parent.addChild(this.mMinimapNode);
        } else {
            Laya.stage.addChild(this.mMinimapNode);
        }
        this.mMinimapNode.pos(x, y);
        this.mMinimapNode.visible = visible ? true : false;
    },
    //----------------------------------------------------------------------
    // 根据地图数据重置
    resetByMapData: function(mapData) {
        var rc = this.getMaster().getRowCol();
        for (var row = 1; row <= rc.row; ++row) {
		    for (var col = 1; col <= rc.col; ++col) {
                var display = this.mMinimapDisplayMap[row][col];
                var id = mapData[row - 1][col - 1];
                if (0 == id) {
                    display.skin = ResURL("image_small_map_gird.png");
                } else {
                    display.skin = ResURL("image_small_map_gird_01.png");
                }
            }
        }
    },
    //----------------------------------------------------------------------
    // 地表被消除事件
    onSurfaceClear: function(surfaceId, row, col) {
        this.mMinimapDisplayMap[row][col].skin = ResURL("image_small_map_gird_02.png");
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="CoreAlgorithm.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	核心算法
 ***********************************************************************/
CA = {};
//----------------------------------------------------------------------
// 搜索掉落路径,搜索顺序:正下方->左下方->右下方
CA.searchDropPath = function(rowMax, row, col, isCanThrough, downCB, lDownCB, rDownCB, breakCB, target) {
	if ('function' != typeof(downCB)) {
		downCB = function(){return false};
	}
	if ('function' != typeof(lDownCB)) {
		lDownCB = function(){return false};
	}
	if ('function' != typeof(rDownCB)) {
		rDownCB = function(){return false};
	}
	if ('function' != typeof(breakCB)) {
		breakCB = function(){return false};
	}
	var path = [];
	if (breakCB.apply(target, [{row:row, col:col}])) {
		return path;
	}
	for (var r = row; r <= rowMax; ++r) {
		if (breakCB.apply(target, [{row:r, col:col}]) || r == rowMax) {
			break;
		}
		var curr = {row:r, col:col};
		var down = {row:r + 1, col:col};
		var leftDown = {row:r + 1, col:col - 1};
		var rightDown = {row:r + 1, col:col + 1};
		if (downCB.apply(target, [curr, down])) {				// 搜索正下方
			path.push(down);
		} else if (lDownCB.apply(target, [curr, leftDown])) {	// 搜索左下方
			col = leftDown.col;
			path.push(leftDown);
		} else if (rDownCB.apply(target, [curr, rightDown])) {	// 搜索右下方
			col = rightDown.col;
			path.push(rightDown);
		} else if (!isCanThrough) {
			break;
		}
	}
	return path;
};
//----------------------------------------------------------------------
// 搜索掉落列表
CA.searchDropList = function(rowMax, colMax, checkCB, batchCB, target) {
	if ('function' != typeof(checkCB)) {
		throw new Error("not support for checkCB type " + typeof(checkCB));
	}
	if ('function' != typeof(batchCB)) {
		batchCB = function(){};
	}
	var batch = 0;
	function innerImpl() {
		batchCB.apply(target,[batch]);
		var checkFlag = false;
		for (var row = rowMax; row >= 1; --row) {		// 后下到上
			for (var col = 1; col <= colMax; ++col) {	// 先左到右
				if (checkCB.apply(target, [row, col, batch])) {
					checkFlag = true;
				}
			}
		}
		batch = batch + 1;	// 批次自增
		if (checkFlag) {
			innerImpl();
		}
	}
	innerImpl();
};
//----------------------------------------------------------------------
// 搜索连接列表
CA.searchConnectList = function(row, col, checkCB, target) {
	if ('function' != typeof(checkCB)) {
		throw new Error("not support for checkCB type " + typeof(checkCB));
	}
	var searchedList = [];
	var path = [];
	function innerImpl(row, col) {
		var aroundCoordList = {
			up: {row:row - 1, col:col},                 // 上
			rightUp: {row:row - 1, col:col + 1},        // 右上
			right: {row:row, col:col + 1},              // 右
			rightDown: {row:row + 1, col:col + 1},      // 右下
			down: {row:row + 1, col:col},               // 下
			leftDown: {row:row + 1, col:col - 1},       // 左下
			left: {row:row, col:col - 1},               // 左
			leftUp: {row:row - 1, col:col - 1}          // 左上
		};
		for (var key in aroundCoordList) {
			if (aroundCoordList.hasOwnProperty(key)) {
				var coord = aroundCoordList[key];
				var isCoordSearched = false;
				for (var i = 0, len = searchedList.length; i < len; ++i) {
					if (coord.row == searchedList[i].row && coord.col == searchedList[i].col) {
						isCoordSearched = true;
						break;
					}
				}
				if (!isCoordSearched && checkCB.apply(target, [row, col, coord.row, coord.col])) {
					searchedList.push({row:coord.row, col:coord.col});
					path.push({row:coord.row, col:coord.col});
					innerImpl(coord.row, coord.col);
				}
			}
		}
	}
	searchedList.push({row:row, col:col});
	path.push({row:row, col:col});
	innerImpl(row, col);
	return path;
};
//----------------------------------------------------------------------
// 获取水平距离坐标
CA.getHorRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row, col:col - i});	// 左边
		rangeList.push({row:row, col:col + i});	// 右边
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取垂直距离坐标
CA.getVerRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row - i, col:col});	// 上边
		rangeList.push({row:row + i, col:col});	// 下边
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取十字距离坐标
CA.getCrossRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row - i, col:col});	// 上边
		rangeList.push({row:row + i, col:col});	// 下边
		rangeList.push({row:row, col:col - i});	// 左边
		rangeList.push({row:row, col:col + i});	// 右边
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取左上<->右下距离坐标
CA.getLeftUpToRightDownRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row - i, col:col - i});	// 左上角
		rangeList.push({row:row + i, col:col + i});	// 右下角
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取右上<->左下下距离坐标
CA.getRightUpToLeftDownRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row - i, col:col + i});	// 右上角
		rangeList.push({row:row + i, col:col - i});	// 左下角
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取斜叉距离坐标
CA.getObliqueRange = function(row, col, range) {
	var rangeList = [];
	for (var i = 1; i <= range; ++i) {
		rangeList.push({row:row - i, col:col - i});	// 左上角
		rangeList.push({row:row - i, col:col + i});	// 右上角
		rangeList.push({row:row + i, col:col + i});	// 右下角
		rangeList.push({row:row + i, col:col - i});	// 左下角
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 获取周围距离坐标
CA.getRoundRange = function(row, col, range) {
	var rangeList = [];
	if (range > 0) {
		rangeList.push({row:row - range, col:col});	// 上边
		rangeList.push({row:row + range, col:col});	// 下边
		rangeList.push({row:row, col:col - range});	// 左边
		rangeList.push({row:row, col:col + range});	// 右边
		rangeList.push({row:row - range, col:col - range});	// 左上角
		rangeList.push({row:row - range, col:col + range});	// 右上角
		rangeList.push({row:row + range, col:col - range});	// 左下角
		rangeList.push({row:row + range, col:col + range});	// 右下角
		for (var i = 1; i < range; ++i) {
			rangeList.push({row:row - range, col:col - i});	// 上边
			rangeList.push({row:row - range, col:col + i});
			rangeList.push({row:row + range, col:col - i});	// 下边
			rangeList.push({row:row + range, col:col + i});
			rangeList.push({row:row - i, col:col - range});	// 左边
			rangeList.push({row:row + i, col:col - range});
			rangeList.push({row:row - i, col:col + range});	// 右边
			rangeList.push({row:row + i, col:col + range});
		}
	}
	return rangeList;
};
//----------------------------------------------------------------------
// 创建坐标
CA.makeCoord = function(row, col) {
	return {row:row, col:col};
};
//----------------------------------------------------------------------
// 坐标是否相等
CA.equalCoord = function(coord1, coord2) {
	return coord1 && coord2 && coord1.row == coord2.row && coord1.col == coord2.col;
};
//----------------------------------------------------------------------
// 添加坐标
CA.addCoord = function(coordList, coord) {
    if (coord) {
		for (var i = 0, len = coordList.length; i < len; ++i) {
			if (coord.row == coordList[i].row && coord.col == coordList[i].col) {
				return false;
			}
		}
		coordList.push(coord);
	    return true;
	}
	return false;
};
//----------------------------------------------------------------------
// 移除坐标
CA.removeCoord = function(coordList, coord) {
    if (coord) {
		for (var i = 0, len = coordList.length; i < len; ++i) {
			if (coord.row == coordList[i].row && coord.col == coordList[i].col) {
				coordList.splice(i, 1);
				return true;
			}
		}
    }
	return false;
};
//----------------------------------------------------------------------
// 获取坐标索引
CA.getCoordIndex = function(coordList, coord) {
    if (coord) {
		for (var i = 0, len = coordList.length; i < len; ++i) {
			if (coord.row == coordList[i].row && coord.col == coordList[i].col) {
				return i;
			}
		}
    }
    return -1;
};
//----------------------------------------------------------------------
///<jscompress sourcefile="CoreDef.js" />
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
///<jscompress sourcefile="Element.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	元素
 ***********************************************************************/
Element = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
        this.mId = 0;	                    // 元素id
        this.mTag = 0;                      // 元素标签
        this.mType = 0;	                    // 元素类型
        this.mSubType = 0;	                // 元素子类型
        this.mCanDrop = false;	            // 是否可掉落
        if (ifCreateNode) {
            this.mNode = new laya.ui.Image();
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
        }
    },
    //----------------------------------------------------------------------
	// 析构函数(手动调用)
	dtor: function() {
        if (this.mNode && !this.mNode.destroyed) {
            this.mNode.removeSelf();
            this.mNode.destroy();
            delete this.mNode;
        }
    },
    //----------------------------------------------------------------------
    // 获取id
    getId: function() {
        return this.mId;
    },
    //----------------------------------------------------------------------
    // 设置id
    setId: function(id) {
        this.mId = id;
    },
    //----------------------------------------------------------------------
    // 获取标签
    getTag: function() {
        return this.mTag;
    },
    //----------------------------------------------------------------------
    // 设置标签
    setTag: function(tag) {
        this.mTag = tag;
    },
    //----------------------------------------------------------------------
    // 获取类型
    getType: function() {
        return this.mType;
    },
    //----------------------------------------------------------------------
    // 设置类型
    setType: function(ty) {
        this.mType = ty;
    },
    //----------------------------------------------------------------------
    // 获取子类型
    getSubType: function() {
        return this.mSubType;
    },
    //----------------------------------------------------------------------
    // 设置子类型
    setSubType: function(subType) {
        this.mSubType = subType;
    },
	//----------------------------------------------------------------------
	// 是否可掉落
	isCanDrop: function() {
		return this.mCanDrop;
	},
	//----------------------------------------------------------------------
	// 设置可掉落
	setCanDrop: function(canDrop) {
		this.mCanDrop = canDrop ? true : false;
	},
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        if (this.mNode && !this.mNode.destroyed) {
            return this.mNode;
        }
        return null;
    },
    //----------------------------------------------------------------------
    // 设置节点
    setNode: function(node) {
        var anchorX = 0.5;
        var anchorY = 0.5;
        var xPos = 0;
        var yPos = 0;
        var zOrder = 0;
        var parentNode = null;
        if (this.mNode && !this.mNode.destroyed) {
            anchorX = this.mNode.anchorX;
            anchorY = this.mNode.anchorY;
            xPos = this.mNode.x;
            yPos = this.mNode.y;
            zOrder = this.mNode.zOrder;
            parentNode = this.mNode.parent;
            this.mNode.removeSelf();
            this.mNode.destroy();
        }
        this.mNode = node;
        if (this.mNode && !this.mNode.destroyed) {
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
            this.mNode.x = xPos;
            this.mNode.y = yPos;
            this.mNode.zOrder = zOrder;
            if (parentNode && !parentNode.destroyed) {
                parentNode.addChild(this.mNode);
            }
        }
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="Grid.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	格子
 ***********************************************************************/
Grid = Class.extend({
    //----------------------------------------------------------------------
	// 构造函数
    ctor: function(ifCreateNode) {
        this.mRow = 0;	                    // 行坐标
        this.mCol = 0;	                    // 列坐标
        this.mId = 0;	                    // 格子id
        this.mName = "";	                // 格子名称
        this.mType = 0;	                    // 格子类型
        this.mRowTo = 0;	                // 指向行坐标
        this.mColTo = 0;	                // 指向列坐标
        if (ifCreateNode) {
            this.mNode = new laya.ui.Image();
            this.mNode.cacheAs = "bitmap";
            this.mNode.graphics.drawRect(-G.GRID_WIDTH/2, -G.GRID_HEIGHT/2, G.GRID_WIDTH, G.GRID_HEIGHT, "#00ff00");
            this.mNode.anchorX = 0.5;
            this.mNode.anchorY = 0.5;
            this.mNode.alpha = 0;
        }
    },
    //----------------------------------------------------------------------
	// 析构函数(手动调用)
	dtor: function() {
        if (this.mNode) {
            this.mNode.removeSelf();
            this.mNode.destroy();
            delete this.mNode;
        }
    },
    //----------------------------------------------------------------------
    // 显示背景
    showBackground: function(show) {
        this.mNode.alpha = show ? 200/255 : 0;
    },
    //----------------------------------------------------------------------
    // 显示编号
    showNumber: function(show) {
        if (this.mNode) {
            if (show) {
                if (!this.mNumText) {
                    this.mNumText = new laya.ui.Label();
                    this.mNumText.anchorX = 0.5;
                    this.mNumText.anchorY = 0.5;
                    this.mNumText.size(G.GRID_WIDTH, G.GRID_HEIGHT);
                    this.mNumText.wordWrap = true;
                    this.mNumText.align = "center";
                    this.mNumText.valign = "middle";
                    this.mNumText.pos(0, 0);
                    this.mNumText.color = "#0000ff";
                    this.mNumText.fontSize = 24;
                    this.mNumText.zOrder = 1;
                    this.mNode.addChild(this.mNumText);
                }
                var coord = "(" + this.mRow + ", " + this.mCol + ")";
                this.mNumText.text = coord;
            } else if (this.mNumText) {
                this.mNumText.removeSelf();
                this.mNumText.destroy();
                delete this.mNumText;
            }
        }
    },
    //----------------------------------------------------------------------
    // 显示名称
    showName: function(show) {
        if (this.mNode) {
            if (show) {
                if (!this.mNameText) {
                    this.mNameText = new laya.ui.Label();
                    this.mNameText.anchorX = 0.5;
                    this.mNameText.anchorY = 0.5;
                    this.mNameText.size(G.GRID_WIDTH, G.GRID_HEIGHT);
                    this.mNameText.wordWrap = true;
                    this.mNameText.align = "center";
                    this.mNameText.valign = "middle";
                    this.mNumText.pos(0, 0);
                    this.mNameText.color = "#ff0000";
                    this.mNameText.fontSize = 20;
                    this.mNameText.bold = true;
                    this.mNameText.zOrder = 2;
                    this.mNode.addChild(this.mNameText);
                }
                this.mNameText.text = this.mName;
            } else if (this.mNameText) {
                this.mNameText.removeFromParent();
                delete this.mNameText;
            }
        }
    },
    //----------------------------------------------------------------------
    // 获取坐标
    getCoord: function() {
        return {row:this.mRow, col:this.mCol};
    },
    //----------------------------------------------------------------------
    // 设置坐标
    setCoord: function(row, col) {
        this.mRow = row;
        this.mCol = col;
    },
    //----------------------------------------------------------------------
    // 获取id
    getId: function() {
        return this.mId;
    },
    //----------------------------------------------------------------------
    // 设置id
    setId: function(id) {
        this.mId = id;
    },
    //----------------------------------------------------------------------
    // 获取名称
    getName: function() {
        return this.mName;
    },
    //----------------------------------------------------------------------
    // 设置名称
    setName: function(name) {
        this.mName = name;
    },
    //----------------------------------------------------------------------
    // 获取类型
    getType: function() {
        return this.mType;
    },
    //----------------------------------------------------------------------
    // 设置类型
    setType: function(ty) {
        this.mType = ty;
    },
    //----------------------------------------------------------------------
    // 获取指向坐标
    getCoordTo: function() {
        return {row:this.mRowTo, col:this.mColTo};
    },
    //----------------------------------------------------------------------
    // 设置指向坐标
    setCoordTo: function(row, col) {
        this.mRowTo = row;
        this.mColTo = col;
    },
    //----------------------------------------------------------------------
    // 获取节点
    getNode: function() {
        return this.mNode;
    }
    //----------------------------------------------------------------------
});
///<jscompress sourcefile="ItemClear.js" />
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
///<jscompress sourcefile="UIAuto.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	自动界面
 ***********************************************************************/
UIAuto = UIDEFINE("UIAuto", AutoUI);

UIAuto.onStart = function(coin) {
    this.onClick(this.getChild("btn_stake_left"), this.onClickBtnStakeLeft, this, true, true);
    this.onClick(this.getChild("btn_stake_right"), this.onClickBtnStakeRight, this, true, true);
    this.onClick(this.getChild("btn_stake1"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake2"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake3"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_times_left"), this.onClickBtnTimesLeft, this, true, true);
    this.onClick(this.getChild("btn_times_right"), this.onClickBtnTimesRight, this, true, true);
    this.onClick(this.getChild("btn_times1"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times2"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times3"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_times4"), this.onClickBtnTimes, this, true, true);
    this.onClick(this.getChild("btn_cancel"), this.onClickBtnCancel, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
    // 数据初始化
    this.mCoin = coin;                          // 赛豆
    this.mStakeIdx = 1;                         // 下注索引值(>=1)
    this.mTimesIdx = 1;                         // 次数索引值(>=1)
    // 逻辑初始化
    this.initStake();
    this.initTimes();
};

// 点击下注向左按钮
UIAuto.onClickBtnStakeLeft = function(btn) {
    if (this.mStakePage.isCanMovePrev()) {
        this.mStakeList = this.mStakePage.moveOnePrev();
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnLeft();
};

// 点击下注向右按钮
UIAuto.onClickBtnStakeRight = function(btn) {
    if (this.mStakePage.isCanMoveNext()) {
        this.mStakeList = this.mStakePage.moveOneNext();
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnRight();
};

// 点击下注按钮
UIAuto.onClickBtnStake = function(btn) {
    var stakeIdx = this.mStakePage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mStakeIdx) {
        this.mStakeIdx = stakeIdx
        this.refreshStakeBtnStatus();
    }
    UIGame.onClickBtnStake(btn);
};

// 点击次数向左按钮
UIAuto.onClickBtnTimesLeft = function(btn) {
    if (this.mTimesPage.isCanMovePrev()) {
        this.mTimesList = this.mTimesPage.moveOnePrev();
        this.refreshTimesBtnStatus();
    }
};

// 点击次数向右按钮
UIAuto.onClickBtnTimesRight = function(btn) {
    if (this.mTimesPage.isCanMoveNext()) {
        this.mTimesList = this.mTimesPage.moveOneNext();
        this.refreshTimesBtnStatus();
    }
};

// 点击次数按钮
UIAuto.onClickBtnTimes = function(btn) {
    var stakeIdx = this.mTimesPage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mTimesIdx) {
        this.mTimesIdx = stakeIdx
        this.refreshTimesBtnStatus();
    }
};

// 点击取消按钮
UIAuto.onClickBtnCancel = function(btn) {
    this.close();
};

// 点击开始按钮
UIAuto.onClickBtnStart = function(btn) {
    var stake = G.STAKE_LIST[this.mStakeIdx - 1];
    var times = G.TIMES_LIST[this.mTimesIdx - 1];
    console.log("下注: " + stake + ", 次数: " + times);
    UIGame.onClickBtnStart(null, times, function(isCoinEnough) {
        if (isCoinEnough) {
            this.close();
        }
    }, this);
};

// 初始下注
UIAuto.initStake = function() {
    this.mStakePage = Page.create(G.STAKE_LIST, 3, 0);  // 下注页面管理器,每页3个
    this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
    this.refreshStakeBtnStatus();
};

// 刷新下注按钮状态
UIAuto.refreshStakeBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_stake_left");
    if (this.mStakePage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_stake_right");
    if (this.mStakePage.isCanMoveNext()) {
        rightBtn.mouseEnabled = true;
        rightBtn.gray = false;
    } else {
        rightBtn.mouseEnabled = false;
        rightBtn.gray = true;
    }
    // 下注按钮状态
    var beginIndex = this.mStakePage.getBeginIndex();
    for (var i = 1; i <= this.mStakePage.getNumPerPage(); ++i) {
        var stakeBtn = this.getChild("btn_stake" + i);
        stakeBtn.tag = i;   // 按钮标识
        stakeBtn.timer.callLater(this, function(i, stakeBtn) {
            var coin = this.mStakeList[i - 1];
            if (isNaN(coin)) {
                stakeBtn.visible = false;
            } else {
                stakeBtn.visible = true;
                stakeBtn.label = coin;
                if (coin <= this.mCoin) {   // 赛豆足够
                    stakeBtn.mouseEnabled = true;
                    stakeBtn.gray = false;
                    if (beginIndex + i == this.mStakeIdx) { // 当前所选
                        stakeBtn.skin = "ui/button_bet_01.png";
                        stakeBtn.labelColors = "#633b29";
                    } else {                                // 非当前所选
                        stakeBtn.skin = "ui/button_bet_02.png";
                        stakeBtn.labelColors = "#F0B137";
                    }
                } else {                    // 赛豆不足
                    stakeBtn.mouseEnabled = false;
                    stakeBtn.gray = true;
                    stakeBtn.skin = "ui/button_bet_02.png";
                    stakeBtn.labelColors = "#F0B137";
                }
            }
        }, [i, stakeBtn]);
    }
};

// 初始次数
UIAuto.initTimes = function() {
    this.mTimesPage = Page.create(G.TIMES_LIST, 4, 0);  // 次数页面管理器,每页4个
    this.mTimesList = this.mTimesPage.moveToIndex(this.mTimesIdx - 1);  // 当前次数页面数据
    this.refreshTimesBtnStatus();
};

// 刷新次数按钮状态
UIAuto.refreshTimesBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_times_left");
    if (this.mTimesPage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_times_right");
    if (this.mTimesPage.isCanMoveNext()) {
        rightBtn.mouseEnabled = true;
        rightBtn.gray = false;
    } else {
        rightBtn.mouseEnabled = false;
        rightBtn.gray = true;
    }
    // 下注按钮状态
    var beginIndex = this.mTimesPage.getBeginIndex();
    for (var i = 1; i <= this.mTimesPage.getNumPerPage(); ++i) {
        var timesBtn = this.getChild("btn_times" + i);
        timesBtn.tag = i;   // 按钮标识
        timesBtn.timer.callLater(this, function(i, timesBtn) {
            var times = this.mTimesList[i - 1];
            if (isNaN(times)) {
                timesBtn.visible = false;
            } else {
                timesBtn.visible = true;
                timesBtn.label = times;
                timesBtn.mouseEnabled = true;
                timesBtn.gray = false;
                if (beginIndex + i == this.mTimesIdx) { // 当前所选
                    timesBtn.skin = "ui/button_times_01.png";
                    timesBtn.labelColors = "#633b29";
                } else {                                // 非当前所选
                    timesBtn.skin = "ui/button_times_02.png";
                    timesBtn.labelColors = "#fff7c5";
                }
            }
        }, [i, timesBtn]);
    }
}
///<jscompress sourcefile="UIGame.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	游戏界面
 ***********************************************************************/
UIGame = UIDEFINE("UIGame", GameUI);

UIGame.onStart = function() {
	//瓢虫贝塞尔曲线动画
	this.ladyBirdAction();
    // 按钮点击事件注册
    this.onClick(this.getChild("btn_set"), this.onClickBtnSet, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
    this.onClick(this.getChild("btn_auto"), this.onClickBtnAuto, this, true, true);
    this.onClick(this.getChild("btn_left"), this.onClickBtnLeft, this, true, true);
    this.onClick(this.getChild("btn_right"), this.onClickBtnRight, this, true, true);
    this.onClick(this.getChild("btn_stake1"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake2"), this.onClickBtnStake, this, true, true);
    this.onClick(this.getChild("btn_stake3"), this.onClickBtnStake, this, true, true);
	this.onClick(this.getChild("btn_charge"), this.onClickBtnCharge, this, true, true);
    if (G.SHOW_FPS) {
        this.onClick(this.getChild("image_small_map"), this.onClickImageSmallMap, this, true, true);
    }
    this.bind(EventDef["ED_PROGRESS_BONUS1"], this.updateProgress);
    this.bind(EventDef["ED_PROGRESS_BONUS2"], this.bonus2Up);
    this.bind(EventDef["ED_ADD_TO_LIST"], this.onAddToList);
    this.bind(EventDef["ED_ON_BONUS"], this.onBonus);
    this.bind(EventDef["ED_LEVEL_INFO"], this.updateLevelInfo);
	this.bind(EventDef["ED_LEVEL_CLEAR"], this.levelReset);
	this.bind(EventDef["ED_LEVEL_COIN"], this.updateTimesCoin);
    this.bind(EventDef["ED_LEVEL_AUTO_TIMES"], this.updateLeftTimes);
    // 数据初始化
    this.mCoin = 1000;                          // 赛豆
    this.mAward = 0;                            // 奖励
    this.mStakeIdx = 1;                         // 下注索引值(>=1)
    this.mStake = 1;                            // 下注
    // 逻辑初始化
    this.changeMainAreaZOrder();
    this.initStake();
    this.initList();
	this.updateCoin(0);
    this.updateAward(0);
    this.resetProgress();
    this.drawBonus2Box();
    Controller.getComp("ControllerMinimap").show(this.getChild("image_small_map"), 29, 40, true);
    Controller.onLevel(true, true);
    this.setStartBtnState(false);
	Controller.onInitDrop(function() {
        this.setStartBtnState(true);
		UINewGuide.openFront(true, true, false);
    }, this);
};

//点击重置按钮
UIGame.onClickBtnCharge = function(){
	console.log("点击充值了++++++++++++++++++++");
}

// 改变地图区域灰色图片的层级
UIGame.changeMainAreaZOrder = function() {
    var imageMainArea = this.getChild("image_main_area");
    if (!imageMainArea) {
        return;
    }
    var parent = Controller.getView().getMapLayer();
    if (!parent) {
        return;
    }
    var worldPos = laya.getWorldPosition(imageMainArea);
    var localPos = laya.getLocalPosition(parent, worldPos)
    imageMainArea.pos(localPos.x, localPos.y);
    laya.changeParent(imageMainArea, parent);
};

// 设置关卡名称
UIGame.setLevelName = function(name) {
     this.getChild("label_level").text = name;
};

// 获取当前以及下一关的关卡的等级和星级
UIGame.getLevelStarInfo = function(levelId, starNum) {
    var arr = [];
	var levelData = DataTB.get("level_tplt", levelId, true);
	var nextId = levelId + 1 ;
	var nextStar = starNum;
	if(levelId >= 8){
		nextId = 1;
	}
	if(nextStar >= 3){
		nextStar = 1;
	}
	var nextLevelData = DataTB.get("level_tplt", levelId, true);
	arr[0] = levelData.name + "-" + (starNum - 1);
	arr[1] = nextLevelData.name + "-" + nextStar;
	return arr;
};

//星级动画
UIGame.starAction = function(node){
    var ani = laya.createArmature(ResURL("ditushengji.png"), ResURL("ditushengji.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        node.skin = "ui/image_star.png";
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ue_level_star", false);
    ani.pos(16, 17);
    node.addChild(ani);
}

//升级动画
UIGame.levelUpAction = function(callBack){
    var ani = laya.createArmature(ResURL("ditushengji.png"), ResURL("ditushengji.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        callBack.apply(this, []);
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ui_levelup", false);
    ani.pos(850, 320);
    this.node.addChild(ani);
}

//过关动画
UIGame.levelPassAction = function(callBack){
    var ani = laya.createArmature(ResURL("guanqiaguoguan.png"), ResURL("guanqiaguoguan.sk"), false, null, null, function() {
        ani.removeSelf();
        ani.destroy();
        callBack.apply(this, []);
    }, this);
    ani.anchorX = 0;
    ani.anchorY = 0;
    ani.play("ui_mission_clear", false);
    ani.pos(490, 250);
    this.node.addChild(ani);
}

// 设置关卡星级
UIGame.setLevelStar = function(star, levelId) {
    for (var i = 1; i <= G.MAX_STAR; ++i) {
        var starImage = this.getChild("image_star" + i);
        if (i > star) {
            starImage.skin = "ui/image_star_gray.png";
        } else {
            if(i > (this.mLastStar || 1)){
                this.starAction(starImage,i);
				var arr = this.getLevelStarInfo(levelId, star);
				UILevelUp.openFront(true, true, true, arr);
            }else{
                starImage.skin = "ui/image_star.png";
            }
        }
    }
     this.mLastStar = star;
};

// 格式化钱币
UIGame.formatMoney = function(money, bit) {
    bit = (isNaN(bit) || bit < 0 || bit > 20) ? 0 : bit;
    money = parseFloat((money + "").replace(/[^\d\.-]/g, "")).toFixed(bit) + "";
    var integer = money.split(".")[0].split("").reverse();
    var decimals = money.split(".")[1];
    var str = "";
    for (var i = 0; i < integer.length; ++i) {
        str += integer[i] + (0 == (i + 1)%3 && (i + 1) != integer.length ? "," : "");
    }
    return str.split("").reverse().join("") + (decimals ? ("." + decimals) : "");
};

// 更新赛豆
UIGame.updateCoin = function(reduceCoin) {
    reduceCoin = isNaN(reduceCoin) ? 0 : reduceCoin;
    if (reduceCoin > this.mCoin) {
        return false;
    }
    this.mCoin -= reduceCoin;
    // 设置到控件
    this.getChild("label_coin").text = this.formatMoney(this.mCoin, 2);
    return true;
}

// 更新赛豆
UIGame.updateTimesCoin = function(types) {
    // 添加奖励所得赛豆
	if(1 == types){
		this.updateCoin(-this.mAward);
	}else if(2 == types){
		this.updateCoin(this.mStake);
	}
}

// 获取要播放的奖励动画的索引
UIGame.getAwardActionIndex = function(addAward) {
    var times = addAward / this.mStake;
    if(times == 0){
        return 0;
    }
    var length = G.AWARD_TIMES.length;
    if(times >= G.AWARD_TIMES[length - 1]){
        return G.AWARD_TIMES.length;
    }
    for(var key in G.AWARD_TIMES){
        if ( G.AWARD_TIMES[key] >= times){
            var index = parseInt(key) + 1;
            return index;
        }
    }
    return 0;
};

// 更新奖励
UIGame.updateAward = function(addAward) {
    addAward = isNaN(addAward) ? 0 : addAward;
    this.mAward += addAward;
    // 设置到控件
    this.getChild("label_award").text = this.formatMoney(this.mAward, 2);
	if ( addAward <= 0 ){
		return;
	}
    //金币动画
    var index = this.getAwardActionIndex(addAward);
    if(index > 0){
        AudioModel.playSound(2002);
        var ani = laya.createArmature(ResURL("chaoeshouyi.png"), ResURL("chaoeshouyi.sk"), false, null, null, function() {
            ani.removeSelf();
            ani.destroy();
        }, this);
        ani.anchorX = 0;
        ani.anchorY = 0;
        ani.play("ui_big_money_" + index , false);
        ani.pos(130, 430);
        this.node.addChild(ani);
    } 
};

// 关卡信息
UIGame.updateLevelInfo = function(levelName, star, levelId) {
    this.setLevelName(levelName);
	this.setLevelStar(star, levelId);
};

// 点击设置按钮
UIGame.onClickBtnSet = function(btn) {
    UISetUp.openFront(true, true, true);
};

// 更新自动开奖剩余次数
UIGame.updateLeftTimes = function(startCount) {
    if( this.autoStartCount > 1 ){
        var startBtn = this.getChild("btn_start");
        startBtn.skin = "ui/button_novalue_01.png"
        startBtn.label = startCount;
    }
};

// 点击开始按钮
UIGame.onClickBtnStart = function(btn, startCount, checkCoinCB, target) {
	this.mFisrtEnter = false;
    this.autoStartCount = startCount;
    startCount = isNaN(startCount) ? 1 : startCount;
    checkCoinCB = 'function' == typeof(checkCoinCB) ? checkCoinCB : function(){};
    this.mStake = G.STAKE_LIST[this.mStakeIdx - 1];
    // 扣除开始所需赛豆
    if (this.mStake > this.mCoin) {
        UIPrompt.show("资金不足");
        checkCoinCB.apply(target, [false]);
        return;
    }
	this.mSingleStartTimes = this.mSingleStartTimes + 1;
	this.setStakeBtnsGray(true);
    checkCoinCB.apply(target, [true]);
    this.clearList();
    this.resetProgress();
    // 按钮状态
    var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
    var smallMap = this.getChild("image_small_map");
    startBtn.mouseEnabled = false;
    startBtn.gray = true;
    autoBtn.mouseEnabled = false;
    autoBtn.gray = true;
    smallMap.mouseEnabled = false;
    startBtn.label = "";
    startBtn.skin = "ui/button_start.png";
    autoBtn.skin = "ui/button_auto.png";
    if(startCount > 1){
        startBtn.label = startCount - 1;
        startBtn.skin = "ui/button_novalue_01.png";
        autoBtn.skin = "ui/button_cancel.png";
        autoBtn.gray = false;
        autoBtn.mouseEnabled = true;
    }
    // 开始操作
    laya.callAfter(0.1, function() {
        Controller.onStart(startCount, this.levelUpAction, this.levelPassAction, function() {
            // 重置进度条
            this.resetProgress();
            // 重置瓶子状态
            this.bonus2Down();
        }, function() {
            startBtn.mouseEnabled = true;
            startBtn.gray = false;
            autoBtn.mouseEnabled = true;
            autoBtn.gray = false;
            smallMap.mouseEnabled = true;
            startBtn.label = "";
            startBtn.skin = "ui/button_start.png";
            autoBtn.label = "";
            autoBtn.skin = "ui/button_auto.png";
            this.autoStartCount = 1;
			//更新赌注状态
			this.setStakeBtnsGray(false);
        }, this);
    }, this);
};

// 重新开始函数
UIGame.restartGame = function(count) {
    var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
    var smallMap = this.getChild("image_small_map");
    Controller.onStart(count, this.levelUpAction, this.levelPassAction, function() {
        // 重置进度条
        this.resetProgress();
        // 重置瓶子状态
        this.bonus2Down();
    }, function() {
        startBtn.mouseEnabled = true;
        startBtn.gray = false;
        autoBtn.mouseEnabled = true;
        autoBtn.gray = false;
        smallMap.mouseEnabled = true;
        startBtn.label = "";
        startBtn.skin = "ui/button_start.png";
        autoBtn.label = "";
        autoBtn.skin = "ui/button_auto.png";
        this.autoStartCount = 1;
        //更新赌注状态
        this.setStakeBtnsGray(false);
    }, this);
};

// 点击自动按钮
UIGame.onClickBtnAuto = function(btn) {
    //暂停
    if( this.autoStartCount && this.autoStartCount > 1){
        Controller.onStop();
        var startBtn = this.getChild("btn_start");
        var autoBtn = this.getChild("btn_auto");
        startBtn.label = "";
        startBtn.skin = "ui/button_start.png";
        autoBtn.gray = true;
        autoBtn.mouseEnabled = false;
        autoBtn.label = "";
        autoBtn.skin = "ui/button_auto.png";
    }else{	
	    UIAuto.openFront(true, true, true, this.mCoin);
    }
};

// 点击向左按钮
UIGame.onClickBtnLeft = function(btn) {
    if (this.mStakePage.isCanMovePrev()) {
        this.mStakeList = this.mStakePage.moveOnePrev();
        this.refreshStakeBtnStatus();
    }
};

// 点击向右按钮
UIGame.onClickBtnRight = function(btn) {
    if (this.mStakePage.isCanMoveNext()) {
        this.mStakeList = this.mStakePage.moveOneNext();
        this.refreshStakeBtnStatus();
    }
};

// 点击下注按钮
UIGame.onClickBtnStake = function(btn) {
    var stakeIdx = this.mStakePage.getBeginIndex() + btn.tag;
    if (stakeIdx != this.mStakeIdx) {
        this.mStakeIdx = stakeIdx
        this.refreshStakeBtnStatus();
    }
};

// 开始后设置按钮灰态,并跳到赌注所在页
UIGame.setStakeBtnsGray = function(grayFlag) {
	var beginIndex = this.mStakePage.getBeginIndex();
	if( this.mStakeIdx < beginIndex + 1 || this.mStakeIdx > beginIndex + 3){
		this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
		beginIndex = this.mStakePage.getBeginIndex();
	}
	var leftBtn = this.getChild("btn_left");
	var rightBtn = this.getChild("btn_right");
	leftBtn.mouseEnabled = !grayFlag;
	leftBtn.gray = grayFlag;
	rightBtn.mouseEnabled = !grayFlag;
	rightBtn.gray = grayFlag;
	if(grayFlag){
		for (var i = 1; i <= this.mStakePage.getNumPerPage(); ++i) {
			var stakeBtn = this.getChild("btn_stake" + i);
			var coin = this.mStakeList[i - 1];
			stakeBtn.label = coin;
			if (beginIndex + i == this.mStakeIdx) { // 当前所选
				stakeBtn.mouseEnabled = false;
				stakeBtn.gray = false;
			} else {                                // 非当前所选
				stakeBtn.mouseEnabled = false;
				stakeBtn.gray = true;
			}
		}
	}else{
		this.refreshStakeBtnStatus();
	}
};

// 点击小地图
UIGame.onClickImageSmallMap = function(btn) {
    UIGM.openFront(true, true, true);
};

// 初始下注
UIGame.initStake = function() {
    this.mStakePage = Page.create(G.STAKE_LIST, 3, 0);  // 下注页面管理器,每页3个
    this.mStakeList = this.mStakePage.moveToIndex(this.mStakeIdx - 1);  // 当前下注页面数据
    this.refreshStakeBtnStatus();
};

// 刷新下注按钮状态
UIGame.refreshStakeBtnStatus = function() {
    // 向左按钮状态
    var leftBtn = this.getChild("btn_left");
    if (this.mStakePage.isCanMovePrev()) {
        leftBtn.mouseEnabled = true;
        leftBtn.gray = false;
    } else {
        leftBtn.mouseEnabled = false;
        leftBtn.gray = true;
    }
    // 向右按钮状态
    var rightBtn = this.getChild("btn_right");
    if (this.mStakePage.isCanMoveNext()) {
        rightBtn.mouseEnabled = true;
        rightBtn.gray = false;
    } else {
        rightBtn.mouseEnabled = false;
        rightBtn.gray = true;
    }
    // 下注按钮状态
    var beginIndex = this.mStakePage.getBeginIndex();
    for (var i = 1; i <= this.mStakePage.getNumPerPage(); ++i) {
        var stakeBtn = this.getChild("btn_stake" + i);
        stakeBtn.tag = i;   // 按钮标识
        stakeBtn.timer.callLater(this, function(i, stakeBtn) {  // 这里应该是Laya的坑,需要稍后调用,才能显示最新渲染的内容
            var coin = this.mStakeList[i - 1];
            if (isNaN(coin)) {
                stakeBtn.visible = false;
            } else {
                stakeBtn.visible = true;
                stakeBtn.label = coin;
                if (coin <= this.mCoin) {   // 赛豆足够
                    stakeBtn.mouseEnabled = true;
                    stakeBtn.gray = false;
                    if (beginIndex + i == this.mStakeIdx) { // 当前所选
                        stakeBtn.skin = "ui/button_bet_01.png";
                        stakeBtn.labelColors = "#633b29";
                    } else {                                // 非当前所选
                        stakeBtn.skin = "ui/button_bet_02.png";
                        stakeBtn.labelColors = "#F0B137";
                    }
                } else {                    // 赛豆不足
                    stakeBtn.mouseEnabled = false;
                    stakeBtn.gray = true;
                    stakeBtn.skin = "ui/button_bet_02.png";
                    stakeBtn.labelColors = "#F0B137";
                }
            }
        }, [i, stakeBtn]);
    }
};

// 初始列表
UIGame.initList = function() {
    this.mList = new laya.ui.List();
    this.mList.itemRender = ItemClear;
    this.mList.vScrollBarSkin = "";
    this.mList.array = [];
    this.mList.renderHandler = new laya.utils.Handler(this, this.onUpdateClearItem);
    this.mList.width = 150;
    this.mList.height = 240;
    this.mList.spaceY = 1;
    this.mList.anchorX = 0.5;
    this.mList.anchorY = 0.5;
    this.mList.pos(119, 213);
    this.mList.optimizeScrollRect = true;
    this.mList.scrollBar.elasticDistance = 30;
    this.getChild("box_left").addChild(this.mList);
};

// 清空列表
UIGame.clearList = function() {
    this.mList.array = [];
    this.mAward = 0;
    this.updateAward(0);
};

// 清空列表
UIGame.levelReset = function() {
    this.clearList();
	this.resetProgress();
};

// 添加选项
UIGame.addListItem = function(levelId, gameSection, screenTimes, objectId, count) {
    var awardData = DataModel.calcAwardData(levelId, gameSection, screenTimes, objectId, count);
    this.mList.addItem(awardData);
    this.mList.scrollTo(this.mList.length);
    return awardData.value;
};

// 更新选项
UIGame.onUpdateClearItem = function(item, index) {
    var data = item.dataSource;
    if (!data) {
        return;
    }
    if (0 == index % 2) {
        item.setBg(ResURL("ui/image_score_back_01.png"));
    } else {
        item.setBg(ResURL("ui/image_score_back_02.png"));
    }
    item.setNum(data.count);
    item.setImg(ResURL(data.image));
    item.setScore(data.value);
};

// 添加到列表
UIGame.onAddToList = function(gameSection, screenTimes, objectList) {
    var totalValue = 0;
    var levelId = Controller.getLevelId();
    for (var objectId in objectList) {
        if (objectList.hasOwnProperty(objectId)) {
            totalValue += this.addListItem(levelId, gameSection, screenTimes, objectId, objectList[objectId]);
        }
    }
    totalValue *= this.mStake;
    // 更新WIN
    this.updateAward(totalValue);
};

// 更新进度条(当进度条满时,会触发bonus1)
UIGame.updateProgress = function(curr) {
    curr = (isNaN(curr) || curr < 0) ? 0 : curr;
    var value = curr / G.BONUS_1;
    value = value > 1 ? 1 : value;
    this.mProgress.setValue(value, true);
};

// 重置进度条
UIGame.resetProgress = function() {
    if (!this.mProgress || this.mProgress.destroyed) {
        this.mProgress = laya.createProgress(ResURL("image_progress_bg.png"), ResURL("image_progress_bar.png"), ResURL("image_progress_mask.png"), 1.5);
        this.mProgress.rotation = 270;
        this.mProgress.pos(230, 380);
        this.node.addChild(this.mProgress);
    }
    this.mProgress.setValue(0);
};

// 触发bonus事件
UIGame.onBonus = function(bonusType) {
    if (game_section["bonus1"] == bonusType) {
        this.resetProgress();
    } else if (game_section["bonus1"] == bonusType) {
        this.bonus2Down();
    }
};

//加载bonus2状态瓶子(阶段，升降,true表示升，false表示降)
UIGame.drawBonus2Box = function () {
    this.mBonus2Box = laya.createArmature(ResURL("b2zhuangtaidonghua.png"),ResURL("b2zhuangtaidonghua.sk"), false, null, null, null, this);
    this.mBonus2Box.pos(850,235);
    this.node.addChild(this.mBonus2Box);
    this.mBonus2Box.play("ui_bonus02_1",true);
}

// bonus2(点亮)
UIGame.bonus2Up = function(times) {
    console.log("bonus2刷屏, times: " + times);
    this.mBonus2Box.play("ui_bonus02_" + (times + 1) + "_sheng",false);
    if (times >= 4){
        this.mBonus2Box.play("ui_bonus02_5_xunhuan",true);
    }
    this.mBonusTimes = times;
};

// bonus2(消退)
UIGame.bonus2Down = function() { 
    if (this.mBonusTimes >= 4){
        this.mBonus2Box.stop("ui_bonus02_5_xunhuan",false);
    }
    if(this.mBonusTimes > 0){
        this.mBonus2Box.play("ui_bonus02_" +(this.mBonusTimes + 1) + "_jiang" ,false);
        this.mBonusTimes = 0;
    }
};

//设置开始、自动消除按钮状态
UIGame.setStartBtnState = function(visible) { 
	var startBtn = this.getChild("btn_start");
    var autoBtn = this.getChild("btn_auto");
	startBtn.gray = !visible;
    startBtn.mouseEnabled = visible;
	autoBtn.gray = !visible;
    autoBtn.mouseEnabled = visible;
};

//设置开始、自动消除按钮状态
UIGame.loopAction = function(img) { 
	laya.scaleFromTo(img, 1, 1, 0.8, 0.5, function(){
		laya.scaleFromTo(img, 1, 0.8, 1.0, 0.6, null, null)
	}, null);
	laya.moveBy(img, {x:0, y:-20}, 0.5, null, function() {
		laya.moveBy(img, {x:0,y:20}, 0.5, null, function(){
			this.loopAction(img)
		}, this)
	}, this);
};

//瓢虫贝塞尔曲线动画
UIGame.ladyBirdAction = function(){
	var sprite = laya.createArmature(ResURL("piaochong.png"), ResURL("piaochong.sk"), false, null, null, function(){
		sprite.removeSelf();
		sprite.destroy();
		laya.callAfter(G.LADY_BIRD_DELAY, this.ladyBirdAction, this)
	}, this);
    sprite.play("ladybird", false);
	sprite.zOrder = 500;
    this.node.addChild(sprite);
	sprite.pos(480, 60);
};
///<jscompress sourcefile="UIGM.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	GM界面
 ***********************************************************************/
UIGM = UIDEFINE("UIGM", GMUI);

UIGM.onStart = function(coin) {
	this.onClick(this.getChild("btn_close"), this.onClickBtnClose, this, true, true);
    this.onClick(this.getChild("btn_start"), this.onClickBtnStart, this, true, true);
	this.bind(EventDef["ED_ADD_TO_LIST"], this.onAddToList);
	UIGame.close();
	Controller.create(false);
	Controller.onLevel(true, true);
	this.mIsMusicOn = AudioModel.isMusicEnabled();
	this.mIsSoundOn = AudioModel.isSoundEnabled();
	AudioModel.setMusicEnabled(false);
	AudioModel.setSoundEnabled(false);
};

// 点击返回按钮
UIGM.onClickBtnClose = function(btn) {
	AudioModel.setMusicEnabled(this.mIsMusicOn);
	AudioModel.setSoundEnabled(this.mIsSoundOn);
	this.close();
	Controller.create(true);
	UIGame.openMiddle();    // 注意:在Controller.create()后面调用
};

// 点击开始按钮
UIGM.onClickBtnStart = function(btn) {
	this.mAward = 0;
	// 下注
	var stakeTextinput = this.getChild("textinput_stake");
	this.mStake = parseInt(stakeTextinput.text);
	this.mStake = isNaN(this.mStake) ? 1 : Math.abs(this.mStake);
	stakeTextinput.text = this.mStake;
	stakeTextinput.mouseEnabled = false;
	// 开奖次数
	var countTextinput = this.getChild("textinput_count");
	this.mCount = parseInt(countTextinput.text);
	this.mCount = isNaN(this.mCount) ? 1 : Math.abs(this.mCount);
	countTextinput.text = this.mCount;
	countTextinput.mouseEnabled = false;
	// 总的奖励
	var awardTotalLabel = this.getChild("label_award_total");
	awardTotalLabel.text = 0;
	// 平均奖励
	var awardPerLabel = this.getChild("label_award_per");
	awardPerLabel.text = 0;
	// 总耗时
	var costTimeLabel = this.getChild("label_cost_time");
	costTimeLabel.text = "模拟中, 请稍等 ......";
	// 返回按钮
	var closeBtn = this.getChild("btn_close");
	closeBtn.mouseEnabled = false;
    closeBtn.gray = true;
	// 开始按钮
	var startBtn = this.getChild("btn_start");
	startBtn.mouseEnabled = false;
    startBtn.gray = true;
	// 创建地图
	Controller.create(false);
	Controller.onLevel(true, true);
	laya.callAfter(0.1, function() {
		var startTime = laya.utils.Browser.now();
		var lastTime = startTime;
		Controller.onStart(this.mCount, null, null, null, function() {
			stakeTextinput.mouseEnabled = true;
			countTextinput.mouseEnabled = true;
			closeBtn.mouseEnabled = true;
			closeBtn.gray = false;
			startBtn.mouseEnabled = true;
			startBtn.gray = false;
			awardTotalLabel.text = this.mAward;
			awardPerLabel.text = this.mAward/this.mCount;
			costTimeLabel.text = this.calcTime(startTime);
		}, this);
	}, this);
};

UIGM.calcTime = function(startTime) {
	var seconds = (laya.utils.Browser.now() - startTime)/1000;
	var hour = Math.floor(seconds/3600);
	if (hour > 0) {
		seconds = seconds%3600;
	}
	var minute = Math.floor(seconds/60);
	if (minute > 0) {
		seconds = seconds/60;
	}
	return hour + "时" + minute + "分" + seconds + "秒";
};

UIGM.onAddToList = function(gameSection, screenTimes, objectList) {
    var totalValue = 0;
    var levelId = Controller.getLevelId();
    for (var objectId in objectList) {
        if (objectList.hasOwnProperty(objectId)) {
			var awardData = DataModel.calcAwardData(levelId, gameSection, screenTimes, objectId, objectList[objectId]);
            totalValue += awardData.value;
        }
    }
    totalValue *= this.mStake;
    this.mAward += totalValue;
};

///<jscompress sourcefile="UIPrompt.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-17
 ** Brief:	提示
 ***********************************************************************/
UIPrompt = UIDEFINE("UIPrompt");

// 显示提示
UIPrompt.show = function(text) {
    this.openTop();
	if ('string' != typeof(text) || 0 == text.length) {
		return;
	}
	// 文本
	var promptLabel = new laya.ui.Label(text);
    promptLabel.align = "center";
    promptLabel.valign = "middle";
    promptLabel.color = "#fd7878";
    promptLabel.fontSize = 26;
    promptLabel.anchorX = 0.5;
    promptLabel.anchorY = 0.5;
    var width = promptLabel.width + 20;
    var height = promptLabel.height + 20;
    promptLabel.pos((width + 120)/2, height/2);
	// 背景
	var promptBg = new laya.ui.Image(ResURL("image_bg_prompt.png"));
    promptBg.anchorX = 0.5;
    promptBg.anchorY = 0.5;
    promptBg.width = width + 120;
    promptBg.height = height + 3;
    promptBg.sizeGrid = "5,15,5,15,0";
    promptBg.pos(Laya.stage.width/2, Laya.stage.height/2);
	promptBg.addChild(promptLabel);
	this.node.addChild(promptBg);
	// 动作参数
    var moveDT = 0.6;
    var delayDT = 0.6;
    var fadeOutDT = 1.5;
    var movePosY = promptBg.y - 150;
    // 文本动作
    laya.runAction(promptLabel, [
        {props:{}, duration:(moveDT + delayDT)},
        {props:{alpha:0}, duration:fadeOutDT}
    ]);
    // 背景动作
    laya.runAction(promptBg, [
        {props:{y:movePosY}, duration:moveDT},
        {props:{}, duration:delayDT},
        {props:{alpha:0}, duration:fadeOutDT}
    ], function() {
        if (promptBg && !promptBg.destroyed) {
            promptBg.removeSelf();
            promptBg.destroy();
        }
    }, this);
};


///<jscompress sourcefile="UIResLoading.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	资源加载界面
 ***********************************************************************/
UIResLoading = UIDEFINE("UIResLoading");

UIResLoading.onStart = function (callback, target) {
	// 加载界面所需资源
	ResourceLoad([
		{url:ResURL("image_progress_bar.png"), type:laya.net.Loader.IMAGE},
		{url:ResURL("image_progress_bg.png"), type:laya.net.Loader.IMAGE},
		{url:ResURL("image_progress_mask.png"), type:laya.net.Loader.IMAGE},
		{url:ResURL("image_res_loading_bg.png"), type:laya.net.Loader.IMAGE}
	], null, function() {
		this.initUI();
		callback.apply(target, [])
	}, null, this);
	// 事件注册
	this.bind(EventDef["ED_RES_LOADING"], this.updateProgress);
};

// 初始化控件
UIResLoading.initUI = function() {
	var panelX = this.node.x;	// 背景框Y周位置
	var panelY = this.node.y;	// 背景框Y轴位置
	// 背景框
	var panelImage = new laya.ui.Image(ResURL("image_res_loading_bg.png"));
	panelImage.anchorX = 0.5;
	panelImage.anchorY = 0.5;
	panelImage.pos(panelX , panelY + panelImage.height/2);
	this.node.addChild(panelImage);
	// 进度条
	this.mProgress = laya.createProgress(ResURL("image_progress_bg.png"), ResURL("image_progress_bar.png"), ResURL("image_progress_mask.png"), 0);
	this.mProgress.pos(panelX - this.mProgress.width/2, panelImage.y + 10);
	this.node.addChild(this.mProgress);
	// 文本提示
	this.mLabel = new laya.ui.Label("");	//("资源加载中...");
	this.mLabel.anchorX = 0.5;
	this.mLabel.anchorY = 0.5;
	this.mLabel.pos(panelX, this.mProgress.y - 30);
	this.mLabel.fontSize = 28;
	this.mLabel.color = "#ffffff";
	this.node.addChild(this.mLabel);
};

// 更新进度条
UIResLoading.updateProgress = function(progress) {
	var progressText = (Math.floor(progress*100)).toString();
	this.mProgress.setValue(progress, false);
	this.mLabel.anchorX = 0.5;
	this.mLabel.anchorY = 0.5;
	this.mLabel.text = progressText + "%";	//"资源加载中..." + progressText + "%";
};

///<jscompress sourcefile="UISetUp.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-14
 ** Brief:	设置界面
 ***********************************************************************/
UISetUp = UIDEFINE("UISetUp", SetUpUI);

UISetUp.onStart = function() {
    // 关闭按钮
    this.onClick(this.getChild("btn_close"), function() {
        this.close();
    }, this, true, true);
   
    // 音乐按钮
    var isMusicOn = AudioModel.isMusicEnabled();
    var musicBtn = this.getChild("btn_music");
    this.loadSkinByState(musicBtn, isMusicOn);
    this.onClick(this.getChild("btn_music"), function() {
        isMusicOn = !isMusicOn;
        AudioModel.setMusicEnabled(isMusicOn);
        if (isMusicOn) {
            AudioModel.playMusic(1001);
        }
        UISetUp.loadSkinByState(musicBtn, isMusicOn);
    }, this. true, true);
    // 声音按钮
    var isSoundOn = AudioModel.isSoundEnabled();
    var effectBtn = this.getChild("btn_effect");
    this.loadSkinByState(effectBtn, isSoundOn);
    this.onClick(this.getChild("btn_effect"), function() {
        isSoundOn = !isSoundOn;
        AudioModel.setSoundEnabled(isSoundOn);
        UISetUp.loadSkinByState(effectBtn, isSoundOn);
    }, this, true, true);
   //游戏说明
   var desBtn = this.getChild("btn_des");
   this.onClick(desBtn, function() {
	   UIGamePlayDes.openFront(true, true, true);
    }, this, true, true);
};

//根据开关状态，设置皮肤
UISetUp.loadSkinByState = function(node, state){
    if(node.name == "btn_effect"){
        node.pos(557,200);
		node.skin = "ui/button_switch_02.png";
        if(state){
            node.pos(607,200);
			 node.skin = "ui/button_switch_01.png";
            return ;
        }
    }else if(node.name == "btn_music"){
        node.pos(346,200);
		node.skin = "ui/button_switch_02.png";
        if(state){
            node.pos(392,200);
			node.skin = "ui/button_switch_01.png";
            return ;
        }
    }
};
///<jscompress sourcefile="ResourceConfig.js" />
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
		{url:AUDIO_DIR + "se_ui_bonus_2_1.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_2.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_3.mp3", type:laya.net.Loader.SOUND},
		{url:AUDIO_DIR + "se_ui_bonus_2_4.mp3", type:laya.net.Loader.SOUND},
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
///<jscompress sourcefile="ResourceLoader.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-27
 ** Brief:	resource loader
 ***********************************************************************/
var mResourceConfig = ResourceConfigParse(ResourceConfig);
//----------------------------------------------------------------------
// 资源配置解析
function ResourceConfigParse(config) {
    try {
        // 获取资源名,如:Picture/a.png => a.png
        function getResourceName(resourceUrl) {
            var idx = resourceUrl.lastIndexOf("\/");
            if (-1 == idx) {
                return resourceUrl;
            }
            return resourceUrl.substring(idx + 1, resourceUrl.length);
        }
        // 解析
        var checkNameList = {};
        var newConfig = {};
        for (var tag in config) {
            if (config.hasOwnProperty(tag)) {
                newConfig[tag] = {};
                for (var i = 0, len = config[tag].length; i < len; ++i) {
                    var resName = getResourceName(config[tag][i].url);
                    if (checkNameList[resName]) {
                        throw new Error("exist same resource '" + resName + "'in config");
                    }
                    checkNameList[resName] = true;
                    newConfig[tag][resName] = config[tag][i];
                }
            }
        }
        return newConfig;
    } catch (exception) {
        alert(exception.stack);
    }
}
//----------------------------------------------------------------------
// 获取资源路径.name:资源名称(如:a.png);返回:(如:Picture/a.png)
function ResURL(name) {
    for (var tag in mResourceConfig) {
        if (mResourceConfig.hasOwnProperty(tag)) {
            if (mResourceConfig[tag][name]) {
                return mResourceConfig[tag][name].url;
            }
        }
    }
    return name;
}
//----------------------------------------------------------------------
// 资源加载
function ResourceLoad(resourceList, progressCB, loadCB, errorCB, target) {
    if (!(resourceList instanceof Array)) {
        resourceList = [resourceList];
    }
    var totalCount = resourceList.length, currCount = 0;
    if (0 == totalCount) {
        if ('function' == typeof(loadCB)) {
            loadCB.apply(target, []);
        }
        return;
    }
    Laya.loader.retryNum = 3;
    Laya.loader.load(resourceList, laya.utils.Handler.create(this, function() {
        if ('function' == typeof(loadCB)) {
            loadCB.apply(target, []);
        }
    }), laya.utils.Handler.create(this, function(progress) {
        if ('function' == typeof(progressCB)) {
            progressCB.apply(target, [progress]);
        }
    }, null, false));
    Laya.loader.on(laya.events.Event.ERROR, this, function(errorURL) {
        if ('function' == typeof(errorCB)) {
            errorCB.apply(target, [errorURL]);
        }
    });
}
//----------------------------------------------------------------------
// 根据资源标签预加载资源.resourceTagList:资源标签列表;progressCB:加载进度回调函数;loadCB:加载完成回调函数;loadCB:加载出错回调函数;target:回调函数宿主对象
function ResourceConfigLoad(resourceTagList, progressCB, loadCB, errorCB, target) {
    if (!(resourceTagList instanceof Array)) {
        resourceTagList = [resourceTagList];
    }
    var resourceList = [];
    for (var i = 0, len = resourceTagList.length; i < len; ++i) {
        var resourceTag = resourceTagList[i];
        for (var key in mResourceConfig[resourceTag]) {
            if (mResourceConfig[resourceTag].hasOwnProperty(key)) {
                resourceList.push(mResourceConfig[resourceTag][key]);
            }
        }
    }
    ResourceLoad(resourceList, progressCB, loadCB, errorCB, target);
}
//----------------------------------------------------------------------
// 加载资源
function loadResource(callback, target) {
    // 打开资源加载界面
    UIResLoading.openFront(true, false, false, function() {
        console.log("开始加载");
        ResourceConfigLoad(["atlas","audio","effect","font","picture","role"], function(progress) {
            console.log("加载进度: " + progress);
            EventCenter.post(EventDef["ED_RES_LOADING"], progress);
        }, function() {
            console.log("加载结束");
            EventCenter.post(EventDef["ED_RES_LOADING"], 1);
			Laya.timer.once(200, this, function() {
				UIResLoading.close();  // 关闭资源加载界面
				callback.apply(target, []);
			});
        }, function(errorURL) {
            alert(errorURL);
        }, this);
    }, this);
}
//----------------------------------------------------------------------
///<jscompress sourcefile="Global.js" />
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
	LEVEL_UP_FADE: 1.0			//升星（级）界面淡出时间
	
};
///<jscompress sourcefile="Game.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-11
 ** Brief:	游戏逻辑
 ***********************************************************************/
Game = {};
//----------------------------------------------------------------------
// 创建基础节点
Game.createBaseNodes = function() {
	var nodes = {
		root: new laya.ui.Component(),		// 根节点(不允许挂载)
		back: new laya.ui.Component(),		// 底层UI节点(挂载游戏背景等最底层UI)
		scene: new laya.ui.Component(),		// 场景节点(挂载游戏战斗场景)
		middle: new laya.ui.Component(),	// 中层UI节点(挂载非模态UI)
		front: new laya.ui.Component(),		// 上层UI节点(挂载模态UI)
		top: new laya.ui.Component()		// 顶层UI节点(挂载游戏提示等最顶层UI)
	};
    function setBaseNodeProperty(node, zOrder, parent) {
        node.size(Laya.stage.width, Laya.stage.height);
        node.anchorX = 0.5;
        node.anchorY = 0.5
        node.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        if ('number' == typeof(zOrder)) {
            node.zOrder = zOrder
        }
        node.mouseEnabled = true;
        node.mouseThrough = true;
        if (parent) {
            parent.addChild(node);
        }
    }
    setBaseNodeProperty(nodes.root);
    setBaseNodeProperty(nodes.back, 1, nodes.root);
    setBaseNodeProperty(nodes.scene, 2, nodes.root);
    setBaseNodeProperty(nodes.middle, 3, nodes.root);
    setBaseNodeProperty(nodes.front, 4, nodes.root);
    setBaseNodeProperty(nodes.top, 5, nodes.root);
    return nodes;
};
//----------------------------------------------------------------------
// 初始游戏(只能调用一次)
Game.init = function() {
    try {
        // 游戏节点
        var nodes = this.createBaseNodes();
        this.NODE_UI_BACK = nodes.back;
        this.NODE_SCENE = nodes.scene;
        this.NODE_UI_MIDDLE = nodes.middle;
        this.NODE_UI_FRONT = nodes.front;
        this.NODE_UI_TOP = nodes.top;
        Laya.stage.addChild(nodes.root);
        // 初始化
        if (G.SHOW_FPS) {
            laya.utils.Stat.show();
        }
        loadResource(this.run, this);
    } catch (exception) {
        alert(exception.stack);
    }
};
//----------------------------------------------------------------------
// 运行游戏
Game.run = function() {
    try {
        DataTB.init(core_data_tplt_list);
	    DataTB.reload("audio_tplt", audio_tplt);
        DataTB.reload("effect_tplt", effect_tplt);
	    DataTB.reload("level_tplt", level_tplt);
        DataTB.reload("map_tplt", map_tplt);
        AudioModel.init();
        Controller.create(true);
        UIGameDes.openFront(true, true, true);
    } catch (exception) {
        alert(exception.stack);
    }
};
//----------------------------------------------------------------------
// 页面关闭,刷新
// window.onbeforeunload = function() {
//     return '';
// };
//----------------------------------------------------------------------
///<jscompress sourcefile="Main.js" />
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

// 分辨率设计
Laya.init(G.DESIGN_WIDTH, G.DESIGN_HEIGHT, Laya.WebGL);
Laya.stage.scaleMode = "fixedwidth";
Laya.stage.screenMode = "horizontal";
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
// 运行游戏
Game.init();
///<jscompress sourcefile="UIGameDes.js" />
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
        var index1 = Math.floor(Math.random()*(arr.length - 1) + 0.5);
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
///<jscompress sourcefile="UILevelDes.js" />
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

///<jscompress sourcefile="UIOriTip.js" />
/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-17
 ** Brief:	提示
 ***********************************************************************/
UIOriTip = UIDEFINE("UIOriTip");

// 显示提示
UIOriTip.onStart = function() {
    var topImg = new laya.ui.Image();
	topImg.skin = ResURL("image_lockUp.png");
	topImg.pos(0,-100);
	topImg.size(960,840);
	topImg.anchorX = 0;
	topImg.anchorY = 0;
	topImg.sizeGrid = "0,0,0,0,0";
	this.mTopImg = topImg;
	this.node.addChild(topImg);
	this.root.zOrder = 100;
};


///<jscompress sourcefile="UILevelUp.js" />
/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-10-11
 ** Brief:	关卡升星界面
 ***********************************************************************/
UILevelUp = UIDEFINE("UILevelUp", LevelUpUI);

UILevelUp.onStart = function(paramArr) {
	this.getChild("label_level_now").text = "恭喜您通过" + paramArr[0] + "!";
	this.getChild("label_level_next").text = "接下来您将挑战" + paramArr[1] + "!";
	this.onClick(this.root, function(){
		this.close();
	}, this, false, true);
	
	laya.callAfter(G.LEVEL_UP_STAY, function(){
		if(this.root){
			laya.fadeOut(this.root, G.LEVEL_UP_FADE, function(){
				this.close();
			}, this);
		}
	}, this);
};


///<jscompress sourcefile="UINewGuide.js" />
/***********************************************************************
 ** Author:	Lihq
 ** Date:	2016-10-12
 ** Brief:	新手引导界面
 ***********************************************************************/
UINewGuide = UIDEFINE("UINewGuide", NewGuideUI);

UINewGuide.onStart = function(steps) {
	//设置背景
	var bg = this.getChild("game_bg").skin = ResURL("image_map_bg_001.png") ;
	this.uiNode = this.getChild("box_middle");
	this.steps = steps || 1;

	this.setImageWord();
	
	if(1 == this.steps){
		this.createStakeGuide();
	}else if(2 == this.steps){
		this.createStartGuide();
	}else if(3 == this.steps){
		this.createAutoGuide();
	}else if(4 == this.steps){
		this.createAwardGuide();
	}else if(5 == this.steps){
		this.createProgressGuide();
	}else if(6 == this.steps){
		this.createBottleGuide();
	}
	
	//this.node.addChild(maskSp);

	//触摸层
	this.onClick(this.getChild("game_touch"),function(){
		var steps = this.steps + 1;
		this.close();
		//供测试使用
		// if(steps == 7){
			// steps = 1;
		// }
		if(steps < 7){
			UINewGuide.openFront(true, true, false,steps);
		}
	}, this, false, true);
	
	//用来测试坐标
	Laya.stage.on("mousemove", this, function(){
		//console.log("36++++++++++++++++",Laya.stage.mouseX,Laya.stage.mouseY);
		//maskSp.x = Laya.stage.mouseX;
		//maskSp.y = Laya.stage.mouseY;
	});
};

//根据指引，设置文字
UINewGuide.setImageWord = function() {
	for(var i = 1; i <= 6; ++i){	
		var img = this.getChild("img_word_" + i);
		img.visible = !(this.steps != i);
	}
};

//赌注引导
UINewGuide.createStakeGuide = function() {
	//左边按钮灰色
	this.getChild("btn_left").gray = true;
	//赌注mask
	var maskSp =  new laya.ui.Image("ui/image_score_back_01.png");
	maskSp.sizeGrid = "14,56,22,42";
	maskSp.width = 580;
	maskSp.height = 84;
	this.uiNode.mask = maskSp;
	maskSp.pos(-270, 190);
};

//创建开始引导
UINewGuide.createStartGuide = function() {
	//开始mask
	var	maskSp = new Laya.Sprite();
	maskSp.loadImage("ui/button_start.png");
	maskSp.pivot(0, 0);
	this.uiNode.mask = maskSp;
	maskSp.pos(297, 128);
};

//创建自动消除引导
UINewGuide.createAutoGuide = function() {
	//自动消除mask
	var	maskSp = new Laya.Sprite();
	maskSp.loadImage("ui/button_auto.png");
	maskSp.pivot(0, 0);
	this.uiNode.mask = maskSp;
	maskSp.pos(309, 205);
};

//创建奖励引导
UINewGuide.createAwardGuide = function() {
	//奖励mask
	var maskSp =  new laya.ui.Image("ui/image_score_back_01.png");
	maskSp.sizeGrid = "14,56,22,42";
	maskSp.width = 205;
	maskSp.height = 76;
	this.uiNode.mask = maskSp;
	maskSp.pos(-460, 116);
};

//创建进度条引导
UINewGuide.createProgressGuide = function() {
	//进度条创建
	this.mProgress = laya.createProgress(ResURL("image_progress_bg.png"), ResURL("image_progress_bar.png"), ResURL("image_progress_mask.png"), 1.5);
	this.mProgress.rotation = 270;
	this.mProgress.pos(230, 380);
	this.uiNode.addChild(this.mProgress);
    this.mProgress.setValue(100);
	//进度条mask
	var maskSp = new laya.ui.Image(ResURL("image_progress_bar.png"));
	maskSp.rotation = 270;
	this.uiNode.mask = maskSp;
	maskSp.pos(-250, 110);
};

//创建花瓶引导
UINewGuide.createBottleGuide = function() {
	//花瓶
	this.mBonus2Box = laya.createArmature(ResURL("b2zhuangtaidonghua.png"),ResURL("b2zhuangtaidonghua.sk"), false, null, null, null, this);
    this.mBonus2Box.pos(850,235);
    this.uiNode.addChild(this.mBonus2Box);
    this.mBonus2Box.play("ui_bonus02_1",true);
	//花瓶mask
	var maskSp =  new laya.ui.Image("ui/image_ui_level_01.png");
	maskSp.width = 132;
	maskSp.height = 180;
	this.uiNode.mask = maskSp;
	maskSp.pos(300, -205);
};

///<jscompress sourcefile="UIGamePlayDes.js" />
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

