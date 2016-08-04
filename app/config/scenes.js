//定义所有的页面路由
import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

import Home from '../containers/home';//首页
import Me from '../containers/me';//我的
import Message from '../containers/message';//消息
import Calendar from '../containers/calendar';//日程
import Splash from '../containers/splash';//日程


import CheckGesture from '../components/checkGesture';//验证手势密码
import SetGesture from '../components/setGesture';//设置手势密码

import PatientManager from '../containers/patientManager';//患者管理
import InPatientList from '../containers/inPatientList';//患者列表

import Vote from '../containers/vote';//先进评选
import Critical from '../containers/critical';//危急值

import TabIcon from '../components/tabIcon';
import NavBar from '../components/navBar';


const Right = () => (
  <Text
    style={{
      width: 40,
      height: 37,
      position: 'absolute',
      bottom: 4,
      right: 0,
      paddingTop: 8,
    }}
    >消息</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  navBarStyle: {
    backgroundColor: '#34b5da',
  },
  tabBarStyle: {
    backgroundColor: '#FFFF',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#FFFF',
  },
  titleStyle: {
    color: 'white',
    //fontFamily: 'HiraginoSans-W6',
    fontSize: 20,
    //letterSpacing: 8
  }
});

export const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    <Scene key="checkGesture"  component={CheckGesture} title="验证手势密码" />
    <Scene key="setGesture"  component={SetGesture} title="设置手势密码" />
    <Scene key="inPatientList"  component={InPatientList} title="住院患者"  navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle}/>
    <Scene key="patientManager"  component={PatientManager} title="患者管理"  navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle}/>
    <Scene key="vote"  component={Vote} title="先进评选"  navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle}/>
    <Scene key="critical"  component={Critical} title="危急值"  navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle}/>
    <Scene key="splash" component={Splash}  initial />
    <Scene key="mainPage" tabs  tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
      <Scene key="home" initial title="首页" icon={TabIcon} iconName="home" navBar={NavBar}>
        <Scene
          key="tab2_1"
          component={Home}
          title="仁济医院"
          titleStyle={styles.titleStyle}
          />
      </Scene>

      <Scene key="tab4"  title="日程" icon={TabIcon} iconName="calendar" navigationBarStyle={styles.navBarStyle}>
        <Scene
          key="tab3_2"
          component={Calendar}
          title='日程'
          titleStyle={styles.titleStyle}
          renderRightButton={() => <Right />}
          />
      </Scene>

      <Scene key="tab3"  title="消息" icon={TabIcon} iconName="envelope-o" navigationBarStyle={styles.navBarStyle}>
        <Scene
          key="tab3_1"
          component={Message}
          title='消息'
          titleStyle={styles.titleStyle}
          renderRightButton={() => <Right />}
          />
      </Scene>

      <Scene key="tab5"  title="我的" icon={TabIcon} iconName="user" navigationBarStyle={styles.navBarStyle}>
        <Scene
          key="tab5_1"
          component={Me}
          title="我的"
          titleStyle={styles.titleStyle}
          />
      </Scene>

    </Scene>
  </Scene>
);