//住院患者列表

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';

export default class DataPicker extends Component {

    _onPressHandle() {
        this.picker.toggle();
    }

    render() {
        let pickerData = [1, 2, 3, 4];
        let selectedValue = 3;
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={this._onPressHandle.bind(this) }>
                        <Text>点我</Text>
                    </TouchableOpacity>

                    <Picker
                        ref={picker => this.picker = picker}
                        style={{ height: 300 }}
                        showDuration={300}
                        showMask={true}
                        pickerData={pickerData}//picker`s value List
                        selectedValue={selectedValue}//default to be selected value
                        onPickerDone={(pickedValue) => {
                            console.log(pickedValue);
                        } }
                        />
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
        flex: 1,
        backgroundColor: '#ffffff',
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
