//住院患者列表

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Picker } from 'react-native';

export default class InPatientList extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker} selectedValue="java">
                        <Picker.Item label="java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <Picker style={styles.picker} selectedValue="java">
                        <Picker.Item label="java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 64 : 51,
    },
    pickerContainer: {
        height: 40,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    picker:
    {
        flex: 1,
    },
    list:
    {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#ffffff',
    }
});
