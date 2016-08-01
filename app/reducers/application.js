'use strict'

//引用reducer生成器
import createReducer from '../utils/createReducer';
import * as types from '../config/actionType';

//初始化状态
const initialState = {
    isShowSplash: true,//是否展示闪屏
    logInState: '0',//登陆状态 0 未登陆,1 已登陆未设置手势密码 2已登陆已设置手势密码 
}

export default function (state = initialState, action) {
	const { payload, error, meta = {} } = action;
	const { sequence = {} } = meta;
	if (sequence.type === 'start' || error) {
		return state;
	}

	switch (action.type) {
		case types.SPLASH:
			return {
				...state,
			};
		case types.CHECK_LOGIN_STATE:
			return {
				...state,
				logInState: payload
			};
		default :
			return state;
	}
}
