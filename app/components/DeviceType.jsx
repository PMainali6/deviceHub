import React from 'react';
import Paper from 'material-ui/Paper';

import DeviceRow from '../components/DeviceRow';
import style from '../css/components/device-type';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);


const DeviceType = ({devices, deviceType}) => {
	return (
	<Paper className={cx('device-type-container')}>
		<h4>{deviceType}</h4>

		<DeviceRow devices ={devices.filter(device => device.os === "Android")} deviceOS = "Android" />
	    <DeviceRow devices ={devices.filter(device => device.os === "iOS")} deviceOS = "iOS" />
	  	<DeviceRow devices ={devices.filter(device => device.os === "Windows")} deviceOS = "Windows" />
	</Paper>
	)
}

export default DeviceType;
