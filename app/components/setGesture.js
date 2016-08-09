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

var Password1 = '';

class SetGesture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '请设置手势密码',
            status: 'normal'
        }
    }

    onEnd(password) {
        const {actions} = this.props;
        if (Password1 === '') {
            // The first password
            Password1 = password;

            this.setState({
                status: 'normal',
                message: '请再输入一次'
            });
        } else {
            // The second password
            if (password === Password1) {
                this.setState({
                    status: 'right',
                    message: '设置成功'
                });
                actions.SetUserGesture(Password1);
                // realm.write(() => {
                //     realm.create('UserInfo', { Id: '1', Gesture: Password1 }, true);
                // });
                // UserInfo.setGesture(Password1);

                Password1 = '';
                // your codes to close this view

                Actions.pop();
            } else {
                this.setState({
                    status: 'wrong',
                    message: '两次输入不一致，请重新输入'
                });
            }
        }
    }

    onStart() {
        if (Password1 === '') {
            this.setState({
                message: '请设置手势密码'
            });
        } else {
            this.setState({
                message: '请再输入一次'
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