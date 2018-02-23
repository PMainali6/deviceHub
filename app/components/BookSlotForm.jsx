import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import {
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	FormHelperText,
  } from 'material-ui/Form';
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
		this.handleChange = this.handleChange.bind(this);
	}
	slots = [];
	
	state = {
		slot1: false,
		slot2: false,
		slot3: false,
		slot4: false
	  };

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
			slotId = this.slotId,
			userNameParent = this.findAncestor(userName, cx('text-field')),
			mobileParent = this.findAncestor(mobile, cx('text-field'))

		if(this.formValidation()) {
			let bookingData = {
				id: deviceId,
				slots: this.slots,
				available: false,
				userInfo: {
					name: userName.value,
					mobile: mobile.value
				}
			}
			bookDevice(bookingData);

		}
		else {
			userNameParent.classList.add(cx('error'));
			mobileParent.classList.add(cx('error'));
		}
	}

	handleChange = name => (event,checked)=> {
		this.setState({[name]: checked});
		if(checked) {
			this.slots.push(event.target.value);
		}
		else {
			this.slots = this.slots.filter(slot => slot != name)
		}
	}

	render() {		
		return (
			<form className={cx('container')} >
				<FormControl>
					<FormLabel component="legend">Select Slot/s</FormLabel>
					<FormGroup>
						<FormControlLabel 
							control = {
								<Checkbox checked={this.state.slot1} value="slot1" 
								onChange={this.handleChange('slot1')}/>
							}
							label = "9:00 - 11:00"
						/>

						<FormControlLabel 
							control = {
								<Checkbox checked={this.state.slot2} value="slot2" 
								onChange={this.handleChange('slot2')}/>
							}
							label = "11:00 - 1:00"
						/>

						<FormControlLabel 
							control = {
								<Checkbox checked={this.state.slot3} value="slot3" 
								onChange={this.handleChange('slot3')}/>
							}
							label = "2:00 - 4:00"
						/>

						<FormControlLabel 
							control = {
								<Checkbox checked={this.state.slot4} value="slot4" 
								onChange={this.handleChange('slot4')}/>
							}
							label = "4:00 - 6:00"
						/>

					</FormGroup>
				</FormControl>

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
					<Button variant="raised" color="primary" className={cx('button')} 
							onClick={this.onSave}>
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