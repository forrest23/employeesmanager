import * as types from '../config/actionTypes';

const initialState = {
    inPatients: {}
};

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action;
    const {sequence = {}, tab, id = '0', replyId = '0', userId = '0', content = '', user = {}} = meta;

    if (sequence.type === 'start' || error) {
        return state;
    }

    switch (type) {
        case types.GET_TOPIC_BY_ID:
            return {
				...state,
                topics: {
					...state.topics,
                    [id]: payload
                }
            };
        default:
            return state;
    }
}
