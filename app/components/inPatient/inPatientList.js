
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl, Platform, TouchableHighlight} from 'react-native';
import Spinner from '../spinner';
import * as Constants from '../../config';
import InPatientListRow from './inPatientListRow';

const {height, width} = Dimensions.get('window');


class InPatientList extends Component {
	static propTypes = {
		data: PropTypes.array,
		getInPatientList: PropTypes.func,
	};

	static defaultProps = {
		data: []
	};


	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			ds: this.ds.cloneWithRows(props.data)
		}
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({
				ds: this.state.ds.cloneWithRows(nextProps.data)
			});
		}
	}


	_renderRow(inPatient) {
		return (
			<InPatientListRow  inPatient={inPatient}/>
		)
	}

	render() {
		const {getInPatientList} = this.props;
		return (
			<ListView
				enableEmptySections
				showsVerticalScrollIndicator={true}
				initialListSize={10}
				pagingEnabled={false}
				removeClippedSubviews={true}
				dataSource={this.state.ds}
				renderRow={this._renderRow.bind(this) }
				refreshControl={
					<RefreshControl
						refreshing={true}
						onRefresh={() => { getInPatientList() } }
						{...Constants.refreshControl}
						/>
				}
				/>
		)
	}
}

export default InPatientList;
