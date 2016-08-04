//危急值

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView , Platform} from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'http://professional.xinhuamed.com.cn:8090/ProfessionalWeb/Critical/CriticalList?id=2&agentid=3&flag=0&userid=9999&username=%E7%94%98%E5%AF%85&userdepart=0' }}
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

