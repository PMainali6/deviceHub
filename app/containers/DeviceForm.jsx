import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeviceFormComponent from '../components/DeviceForm';
import { addDevice } from '../actions/device';


const mapStateToProps = (state) => {
    return {
    	devices: state.user
    };
}

export default connect(mapStateToProps, { addDevice })(DeviceFormComponent);
