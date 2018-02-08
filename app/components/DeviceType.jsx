import React from 'react';
import Paper from 'material-ui/Paper';

import DeviceRow from '../components/DeviceRow';

const style = {
  margin: 20,
  display: 'block',

};

const DeviceType = ({devices, deviceType}) => {
	console.log(devices)
	return (
	<div>
	<Paper style={style}>
		<h4>{deviceType}</h4>

		<DeviceRow devices ={devices.filter(device => device.os === "Android")} deviceOS = "Android" />
	    <DeviceRow devices ={devices.filter(device => device.os === "IOS")} deviceOS = "iOS" />
	  	<DeviceRow devices ={devices.filter(device => device.os === "Windows")} deviceOS = "Windows" />
	</Paper>
	</div>  	)
}

export default DeviceType;
