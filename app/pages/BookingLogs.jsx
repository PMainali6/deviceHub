import React, { Component } from 'react';
import Page from '../pages/Page';
import BookingLogsContainer from '../containers/BookingLogs';

class BookingLogs extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'BookingLogs | Device Hub';
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
        <BookingLogsContainer {...this.props} />
      </Page>
    );
  }
}

export default BookingLogs;

