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
//import DeviceStorage from '../utils/Storage.js'

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
        if ( Password1 === '' ) {
            // The first password
            Password1 = password;
          
            this.setState({
                status: 'normal',
                message: '请再输入一次'
            });
        } else {
            // The second password
            if ( password === Password1 ) {
                this.setState({
                    status: 'right',
                    message: '设置成功'
                });
                //DeviceStorage.save("passwordnew",password);
                Password1 = '';
                // your codes to close this view
             
                 Actions.pop();
            } else {
                this.setState({
                    status: 'wrong',
                    message:  '两次输入不一致，请重新输入'
                });
            }
        }
    }

    onStart() {
        if ( Password1 === '') {
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
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                innerCircle={true}
                outerCircle={true}
                interval={1}
                textStyle={fontsize=13}
            />
        );
    }
}

export default SetGesture;