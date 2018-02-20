import React from 'react';
import { connect } from 'react-redux';

import { bookDevice } from '../actions/device';

import BookSlotComponent from '../components/BookSlot';

const mapStateToProps = (state, props) => {
    let key = props.location.query.key;

	return {
		deviceData: state.devices.devices.find(device => device.id === key)
	}
}

export default connect(mapStateToProps, { bookDevice })(BookSlotComponent);
