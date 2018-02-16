import React from 'react';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';

import style from '../css/components/device-row';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);


const DeviceRow = ({devices, deviceOS}) => {
	return (
		<div className={cx('root')}>
			<h4 className={cx('head')}>{deviceOS}</h4>
			<div>
				{devices.map((device, index) => {
					var slotLink = "/book-slot?key=" + device.name;
					var editLink = "/edit-device?key=" + device.name;

					return (
						<Link to= {editLink} key={index}>
							<button className={cx('button')}>
								{device.name}
							</button>
						</Link>
					);
				})}
			</div>
		</div>
	)
}

export default DeviceRow;
