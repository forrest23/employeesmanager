/**
 * 唯一改变state的方法是触发action，action是一个描述已发生事件的普通对象。
 * Action 是把数据从应用传到store的载体。它是store数据的唯一来源。
 * 我们约定action内使用一个字符串类型的TYPE字段来表示将要执行的行为
 */
'use strict';
import * as  application from './application';
import * as  login from './login';
import * as  utils from './utils';
import * as  inPatient from './inPatient';

export default 
{
    ...application,
    ...login,
    ...utils,
    ...inPatient,
};