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

const deviceOwner = ["Select the device Owner", "Ashish Banka", "Bibhu"];

const uploadFile = {
	'type': 'file',
	'accept':'.jpg, .jpeg, .png'
}

class DeviceForm extends Component {

	constructor() {
		super();
		this.findAncestor = this.findAncestor.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	findAncestor (element, selector) {
	    while ((element = element.parentElement) && !element.classList.contains(selector));
	    return element;
	}
	validateInput(event) {
		let input = event.target,
			parent = this.findAncestor(input, cx('text-field'));

		if(!input.value.length) {
			parent.classList.add(cx('error'));

		}
		else  {
			parent.classList.remove(cx('error'));
		}
	}

	onSave() {
		const { addDevice } = this.props;

		if(this.deviceName.value && this.deviceType.value && this.deviceOS.value && this.deviceVersion.value && this.deviceOwner.value) {
			let formInput = {
				name: this.deviceName.value,
				type: this.deviceType.value,
				os: this.deviceOS.value,
				version: this.deviceVersion.value,
				owner: this.deviceOwner.value,
				deviceAvailability: true,
				bookedBy: [
					{
				  		slot1: {available: true, limitTime: 11, userInfo: { name:'', mobile:'' } },
						slot2: {available: true, limitTime: 13, userInfo: { name:'', mobile:'' } },
						slot3: {available: true, limitTime: 16, userInfo: { name:'', mobile:'' } },
						slot4: {available: true, limitTime: 18, userInfo: { name:'', mobile:'' } }
				  	},
				  	{
				  		slot1: {available: true, limitTime: 11, userInfo: { name:'', mobile:'' } },
						slot2: {available: true, limitTime: 13, userInfo: { name:'', mobile:'' } },
						slot3: {available: true, limitTime: 16, userInfo: { name:'', mobile:'' } },
						slot4: {available: true, limitTime: 18, userInfo: { name:'', mobile:'' } }
				  	}
				]
			}
			addDevice(formInput);
		}
	}

	render () {
		const { addDevice } = this.props;

		return (
			<Paper className={cx('paper')}>
				<h4>Device Form </h4>
				<form className={cx('container')} >
					<TextField
			        	required
			        	id="device-name"
			        	label="Device Name"
			        	className={cx('text-field')}
			        	margin="normal"
			        	onChange={this.validateInput}
			        	inputProps={{
			        		ref: input => {this.deviceName = input},
			        		onBlur: this.validateInput
			        	}}
	        		/>

	        		<TextField
	        			required
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
						onChange={this.validateInput}
						inputProps={{
							ref: input => {this.deviceType = input},
							onBlur: this.validateInput
						}}
					>
						{deviceType.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

					<TextField
						required
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
						onChange={this.validateInput}
						inputProps={{
							ref: input => {this.deviceOS = input},
							onBlur: this.validateInput
						}}
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
			        	onChange={this.validateInput}
			        	inputProps={{
			        		ref: input => {this.deviceVersion = input},
			        		onBlur: this.validateInput
			        	}}
	        		/>

					<TextField
						required
						id="device-owner"
						select
						label="Device Owner"
						className={cx('text-field')}
						SelectProps={{
							native: true,
				            MenuProps: {
				            	className: cx('menu'),
				            },
						}}
						margin="normal"
						onChange={this.validateInput}
						inputProps={{
							ref: input => {this.deviceOwner = input},
							onBlur: this.validateInput
						}}
					>
						{deviceOwner.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

	        		<div className={cx('form-action')}>
						<Link to="/">
							<Button className={cx('button')} variant="raised" color="primary" onClick={this.onSave}>
								Save
								<Save className={cx('right-icon')} />
							</Button>
						</Link>
		        		<Link to="/">
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