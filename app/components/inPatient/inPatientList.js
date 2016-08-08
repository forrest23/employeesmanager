
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import InPatientListRow from './inPatientListRow';
import Spinner from '../spinner';


const {height, width} = Dimensions.get('window');


class InPatientList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			ds: ds.cloneWithRows(props.data)
		};
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this._updateData(nextProps.data);
		}
	}


	_updateData(data) {
		if (!this.props.isTabScrolling()) {
			this.setState({
				ds: this.state.ds.cloneWithRows(data)
			});
		}
		else {
			setTimeout(()=> {
				this._updateData(data);
			}, 16);
		}
	}


	_onEndReached() {
		const {tab, limit, page, actions, data} = this.props;
		if (data.length) {
			actions.getTopicsByTab(tab, {
				page: page + 1,
				limit
			});
		}
	}


	_renderFooter() {
		const {reachedEndPending} = this.props;
		if (reachedEndPending) {
			return (
				<View style={styles.reachedEndLoading}>
					<Spinner size="large"/>
				</View>
			)
		}
		return null;
	}


	renderRow(inPatient) {
		return (
			<InPatientListRow
				key={inPatient.id}
				inPatient={inPatient}
				onPress={(inPatient)=>{
					this.props.router.toTopic({
						id: inPatient.id,
						inPatient
					});
				}}
				/>
		)
	}


	render() {
		const {pullRefreshPending, tab, actions} = this.props;
		return (
			<ListView
				showsVerticalScrollIndicator
				removeClippedSubviews
				enableEmptySections
				ref={view => {this._listView = view}}
				initialListSize={10}
				pagingEnabled={false}
				scrollRenderAheadDistance={90}
				dataSource={this.state.ds}
				renderRow={this.renderRow.bind(this)}
				onEndReachedThreshold={30}
				onEndReached={this._onEndReached.bind(this)}
				renderFooter={this._renderFooter.bind(this)}
				refreshControl={
						<RefreshControl
							ref={(view)=> this.refreshControl=view}
							refreshing={pullRefreshPending}
							onRefresh={()=>{
								actions.updateTopicsByTab(tab);
							}}
						  />
					}
			/>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width
	},
	"row": {
		"height": 90,
		"flexDirection": "row",
		"borderBottomColor": "rgba(0, 0, 0, 0.02)",
		"borderBottomWidth": 1,
		"paddingTop": 25,
		"paddingRight": 0,
		"paddingBottom": 25,
		"paddingLeft": 20
	},
	"imgWrapper": {
		"width": 90,
		"position": "absolute",
		"left": 20,
		"top": 25,
		"height": 65
	},
	"img": {
		"height": 40,
		"width": 40,
		"borderRadius": 20
	},
	"topic": {
		"marginLeft": 60
	},
	"title": {
		"fontSize": 15
	},
	"topicFooter": {
		"marginTop": 12,
		"flexDirection": "row"
	},
	"topicFooter text": {
		"fontSize": 11,
		"color": "rgba(0, 0, 0, 0.5)"
	},
	"topicFooter date": {
		"position": "absolute",
		"right": 0,
		"top": 0
	},
	"topicFooter count": {
		"marginRight": 15
	},
	"topicFooter top": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10,
		"color": "#E74C3C"
	},
	"topicFooter good": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10,
		"color": "#2ECC71"
	},
	"topicFooter tab": {
		"fontSize": 11,
		"marginTop": 1,
		"marginRight": 0,
		"marginBottom": 0,
		"marginLeft": 10
	},
	"loading": {
		"marginTop": 250
	},
	footerErrorText: {
		fontSize: 20,
		textAlign: 'center',
		flex: 1
	},
	footerError: {
		height: 76,
		width: width,
		flexDirection: 'column'
	},
	reachedEndLoading: {
		paddingTop: 20,
		paddingBottom: 20
	}
});

export const LayoutComponent = InPatientList;
export function mapStateToProps(state, props) {
	const {tab} = props;
	const tabStatus = state.home[tab];
	const topics = state.topic[tab];
	return {
		data: topics,
		...tabStatus
	}
}
