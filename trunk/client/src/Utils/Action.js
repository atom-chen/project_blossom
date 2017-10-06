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
	AudioModel.playSound(2010);
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
	AudioModel.playSound(2011);
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