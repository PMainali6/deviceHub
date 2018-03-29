import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Edit from 'material-ui-icons/Edit';
import Delete from 'material-ui-icons/Delete';

import style from '../css/components/book-slot';
import Modal from './Modal';
import BookSlotForm from './BookSlotForm';
import DeviceForm from './DeviceForm';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookSlot extends Component {
	constructor() {
		super();
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.modalContent = this.modalContent.bind(this);
		this.state = { 
			isModalOpen: false,
			modalContent: '' 
		};
	}

	openModal(event) {
		console.log(event.currentTarget.id)
		this.setState({
			isModalOpen: true,
			modalContent: event.currentTarget.id
		});
	}

	closeModal() {
		this.setState({isModalOpen: false});
	}

	modalContent() {
		const {modalContent} = this.state,
			{deviceData, editDevice} = this.props;

		switch(modalContent) {
			case 'edit':
				return <DeviceForm 
							formType = {modalContent} 
							deviceData = {deviceData}
							deviceAction = {editDevice}
							closeModal = {this.closeModal}
						/>
			case 'delete':
				return <h1>Delete</h1>
			default:
				return <h1>Some error occured while loading content</h1>
		}
	}
	
	render() {
		const {deviceData, bookDevice, bookingHistory, editDevice} = this.props,
			{ isModalOpen, modalContent } = this.state,
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
				<Edit id="edit" className={cx('edit-device')} onClick={this.openModal} />
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
				<Delete id="delete" onClick={this.openModal} />
				</Paper>
				<Modal open={isModalOpen} closeModal={this.closeModal}>
					{this.modalContent()}
				</Modal>
			</div>
		)
	}
}

export default BookSlot;