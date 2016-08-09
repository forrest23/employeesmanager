//医学公式

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView , Platform} from 'react-native';

const testHtml = require('../assets/formulaHtml/test.html');

const testHtml1 = require('../assets/1.html');

const testHtml2 = require('../assets/2.html');

export default class Formula extends Component {
    render() {
        return (
            <WebView
                startInLoadingState={true}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                source={testHtml2}
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

