//先进评选

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView , Platform} from 'react-native';

export default class Calendar extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'http://192.168.20.47:8010/App/scheduler.html' }}
                style={styles.container}
                />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 64 : 51,
        marginBottom: 50,
    },
});

