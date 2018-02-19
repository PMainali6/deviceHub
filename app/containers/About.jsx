import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About</h1>
      <div className={cx('description')}>
        <p><strong>Device Hub </strong>is the result of collorabative effort of the Helios Team fuelled by the efficient need for the booking of various devices for the testing purposes. </p>
          <p>We hope our endeavour manages to streamline this process.</p>
      </div>
      <br/><br/><br/>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/nawazsk/reactgo-cms">this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/nawazsk/reactgo-cms/issues">here</a>!
        </p>
      </div>
    </div>
  );
};

export default About;
