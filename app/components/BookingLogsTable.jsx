import React, { Component } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


import style from '../css/components/booking-logs';
import classNames from 'classnames/bind';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

const cx = classNames.bind(style);

const timeSlots = {
        slot1: "09:00 - 11:00",
        slot2: "11:00 - 13:00",
        slot3: "14:00 - 16:00",
        slot4: "16:00 - 18:00"    
    },
    tableHeader = ["Date", "Time Slot", "Device Name", "Booked By", "Mobile", "Owner"];

class BookingLogsTable extends Component {

	constructor() {
		super();
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this.state = {
			page: 0,
			rowsPerPage: 10
		}
	}

	handleChangePage (event, page) {
		this.setState({ page });
	}

	handleChangeRowsPerPage(event) {
		this.setState({ rowsPerPage: event.target.value });
	}	

	render() {
		const { bookingHistory } = this.props,
			{ page, rowsPerPage } = this.state;
		let key = 0;

		return (
			<Paper className={cx('table-container')}>
                <Table className={cx('table')}>
                    <TableHead>
                        <TableRow>
                            {tableHeader.map((ele, index) => 
                                <TableCell className={cx('table-head')} key={index}>{ele}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {bookingHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({date, slotId, deviceName, userInfo, owner, version}) => {
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
                    <TableFooter>
                    	<TableRow>
                    		<TablePagination
                    			colSpan = {6}
                    			count = {bookingHistory.length}
                    			rowsPerPage = {rowsPerPage}
                    			page = {page}
                    			backIconButtonProps={{
                    				'aria-label': 'Previous Page',
                    			}}
                    			nextIconButtonProps={{
                    				'aria-label': 'Next Page',
                    			}}
                    			onChangePage={this.handleChangePage}
                    			onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    		/>
                    	</TableRow>
                    </TableFooter>
                </Table>
	        </Paper>
		)
	}
}

export default BookingLogsTable;
