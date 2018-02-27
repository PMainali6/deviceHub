import React, { Component } from 'react';
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
		this.slots = [];
	}
	
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
		const { deviceId, bookDevice, bookingHistory, deviceData } = this.props;
		let userName = this.userName,
			mobile = this.mobile,
			slotId = this.slotId,
			userNameParent = this.findAncestor(userName, cx('text-field')),
			mobileParent = this.findAncestor(mobile, cx('text-field'))

		if(this.formValidation()) {
			let flag = [];

			Object.keys(deviceData.bookedBy).forEach(slot => {
				if(this.state.currentTime >= deviceData.bookedBy[slot].limitTime)
					flag.push(false);
				else
					flag.push(deviceData.bookedBy[slot].available);
			});

			this.slots.forEach(slot => {
				switch(slot) {
					case 'slot1':
						flag[0] = false;
						break;
					case 'slot2':
						flag[1] = false;
						break;
					case 'slot3':
						flag[2] = false;
						break;
					case 'slot4':
						flag[3] = false;
						break;
					default:
						break;
				}
			});

			let bookingData = {
				id: deviceId,
				slots: this.slots,
				deviceAvailability: !flag.every(ele => !ele),
				available: false,
				userInfo: {
					name: userName.value,
					mobile: mobile.value
				}
			}
			bookDevice(bookingData);
			bookingHistory(bookingData);
		}
		else {
			userNameParent.classList.add(cx('error'));
			mobileParent.classList.add(cx('error'));
		}
	}

	handleChange = name => (event,checked)=> {
		let checkbox = event.target;
		this.setState({[name]: checked});

		let checkboxParent = this.findAncestor(checkbox, cx('checkbox-label'));

		if(checked) {
			this.slots.push(event.target.value);
			checkboxParent.classList.add(cx('selected'));
		}
		else {
			this.slots = this.slots.filter(slot => slot != name)
			checkboxParent.classList.remove(cx('selected'));
		}
		console.log(this.slots);
	}

	render() {	
		let date = new Date(), 
			currentDeviceData = this.props.deviceData.bookedBy;
			this.state.currentTime = date.getHours();
		return (

			<form className={cx('container')} >
				<div className={cx('slot-input-container')}>
					<FormControl>
						<FormLabel className={cx('form-label')} component="legend">Select Slot(s)</FormLabel>
						<FormGroup>
							<FormControlLabel 
								className={(this.state.currentTime >= currentDeviceData.slot1.limitTime ? 
											cx('checkbox-label','full'): (!currentDeviceData.slot1.available ? 
											cx('checkbox-label','booked') : cx('checkbox-label','available')))} 
								control = {
									<Checkbox checked={this.state.slot1} value="slot1" className={cx('checkbox')}
									onChange={this.handleChange('slot1')}/>
								}
								label = "09:00 - 11:00"
							/>

							<FormControlLabel 
								className={(this.state.currentTime >= currentDeviceData.slot2.limitTime ? 
											cx('checkbox-label','full'): (!currentDeviceData.slot2.available ? 
											cx('checkbox-label','booked') : cx('checkbox-label','available')))} 
								control = {
									<Checkbox checked={this.state.slot2} value="slot2" className={cx('checkbox')}
									onChange={this.handleChange('slot2')}/>
								}
								label = "11:00 - 13:00"
							/>

							<FormControlLabel 
								className={(this.state.currentTime >= currentDeviceData.slot3.limitTime ? 
											cx('checkbox-label','full'): (!currentDeviceData.slot3.available ? 
											cx('checkbox-label','booked') : cx('checkbox-label','available')))} 
								control = {
									<Checkbox checked={this.state.slot3} value="slot3" className={cx('checkbox')}
									onChange={this.handleChange('slot3')}/>
								}
								label = "14:00 - 16:00"
							/>

							<FormControlLabel 
								className={(this.state.currentTime >= currentDeviceData.slot4.limitTime ? 
											cx('checkbox-label','full'): (!currentDeviceData.slot4.available ? 
											cx('checkbox-label','booked') : cx('checkbox-label','available')))} 
								control = {
									<Checkbox checked={this.state.slot4} value="slot4" className={cx('checkbox')}
									onChange={this.handleChange('slot4')}/>
								}
								label = "16:00 - 18:00"
							/>

						</FormGroup>
					</FormControl>
					
					<div className={cx('textfield-container')}>
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
					</div>
				</div>
				<div className={cx('form-action')}>
					<Link to="/">
						<Button variant="raised" color="primary" className={cx('button')} 
								onClick={this.onSave}>
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
		)
	}

}

export default BookSlotForm;