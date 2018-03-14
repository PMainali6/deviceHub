import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import {
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	FormHelperText,
  } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Search from 'material-ui-icons/Search';

import BookingLogsTable from './BookingLogsTable';

import style from '../css/components/booking-logs';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookingLogs extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = {
			bookingHistory : props.bookingHistory,
			owners: {Ashish: false, Bibhu: false},
			days: {Monday:false, Tuesday:false, Tuesday:false, Wednesday:false, Thursday:false, Friday:false}
		}
	}

	handleSearch(event) {
		const searchInput = event.target.value.toLowerCase(),
			{ bookingHistory } = this.props;

		let newBookingHistory = bookingHistory.filter((data, index) => {
			let currentDeviceName = `${data.deviceName} v${data.version}`;

			if(currentDeviceName.toLowerCase().indexOf(searchInput) > -1) {
				return data;
			}
		});
		this.setState({ bookingHistory: newBookingHistory});
	}

	render () {
		const { bookingHistory } = this.state;
		return (
			<div className={cx('container')}>
				<Paper className={cx('drawer')}>
					<FormControl className={cx('form')}>
						<FormLabel component="legend" className={cx('form-label')}>Filter by</FormLabel>
						<FormGroup className={cx('form-group')}>
							<FormLabel component="legend" className={cx('title')}>Owner</FormLabel>
							{Object.keys(this.state.owners).map((owner, index) => (
								<FormControlLabel className={cx('form-control')}
									control={
									<Checkbox
										checked={this.state.owners[owner]}
										value={owner}
										 />
									}
									key={index}
									label={owner}
								/>
							))}
						</FormGroup >

						<FormGroup className={cx('form-group')}>
							<FormLabel component="legend" className={cx('title')}>Date</FormLabel>
							{Object.keys(this.state.days).map((day, index) => (
								<FormControlLabel className={cx('form-control')}
									control={
									<Checkbox
										checked={this.state.days[day]}
										value={day} />
									}
									key={index}
									label={day}
								/>
							))}
						</FormGroup>
					</FormControl>
				</Paper>
				<div className={cx('search-table-container')}>		
					<FormControl className = {cx('search-box')}>
						<InputLabel 
							htmlFor="search"
							>Search by Device Name
							</InputLabel>
						<Input
							id="search"
							type="text"
							onChange = {this.handleSearch}
							endAdornment={
								<InputAdornment position="end">
									<Search/>
								</InputAdornment>
							}
						/>
					</FormControl>

					<BookingLogsTable bookingHistory={bookingHistory} />
				</div>
			</div>
		)
	}
}

export default BookingLogs;
