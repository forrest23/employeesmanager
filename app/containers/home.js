'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from '../components/swiper';


export default class Home extends Component {
  render() {

    return (
      <View style={styles.container}>
      <View style={{marginTop:5}}>
       <Swiper></Swiper>
      </View>
         <Text>首页</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    //justifyContent: 'center',
  },
});
