//点击按钮等 页面跳转逻辑
import {Actions} from 'react-native-router-flux';

export function pageJump(title) {
    switch (title) {
        case "患者管理":
            Actions.patientManager({ hideNavBar: false, hideTabBar: true });
            break;
        case "先进评选":
            Actions.vote({ hideNavBar: false, hideTabBar: true });
            break;
        case "危急值":
            Actions.critical({ hideNavBar: false, hideTabBar: true });
            break;
        case "我的预约":
            Actions.inPatientList({ hideNavBar: false, hideTabBar: true });
            break;
        case "我的门诊":
            Actions.inPatientDetail({ hideNavBar: false, hideTabBar: true });
            break;
        case "我的住院":
            Actions.inPatientListPage({ hideNavBar: false, hideTabBar: true });
            break;
        case "住院患者明细":
            Actions.inPatientDetail({ hideNavBar: false, hideTabBar: true });
            break;
        case "医学公式":
            Actions.formula({ hideNavBar: false, hideTabBar: true });
            break;
        default:
            break;
    }
}