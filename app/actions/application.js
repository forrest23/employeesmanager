/**
 * 应用全局的action
 */
'use strict';

//导入 APP 变量
import * as types from '../config/actionType';
import {createAction} from 'redux-actions';
import realm from '../realm/user';
/**
 * 关闭闪屏
 * 异步Action Creator
 * 通过指定的middleware，action creator除了返回action对象外还可以返回函数。
 * 这时 这个action creater 就是Thunk。
 * 异步Action 不会马上把数据传递给reducer，但是一旦操作完成就会触发action的分发事件。
 */

// export const closeSplashScreen = createAction(types.SPLASH, ()=> {
// 	return false;
// });


export const checkLoginState = createAction(types.CHECK_LOGIN_STATE, ()=> {
	return   getLoginState();
});


//登陆状态 0 未登陆,1 已登陆未设置手势密码 2已登陆已设置手势密码
function getLoginState() {
    let users = realm.objects('User');
    if (users.length < 1) {
        return "0";
    }
    else {
        if (users[0].gesture.length > 0) {
            return "1";
        }
        else {
            return "2";
        }
    }
}