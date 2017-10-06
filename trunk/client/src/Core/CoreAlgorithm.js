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