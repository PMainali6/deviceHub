import React from 'react';
import Paper from 'material-ui/Paper';
import style from '../css/components/book-slot';
import BookSlotForm from './BookSlotForm';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const BookSlot = ({deviceData, bookDevice, bookingHistory}) => {
	const deviceId = deviceData.id;

	return (
		<div className={cx('wrapper')}>
			<Paper className={cx('slot-container')}>
				<h4 className={cx('slot-title')}>Book A Slot</h4>
				
				<div className={cx('book-slot-form')}>
					<BookSlotForm deviceId={deviceId} deviceData={deviceData} bookDevice={bookDevice} bookingHistory={bookingHistory} />
				</div>
			</Paper>

			<Paper className={cx('device-info')}>
			<h4>Device Info</h4>
			<table>
				<tbody>
					<tr>
						<th>Name:</th>
						<td>{deviceData.name}</td>
					</tr>
					
					<tr>
						<th>Type:</th>
						<td>{deviceData.type}</td>
					</tr>

					<tr>
						<th>OS:</th>
						<td>{deviceData.os}</td>
					</tr>

					<tr>
						<th>Version:</th>
						<td>{deviceData.version}</td>
					</tr>

					<tr>
						<th>Owner:</th>
						<td>{deviceData.owner}</td>
					</tr>
				</tbody>
			</table>
			</Paper>
		</div>
	)
}

export default BookSlot;