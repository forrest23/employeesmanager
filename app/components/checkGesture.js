//验证手势密码

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PasswordGesture from 'react-native-gesture-password';
import {Actions} from "react-native-router-flux";
import * as UserInfo from '../services/token';

var Password1 = "";

class CheckGesture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '请输入手势密码',
            status: 'normal'
        }

        Password1 = UserInfo.getGesture();
        if (Password1 == "") {
            Actions.login();
        }
    }

    onEnd(password) {
        if (password == Password1) {
            this.setState({
                status: 'right',
                message: '登陆成功'
            });

            // your codes to close this view
            Actions.pop();
        } else {
            this.setState({
                status: 'wrong',
                message: '手势密码错误，请重新输入'
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

export default CheckGesture;