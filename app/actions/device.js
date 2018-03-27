import md5 from 'spark-md5'; 
import * as types from '../types';
import { deviceService } from '../services';

function addDeviceRequest (data) {
	return {
		type: types.ADD_DEVICE_REQUEST,
		device: data
	} 
}

function addDeviceSuccess (message) {
	return {
		type: types.ADD_DEVICE_SUCCESS,
		message
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

function bookDeviceSuccess (message) {
	return {
		type: types.BOOK_DEVICE_SUCCESS,
		message
	}
}

function bookDeviceFailure (data) {
	return {
		type: types.BOOK_DEVICE_FAILURE,
		id: data.id,
		error: data.error
	}
}

function editDeviceRequest(payload) {
	return {
		type: types.EDIT_DEVICE_REQUEST,
		payload
	}
}

function editDeviceSuccess() {
	return {
		type: types.EDIT_DEVICE_SUCCESS
	}
}

function editDeviceFailure() {
	return {
		type: types.EDIT_DEVICE_FAILURE
	}
}

export function addDevice (deviceData) {
	return (dispatch) => {
		const date = new Date(),
			id = md5.hash(deviceData.name+date),
			data = {id, ...deviceData};

		dispatch(addDeviceRequest(data));

		return deviceService().addDeviceData({id, data})
			.then((res) => {
				if (res.status === 200) {
					return dispatch(addDeviceSuccess('Your device has been successfully added.'));
				}
			})
			.catch(() => {
				return dispatch(addDeviceFailure({ id, error:'Oops! Something went wrong and we couldn\'t add your device'}));
			});
	}
}

export function editDevice ({name, type, os, version, owner}, deviceId) {
	return (dispatch, getState) => {
		const { devices } = getState();
		let updatedDevice = devices.find( device => device.id === deviceId);

		updatedDevice.name = name;
		updatedDevice.type = type;
		updatedDevice.os = os;
		updatedDevice.version = version;
		updatedDevice.owner = owner;

		dispatch(editDeviceRequest(updatedDevice));

		return deviceService().updateDeviceData({id: deviceId, data: updatedDevice})
			.then(res => {
				if(res.status === 200)
					return dispatch(editDeviceSuccess());

			})
			.catch(() => dispatch(editDeviceFailure()));
	}
}

export function bookDevice (bookingData) {
	return (dispatch, getState) => {
		const id = bookingData.id,
			{ devices } = getState(),
			bookedDevice = devices.find(device => device.id === id);
		let daySlots = bookingData.slots;

		daySlots.forEach((daySlot, index) => {
			daySlot.forEach((timeSlot) => {
				bookedDevice.bookedBy[index][timeSlot].available = bookingData.available;
				bookedDevice.bookedBy[index][timeSlot].userInfo = bookingData.userInfo;
			})
		});

		dispatch(bookDeviceRequest(bookedDevice));

		return deviceService().updateDeviceData({id, data: bookedDevice})
			.then((res) => {
				if(res.status === 200) {
					return dispatch(bookDeviceSuccess('Your selected slot has been booked'));
				}
			})
			.catch(() => {
				return dispatch(bookDeviceFailure({id, error:'Oops! Something went wrong and we couldn\'t update your device'}))
			})
	} 
}
