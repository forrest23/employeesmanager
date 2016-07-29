/**
 * 应用全局的redux
 */
'use strict'

//引用reducer生成器
import createReducer from '../utils/createReducer';
import {APP} from '../config/actionType';

//初始化状态
const initialState = {
    isShowSplash: true,//是否展示闪屏
    logInState: '0',//登陆状态 0 未登陆,1 已登陆未设置手势密码 2已登陆已设置手势密码 
}

const actionHandle = {
    //设置闪屏状态
    [APP.SPLASH]: (state, action)=> {
        return Object.assign({}, state, {
            isShowSplash: action.data
        });
    },
    //设置手势密码状态
    [APP.checkLoginState]: (state, action)=> {
        return Object.assign({}, state, {
            logInState: action.data
        });
    },
}

export default createReducer(initialState, actionHandle);