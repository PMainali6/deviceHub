import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import style from '../css/components/book-slot';
import BookSlotForm from './BookSlotForm';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: 20,
		marginRight: 20,
		width: 250,

	},
	button: {
		margin: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	formAction: {
		width: '100%',
		marginTop: 30,
	}
});

const BookSlot = ({classes, deviceData, bookDevice}) => {
	const deviceId = deviceData.id;

	return (
		<div>
			<Paper className={cx('slot-container')}>
				<h4 className={cx('slot-title')}>Book A Slot</h4>
				
				<div className={cx('book-slot-form')}>
					<BookSlotForm deviceId={deviceId} bookDevice={bookDevice} />
				</div>
			</Paper>

			<Paper className={cx('device-info')}>
			<h4>Device Info</h4>
			<table>
				<tr>
					<th>Name:</th>
					<td>{deviceData.name}</td>
				</tr>
				
				<tr>
					<th>Type:</th>
					<td>{deviceData.type}</td>
				</tr>

				<tr>
					<th>OS:</th>
					<td>{deviceData.os}</td>
				</tr>

				<tr>
					<th>Version:</th>
					<td>{deviceData.version}</td>
				</tr>
			</table>
			</Paper>
		</div>
	)
}

export default withStyles(styles)(BookSlot);