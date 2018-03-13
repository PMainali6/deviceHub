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
    return 'DeviceForm | Device Hub';
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
        <DeviceFormContainer {...this.props} />
      </Page>
    );
  }
}

export default DeviceForm;

