/**
 * Created by ArmyKing on 16/8/3.
 */
export function getToken() {
    return global.Token || "";
}

export function setToken(token) {
    global.Token = token;
}
export function getUserName() {
    return global.UserName || "";
}

export function setUserName(UserName) {
    global.UserName = UserName;
}
export function getCode() {
    return global.Code || "";
}
export function getGesture() {
    return global.Gesture || "";
}

export function setCode(Code) {
    global.Code = Code;
}
export function getName() {
    return global.Name || "";
}
export function setName(Name) {
    global.Name = Name;
}
export function setGesture(Gesture) {
    global.Gesture = Gesture;
}