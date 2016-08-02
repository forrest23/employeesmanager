'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Platform} from 'react-native';
import Swiper from '../components/swiper';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        { image: require('../assets/yntz.png'), text: '院内通知' },
        { image: require('../assets/ygztc.png'), text: '员工直通车' }
      ],

      rows2: [
        { image: require('../assets/hzgl.png'), text: '患者管理' },
        { image: require('../assets/mzpb.png'), text: '门诊排班' },
        { image: require('../assets/ydjc.png'), text: '移动决策' },
        { image: require('../assets/sspb.png'), text: '手术排班' },
        { image: require('../assets/huizgl.png'), text: '会诊管理' }
      ],
    }
  }

  render() {
    var halfSize = Dimensions.get('window').width / 2;
    var rowViews = this.state.rows.map(function (r, j) {
      return (
        <TouchableOpacity style={[styles.row, { width: halfSize }]} key={j}>
          <View style={styles.part_left}><Image style={styles.image} source={r.image}></Image></View>
          <View style={styles.part_right}><Text style={styles.text}>{r.text}</Text></View>
        </TouchableOpacity>
      );
    });

    var rowViews2 = this.state.rows2.map(function (r, j) {
      return (
        <TouchableOpacity style={[styles.row, { width: halfSize }]} key={j}>
          <View style={styles.part_left}><Image style={styles.image} source={r.image}></Image></View>
          <View style={styles.part_right}><Text style={styles.text}>{r.text}</Text></View>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={styles.container}>
        <Swiper></Swiper>
        <View style={styles.list}>
          {rowViews}
        </View>

        <View style={styles.list2}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.row2]}>
              <View ><Image style={styles.image3} source={require('../assets/hzgl.png') }></Image></View>
              <View ><Text style={styles.text3}>患者管理</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: 'row', height: 63, borderBottomWidth: 1, borderColor: '#d0d0d0' }}>
              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/mzpb.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>门诊排班</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/ydjc.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>移动决策</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', height: 63 }}>
              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/sspb.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>手术排班</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/huizgl.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>会诊管理</Text></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.list2}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.row2]}>
              <View ><Image style={styles.image3} source={require('../assets/yxgs.png') }></Image></View>
              <View ><Text style={styles.text3}>医学公式</Text></View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: 'row', height: 63, borderBottomWidth: 1, borderColor: '#d0d0d0' }}>
              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/wjzgl.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>危急值</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/yxzx.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>医学资讯</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', height: 63 }}>
              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/xjpx.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>先进评选</Text></View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.row, styles.part_left]}>
                <View style={styles.part_left}><Image style={styles.image2} source={require('../assets/more.png') }></Image></View>
                <View style={styles.part_right}><Text style={styles.text2}>更多</Text></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 64 : 51,
    //alignItems: 'center',
    backgroundColor: '#d0d0d0',
    flex: 1,
    //justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#d0d0d0',
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#d0d0d0',
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
  list: {
    height: 80,
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  list2: {
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
  part_left: {
    flex: 1,
  },
  part_right: {
    flex: 1,
  },
});
