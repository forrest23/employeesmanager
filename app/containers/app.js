
'use strict'

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppState,
  BackAndroid,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../actions';

import { scenes } from '../config/scenes';
import {toastShort} from '../utils/toast'; //提示框
import Splash from './splash';//闪屏
import * as UserInfo from '../services/token';

import { Actions, Router } from 'react-native-router-flux';


let count = 0;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange.bind(this));
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);

    const {actions} = this.props;
    actions.CheckLoginState();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    if (count == 0) {
      count += 1;
      toastShort('再按一次返回退出APP');
      return true;
    }
    else {
      return false;
    }
  }

  handleAppStateChange(appState) {
    if (appState === 'active') {
      const {actions} = this.props;
      actions.CheckLoginState();
      if (UserInfo.getToken() == "") {
        Actions.login();
      }
      else if (UserInfo.getGesture() == "") {
        Actions.setGesture();
      }
      else {
        Actions.checkGesture();
      }
    }
  }

  render() {
    return (
      <Router scenes={scenes}>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



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

export default connect(mapStateToProps, mapDispatchToProps)(App)