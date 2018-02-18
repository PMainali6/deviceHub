import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
// const Dashboard = () => {
//     console.log("props");
//     console.log(this.props);
//     return(
//         <div>
//             Device Manager Dashboard
//         </div>
//     );

// }

class Dashboard extends Component {
    componentDidMount() {
        
    }
    render() {
        console.log("props");
        console.log(this.props);
        return (
            <div>
             Device Manager Dashboard
            </div>
        )
    }
}

// export default Dashboard;

function mapStateToProps(state) {
    console.log("states");
    console.log(state);
    return {
        devices : state
    };
}

export default connect(mapStateToProps, {})(Dashboard);
