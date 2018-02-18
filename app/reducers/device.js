import { combineReducers } from 'redux';
import * as types from '../types';

const device = (
	state = {},
	action
) => {
	switch(action.type) {
		case types.ADD_DEVICE_REQUEST:
			console.log("action");
			console.log(action);
			return {
				id: action.id,
				name: action.name,
				deviceType: action.deviceType,
				os: action.os,
				version: action.version,
				bookedBy: action.bookedBy,
				available: action.available		
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

		default :
			return state;
	}
}

const deviceReducers = combineReducers({ devices });

export default deviceReducers;