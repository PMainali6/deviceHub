import React, { Component } from 'react';

import DeviceForm from './DeviceForm';

import style from '../css/components/device-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class AddDeviceForm extends Component {
	render() {
		const { addDevice } = this.props;

		return (
			<DeviceForm
				formType = "add"
				deviceAction = {addDevice}
			/>
		)
	}
}

export default AddDeviceForm;