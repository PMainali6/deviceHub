import md5 from 'spark-md5'; 
import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		device: data
	} 
}

function addDeviceSuccess () {
	return {
		type: types.ADD_DEVICE_SUCCESS
	}
}

function addDeviceFailure (data) {
	return {
		type: types.ADD_DEVICE_FAILURE,
		id: data.id,
		error: data.error
	}
}

function bookDeviceRequest (data) {
	return {
		type: types.BOOK_DEVICE_REQUEST,
		payload: data
	}
}

function bookDeviceSuccess () {
	return {
		type: types.BOOK_DEVICE_SUCCESS
	}
}

function bookDeviceFailure (data) {
	return {
		type: types.BOOK_DEVICE_FAILURE,
		id: data.id,
		error: data.error
	}
}

export function addDevice (deviceData) {
	return (dispatch) => {
		const id = md5.hash(deviceData.name);
		const data = {id, ...deviceData};

		dispatch(addDeviceRequest(data));

		return deviceService().addDeviceData({id, data})
			.then((res) => {
				if (res.status === 200) {
					return dispatch(addDeviceSuccess());
				}
			})
			.catch(() => {
				return dispatch(addDeviceFailure({ id, error:'Oops! Something went wrong and we couldn\'t add your device'}));
			});
	}
}

export function bookDevice (bookingData) {
	return (dispatch, getState) => {
		const id = bookingData.id,
			{ devices } = getState(),
			bookedDevice = devices.find(device => device.id === id);
		let slots = bookingData.slots;

		slots.forEach(slot => {
			bookedDevice.bookedBy[slot].available = bookingData.available;
			bookedDevice.bookedBy[slot].userInfo = bookingData.userInfo;
		});

		dispatch(bookDeviceRequest(bookedDevice));

		return deviceService().updateDeviceData({id, data: bookedDevice})
			.then((res) => {
				if(res.status === 200) {
					return dispatch(bookDeviceSuccess());
				}
			})
			.catch(() => {
				return dispatch(bookDeviceFailure({id, error:'Oops! Something went wrong and we couldn\'t update your device'}))
			})
	} 
}
