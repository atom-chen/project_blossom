/***********************************************************************
 ** Author:	jaron.ho
 ** Date:	2015-08-13
 ** Brief:	数据模型
 ***********************************************************************/
DataModel = {};
//----------------------------------------------------------------------
// 发送请求,method:'get'或'post',url:例如('http://42.159.240.231/index.php'),content:例如('name=James&password=123456'),headers:例如(["Token", "2k3rlsdjf823jfs"])
DataModel.httpSend = function(method, url, content, headers, okCB, failCB, target) {
	method = 'string' == typeof(method) && method.length > 0 ? method : 'get';
	okCB = 'function' == typeof(okCB) ? okCB : function(data){};
	failCB = 'function' == typeof(failCB) ? failCB : function(){};
	var hr = new laya.net.HttpRequest();
	hr.once(laya.events.Event.PROGRESS, this, function(e){});
	hr.once(laya.events.Event.COMPLETE, this, function(e) {
		okCB.apply(target, [hr.data]);
	});
	hr.once(laya.events.Event.ERROR, this, function(e) {
		console.log(e);
		failCB.apply(target);
	});
	method = method.toLowerCase();
	if ('get' == method) {
		hr.send(url + "?" + content, null, method, 'text', headers);
	} else if ('post' == method) {
		hr.send(url, content, method, 'text', headers);
	} else {
		throw new Error("can't handle method [" + method + "]");
	}
};
//----------------------------------------------------------------------
// 获取随机数
DataModel.getRandom = function() {
	if (!this.mLCG) {
		this.mLCG = CreateLCG();
		this.mLCG.seed(Math.random());	// 设置随机种子
	}
	return this.mLCG.random();
};
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
	function randomFunc() {
		return DataModel.getRandom();
	};
	var effectProbability = CreateProbability(levelData.bonus1, randomFunc);	// 把百分比转为权重计算方法
	var effectTotalWeight = effectProbability.getTotalWeight();
	if (1000 != effectTotalWeight) {	// 由于百分比(10表示1%),所以1000表示百分百,这里必须确保所有效果id的概率相加为百分百(必须有一个效果命中)
		throw new Error("关卡[" + levelData.name +"]中的bonus1配置出错,概率相加不等于百分百");
	}
	var effectId = effectProbability.getValue();	// 效果id
	if (0 == effectId) {
		return;
	}
	var effectData = DataTB.get("effect_tplt", effectId, true);
	var valueProbability = CreateProbability(effectData.value, randomFunc);
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
	function randomFunc() {
		return DataModel.getRandom();
	};
	var effectProbability = CreateProbability(levelData.bonus3, randomFunc);	// 把百分比转为权重计算方法
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
	var valueProbability = CreateProbability(effectData.value, randomFunc);
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