//住院患者列表

'use strict';
import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, Platform, TouchableOpacity, Picker, PickerIOS, LayoutAnimation, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../components/modal';

const maleImg = require('../assets/male.png');
const femaleImg = require('../assets/female.png');
var halfSize = Dimensions.get('window').width;

export default class InPatientList extends Component {
    constructor(props) {
        super(props);
        this.tabs = {
            ask: '神经内科',
            share: '急诊科',
            job: '耳鼻咽喉科',
            job1: '耳鼻咽喉科1',
            job2: '耳鼻咽喉科2',
            job3: '耳鼻咽喉科3',
            job4: '耳鼻咽喉科4',
            job5: '耳鼻咽喉科5',
            job6: '耳鼻咽喉科6',
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
                            {this.state.dirty ? this.tabs[this.state.selectTab] : '请选择科室'}
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
                            {this.state.dirty ? this.tabs[this.state.selectTab] : '请选择病区'}
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
            <Modal onPressBackdrop={() => { this.setState({ isPickerShow: false }); } } style={styles.modal}>
                <View style={styles.pickerIOS}>
                    <View style={ styles.modelTextView}>
                        <TouchableOpacity onPress={() => { this.setState({ isPickerShow: false }); } } ><Text style={styles.modelText}>完成</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: 8 }}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.selectTab}
                            onValueChange={this._onPickerValueChange.bind(this) } >
                            {this._renderPickerContent() }
                        </Picker>
                    </View>
                </View>
            </Modal>
        );

        return (
            <View style={styles.container}>
                {this._renderPicker() }

                <View style={styles.list}>
                    <View style={[styles.listRow]}>
                        <TouchableOpacity style={[styles.part_left]}>
                            <View style={[styles.bed]}><Text style={[styles.bedText]}>+1</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.part_right]}>
                            <View style={styles.rowText}>
                                <View style={styles.textView}>
                                    <Text style={[styles.nameText]}>周瑞发</Text>
                                    <View style={[styles.sign]}><Text style={[styles.signText]}>Ⅲ级</Text></View>
                                </View>

                                <Text style={[styles.nameText, styles.flex3]}>脑梗死</Text>
                            </View>
                            <View style={styles.rowText}>
                                <Text style={[styles.infoText, styles.flex1]}>女</Text>
                                <Text style={[styles.infoText, styles.flex1]}>53岁</Text>
                                <Text style={[styles.infoText, styles.flex2]}>2016-07-20</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.listRow]}>
                        <TouchableOpacity style={[styles.part_left]}>
                            <View style={[styles.bed]}><Text style={[styles.bedText]}>04</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.part_right]}>
                            <View style={styles.rowText}>
                                <View style={styles.textView}>
                                    <Text style={[styles.nameText]}>杨威</Text>
                                    <View style={[styles.sign]}><Text style={[styles.signText]}>Ⅰ级</Text></View>
                                </View>

                                <Text style={[styles.nameText, styles.flex3]}>消化道内部大出血</Text>
                            </View>
                            <View style={styles.rowText}>
                                <Text style={[styles.infoText, styles.flex1]}>男</Text>
                                <Text style={[styles.infoText, styles.flex1]}>45岁</Text>
                                <Text style={[styles.infoText, styles.flex2]}>2016-07-01</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    pickerIOS: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        height: 250,
    },
    pickerAndroid: {
        flex: 1
    },
    tabSelectorText: {
        fontSize: 18,
        color: '#01a5d4',
    },
    listRow: {
        flexDirection: 'row',
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
        height: 80,
        alignItems: 'center',
    },
    part_left: {
        flex: 1,
        marginLeft: 12,
    },
    part_right: {
        flex: 4,
        marginLeft: 5,
    },
    patinetImage:
    {
        width: 60,
        height: 60,
    },
    nameText:
    {
        fontSize: 18,
        color: '#404040',
    },
    infoText:
    {
        fontSize: 16,
        color: '#737373',
    },
    rowText: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginRight: 15,
    },
    flex1:
    {
        flex: 1,
    },
    flex2:
    {
        flex: 3,
    },
    flex3:
    {
        flex: 3,
    },
    sign: {
        marginLeft: 4,
        marginTop: Platform.OS === 'ios' ? 0 : 4,
        width: 35,
        height: 18,
        backgroundColor: '#eb6877',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signText: {
        fontSize: 14,
        color: '#ffffff'
    },
    bed: {
        marginLeft: 4,
        marginTop: Platform.OS === 'ios' ? 0 : 4,
        width: 60,
        height: 60,
        backgroundColor: '#34b5da',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bedText: {
        fontSize: 22,
        color: '#ffffff'
    },
    textView: {
        flex: 2,
        flexDirection: 'row',
    },
    modelTextView:
    {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
    },
    modelText:
    {
        marginRight:5,
        color: '#34b5da'
    }
});
