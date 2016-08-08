/**
 * Created by ArmyKing on 16/8/2.
 */

//导入 APP 变量
import * as types from '../config/actionType';
import {createAction} from 'redux-actions';
import * as userService from '../services/userService';
import * as UserInfo from '../services/token';
import {Actions,ActionConst} from 'react-native-router-flux';
export const Login = createAction(types.LOGIN,async(userName,userPwd,ValidNum)=> {
    return await userService.Login(userName,userPwd,ValidNum)
    .then(data=> {
        if (data) {
            if(!data.error) {
                userService.updateUserInfo(userName,data.access_token,data.para)
                CheckLoginState();
                Actions.pop();
            }
            return {
            access_token:data.access_token,
            error: data.error,
            error_description:  data.error_description,
            para:data.para,
            loading:false,
           };
        }
        throw 'getUserInfoError'
    });
}, (error,error_description)=> {
    return {
        error,
        error_description,
        sync: 'user'
    }
}

);
export const SetLoginLoading =createAction(types.SETLOGINLOADING,(LOAD)=>{
    return {loading:LOAD}
});
export const CheckLoginState =createAction(types.CHECKLOGINSTATE,()=>{
   var userInfo=userService.checkLoginInfo();
    if(!userInfo){
        return;
    }else{
           UserInfo.setCode(userInfo.Code);
           UserInfo.setName(userInfo.Name);
           UserInfo.setUserName(userInfo.UserName);
           UserInfo.setToken(userInfo.Token);
        return {
                Name: userInfo.Name,       //姓名
                Code: userInfo.Code,        //工号
                UserName: userInfo.UserName,   //账号
                Token: userInfo.Token,      //Token
                gesture:userInfo.gesture,
            }
    }
});
export const Logout =createAction(types.LOGOUT,()=>{
    userService.clearUserInfo();
    UserInfo.ClearAll();
    Actions.login();
    return ;
});