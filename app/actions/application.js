/**
 * 应用全局的action
 */
'use strict';

//导入 APP 变量
import { APP } from '../config/actionType';

/**
 * 关闭闪屏
 * 异步Action Creator
 * 通过指定的middleware，action creator除了返回action对象外还可以返回函数。
 * 这时 这个action creater 就是Thunk。
 * 异步Action 不会马上把数据传递给reducer，但是一旦操作完成就会触发action的分发事件。
 */
export function closeSplashScreen() {
    // Thunk middleware 知道如何处理函数
    // 这里把 dispatch 方法通过参数的形式传给函数，让它也能 dispatch action。
    return (dispatch) => {
        return Promise.resolve(dispatch({
            type: APP.SPLASH,//将要执行的行为
            data: false
        }));
    }
}