import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (id, data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		id: id,
		device: data
	} 
}

export function addDevice (data) {
	return (dispatch, getState) => {
		const id = '10';

		dispatch(addDeviceRequest(id, data));

		return deviceService().addDeviceData({id, data})
	}
}
