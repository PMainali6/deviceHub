import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Edit from 'material-ui-icons/Edit';
import Delete from 'material-ui-icons/DeleteForever';

import style from '../css/components/book-slot';
import Modal from './Modal';
import BookSlotForm from './BookSlotForm';
import DeviceForm from './DeviceForm';
import DeleteDevice from './DeleteDevice';
import ReleaseDevice from './ReleaseDevice';
import classNames from 'classnames/bind';
import Button from 'material-ui/Button';

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
			{deviceData, editDevice, deleteDevice} = this.props;

		switch(modalContent) {
			case 'edit':
				return <DeviceForm 
							formType = {modalContent} 
							deviceData = {deviceData}
							deviceAction = {editDevice}
							closeModal = {this.closeModal}
						/>
			case 'delete':
				return <DeleteDevice 
						formType = {modalContent} 
						closeModal = {this.closeModal}
						deleteDevice = {deleteDevice}
						deviceId = {deviceData.id}
						/>
			default:
				return <h1>Some error occured while loading content</h1>
		}
	}
	
	render() {
		const {deviceData, bookDevice, bookingHistory, editDevice, releaseDevice} = this.props,
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

				<div className={cx('sidebar')}>
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
					<Button variant="raised" color="secondary" className={cx('delete-btn')} id='delete' onClick={this.openModal}> 
						Delete  <Delete className={cx('delete-icon')}/>
					</Button>
					</Paper>
					<ReleaseDevice deviceOwner={deviceData.owner} deviceHolder={deviceData.deviceHolder} release={deviceData.release} releaseDevice={releaseDevice} deviceId={deviceId}/>
				</div>
				<Modal open={isModalOpen} closeModal={this.closeModal}>
					{this.modalContent()}
				</Modal>
			</div>
		)
	}
}

export default BookSlot;