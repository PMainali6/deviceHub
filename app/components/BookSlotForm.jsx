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

const cx = classNames.bind(style),
	dateSlot = [
		{
			label: "Today",
			value: 0
		},
		{
			label: "Tomorrow",
			value: 1
		}
	],
	timeSlots = [
		{
			label: "09:00 - 11:00",
			value: "slot1"
		},
		{
			label: "11:00 - 13:00",
			value: "slot2"
		},
		{
			label: "14:00 - 16:00",
			value: "slot3"
		},
		{
			label: "16:00 - 18:00",
			value: "slot4"
		}
	];

class BookSlotForm extends Component {
	constructor() {
		super();
		this.onSave = this.onSave.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onTimeSelection = this.onTimeSelection.bind(this);
		this.findAncestor = this.findAncestor.bind(this);
		this.formValidation = this.formValidation.bind(this);
		this.slots = [new Array(), new Array()];
		this.state = {
			dateKey: "0",
			slotState: [
				{
					slot1: false,
					slot2: false,
					slot3: false,
					slot4: false
				},
				{
					slot1: false,
					slot2: false,
					slot3: false,
					slot4: false
				}
			]
		};
	}

	findAncestor (element, selector) {
	    while ((element = element.parentElement) && !element.classList.contains(selector));
	    return element;
	}

	formValidation() {
		const { slotState } = this.state;
		let selectionFlag = false;

		slotState.forEach((slots) => {
			Object.keys(slots).forEach((slot)=> {
				if(slots[slot]) {
					selectionFlag = true;
				}
			})
		})
		if(this.userName.value && this.mobile.value && selectionFlag) {
			return true;
		}
		else {
			if(!selectionFlag)
				document.getElementsByClassName(cx('form-label'))[0].classList.add(cx('error'));
			return false;
		}
	}

	onDateChange(event) {
		let selectedDate = event.target.value;
		this.setState({'dateKey': selectedDate});
	}

	onTimeSelection(name) {
		let { slotState, dateKey } = this.state;
		return ((event, checked) => {
			let newSlot = slotState;

			for(var i=0; i<newSlot.length;i++) {
					if(i === parseInt(dateKey)) {
						newSlot[dateKey][name] = checked;
					}
			}

			this.setState({
				slotState : newSlot
			});

			if(checked) {
				this.slots[dateKey].push(event.target.value);
			}
			else {
				this.slots[dateKey] = this.slots[dateKey].filter(slot => slot != name)
			}
		})
	}

	onSave(event) {
		const { deviceId, bookDevice, bookingHistory, deviceData } = this.props;
		let userName = this.userName,
			mobile = this.mobile,
			slotId = this.slotId,
			userNameParent = this.findAncestor(userName, cx('text-field')),
			mobileParent = this.findAncestor(mobile, cx('text-field'))

		if(this.formValidation()) {
			let bookingData = {
				id: deviceId,
				slots: this.slots,
				dateSlot: this.state.dateKey,
				available: false,
				userInfo: {
					name: userName.value,
					mobile: mobile.value
				},
				owner: deviceData.owner,
				version: deviceData.version
			}

			bookDevice(bookingData);
			bookingHistory(bookingData);
		}

		else {
			event.preventDefault();
			if(!userName.value)
				userNameParent.classList.add(cx('error'));
			if(!mobile.value)
				mobileParent.classList.add(cx('error'));
		}
	}

	render() {
		const { dateKey, slotState } = this.state;

		let date = new Date(),
			currentDeviceData = this.props.deviceData.bookedBy;
			this.state.currentTime = date.getHours();

		return (
			<form className={cx('container')} >
				<div className={cx('slot-input-container')}>
					<div className={cx('date-selector')}>
						{
							dateSlot.map( (date, index) => (
								<button key={index} value={date.value} onClick = {this.onDateChange} className={dateKey == date.value ? 
									cx('date-button', 'selected-date') : cx('date-button')} >
									{date.label}
								</button>
							))
						}
					</div>

					<div className={cx('form-control-textfield-container')}>
						<FormControl>
							<FormLabel className={cx('form-label')} component="legend">
								Click slot(s) to select
							</FormLabel>

							<FormGroup>
								{
									timeSlots.map( (timeSlot, index) => (
										<FormControlLabel 
											key = {index}
											className={(() => {
												if(this.state.currentTime >= currentDeviceData[dateKey][timeSlot.value].limitTime && dateKey === "0")
													return cx('checkbox-label','full');
												else if (!currentDeviceData[dateKey][timeSlot.value].available)
													return cx('checkbox-label','booked');
												else if(slotState[dateKey][timeSlot.value])
													return cx('checkbox-label','selected');
												else
													return cx('checkbox-label','available');
											})()}

											control = {
												<Checkbox checked={slotState[dateKey][timeSlot.value]} value={timeSlot.value} className={cx('checkbox')}
												onChange={this.onTimeSelection(timeSlot.value)}/>
											}
											label = {timeSlot.label}
										/>
									))
								}
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
				</div>

				<div className={cx('form-action')}>
					<Link to="/" className={cx('link')}>
						<Button variant="raised" color="primary" className={cx('button')} 
								onClick={this.onSave}>
							Save
							<Save className={cx('right-icon')} />
						</Button>
					</Link>
						
					<Link to="/" className={cx('link')}>
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
