'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, ScrollView, TouchableOpacity, Image, Linking} from 'react-native';
import {pageJump} from '../config/pageJump';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getSexText, getCareLevelText, formatDate } from '../utils';

const inPatient_bj = require('../assets/inPatient_bj.png');
const inPatient_bq = require('../assets/inPatient_bq.png');
const inPatient_hl = require('../assets/inPatient_hl.png');
const inPatient_bg = require('../assets/inPatient_bg.png');
const inPatient_bl = require('../assets/inPatient_bl.png');
const inPatient_qst = require('../assets/inPatient_qst.png');
const inPatient_twd = require('../assets/inPatient_twd.png');
const inPatient_yz = require('../assets/inPatient_yz.png');

export default class InPatientDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {inPatient} = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Text style={[styles.nameText, styles.marginLeft12]}>{inPatient.Name}</Text>
                        <Text style={[styles.infoText, styles.marginLeft12]}>{getSexText(inPatient.Sex) }</Text>
                        <Text style={[styles.infoText, styles.marginLeft12]}>{inPatient.Age}</Text>
                        <View style={[styles.sign, styles.marginLeft12]}><Text style={[styles.signText]}>{getCareLevelText(inPatient.CareName) }</Text></View>
                        <View style={[styles.sign, styles.marginLeft12]}><Text style={[styles.signText]}>危</Text></View>
                        <Text style={[styles.bedText]}>{inPatient.BedNo}床</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>住院号: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.PatId}</Text>
                        </View>

                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>门诊号: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.ClinicNo}</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>科室: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.DeptName}</Text>
                        </View>

                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>病区: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.DivisionName}</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>入院: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>{formatDate(inPatient.InHosDate) }</Text>
                        </View>

                        <View style={styles.infoColumn}>
                            <Text style={[styles.infoText, styles.marginLeft12]}>类别: </Text>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>社保病人 </Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>过敏: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>青霉素过敏 </Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>诊断: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.Diagnosis}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>已经金额: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>108212.2 </Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>饮食类型: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>{inPatient.DietName}</Text>
                    </View>
                </View>

                <View style={styles.quotaContainer}>
                    <View style={styles.circleView}>
                        <View style={[styles.circle]}><Text style={[styles.circleText]}>36.5</Text></View>
                        <Text style={[styles.infoValue, styles.circleTitle]}>体温</Text>
                    </View>
                    <View style={styles.circleView}>
                        <View style={[styles.circle]}><Text style={[styles.circleText]}>120</Text></View>
                        <Text style={[styles.infoValue, styles.circleTitle]}>脉搏</Text>
                    </View>
                    <View style={styles.circleView}>
                        <View style={[styles.circle]}><Text style={[styles.circleText]}>22</Text></View>
                        <Text style={[styles.infoValue, styles.circleTitle]}>呼吸</Text>
                    </View>
                    <View style={styles.circleView}>
                        <View style={[styles.circle]}><Text style={[styles.circleText]}>100/67</Text></View>
                        <Text style={[styles.infoValue, styles.circleTitle]}>血压</Text>
                    </View>
                    <View style={styles.circleView}>
                        <View style={[styles.circle]}><Text style={[styles.circleText]}>126KG</Text></View>
                        <Text style={[styles.infoValue, styles.circleTitle]}>体重</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={[styles.infoColumn, styles.borderRight]} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_yz}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>医嘱</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoColumn} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_bl}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>病历</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={[styles.infoColumn, styles.borderRight]} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_bg}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>报告</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoColumn} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_hl}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>护理</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={[styles.infoColumn, styles.borderRight]}  onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_twd}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>体温单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoColumn} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_qst}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>趋势图</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={[styles.infoColumn, styles.borderRight]}  onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_bj}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>报警记录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.infoColumn} onPress={() => pageJump('我的预约') }>
                            <Image style={[styles.image, styles.marginLeft12]} source={inPatient_bq}></Image>
                            <Text style={[styles.infoValue, styles.marginLeft12]}>便签</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contactContainer}>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>联系人: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>王邦名</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>电  话: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12]}>18516135071</Text>
                        <Icon name='phone' size={22} style ={styles.marginLeft12} backgroundColor="transparent" color='#34b5da' onPress={() => Linking.openURL('tel:10086')}/>
                    </View>
                    <View style={styles.bottomRow}>
                        <Text style={[styles.infoText, styles.marginLeft12]}>地  址: </Text>
                        <Text style={[styles.infoValue, styles.marginLeft12, styles.flex1]}>上海市静安区江场三路28号4楼</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 64 : 51,
    },
    infoContainer: {
        backgroundColor: '#ffffff',
    },
    quotaContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    contactContainer: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        height: 38,
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
        alignItems: 'center',
        flex: 1,
    },
    infoColumn: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 20,
        color: '#404040',
    },
    infoText: {
        fontSize: 14,
        color: '#737373',
    },
    infoValue: {
        fontSize: 16,
        color: '#404040',
    },
    bedText: {
        fontSize: 18,
        color: '#34b5da',
        position: 'absolute',
        right: 16,
        top: 8
    },
    sign: {
        marginLeft: 4,
        marginTop: Platform.OS === 'ios' ? 0 : 4,
        width: 30,
        height: 15,
        backgroundColor: '#eb6877',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signText: {
        fontSize: 12,
        color: '#ffffff'
    },
    marginLeft12:
    {
        marginLeft: 12
    },
    image: {
        width: 34,
        height: 34,
        resizeMode: Image.resizeMode.contain
    },
    buttonRow: {
        flexDirection: 'row',
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
        alignItems: 'center',
        flex: 1,
    },
    borderRight:
    {
        height: 48,
        borderColor: '#bfbfbf',
        borderRightWidth: 1,
    },
    bottomRow: {
        flexDirection: 'row',
        height: 50,
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
        alignItems: 'center',
        flex: 1,
    },
    flex1: {
        flex: 1,
    },
    flex4: {
        flexDirection: 'row',
        flex: 6,
    },
    circle: {
        margin: 5,
        width: 60,
        height: 60,
        borderColor: '#eb6877',
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        fontSize: 16,
        color: '#eb6877'
    },
    circleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleTitle: {
        marginBottom: 5
    }
});

