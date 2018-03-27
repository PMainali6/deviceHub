import React, { Component } from 'react';

import EditDeviceForm from './DeviceForm';

import style from '../css/components/book-slot';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class EditDevice extends Component {
	constructor() {
		super();
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal(event) {
		const modal = document.getElementById('modal');

		if(event.target == modal)
			this.props.closeModal();
	}

	render() {
		const { open, deviceData, editDevice, closeModal } = this.props;

		return (
			<div id="modal" className={open? cx('modal') : cx('modal','close')} onClick={this.closeModal} >
				<EditDeviceForm
					formType="edit"
					deviceData={deviceData}
					deviceAction={editDevice}
				/>
			</div>
		)
	}
}

export default EditDevice;