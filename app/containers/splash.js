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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../actions';
import { Actions } from 'react-native-router-flux';

import * as UserInfo from '../services/token';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../assets/splash.png');

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions} = this.props;

        //设置三秒后，闪屏消失
        setTimeout(() => {
            //在所有交互结束后进行
            InteractionManager.runAfterInteractions(() => {
                Actions.mainPage();
                if (UserInfo.getToken() == "") {
                   Actions.login({ hideNavBar: true, hideTabBar: true });
                }
                else if (UserInfo.getGesture() == "") {
                    Actions.setGesture({ hideNavBar: true, hideTabBar: true });
                }
                else {
                    Actions.checkGesture({ hideNavBar: true, hideTabBar: true });
                }
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

function mapStateToProps(state) {
    return {
       	...state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(allActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)