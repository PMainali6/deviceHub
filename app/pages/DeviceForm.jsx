import React, { Component } from 'react';
import Page from '../pages/Page';
import DeviceFormContainer from '../containers/DeviceForm';

class DeviceForm extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'DeviceForm | reactGo';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of a dashboard page' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DeviceFormContainer {...this.props} />
      </Page>
    );
  }
}

export default DeviceForm;

