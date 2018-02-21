import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {Link} from 'react-router';
import Save from 'material-ui-icons/Save';
import AssignmentReturn from 'material-ui-icons/AssignmentReturn';
import style from '../css/components/book-slot-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookSlotForm extends Component {
	constructor () {
		super();
		this.onSave = this.onSave.bind(this);
		this.findAncestor = this.findAncestor.bind(this);
		this.formValidation = this.formValidation.bind(this);
	}

	findAncestor (element, selector) {
	    while ((element = element.parentElement) && !element.classList.contains(selector));
	    return element;
	}

	formValidation() {
		if(this.userName.value && this.mobile.value) {
			return true;
		}
		else {
			return false;
		}
	}

	onSave() {
		const { deviceId, bookDevice } = this.props;
		let userName = this.userName,
			mobile = this.mobile,
			userNameParent = this.findAncestor(userName, cx('text-field')),
			mobileParent = this.findAncestor(mobile, cx('text-field'))

		if(this.formValidation()) {
			let bookingData = {
				id: deviceId,
				bookedBy: {
					name: userName.value,
					mobile: mobile.value
				},
				available: false
			}

			bookDevice(bookingData);
		}
		else {
			userNameParent.classList.add(cx('error'));
			mobileParent.classList.add(cx('error'));
		}
	}

	render() {
		return (
			<form className={cx('container')} >
				<TextField
			        	required
			        	id="user-name"
			        	label="Borrower's Name"
			        	className={cx('text-field')}
			        	margin="normal"
			        	inputProps={{
							ref: input => {this.userName = input}
			        	}}
				/>

				<TextField
					required
					id="mobile-number"
					label="Mobile Number"
					className={cx('text-field')}
					margin="normal"
					inputProps = {{
						ref: input => {this.mobile = input}
					}}
				/>

				<Button className={cx('button', 'release')} variant="raised" color="primary">
					Release
					<AssignmentReturn className={cx('right-icon')} />
				</Button>

				<div className={cx('form-action')}>
					<Button type="submit" variant="raised" color="primary" className={cx('button')} onClick={this.onSave}>
						Save
						<Save className={cx('right-icon')} />
					</Button>
						
					<Link to="/">
						<Button className={cx('button')} variant="raised" color="default">
							Cancel
						</Button>
					</Link>
				</div>
			</form>
		)
	}

}

export default BookSlotForm;