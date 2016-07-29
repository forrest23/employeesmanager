/**
 * 闪屏入口
 */
'use strict'

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    InteractionManager
} from 'react-native';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../assets/splash.png');

export default class Splash extends Component {
    componentDidMount() {
        const {actions} = this.props;
        //设置三秒后，闪屏消失
        setTimeout(() => {
            //在所有交互结束后进行
            InteractionManager.runAfterInteractions(() => {
                actions.closeSplashScreen();
            });
        }, 2000);
    }

    render() {
        return (
            <Image
                style={{ width: maxWidth, height: maxHeight }}
                source={splashImg}
                />
        );
    }
}
Splash.propTypes = {
    actions: PropTypes.object.isRequired
}
