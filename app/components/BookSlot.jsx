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

const BookSlot = ({classes, deviceData}) => {
	return (
		<div>
			<Paper className={cx('slot-container')}>
				<h4 className={cx('slot-title')}>Book A Slot</h4>

				<nav className={cx('slot-tab')}>
					<ul>
						<li>
							<Button disabled className={classes.button}  variant="raised" color="default">
								09:00 - 11:00
							</Button>
						</li>
						<li>
							<Button className={classes.button}  variant="raised" color="secondary">
								11:00 - 13:00
							</Button>
						</li>
						<li>
							<Button className={classes.button}  variant="raised" color="primary">
								14:00 - 16:00
							</Button>
						</li>
						<li>
							<Button className={classes.button}  variant="raised" color="primary">
								16:00 - 18:00
							</Button>
						</li>
					</ul>
				</nav>
				
				<div className={cx('book-slot-form')}>
					<BookSlotForm id="form1" key="1" />
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