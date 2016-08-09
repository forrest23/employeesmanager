'use strict';
import React, {Component} from 'react';
import {View, TouchableHighlight, Dimensions, Platform, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicatorIOS, LayoutAnimation} from 'react-native';

import allActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const FontAwesome = require('react-native-vector-icons/FontAwesome');
let {height, width} = Dimensions.get('window');
import {Actions, ActionConst} from 'react-native-router-flux';
import * as UserInfo from '../services/token'


class Me extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.actions.CheckLoginState();
    if (UserInfo.getToken() == "") {
      Actions.login({ hideNavBar: true, hideTabBar: true });
    }
  }

  _logoutUser() {
    this.props.actions.Logout();
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={[styles.bgWall, { backgroundColor: '#FFFFFF' }]}>
          <View style={styles.imgRow}>
            <TouchableOpacity>
              <Image
                style={styles.authorImg}
                source={require('../assets/male.png') }>
              </Image>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textRow}>
              {UserInfo.getName() }
            </Text>
          </View>

        </View>
        <View style={{ marginTop: 20 }} >
          <TouchableHighlight underlayColor='#3498DB'>
            <View  style={styles.listRow}>
              <View style={styles.listRowLeft}>
                <FontAwesome name={'envelope-o'} color="#34b5da" size={35}/>
                <Text style={styles.ListRowText}>   个人消息</Text>
              </View>
              <FontAwesome name={'chevron-right'} color="#404040" size={15}/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#3498DB' >
            <View  style={styles.listRow}>
              <View style={styles.listRowLeft}>
                <FontAwesome name={'cog'} color="#34b5da" size={35}/>
                <Text style={styles.ListRowText}>     修改密码</Text>
              </View>
              <FontAwesome name={'chevron-right'} color="#404040" size={15} />
            </View>
          </TouchableHighlight>
        </View>

        <View>

          <View style={{ marginTop: 20 }} >
            <TouchableHighlight style={styles.button} onPress={() => {
              this._logoutUser();
            } }
              underlayColor='#99d9f4' >
              <Text style={styles.textRow} >退出登录</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const bgWallHeight = 140;
const authorImgSize = 80;
const fontColor = 'rgba(255,255,255,0.7)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 51,
    backgroundColor: '#e5e5e5',
  },
  bgWall: {
    height: bgWallHeight,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'#FFFFFF',
  },
  imgRow: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 10,

  },
  textRow: {
    fontSize: 17,
    color: '#404040'
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authorImg: {
    flex: 1,
    height: authorImgSize,
    width: authorImgSize,
    borderRadius: authorImgSize / 2
  },
  button: {
    height: 36,
    backgroundColor: '#FFFFFF',
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  listRowLeft: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listRowRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListRowText: {
    color: '#404040',
    fontSize: 17
  }
});
function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Me)
