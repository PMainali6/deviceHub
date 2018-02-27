import React from 'react';
import { Link } from 'react-router';

import style from '../css/components/device-row';
import classNames from 'classnames/bind';

import Android from '../images/android.png';
import IOs from '../images/ios.png';
import Windows from '../images/windows2.png';

const cx = classNames.bind(style);



const DeviceRow = ({devices, deviceOS}) => {
	return (
		<div className={cx('root')}>
			<div className={cx('img-container')}> 
			<img className={cx('os-logo')} 
				src={deviceOS === "Android"?Android:(deviceOS==="iOS"?IOs:Windows)} />
			</div>
			<div className = {cx('os-devices')}>
				{devices.map((device, index) => {
					let isAvailable = device.deviceAvailability;
					let slotLink = "/book-slot?key=" + device.id;
					let editLink = "/edit-device?key=" + device.name;

					return (
						<Link to={slotLink} key={index} >
							<button className={isAvailable ? cx('button', 'available') : cx('button', 'empty')}>
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
