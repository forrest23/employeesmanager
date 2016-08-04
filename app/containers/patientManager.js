//患者管理

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {pageJump} from '../config/pageJump';

const inPatientImg = require('../assets/inPatient.png');
const outPatientImg = require('../assets/outPatient.png');
const reservationImg = require('../assets/reservation.png');
const heartImg = require('../assets/heart.png');
const maleImg = require('../assets/male.png');
const femaleImg = require('../assets/female.png');

export default class PatientManager extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.flex_1, styles.borderRight]} onPress={() => pageJump('我的预约') }>
            <Image style={styles.image} source={reservationImg}>
            </Image><Text style={styles.text}>我的预约</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex_1, styles.borderRight]} onPress={() => pageJump('我的门诊') }>
            <Image style={styles.image} source={outPatientImg}></Image>
            <Text style={styles.text}>我的门诊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flex_1} onPress={() => pageJump('我的住院') }>
            <Image style={styles.image} source={inPatientImg}></Image>
            <Text style={styles.text}>我的住院</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <View style={styles.bottomTitle}>
            <View style={styles.title}>
              <Image style={styles.image2} source={heartImg}></Image>
              <Text style={styles.text2}>我的关注</Text>
            </View>
          </View>

          <View style={[styles.row]}>
            <TouchableOpacity style={[styles.part_left]}>
              <Image style={styles.patinetImage} source={maleImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.part_right]}>
              <View style={styles.rowText}>
                <View style={styles.textView}>
                  <Text style={[styles.nameText]}>周瑞发</Text>
                  <View style={[styles.sign]}><Text style={[styles.signText]}>门诊</Text></View>
                </View>

                <Text style={[styles.nameText, styles.flex1]}>男</Text>
                <Text style={[styles.nameText, styles.flex1]}>53岁</Text>
              </View>
              <View style={styles.rowText}>
                <Text style={[styles.infoText, styles.flex2]}>骨科</Text>
                <Text style={[styles.infoText, styles.flex3]}>先天性膝盖内翻</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.row]}>
            <TouchableOpacity style={[styles.part_left]}>
              <Image style={styles.patinetImage} source={maleImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.part_right]}>
              <View style={styles.rowText}>
                <View style={styles.textView}>
                  <Text style={[styles.nameText]}>张云</Text>
                  <View style={[styles.sign]}><Text style={[styles.signText]}>住院</Text></View>
                </View>

                <Text style={[styles.nameText, styles.flex1]}>女</Text>
                <Text style={[styles.nameText, styles.flex1]}>53岁</Text>
              </View>
              <View style={styles.rowText}>
                <Text style={[styles.infoText, styles.flex2]}>耳鼻咽喉科</Text>
                <Text style={[styles.infoText, styles.flex3]}>获得性免疫</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View >
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  borderRight:
  {
    borderRightWidth: 1,
    borderColor: '#b2b2b2',
  },
  image: {
    width: 34,
    height: 34,
    resizeMode: Image.resizeMode.contain
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: Image.resizeMode.contain
  },
  text: {
    marginTop: 8,
    fontSize: 17,
    color: '#01a5d4'
    //fontFamily: 'HiraginoSans-W6',
  },
  text2: {
    marginLeft: 10,
    fontSize: 19,
    color: '#e94e5f'
    //fontFamily: 'HiraginoSans-W6',
  },
  bottom:
  {
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: 10,
  },
  bottomTitle:
  {
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  title:
  {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 18,
  },
  row: {
    flexDirection: 'row',
    borderColor: '#bfbfbf',
    borderBottomWidth: 1,
    height: 80,
    alignItems: 'center',
  },
  part_left: {
    flex: 1,
    marginLeft: 12,
  },
  part_right: {
    flex: 4,
    marginLeft: 0,
  },
  patinetImage:
  {
    width: 60,
    height: 60,
  },
  nameText:
  {
    fontSize: 18,
    color: '#404040',
  },
  infoText:
  {
    fontSize: 16,
    color: '#737373',
  },
  rowText: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginRight: 15,
  },
  flex1:
  {
    flex: 1,
  },
  flex2:
  {
    flex: 3,
  },
  flex3:
  {
    flex: 3,
  },
  sign: {
    marginLeft: 4,
    marginTop: Platform.OS === 'ios' ? 0 : 4,
    width: 35,
    height: 18,
    backgroundColor: '#eb6877',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signText: {
    fontSize: 14,
    color: '#ffffff'
  },
  textView: {
    flex: 3,
    flexDirection: 'row',
  }
});

