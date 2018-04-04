import React, { Component } from 'react';
import classNames from 'classnames/bind';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import Send from 'material-ui-icons/Send';

import {
    FormControl,
    FormGroup,
    FormControlLabel
  } from 'material-ui/Form';
  import style from '../css/components/book-slot';


const cx = classNames.bind(style);

class ReleaseDevice extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            release: this.props.release,
            deviceHolder: this.props.deviceHolder
        }
    }

    handleChange(event) {
        this.setState({release: event.target.checked })
    }

    handleInput() {
        this.setState({deviceHolder: this.deviceHolder.value})
    }

    onSubmit() {
        const { releaseDevice, deviceId } = this.props;
        const releaseData = {
            deviceId: deviceId,
            release: this.state.release,
            deviceHolder: this.state.deviceHolder
        }

        releaseDevice(releaseData);
    }

    render() {
        return (
            <Paper className={cx('release-container')}>
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            label = "Device released by the holder"
                            control = {
                                <Checkbox 
                                    checked={this.state.release}
                                    onChange={this.handleChange}
                                    value="release"
                                />
                            }  
                        />
                        {
                            this.state.release ? 
                            <TextField 
                                required
                                id="device-holder"
                                label="Device Holder"
                                className={cx('textfield')}
                                margin="normal"
                                InputLabelProps={{ shrink: true}}
                                inputProps={{
                                    ref: input => {this.deviceHolder = input}
                                }}
                                value = {this.props.deviceOwner}
                            /> :
                            <TextField 
                                required
                                id="device-holder"
                                label="Device Holder"
                                className={cx('textfield')}
                                margin="normal"
                                InputLabelProps={{ shrink: true}}
                                inputProps={{
                                    ref: input => {this.deviceHolder = input}
                                }}
                                value = {this.state.deviceHolder}
                                onChange = {this.handleInput}
                            />
                        }

                            <Button className={cx('submit-btn')} variant="raised" color="primary" onClick={this.onSubmit}>
                                Submit
                                <Send className={cx('submit-icon')}/>
                            </Button>
                    </FormGroup>
                </FormControl>
                
            </Paper>
        )
    }
}

export default ReleaseDevice;
