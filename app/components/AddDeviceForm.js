import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddDeviceForm extends Component {

    addDevice() {
        console.log("add");
        
    }

    render() {
        return (
            <div>
                <button onClick={this.addDevice.bind(this)}>Add Device</button>
            </div>
        )
    }
}

export default AddDeviceForm;