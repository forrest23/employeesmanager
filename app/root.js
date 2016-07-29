/**
 * 应用最顶层入口，用于放置Provider
 */
'use strict'

import React , {
    Component
} from 'react';
/**
 * 应用中所有的state都以一个对象树的形式存储在一个单一的store中
 * 唯一改变state的方式是触发action，一个描述发生什么的对象。
 * 为了描述action如何改变state的数据，需要编写 reducers。
 */
/**
 * createStore方法，创建一个Reudx store来存放应用中所有的staet。
 *
 * 当store创建后，Redux会 dispatch一个action到reducer中，来用初始的state填充store。
 * 我们不需要处理这个action。但要记住，如果第一个参数也就是传入的state，如果是undefined的话，
 * Reudcer应该返回初始的state值。
 */
import {createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import thunk from 'redux-thunk';//运行使用dispatch函数

import App from './containers/app';//容器组件
/**
 * Redux应用只有一个单一的store。当需要拆分处理数据的逻辑时，使用reducer组合。
 * Store是把 action、reducers联系在一起的对象。它有以下职责：
 * 1.维持应用的状态
 * 2.提供 getState()方法获取state
 * 3.提供 dispatch(action) 方法更新 state
 * 4.通过 subscribe( listener ) 注册监听器
 */
const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(reducers);

export default class Root extends Component{
    render() {
        return (
            <Provider store={store}>
               <App/>
            </Provider>
        )
    }
}
