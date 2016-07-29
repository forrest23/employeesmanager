'use strict';
import React, { Component } from 'react';
import { Text, View ,StyleSheet } from 'react-native';

export default class Message extends Component {
  render() {
 
    return (
      <View style={styles.container}>
        <Text>消息</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});
