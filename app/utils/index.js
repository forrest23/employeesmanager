//常用的公共方法
import React from 'react';
import {Linking} from 'react-native';


const colors = ['#E74C3C', '#C0392B', '#1ABC9C',
	'#16A085', '#2ECC71', '#27AE60', '#3498DB',
	'#2980B9', '#9B59B6', '#8E44AD', '#34495E',
	'#2C3E50', '#E67E22',
	'#D35400', '#7F8C8D'];


function getRandomNum(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}


export function parseImgUrl(url) {
	if (/^\/\/.*/.test(url)) {
		url = 'http:' + url
	}
	return url
}


export function genColor() {
	return colors[getRandomNum(0, colors.length - 1)];
}


export function link(url) {
	Linking.canOpenURL(url).then(supported => {
		if (supported) {
			return Linking.openURL(url)
		}
	})
		.catch(err => {
			console.error('An error occurred', err);
		})
}

export function format(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
					var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

//根据性别code转性别名称
export function getSexText(sex) {
	if (sex == "1") {
		return "男";
	}
	else if (sex == "2") {
		return "女";
	}
	else {
		return "其他";
	}
}

//转护理级别
export function getCareLevelText(careName) {
	if (careName.length > 0) {
		return careName.substring(0, 1);
	}
	else {
		return "";
	}
}
//将20160720转为2016-07-20
export function formatDate(inDate) {
	if (inDate.length == 8) {
		return inDate.substr(0, 4) + "-" + inDate.substr(4, 2) + "-" + inDate.substr(6, 2);
	}
	return inDate;
}

//在指定位置插入字符  参数说明：str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
export function insert_flg(str, flg, sn) {
    var newstr = "";
    for (var i = 0; i < str.length; i += sn) {
        var tmp = str.substring(i, i + sn);
        newstr += tmp + flg;
    }
    return newstr;
}
