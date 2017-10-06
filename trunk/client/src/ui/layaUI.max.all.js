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
	})(View);
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
	})(View);
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
	})(View);
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
	})(View);
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
	})(View);
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
	})(View);
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
	})(View);
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
		['uiView',function(){return this.uiView={"type":"View","props":{"width":960,"height":540},"child":[{"type":"Box","props":{"y":270,"x":480,"width":960,"name":"box_middle","mouseThrough":true,"mouseEnabled":true,"height":540,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":302,"x":481,"width":960,"skin":"ui/image_main_area.png","name":"game_bg","height":720,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":61,"x":25,"skin":"ui/image_left.png"}},{"type":"Button","props":{"y":436,"x":858,"stateNum":"1","skin":"ui/button_start.png","name":"btn_start","labelStrokeColor":"#1f1e1a","labelStroke":2,"labelSize":25,"labelPadding":"-3","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":511,"x":859,"width":137,"stateNum":"1","skin":"ui/button_auto.png","name":"btn_auto","labelStrokeColor":"#d79814","labelStroke":2,"labelSize":25,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"height":68,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-37,"x":211,"skin":"ui/image_main.png","name":"image_middle_bg","mouseThrough":false,"mouseEnabled":false}},{"type":"Button","props":{"y":500,"x":251,"stateNum":"1","skin":"ui/button_arrow.png","name":"btn_left","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":501,"x":726,"stateNum":"1","skin":"ui/button_arrow.png","rotation":180,"name":"btn_right","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":503,"x":352,"stateNum":"1","skin":"ui/button_bet_01.png","name":"btn_stake1","labelSize":28,"labelPadding":"0","labelColors":"#633b29","labelBold":true,"label":"1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":504,"x":492,"stateNum":"1","skin":"ui/button_bet_02.png","name":"btn_stake2","labelSize":28,"labelPadding":"0","labelColors":"#F0B137","labelBold":true,"label":"2","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":503,"x":628,"stateNum":"1","skin":"ui/button_bet_02.png","name":"btn_stake3","labelSize":28,"labelPadding":"0","labelColors":"#F0B137","labelBold":true,"label":"5","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":425,"x":144,"width":120,"text":"0.00","name":"label_award","height":36,"fontSize":36,"color":"#fcce13","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":270,"x":479,"width":960,"skin":"ui/image_touming.png","pivotY":270,"pivotX":480,"name":"game_touch","mouseEnabled":true,"height":540}},{"type":"Image","props":{"y":399,"x":364,"skin":"ui/image_xs_word_1.png","name":"img_word_1"}},{"type":"Image","props":{"y":331,"x":700,"skin":"ui/image_xs_word_2.png","name":"img_word_2"}},{"type":"Image","props":{"y":382,"x":739,"skin":"ui/image_xs_word_3.png","name":"img_word_3"}},{"type":"Image","props":{"y":187,"x":269,"skin":"ui/image_xs_word_5.png","name":"img_word_5"}},{"type":"Image","props":{"y":98,"x":545,"skin":"ui/image_xs_word_6.png","name":"img_word_6"}},{"type":"Image","props":{"y":400,"x":228,"skin":"ui/image_xs_word_7.png","name":"img_word_4"}},{"type":"Image","props":{"y":162,"x":313,"skin":"ui/image_xs_word_4.png","name":"img_word_7"}},{"type":"Button","props":{"y":304,"x":479,"stateNum":"1","skin":"ui/button_utorial_01.png","name":"btn_sure","anchorY":0.5,"anchorX":0.5}}]};}
		]);
		return NewGuideUI;
	})(View);
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
	})(Dialog);