import React from 'react';
import classNames from 'classnames/bind';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import style from '../css/components/booking-history';


const cx = classNames.bind(style);

const BookingHistory = ({booked}) => {
    return(
        <Paper className={cx('container')}>
            <h4>Booking History</h4>
            <Table className={cx('table')}>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Device Name</TableCell>
                        <TableCell>Booked By</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>

            <TableBody>
            {booked.map(el => {
                return(
                    <TableRow key={el.id}>
                        <TableCell>06-12-2018</TableCell>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.bookedBy}</TableCell>
                        <TableCell>{el.phone}</TableCell>
                    </TableRow>
                )
                })}
            </TableBody>                
            </Table>
        </Paper>
);
}

export default BookingHistory;