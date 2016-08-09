'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class InPatientDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {inPatient} = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', height: 200, backgroundColor: "#fefefe", padding: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 15, backgroundColor: "#eeeeee" }}>
                        <View style={{ flex: 1, backgroundColor: "#bbaaaa" }}>
                        <Text>{inPatient.Name}</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: "#aabbaa" }}>
                        </View>
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

