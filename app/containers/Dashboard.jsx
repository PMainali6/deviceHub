import React from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../components/Dashboard';

const mapStateToProps = (state) => {
	let date = new Date(),
		currentDate = date.getDate(),
		currentMonth = date.getMonth(),
		currentYear = date.getFullYear();
	return {
		deviceData: state.devices,
		bookingHistory: state.bookings.filter(booking => (booking.date.split('-')[0] >= currentDate && booking.date.split('-')[1] > currentMonth && booking.date.split('-')[2] >= currentYear))
	}
}

export default connect(mapStateToProps)(DashboardComponent);
