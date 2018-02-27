import React from 'react';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';

import style from '../css/components/device-row';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);



const DeviceRow = ({devices, deviceOS}) => {
	const android_url = "https://lh3.googleusercontent.com/TS1V-D1PkLTyFkjdmGQKHnv4CE7XgSHolKpQM9sD6hb2LtSf04ToahCJa3go-g4dQ3A=w300-rw";
	const ios_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/300px-IOS_logo.svg.png";
	const windows_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-w6tLNeZrGk6guNJ0J-bs8bZq4D5xaktCHZfDoCcLeQaq5ZYLw";
	return (
		<div className={cx('root')}>
			<div className={cx('img-container')}> 
			<img className={cx('os-logo')} 
				src={deviceOS === "Android"?android_url:(deviceOS==="iOS"?ios_url:windows_url)} />
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
