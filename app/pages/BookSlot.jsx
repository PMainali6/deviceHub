import React, { Component } from 'react';
import Page from '../pages/Page';
import BookSlotContainer from '../containers/BookSlot';

class BookSlot extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'BookSlot | Device Hub';
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
        <BookSlotContainer {...this.props} />
      </Page>
    );
  }
}

export default BookSlot;

