import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

import BookingLogsTable from './BookingLogsTable';

import style from '../css/components/booking-logs';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class BookingLogs extends Component {
	render () {
		const { bookingHistory } = this.props;

		return (
			<div>
				<aside>
					
				</aside>
				<BookingLogsTable bookingHistory={bookingHistory} />
			</div>
		)
	}
}

export default BookingLogs;
