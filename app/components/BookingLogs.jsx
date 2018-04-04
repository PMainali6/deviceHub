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
		this.handleFilter = this.handleFilter.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleOwnersFilter = this.handleOwnersFilter.bind(this);
		this.handleResetFilter = this.handleResetFilter.bind(this);

		this.state = {
			bookingHistory : props.bookingHistory,
			owners: {'Ashish Banka': false, 'Bibhu Rout': false}
		}
	}

	handleResetFilter() {
		this.setState({
			bookingHistory : this.props.bookingHistory,
			owners: {'Ashish Banka': false, 'Bibhu': false}
		});
		this.searchInput.value = "";
	}

	handleSearch(bookingHistory) {
		const searchInput = this.searchInput.value.toLowerCase();

		let newBookingHistory = bookingHistory.filter((data, index) => {
			let currentDeviceName = `${data.deviceName} v${data.version}`;

			if(currentDeviceName.toLowerCase().indexOf(searchInput) > -1) {
				return data;
			}
		});
		return newBookingHistory;
	}

	handleOwnersFilter(bookingHistory, checked, event) {
		let { owners } =this.state,
			newBookingHistory = [],
			ownerArray = [];

		if(event) {
			let key = event.target.value,
				newOwners = owners;

			Object.keys(owners).forEach( owner => {
				if(owner == key)
					newOwners[owner] = checked;
			});
			this.setState({owners: newOwners});
		}
		
		Object.keys(owners).forEach((owner) => {
			if(owners[owner])
				ownerArray.push(owner);
		});

		if(ownerArray.length > 0) {
			ownerArray.forEach(owner => {
				bookingHistory.forEach(data => {
					if(data.owner == owner)
						newBookingHistory.push(data);
				})
			})
		}
		else 
			newBookingHistory = bookingHistory;

		return newBookingHistory;
	}

	handleFilter(event, checked) {
		const filterType = event.target.type;

		let filteredBookingHistory = this.props.bookingHistory; 

		filteredBookingHistory = this.handleSearch(filteredBookingHistory);

		if(filterType === "checkbox")
			filteredBookingHistory = this.handleOwnersFilter(filteredBookingHistory, checked, event);
		else
			filteredBookingHistory = this.handleOwnersFilter(filteredBookingHistory);

		this.setState({ bookingHistory: filteredBookingHistory});
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
										onChange={this.handleFilter}
										 />
									}
									key={index}
									label={owner}
								/>
							))}
						</FormGroup >
					</FormControl>
					<button className={cx('reset-btn')} onClick={this.handleResetFilter}>Clear Filter</button>
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
							onChange = {this.handleFilter}
							inputProps = {{
								ref: input => {this.searchInput = input}
							}}
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
