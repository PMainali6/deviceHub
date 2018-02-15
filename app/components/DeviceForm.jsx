import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';
import FileUpload from 'material-ui-icons/FileUpload';

const styles = theme => ({
	paper: {
		margin: '20px auto',
  		display: 'block',
  		padding: 20,
  		width: 700,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: 20,
		marginRight: 20,
		width: 250,

	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	formAction: {
		width: '100%',
		marginTop: 30,
	},
	uploadAction: {

	},
});

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
		const { classes, addDevice } = this.props;

		return (
			<Paper className={classes.paper}>
				<h4>Device Form </h4>
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
			        	required
			        	id="device-name"
			        	label="Device Name"
			        	className={classes.textField}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceName = input}}}
	        		/>

	        		<TextField
						id="device-type"
						select
						label="Device Type"
						className={classes.textField}
						SelectProps={{
							native: true,
				            MenuProps: {
				            	className: classes.menu,
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
						className={classes.textField}
						SelectProps={{
							native: true,
				            MenuProps: {
				            	className: classes.menu,
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
			        	className={classes.textField}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceVersion = input}}}
	        		/>

	        		<TextField
			        	required
			        	id="img-url"
			        	label="Image Url"
			        	className={classes.textField}
			        	margin="normal"
			        	inputProps={{ref: input => {this.deviceImg = input}}}
	        		/>

	        		<div className={classes.formAction}>
		        		<Button className={classes.button} variant="raised" color="primary" onClick={this.onSave}>
		        			Save
		        			<Save className={classes.rightIcon} />
		        		</Button>

		        		<Button className={classes.button} variant="raised" color="default">
		        			Cancel
		        		</Button>
		        	</div>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(DeviceForm);