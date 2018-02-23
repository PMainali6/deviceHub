import * as types from '../types';

const bookings = (
	state = [],
	action
) => {
	switch(action.type) {
		case types.BOOKING_HISTORY_REQUEST:
			return [...action.payload, ...state];

		case types.BOOKING_HISTORY_FAILURE:
			return state.filter(t => t.id !== action.id);

		default :
			return state;
	}
}

export default bookings;