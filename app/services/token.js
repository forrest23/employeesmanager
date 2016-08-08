/**
 * Created by ArmyKing on 16/8/3.
 */
export function getToken() {
    return global.token||"";
}


export function setToken(token) {
    global.token = token;
}
export function getUserName() {
    return global.UserName||"";
}


export function setUserName(UserName) {
    global.UserName = UserName;
}
export function getCode() {
    return global.Code||"";
}


export function setCode(Code) {
    global.Code = Code;
}
export function getName() {
    return global.Name||"";
}
export function setName(Name) {
    global.Name = Name;
}
export function ClearAll() {
    global.Name = "";
    global.Code = "";
    global.Token = "";
}