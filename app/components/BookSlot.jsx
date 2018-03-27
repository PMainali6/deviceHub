import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Edit from 'material-ui-icons/Edit';

import style from '../css/components/book-slot';
import BookSlotForm from './BookSlotForm';
import EditDevice from './EditDevice';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookSlot extends Component {
	constructor() {
		super();
		this.editDevice = this.editDevice.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { modalOpen: false };
	}

	editDevice() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}
	
	render() {
		const {deviceData, bookDevice, bookingHistory, editDevice} = this.props,
			deviceId = deviceData.id;

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
				<Edit className={cx('edit-device')} onClick={this.editDevice} />
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
				<EditDevice open={this.state.modalOpen} closeModal={this.closeModal} deviceData={deviceData} editDevice={editDevice} />
			</div>
		)
	}
}

export default BookSlot;