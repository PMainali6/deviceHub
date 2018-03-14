import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import {
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	FormHelperText,
  } from 'material-ui/Form';
  import Divider from 'material-ui/Divider';
import BookingLogsTable from './BookingLogsTable';

import style from '../css/components/booking-logs';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookingLogs extends Component {
	constructor() {
		super();
		this.state = {
			owners: {Ashish: false, Bibhu: false},
			days: {Monday:false, Tuesday:false, Tuesday:false, Wednesday:false, Thursday:false, Friday:false}
		}
	}
	render () {
		const { bookingHistory } = this.props;
		return (
			<div className={cx('container')}>
				<aside className={cx('drawer')}>
					<FormControl className={cx('form')}>
						<FormLabel component="legend" className={cx('form-label')}>Filter by</FormLabel>
						<FormGroup className={cx('form-group')}>
							<FormLabel component="legend" className={cx('title')}>Owner</FormLabel>
							{Object.keys(this.state.owners).map((owner, index) => {
								return (
									<FormControlLabel className={cx('form-control')}
										control={
										<Checkbox
											checked={this.state.owners[owner]}
											value={owner}
										key={index} />
										}
										label={owner}
									/>
								)
							})}
						</FormGroup >
							<Divider />
						<FormGroup className={cx('form-group')}>
							<FormLabel component="legend" className={cx('title')}>Date</FormLabel>
							{Object.keys(this.state.days).map((day, index) => {
								return (
									<FormControlLabel className={cx('form-control')}
										control={
										<Checkbox
											checked={this.state.days[day]}
											value={day}
										key={index} />
										}
										label={day}
									/>
								)
							})}
						</FormGroup>
					</FormControl>
				</aside>
				<BookingLogsTable bookingHistory={bookingHistory} />
			</div>
		)
	}
}

export default BookingLogs;
