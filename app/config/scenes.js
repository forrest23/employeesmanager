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

import CheckGesture from '../components/checkGesture';//验证手势密码
import SetGesture from '../components/setGesture';//设置手势密码

import TabIcon from '../components/tabIcon';

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
  tabBarStyle: {
    backgroundColor: '#FFFF',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#FFFF',
  },
});

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="checkGesture"  component={CheckGesture} title="验证手势密码" />
    <Scene key="setGesture"  component={SetGesture} title="设置手势密码" />
    <Scene key="mainPage" initial tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
      <Scene key="home" initial title="首页" icon={TabIcon} iconName="home">
        <Scene
          key="tab2_1"
          component={Home}
          title="首页"
          />
      </Scene>

      <Scene key="tab4"  title="日程" icon={TabIcon} iconName="calendar">
        <Scene
          key="tab3_2"
          component={Calendar}
          title='日程'
          renderRightButton={() => <Right />}
          />
      </Scene>

      <Scene key="tab3"  title="消息" icon={TabIcon} iconName="envelope-o">
        <Scene
          key="tab3_1"
          component={Message}
          title='消息'
          renderRightButton={() => <Right />}
          />
      </Scene>

      <Scene key="tab5"  title="我的" icon={TabIcon} iconName="user">
        <Scene
          key="tab5_1"
          component={Me}
          title="我的"
          />
      </Scene>

    </Scene>
  </Scene>
);