/**
 * Created by ArmyKing on 16/8/2.
 */

//导入 APP 变量
import * as types from '../config/actionType';
import {createAction} from 'redux-actions';
import * as userService from '../services/userService';
import {Actions} from 'react-native-router-flux';
export const Login = createAction(types.LOGIN,async(userName,userPwd,ValidNum)=> {

    return await userService.Login(userName,userPwd,ValidNum)
    .then(data=> {
        if (data) {
            if(!data.error) {
                Actions.tab4();
                userService.updateUserInfo(userName,data.access_token,data.para)
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
