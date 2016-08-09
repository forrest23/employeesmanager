import * as types from '../config/actionType';


const initialState = {
	fetchInpatientListPending: false,
};

export default function (state = initialState, action) {
	const { type, meta={} } = action;
	const { sequence={} } = meta;
	const status = sequence.type === 'start';

	switch (type) {
		case types.GET_INPATIENT_LIST:
			return {
				...state,
				fetchInpatientListPending: status
			};
		default:
			return state;
	}
}
