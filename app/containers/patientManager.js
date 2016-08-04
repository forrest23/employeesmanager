//患者管理

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {pageJump} from '../config/pageJump';

const inPatientImg = require('../assets/inPatient.png');
const outPatientImg = require('../assets/outPatient.png');
const reservationImg = require('../assets/reservation.png');

export default class PatientManager extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.flex_1} onPress={() => pageJump('我的预约') }>
            <Image style={styles.image} source={reservationImg}>
            </Image><Text style={styles.text}>我的预约</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flex_1} onPress={() => pageJump('我的门诊') }>
            <Image style={styles.image} source={outPatientImg}></Image>
            <Text style={styles.text}>我的门诊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flex_1} onPress={() => pageJump('我的住院') }>
            <Image style={styles.image} source={inPatientImg}></Image>
            <Text style={styles.text}>我的住院</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#d0d0d0',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 51,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 80,
  },
  flex_1: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  image: {
    width: 34,
    height: 34,
    resizeMode: Image.resizeMode.contain
  },
  text: {
    marginTop: 8,
    fontSize: 17,
    color: '#34b5da'
    //fontFamily: 'HiraginoSans-W6',
  },
});

