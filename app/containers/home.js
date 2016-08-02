'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity ,ScrollView} from 'react-native';
import Swiper from '../components/swiper';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        { image: require('../assets/yntz.png'), text: '院内通知' },
        { image: require('../assets/ygztc.png'), text: '员工直通车' }
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
    return (
      <ScrollView style={styles.container}>
       <Swiper></Swiper>
        <View style={styles.list}>
          {rowViews}
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
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
  image: {
    marginLeft: 15,
    width: 64,
    height: 64,
    resizeMode: Image.resizeMode.contain
  },
  list: {
    height: 80,
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize:17,
    //fontFamily: 'HiraginoSans-W3',
  },
  part_left: {
    flex: 1,
  },
  part_right: {
    flex: 1,
  },
});
