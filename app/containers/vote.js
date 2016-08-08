//先进评选

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView, Platform} from 'react-native';
import config from '../config';

export default class Vote extends Component {
    render() {
        return (
            <WebView
                source={{ uri: config.domain + config.voteUrl }}
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