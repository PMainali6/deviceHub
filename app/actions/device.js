import md5 from 'spark-md5'; 
import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		device: data
	} 
}

export function addDevice (data) {
	return (dispatch, getState) => {
		const id = md5.hash(data.name);
		dispatch(addDeviceRequest({id, ...data}));

		return deviceService().addDeviceData({id, data})
	}
}
