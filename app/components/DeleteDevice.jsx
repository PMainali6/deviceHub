import React, { Component } from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import style from '../css/components/book-slot';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class DeleteDevice extends Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const { deleteDevice, deviceId } = this.props;
        deleteDevice(deviceId);
    }

    render() {
		return (
				<Paper className={cx('delete-modal')}>
                    <h4>Are you sure you want to delete the selected device permanently?</h4>
                    <p>Note: Booking data for this device will not be deleted </p>
                    <Link to='/' className={cx('link')}>
                        <Button className={cx('button')} variant="raised" color="secondary" onClick={this.onDelete}>
                            Delete
                        </Button>
                    </Link>
                    <Button className={cx('button')} variant="raised" color="default" onClick={this.props.closeModal}>
						Cancel
					</Button>
                </Paper>
		)
    }
}

export default DeleteDevice;
