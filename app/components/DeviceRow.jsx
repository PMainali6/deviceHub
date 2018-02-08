import React from 'react';
import { Link } from 'react-router';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.dark,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


const DeviceRow = ({devices, deviceOS, classes}) => {
	return (
		<div className={classes.root}>
			<h4>{deviceOS}</h4>
			<GridList className={classes.gridList} cols={2.5}>
				{devices.map((device,index) => {
					var slotLink = "/book-slot?key=" + device.name;
					var editLink = "/edit-device?key=" + device.name;

					return (
						<Link to={slotLink} key={index}>
							<GridListTile >
								<img src="img" alt={device.name} />
								<GridListTileBar
									title = {device.name}
									classes={{
						            	root: classes.titleBar,
						                title: classes.title,
						            }}
						            actionIcon={
						                <IconButton>
						                  <EditIcon className={classes.title} />
						                </IconButton>
						            }
						        />
						    </GridListTile>
						</Link>
					)
				}
					
				)}
			</GridList>
		</div>
	)
}

export default withStyles(styles)(DeviceRow);
