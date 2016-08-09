import * as types from '../config/actionType';

const initialState = {
    inPatientList: []
};

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action;
    const {sequence = {}} = meta;

    if (sequence.type === 'start' || error) {
        return state;
    }

    switch (type) {
        case types.GET_INPATIENT_LIST:
            return {
				...state,
                inPatientList: payload.Result,
            };
        default:
            return state;
    }
}
