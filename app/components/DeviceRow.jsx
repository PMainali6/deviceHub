import React from 'react';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';

import style from '../css/components/device-row';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);



const DeviceRow = ({devices, deviceOS}) => {
	const android_url = "https://lh3.googleusercontent.com/TS1V-D1PkLTyFkjdmGQKHnv4CE7XgSHolKpQM9sD6hb2LtSf04ToahCJa3go-g4dQ3A=w300-rw";
	const ios_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/300px-IOS_logo.svg.png";
	const windows_url = "https://www.saotn.org/wp-content/uploads/2017/10/Windows_Server_logo_small.png";

	return (
		<div className={cx('root')}>
			<div className={cx('img-container')}> 
			<img className={cx('os-logo')} 
				src={deviceOS === "Android"?android_url:(deviceOS==="iOS"?ios_url:windows_url)} />
			</div>
			<div className = {cx('os-devices')}>
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
