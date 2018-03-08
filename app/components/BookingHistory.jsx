import React from 'react';
import classNames from 'classnames/bind';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import style from '../css/components/booking-history';


const cx = classNames.bind(style);

const timeSlots = {
    slot1: "09:00 - 11:00",
    slot2: "11:00 - 13:00",
    slot3: "14:00 - 16:00",
    slot4: "16:00 - 18:00"    
}

const BookingHistory = ({booked}) => {
    let key = 0;
    return(
        <Paper className={cx('container')}>
            <h4>Booking History</h4>
            {   booked.length ?
                    <Table className={cx('table')}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time Slot</TableCell>
                                <TableCell>Device Name</TableCell>
                                <TableCell>Booked By</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Owner</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                        {booked.map(({date, slotId, deviceName, userInfo, owner, version}) => {
                            return(
                                <TableRow key={key++}>
                                    <TableCell>{date}</TableCell>
                                    <TableCell>{timeSlots[slotId]}</TableCell>
                                    <TableCell>{deviceName} v{version}</TableCell>
                                    <TableCell>{userInfo.name}</TableCell>
                                    <TableCell>{userInfo.mobile}</TableCell>
                                    <TableCell>{owner}</TableCell>
                                </TableRow>
                            )
                            })}
                        </TableBody>
                    </Table> :
                <h4>======= No Current Booking History =======</h4>
            }
        </Paper>
);
}

export default BookingHistory;