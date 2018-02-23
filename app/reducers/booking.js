import * as types from '../types';

const bookings = (
	state = [],
	action
) => {
	switch(action.type) {
		case types.HISTORY_REQUEST_SUCCESS:
			if(action.data) return action.data;
			return state;
			
		case types.BOOKING_HISTORY_REQUEST:
			return [...action.payload, ...state];

		case types.BOOKING_HISTORY_FAILURE:
			return state.filter(t => t.id !== action.id);

		default :
			return state;
	}
}

export default bookings;