//验证手势密码

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

import PasswordGesture from 'react-native-gesture-password';
import {Actions} from "react-native-router-flux";
import * as UserInfo from '../services/token';

let InputPassword = "";
let InputCount = 5;

class CheckGesture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '请输入手势密码',
            status: 'normal'
        }

        InputPassword = UserInfo.getGesture();
        if (InputPassword == "") {
            Actions.login({ hideNavBar: true, hideTabBar: true });
        }
    }

    onEnd(password) {
        if (password == InputPassword) {
            this.setState({
                status: 'right',
                message: '登陆成功'
            });
            InputCount = 5;
            Actions.pop();
        } else {
            InputCount -= 1;
            if (InputCount <= 0) {
                const {actions} = this.props;
                Alert.alert('温馨提示', '连续输错5次，为了您的账户安全，请重新登录', [
                    {
                        text: '确定', onPress: () => {
                            Actions.pop();
                            InputCount = 5;
                            actions.Logout();
                            Actions.login({ hideNavBar: true, hideTabBar: true });
                        }
                    }
                ])
            }
            this.setState({
                status: 'wrong',
                message: '密码错误，你还可以输入' + InputCount + '次'
            });
        }
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: '请输入手势密码'
        });
    }

    onReset() {
        this.setState({
            status: 'normal',
            message: '请再输入一次'
        });
    }

    render() {
        return (
            <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart() }
                onEnd={(password) => this.onEnd(password) }
                innerCircle={true}
                outerCircle={true}
                interval={1}
                />
        );
    }
}

export const LayoutComponent = CheckGesture;
export function mapStateToProps(state) {
    return {
        ...state.userInfo,
    };
}