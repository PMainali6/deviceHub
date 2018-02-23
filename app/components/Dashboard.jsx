import React from 'react';

import DeviceType from './DeviceType';
import BookingHistory from './BookingHistory';
import style from '../css/components/device-type';
import classNames from 'classnames/bind';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

const cx = classNames.bind(style);

const Dashboard = ({deviceData, bookingHistory}) => {
    return(
        <div className={cx('dashboard')}>
           <DeviceType devices={deviceData.filter(device => device.type === "Mobile")} deviceType ="Mobile" />
               
           <DeviceType devices={deviceData.filter(device => device.type === "Tablet")} deviceType ="Tablet" />

           <BookingHistory booked={bookingHistory}/>
        </div>
    );

}

export default Dashboard;
