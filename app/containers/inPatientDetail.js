'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class InPatientDetail extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', height: 200, backgroundColor: "#fefefe" }}>
                    <View style={{ flexDirection: 'row',flex: 1, backgroundColor: "#bbaaaa" }}>
                    </View>
                    <View style={{ flexDirection: 'row',flex: 1, backgroundColor: "#aabbaa" }}>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
});

