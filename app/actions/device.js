import md5 from 'spark-md5';
import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		id: data.id,
		name: data.name,
		deviceType: data.deviceType,
		os: data.os,
		version: data.version,
		bookedBy: data.bookedBy,
		available: data.available
	} 
}

export function addDevice(response) {
	return (dispatch, getState) => {
	  
	  	const id = md5.hash(response.name);
	  
	  	const data = {
			id: id,
			name: response.name,
			deviceType: response.deviceType,
			os: response.os,
			version: response.version,
			bookedBy: response.bookedBy,
			available: response.available
		};
	  
		dispatch(addDeviceRequest(data));
	  
		return deviceService().addDeviceData({id, data});
	};
}
