import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeviceFormComponent from '../components/DeviceForm';
import test from '../actions/random-test';


const mapStateToProps = (state) => {
    return state;
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTest() {
//             dispatch(
//                 test()
//             )
//         }
//     }
// }

const DeviceForm = ({test}) => {
    <DeviceFormComponent onTest={test}/>
}

export default connect(mapStateToProps, {test})(DeviceForm);
