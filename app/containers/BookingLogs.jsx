import React from 'react';
import { connect } from 'react-redux';

import BookingLogsComponent from '../components/BookingLogs';

const mapStateToProps = (state) => {
	return {
		bookingHistory: state.bookings
	}
}

export default connect(mapStateToProps)(BookingLogsComponent);
