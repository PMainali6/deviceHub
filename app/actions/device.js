import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (id, data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		id: id,
		device: data
	} 
}

export function addDevice (device) {
	console.dir(device);
	return (dispatch, getState) => {
		const id = '10';

		dispatch(addDeviceRequest(id, device));

		return deviceService().addDeviceData({id, device})
	}
}
