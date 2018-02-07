import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};


const DeviceRow = ({devices, deviceOS}) => {
	return (
		<div>
			<h4>{deviceOS}</h4>
			{devices.map((device,index) => <p key={index}>{device.name}</p>)}
		</div>
	)
}

export default DeviceRow;