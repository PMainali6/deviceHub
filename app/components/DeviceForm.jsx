import React, { Component } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';

import style from '../css/components/device-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const deviceType = ["Mobile", "Tablet"];

const deviceOS = ["iOS", "Android", "Windows"];

class DeviceForm extends Component {
	constructor(props) {
		super(props);
		const { deviceData } = this.props;
		let editData = _.isUndefined(deviceData);

		this.onSave = this.onSave.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.findAncestor = this.findAncestor.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.state = {
			id: editData? '' : deviceData.id,
			name: editData? '' : deviceData.name,
			type: editData? '' : deviceData.type,
			os: editData? '' : deviceData.os,
			version: editData? '' : deviceData.version,
		};
	}

	findAncestor (element, selector) {
	    while ((element = element.parentElement) && !element.classList.contains(selector));
	    return element;
	}

	validateInput(event) {
		let input = event.target,
			parent = this.findAncestor(input, cx('text-field'));

		this.setState({[input.id]: event.target.value})

		if(!input.value.length) {
			parent.classList.add(cx('error'));

		}
		else  {
			parent.classList.remove(cx('error'));
		}
	}

	onSave() {
		const { deviceAction, closeModal, formType } = this.props;
		const form = document.getElementsByClassName(cx('container'))[0];

		if(this.deviceName.value && this.deviceType.value && this.deviceOS.value && this.deviceVersion.value) {
			let formInput = {
				name: this.deviceName.value,
				type: this.deviceType.value,
				os: this.deviceOS.value,
				version: this.deviceVersion.value,
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
			deviceAction(formInput, this.state.id);			
		}
		this.setState({
			name: '',
			type: '',
			os: '',
			version: '',
		})

		if(formType === 'edit')
			closeModal();
	}

	onCancel() {
		const { closeModal, formType } = this.props;

		if(formType === 'edit')
			closeModal();
		else
			window.location.href = '/';
	}

	render () {
		let { name, type, os, version } = this.state;

		return (
			<Paper className={cx('paper')}>
				<h4>Device Form </h4>
				<form className={cx('container')} >
					<TextField
			        	required
			        	id="name"
			        	label="Device Name"
			        	value={name}
			        	className={cx('text-field')}
			        	margin="normal"
			        	onChange={this.validateInput}
			        	inputProps={{
			        		ref: input => {this.deviceName = input},
			        		onBlur: this.validateInput
			        	}}
			        	InputLabelProps={{ shrink: true}}
	        		/>

	        		<TextField
	        			required
						id="type"
						select
						label="Device Type"
						value={type}
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
			        	InputLabelProps={{ shrink: true}}
					>
						{deviceType.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

					<TextField
						required
						id="os"
						select
						label="Device OS"
						value={os}
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
			        	InputLabelProps={{ shrink: true}}
					>
						{deviceOS.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>

					<TextField
			        	required
			        	id="version"
			        	label="OS Version"
			        	value={version}
			        	className={cx('text-field')}
			        	margin="normal"
			        	onChange={this.validateInput}
			        	inputProps={{
			        		ref: input => {this.deviceVersion = input},
			        		onBlur: this.validateInput
			        	}}
			        	InputLabelProps={{ shrink: true}}
	        		/>

	        		<div className={cx('form-action')}>
						<Button className={cx('button')} variant="raised" color="primary" onClick={this.onSave}>
							Save
							<Save className={cx('right-icon')} />
						</Button>
		        		<Button className={cx('button')} variant="raised" color="default" onClick={this.onCancel}>
		        			Cancel
		        		</Button>
		        	</div>
				</form>
			</Paper>
		)
	}
}

export default DeviceForm;