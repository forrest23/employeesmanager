'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Platform} from 'react-native';
import Swiper from '../components/swiper';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstRows: [
        { image: require('../assets/yntz.png'), text: '院内通知' },
        { image: require('../assets/ygztc.png'), text: '员工直通车' }
      ],

      secondRows: [
        { image: require('../assets/hzgl.png'), text: '患者管理' },
        { image: require('../assets/mzpb.png'), text: '门诊排班' },
        { image: require('../assets/ydjc.png'), text: '移动决策' },
        { image: require('../assets/sspb.png'), text: '手术排班' },
        { image: require('../assets/huizgl.png'), text: '会诊管理' },
        { image: require('../assets/yxgs.png'), text: '医学公式' },
        { image: require('../assets/wjzgl.png'), text: '危急值' },
        { image: require('../assets/yxzx.png'), text: '医学资讯' },
        { image: require('../assets/xjpx.png'), text: '先进评选' },
        { image: require('../assets/more.png'), text: '更多...' }
      ],
    }
  }


  render() {
    var halfSize = Dimensions.get('window').width / 2;
    var thirdSize = Dimensions.get('window').width / 3;
    var firstRowViews = this.state.firstRows.map(function (r, j) {
      return (
        <TouchableOpacity style={[styles.row, { width: halfSize }]} key={j}>
          <View style={styles.flex_1}><Image style={styles.image} source={r.image}></Image></View>
          <View style={styles.flex_1}><Text style={styles.text}>{r.text}</Text></View>
        </TouchableOpacity>
      );
    });

    var secondRowViews = this.state.secondRows.map(function (r, j, arry) {
      if (j == 0 || j == 5) {
        return (
          <View style={{ flex: 1 }} key={j}>
            <TouchableOpacity style={[styles.row2]}>
              <View ><Image style={styles.image3} source={r.image}></Image></View>
              <View ><Text style={styles.text3}>{r.text}</Text></View>
            </TouchableOpacity>
          </View>
        );
      }
      else {
        return (
          <TouchableOpacity style={[styles.row, { width: thirdSize }]} key={j}>
            <View style={styles.flex_1}><Image style={styles.image2} source={r.image}></Image></View>
            <View style={styles.flex_1}><Text style={styles.text2}>{r.text}</Text></View>
          </TouchableOpacity>
        );
      }
    });

    return (
      <ScrollView style={styles.container}>
        <Swiper></Swiper>
        <View style={styles.block1}>
          {firstRowViews}
        </View>

        <View style={styles.block2}>
          {secondRowViews[0]}
          <View style={styles.row3}>
            {secondRowViews[1]}
            {secondRowViews[2]}
            {secondRowViews[3]}
            {secondRowViews[4]}
          </View>
        </View>

        <View style={styles.block2}>
          {secondRowViews[5]}
          <View style={styles.row3}>
            {secondRowViews[6]}
            {secondRowViews[7]}
            {secondRowViews[8]}
            {secondRowViews[9]}
          </View>
        </View>
      </ScrollView>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 64 : 51,
    backgroundColor: '#d0d0d0',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#d0d0d0',
    flex: 1,
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#d0d0d0',
  },
  row3: {
    flex: 2,
    flexDirection: 'row',
    height: 63,
    borderBottomWidth: 1,
    borderColor: '#d0d0d0',
    flexWrap: 'wrap'
  },
  image: {
    marginLeft: 15,
    width: 64,
    height: 64,
    resizeMode: Image.resizeMode.contain
  },
  image2: {
    marginLeft: 5,
    width: 42,
    height: 42,
    resizeMode: Image.resizeMode.contain
  },
  image3: {
    width: 60,
    height: 66,
    resizeMode: Image.resizeMode.contain
  },
  block1: {
    height: 80,
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  block2: {
    height: 126,
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 17,
    //fontFamily: 'HiraginoSans-W3',
  },
  text2: {
    fontSize: 14,
    //fontFamily: 'HiraginoSans-W3',
  },
  text3: {
    marginTop: 10,
    fontSize: 16,
    //fontFamily: 'HiraginoSans-W3',
  },
  flex_1: {
    flex: 1,
  }
});
