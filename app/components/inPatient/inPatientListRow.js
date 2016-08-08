import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions,Platform} from 'react-native';
import { parseImgUrl } from '../../utils';


const { width } = Dimensions.get('window');


class InPatientListRow extends Component {
	static propTypes = {
		topic: PropTypes.object,
		footer: PropTypes.node,
		onPress: PropTypes.func
	};


	static defaultProps = {
		onPress: () => null
	};


	render() {
		const { topic } = this.props;


		return (
			<TouchableHighlight
				onPress={() => { this.props.onPress(topic) } }
				underlayColor='#3498DB'
				key={topic.id}>

				<View style={ styles.listRow }>
					<View style={styles.part_left}>
						<View style={[styles.bed]}><Text style={[styles.bedText]}>+1</Text></View>
					</View>

					<View style={[styles.part_right]}>
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
        flex: 1,
        marginLeft: 12,
    },
    part_right: {
        flex: 4,
        marginLeft: 5,
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
});


export default InPatientListRow;
