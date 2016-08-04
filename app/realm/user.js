'use strict';

import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
    name: 'User',
    properties: {
        name: 'string',
        userNo: 'string',
        gesture:'string',
    },
};
class UserInfo {}
UserInfo.schema = {
    name: 'UserInfo',
    properties: {
        Id :'string',      //主键
        Name :'string',       //姓名
        Code:'string',        //工号
        UserName :'string',   //账号
        Token: 'string',      //Token
    }
};
class UserMenu {}
UserMenu.schema = {
    name: 'UserMenu',
    properties: {
        Id :'string',      //主键
        Icon:'string',     //图标
        Name :'string',    //名称
        SortId :'string',     //排序
        Actived :'string',    //时候使用
    }
};
class UserDept {}
UserDept.schema = {
    name: 'UserDept',
    primaryKey: 'DeptCode',
    properties: {
        DeptCode :'string',
        DeptName:'string',
    }
};
export default new Realm({schema: [User,UserInfo,UserMenu,UserDept]});