/**
 * Created by ArmyKing on 16/8/4.
 */

import * as types from '../config/actionType';
const initialState = {
    Name: "",       //姓名
    Code: "",        //工号
    UserName: "",   //账号
    Token: "",      //Token
    Gesture: "",    //手势密码
};
export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action;
    const {sequence = {}} = meta;
    if (sequence.type === 'start' || error) {
        return state;
    }
    switch (type) {
        case types.CHECKLOGINSTATE:
            return {
                ...state,
                ...payload
            }
        case types.LOGOUT:
            return initialState;
        case types.SETUSERGESTURE:
            return {
                ...state,
                Gesture: payload.Gesture
            }
        default:
            return state;
    }
}