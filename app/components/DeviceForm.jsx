import React, { Component } from 'react';
import { Link } from 'react-router';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';

import style from '../css/components/device-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const deviceType = ["Mobile", "Tablet"];

const deviceOS = ["iOS", "Android", "Windows"];

const uploadFile = {
	'type': 'file',
	'accept':'.jpg, .jpeg, .png'
}

class DeviceForm extends Component {

	constructor() {
		super();
		this.onSave = this.onSave.bind(this);
	}

	onSave() {
		const { addDevice } = this.props;

		let formInput = {
			deviceName: this.deviceName.value,
			deviceType: this.deviceType.value,
			deviceOS: this.deviceOS.value,
			deviceVersion: this.deviceVersion.value,
			deviceImg: this.deviceImg.value
		}
		addDevice(formInput);
	}

	render () {
		const { addDevice } = this.props;

		return (
			<Paper className={cx('paper')}>
				<h4>Device Form </h4>
				<form className={cx('container')} noValidate autoComplete="off">
					<TextField
			        	required
			        	id="device-name"
			        	label="Device Name"
			        	className={cx('text-field')}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceName = input}}}
	        		/>

	        		<TextField
						id="device-type"
						select
						label="Device Type"
						className={cx('text-field')}
						SelectProps={{
							native: true,
				            MenuProps: {
				            	className: cx('menu'),
				            },
						}}
						margin="normal"
						inputProps={{ref: input => {this.deviceType = input}}}
					>
						{deviceType.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

					<TextField
						id="device-os"
						select
						label="Device OS"
						className={cx('text-field')}
						SelectProps={{
							native: true,
				            MenuProps: {
				            	className: cx('menu'),
				            },
						}}
						margin="normal"
						inputProps={{ref: input => {this.deviceOS = input}}}
					>
						{deviceOS.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

					<TextField
			        	required
			        	id="os-version"
			        	label="OS Version"
			        	className={cx('text-field')}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceVersion = input}}}
	        		/>

	        		<TextField
			        	required
			        	id="img-url"
			        	label="Image Url"
			        	className={cx('text-field')}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceImg = input}}}
	        		/>

	        		<div className={cx('form-action')}>
	        			<Link to="/dashboard">
			        		<Button className={cx('button')} variant="raised" color="primary" onClick={this.onSave}>
			        			Save
			        			<Save className={cx('right-icon')} />
			        		</Button>
			        	</Link>
		        		<Link to="/dashboard">
			        		<Button className={cx('button')} variant="raised" color="default">
			        			Cancel
			        		</Button>
			        	</Link>
		        	</div>
				</form>
			</Paper>
		)
	}
}

export default DeviceForm;