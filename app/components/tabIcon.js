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
      color: this.props.selected ? '#ffffff' : '#db4626'
    };

    const iconColor = this.props.selected ? '#ffffff' : '#db4626';

    return (
      <View style={[styles.container, containerStyles]}>
        <Icon name={this.props.iconName} style={styles.icon} size={18} backgroundColor="transparent" color={iconColor} />
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
    height: 50
  },
  text: {
    fontSize: 10
  },
  icon: {
    marginBottom: 4
  }
});

export default TabIcon;