import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Save from 'material-ui-icons/Save';
import AssignmentReturn from 'material-ui-icons/AssignmentReturn';
import style from '../css/components/book-slot-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: 20,
		marginRight: 20,
		width: 250,

	},
	button: {
		margin: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	}
});


class BookSlotForm extends Component {
	constructor () {
		super();
		this.onSave = this.onSave.bind(this);
	}

	onSave() {
		const { deviceId, bookDevice } = this.props;

		if(this.userName.value && this.mobile.value) {
			let bookingData = {
				id: deviceId,
				bookedBy: {
					name: this.userName.value,
					mobile: this.mobile.value
				},
				available: false
			}
			bookDevice(bookingData);
		}
		else {
			alert('Please enter some data!!!');
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">

				<Button className={classes.button} variant="raised" color="primary">
					Release
					<AssignmentReturn className={classes.rightIcon} />
				</Button>

				<div>
					<TextField
			        	required
			        	id="user-name"
			        	label="Borrower's Name"
			        	className={classes.textField}
			        	margin="normal"
			        	inputProps={{
			        		ref: input => {this.userName = input}
			        	}}
					/>

					<TextField
			        	required
			        	id="mobile-number"
			        	label="Mobile Number"
			        	className={classes.textField}
			        	margin="normal"
			        	inputProps = {{
			        		ref: input => {this.mobile = input}
			        	}}
					/>
				</div>

				<div className={cx('formAction')}>
		        		<Button className={classes.button} variant="raised" color="primary" onClick={this.onSave}>
		        			Save
		        			<Save className={classes.rightIcon} />
		        		</Button>

		        		<Button className={classes.button} variant="raised" color="default">
		        			Cancel
		        		</Button>
		        	</div>

			</form>
		)
	}

}

export default withStyles(styles)(BookSlotForm);