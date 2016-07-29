/**
 * 应用最顶层入口，用于放置Provider
 */

'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import App from './containers/app';//容器组件

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
        <App />
       </Provider>
    );
  }
}
