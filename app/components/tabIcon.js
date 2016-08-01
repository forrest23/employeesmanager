'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
  static propTypes = {
    selected: React.PropTypes.bool,
    last: React.PropTypes.bool,
    title: React.PropTypes.string
  };

  render(){
    const containerStyles = {
      borderRightWidth: this.props.last ? 0 : 1,
      backgroundColor: this.props.selected ? '#E36137' : 'transparent'
    };

    const textStyles = {
      color: this.props.selected ? '#34b5da' : '#6C6C6C'
    };

    const iconColor = this.props.selected ? '#34b5da' : '#6C6C6C';

    return (
      <View style={[styles.container]}>
        <Icon name={this.props.iconName} style={styles.icon} size={22} backgroundColor="transparent" color={iconColor} />
        <Text style={[styles.text, textStyles]}>{this.props.title.toUpperCase()}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#db4626',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  text: {
    fontSize: 12
  },
  icon: {
    marginBottom: 4
  }
});

export default TabIcon;