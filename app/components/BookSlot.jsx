import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import BookSlotForm from './BookSlotForm';

const styles = theme => ({
	paper: {
		margin: '20px auto',
  		display: 'block',
  		padding: 20,
  		width: 700,
	},
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
	},
	slotRow: {

	}
});

const BookSlot = ({classes}) => {
	return (
	<Paper className={classes.paper}>
		<h4>Book A Slot</h4>

		<nav>
			<ul>
				<li>
					<Button className={classes.button}  variant="raised" color="default">
						9-11
	        		</Button>
				</li>
				<li>
					<Button className={classes.button}  variant="raised" color="default">
						11-1
	        		</Button>
				</li>
				<li>
					<Button className={classes.button}  variant="raised" color="default">
						2-4
	        		</Button>
				</li>
				<li>
					<Button className={classes.button}  variant="raised" color="default">
						4-6
	        		</Button>
				</li>
			</ul>
		</nav>

		<BookSlotForm id="form1" key="1" />
	
	</Paper>
	)
}

export default withStyles(styles)(BookSlot);