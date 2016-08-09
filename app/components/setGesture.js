//设置手势密码

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PasswordGesture from 'react-native-gesture-password';
import {Actions} from "react-native-router-flux";
import realm from '../realm/user';
import * as UserInfo from '../services/token';

var InputPassword = '';

class SetGesture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '请绘制手势密码',
            status: 'normal'
        }
    }

    onEnd(password) {
        const {actions} = this.props;
        if (InputPassword === '') {
            // The first password
            if (password.length <= 4) {
                this.setState({
                    status: 'wrong',
                    message: '至少连接4个点，请重新绘制'
                });
                return;
            }
            InputPassword = password;

            this.setState({
                status: 'normal',
                message: '请再次绘制手势密码'
            });
        } else {
            // The second password
            if (password === InputPassword) {
                this.setState({
                    status: 'right',
                    message: '绘制成功'
                });
                actions.SetUserGesture(InputPassword);
                InputPassword = '';

                Actions.pop();
            } else {
                this.setState({
                    status: 'wrong',
                    message: '与上次绘制不一样，请重新绘制'
                });
            }
        }
    }

    onStart() {
        if (InputPassword === '') {
            this.setState({
                status: 'normal',
                message: '请绘制手势密码'
            });
        } else {
            this.setState({
                status: 'normal',
                message: '请再次绘制手势密码'
            });
        }
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
                textStyle={fontsize = 13}
                />
        );
    }
}


export const LayoutComponent = SetGesture;
export function mapStateToProps(state) {
    return {
        ...state.userInfo,
    };
}