
'use strict'

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../actions';

import Splash from './splash';//闪屏

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
} from 'react-native-router-flux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //从reducer中获取应用的状态
    const {application, actions} = this.props;
    const {isShowSplash} = application;
    //是否显示闪屏
    if (isShowSplash) {
      return (
        <Splash actions={actions}></Splash>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload, {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

App.propTypes = {
  application: PropTypes.object.isRequired,//系统的公共装备
  actions: PropTypes.object.isRequired,//行为
}
/**
 *  connect 的第一个参数，返回一个纯对象
 * 这里其实就是把整个应用的state都列出来
 */
function mapStateToProps(state) {
  return {
       application: {
            isShowSplash: state.application.isShowSplash,
        },
  }
}

function mapDispatchToProps(dispatch) {
  return {
    /**
     * bindActionCreators 把 action creators 转成拥有同名Keys的对象，
     * 但使用 dispatch把每个action 包围起来，这样可以直接使用他们。
     * 唯一使用 bindActionCreators的场景是
     * 当需要把action creator往下传到一个组件上，缺不想让这个组件觉察到Redux的存在，
     * 即是不希望把redux store 和 dispatch 传给它。
     */
    actions: bindActionCreators(allActions, dispatch)
  }
}
/**
 * connect 函数将会调用两次，第一次是设置参数，第二次是组件与 redux store 连接。
 * connect 不会修改过传入的React组件，返回的是一个新的与redux store 连接的组件。
 *
 * connect的第一个参数，组件将会监听 Redux store的变化。
 * 任何时候，只要 redux store 发生变化，该函数就会被用，
 * 该回调函数必须返回一个纯对象，这个对象就与组件的props合并。
 *
 * connect的第二个参数，如果传递的是一个函数，
 * 该函数将会接受一个 dispatch 函数，然后自行放回一个对象。
 * 这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起 （ bindActionCreators）
 * 如果忽略了这个参数，dispatch会注入到组件的props中。
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)