import React, { Component } from 'react';
import Page from '../pages/Page';
import DashboardContainer from '../containers/Dashboard';

class Dashboard extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Dashboard | Device Hub';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A portal for booking devices.' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Page>
    );
  }
}

export default Dashboard;

