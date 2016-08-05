//先进评选

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView , Platform} from 'react-native';

export default class Message extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'http://192.168.20.47:8010/App/message.html' }}
                style={styles.container}
                />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 64 : 51,
    },
});

