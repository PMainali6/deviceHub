import React from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../components/Dashboard';

const mapStateToProps = (state) => {
	return {
		deviceData: state.devices
	}
}

export default connect(mapStateToProps)(DashboardComponent);
