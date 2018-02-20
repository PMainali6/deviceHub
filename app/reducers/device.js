import { combineReducers } from 'redux';
import * as types from '../types';

const device = (
	state = {},
	action
) => {
	switch(action.type) {
		case types.ADD_DEVICE_REQUEST:
			return {
				id: action.id,
				device: action.device
			};

		default :
			return state;
	}
}

const devices = (
	state = [],
	action
) => {
	switch(action.type) {
		case types.ADD_DEVICE_REQUEST:
			return [...state, device];

		case types.DEVICE_REQUEST_SUCCESS:
			if(action.data) return action.data;
			return state;

		default :
			return state;
	}
}

const deviceReducers = combineReducers({ devices });

export default deviceReducers;