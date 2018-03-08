import React from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../components/Dashboard';

const mapStateToProps = (state) => {
	let date = new Date(),
		currentDate = date.getDate();
	return {
		deviceData: state.devices,
		bookingHistory: state.bookings.filter(booking => (booking.date.split('-')[0] >= currentDate))
	}
}

export default connect(mapStateToProps)(DashboardComponent);
