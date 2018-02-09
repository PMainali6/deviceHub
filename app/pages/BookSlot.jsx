import React, { Component } from 'react';
import Page from '../pages/Page';
import BookSlotContainer from '../components/BookSlot';

class BookSlot extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'BookSlot | reactGo';
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
        <BookSlotContainer {...this.props} />
      </Page>
    );
  }
}

export default BookSlot;

