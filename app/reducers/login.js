
import * as types from '../config/actionType';
const initialState = {
    access_token: null,
    error:null,
    error_description: null, //错误描述 1.验证码错误 2.需要手机验证码
    para:null,                //返回用户数据信息
    loading:false
};
export  default function (state = initialState, action){
    const {payload, error, meta = {}, type} = action;
    const {sequence = {}} = meta;
    if (sequence.type === 'start' || error) {
        return state;
    }
    switch (type) {
        case types.LOGIN:
            return {
                ...state,
                ...payload
            }
        case  types.SETLOGINLOADING:
            return{
                ...state,
                ...payload
            }

        default:
            return state;
    }
}