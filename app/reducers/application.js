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
}

const actionHandle = {
    //设置闪屏状态
    [APP.SPLASH]: (state, action)=> {
        return Object.assign({}, state, {
            isShowSplash: action.data
        });
    },
}

export default createReducer(initialState, actionHandle);