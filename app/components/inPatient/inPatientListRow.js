import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions, Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getSexText, getCareLevelText, formatDate} from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class InPatientListRow extends Component {
    render() {
        const {inPatient} = this.props;

        return (
            <TouchableHighlight
                onPress={() => { Actions.inPatientDetail({ inPatient }) } }
                underlayColor='#3498DB'
                key={inPatient.BedNo}>

                <View style={ styles.listRow}>
                    <View style={styles.part_left}>
                        <View style={[styles.bed]}><Text style={[styles.bedText]}>{inPatient.BedNo}</Text></View>
                    </View>

                    <View style={[styles.part_right]}>
                        <View style={styles.rowText}>
                            <View style={styles.textView}>
                                <Text style={[styles.nameText]}>{inPatient.Name}</Text>
                                <View style={[styles.sign]}><Text style={[styles.signText]}>{getCareLevelText(inPatient.CareName) }</Text></View>
                                <View style={[styles.sign]}><Text style={[styles.signText]}>危</Text></View>
                            </View>

                            <Text style={[styles.nameText, styles.flex3]}>{inPatient.Diagnosis}</Text>
                        </View>
                        <View style={styles.rowText}>
                            <Text style={[styles.infoText, styles.flex1]}>{getSexText(inPatient.Sex) }</Text>
                            <Text style={[styles.infoText, styles.flex1]}>{inPatient.Age}</Text>
                            <Text style={[styles.infoText, styles.flex5]}>{formatDate(inPatient.InHosDate) }</Text>

                        </View>
                    </View>
                    <View style={[styles.part_arrow]}>
                        <Icon name='ios-arrow-forward' size={18}  backgroundColor="transparent" color='#34b5da' />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}


var styles = StyleSheet.create({
    listRow: {
        flexDirection: 'row',
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
        height: 80,
        alignItems: 'center',
    },
    part_left: {
        width: 70,
        marginLeft: 10,
    },
    part_right: {
        flex: 1,
        marginLeft: 5,
    },
    part_arrow: {
        width: 18,
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
    },
    flex1:
    {
        flex: 1,
    },
    flex2:
    {
        flex: 2,
    },
    flex3:
    {
        flex: 3,
    },
    flex5:
    {
        flex: 3,
    },
    sign: {
        marginLeft: 4,
        marginTop: Platform.OS === 'ios' ? 0 : 4,
        width: 20,
        height: 20,
        backgroundColor: '#eb6877',
        borderRadius: 10,
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
});


export default InPatientListRow;
