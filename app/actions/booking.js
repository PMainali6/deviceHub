import * as types from '../types';
import { historyService } from '../services';

function bookingHistoryRequest (data) {
	return {
		type: types.BOOKING_HISTORY_REQUEST,
		payload: data
	}
}

function bookingHistorySuccess () {
	return {
		type: types.BOOKING_HISTORY_SUCCESS
	}
}

function bookingHistoryFailure (data) {
	return {
		type: types.BOOKING_HISTORY_FAILURE,
		id: data.id,
		error: data.error
	} 
}

export function bookingHistory (bookingData) {
	return (dispatch, getState) => {
		const { devices } = getState(),
			bookedDevice = devices.find(device => device.id === bookingData.id).name,
			slots = bookingData.slots,
			date = new Date(),
			currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
		let data = [],
			historyData;

		slots.forEach( slot => {
			historyData = {
				id: bookingData.id,
				deviceName: bookedDevice,
				userInfo: bookingData.userInfo,
				slotId: slot,
				date: currentDate,
				owner: bookingData.owner,
				version: bookingData.version
			}
			data.push(historyData);
		});

		dispatch(bookingHistoryRequest(data));

		return historyService().addHistoryData(data)
			.then((res) => {
				if(res.status === 200) {
					return dispatch(bookingHistorySuccess());
				}
			})
			.catch(() => {
				return dispatch(bookingHistoryFailure({id: bookingData.id, error:'Oops! Something went wrong and we couldn\'t book your device'}))
			})
		
	}
}
