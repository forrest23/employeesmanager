//住院患者列表

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity, Picker, PickerIOS, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../components/modal';

export default class InPatientList extends Component {
    constructor(props) {
        super(props);
        this.tabs = {
            ask: '神经内科',
            share: '急诊科',
            job: '耳鼻咽喉科'
        };
        this.state = {
            selectTab: 'share',
            isPickerShow: false,
            dirty: false
        };
    }

    _onPickerValueChange(tab) {
        this.setState({
            selectTab: tab
        })
    }
    _onPickerPress() {
        this.setState({
            isPickerShow: true,
            dirty: true
        });
    }

    _renderPickerContent() {
        return Object.keys(this.tabs).map(tab => {
            return (
                <Picker.Item
                    key={tab}
                    value={tab}
                    label={this.tabs[tab]}
                    />
            )
        })
    }

    _renderPicker() {
        if (Platform.OS === 'ios') {
            return (
                <View style={styles.pickerContainer}>
                    <TouchableOpacity onPress={this._onPickerPress.bind(this) } style={[styles.row, styles.borderLeft]}>
                        <Text style={styles.tabSelectorText}>
                            {this.state.dirty ? this.tabs[this.state.selectTab] : '请选择板块'}
                        </Text>

                        <Icon
                            name={'ios-arrow-down'}
                            size={24}
                            color='rgba(0,0,0,0.35)'
                            style={styles.selectorIcon}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._onPickerPress.bind(this) } style={styles.row}>
                        <Text style={styles.tabSelectorText}>
                            {this.state.dirty ? this.tabs[this.state.selectTab] : '请选择板块'}
                        </Text>

                        <Icon
                            name={'ios-arrow-down'}
                            size={24}
                            color='rgba(0,0,0,0.35)'
                            style={styles.selectorIcon}
                            />
                    </TouchableOpacity>

                </View>

            );
        }
        else {
            return (
                <View style={styles.pickerContainer}>
                    <View style={[styles.row, styles.borderLeft]}>
                        <Picker
                            style={styles.pickerAndroid}
                            selectedValue={this.state.selectTab}
                            onValueChange={this._onPickerValueChange.bind(this) }>
                            {this._renderPickerContent() }
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Picker
                            style={styles.pickerAndroid}
                            selectedValue={this.state.selectTab}
                            onValueChange={this._onPickerValueChange.bind(this) }>
                            {this._renderPickerContent() }
                        </Picker>
                    </View>
                </View>
            )

        }
    }

    render() {

        const modal = (
            <Modal
                onPressBackdrop={() => {
                    this.setState({
                        isPickerShow: false
                    });
                } }
                style={styles.modal}
                >
                <View style={styles.pickerIOS}>
                    <Picker
                        mode="dropdown"
                        selectedValue={this.state.selectTab}
                        onValueChange={this._onPickerValueChange.bind(this) }>
                        {this._renderPickerContent() }
                    </Picker>
                </View>
            </Modal>
        );

        return (
            <View style={styles.container}>
                {this._renderPicker() }

                <View style={styles.list}>

                </View>
                {this.state.isPickerShow && modal}
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
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#ffffff',
    },
    picker:
    {
        flex: 1,
    },
    list:
    {
        marginTop: 8,
        flex: 1,
        backgroundColor: '#ffffff',
    },
    row: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderLeft: {
        borderRightColor: '#b2b2b2',
        borderRightWidth: 1
    },
    selectorIcon: {
        height: 26,
        width: 26,
        marginLeft: 5,
        color: '#01a5d4',
    },
    labelIcon: {
        marginRight: 15,
        marginLeft: 5
    },
    content: {
        paddingRight: 15,
        paddingLeft: 15
    },

    modal: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    pickerIOS: {
        flex: 1,
        height: 200,
        backgroundColor: 'white'
    },
    pickerAndroid: {
        flex: 1
    },
    tabSelectorText: {
        fontSize: 18,
        color: '#01a5d4',
    },
});
