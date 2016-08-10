//住院患者列表

'use strict';
import React, { Component, PropTypes } from 'react';
import { Dimensions, Text, View, StyleSheet, Platform, TouchableOpacity, Picker, PickerIOS, LayoutAnimation, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../components/modal';
import InPatientList from '../components/inPatient/inPatientList';
import connectComponent from '../utils/connectComponent';


const maleImg = require('../assets/male.png');
const femaleImg = require('../assets/female.png');
var halfSize = Dimensions.get('window').width;

class inPatientListPage extends Component {
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

    componentDidMount() {
        this.props.actions.getInPatientList("all", "", "");
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
        const {actions, inPatientList, fetchInpatientListPending} = this.props;
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
                    <InPatientList data={inPatientList}
                        getInPatientList={actions.getInPatientList}
                        pending={ fetchInpatientListPending }
                        />
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
        width: 40,
        height: 40,
        backgroundColor: '#34b5da',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bedText: {
        fontSize: 18,
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
        marginRight: 5,
        color: '#34b5da'
    }
});

export const LayoutComponent = inPatientListPage;
export function mapStateToProps(state) {
    return {
        ...state.inPatient,
        ...state.inPatientUI,
    };
}