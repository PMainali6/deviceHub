import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';
import iphone from '../images/iphoneX.svg';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link
          to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>

          <div className={cx('logo-container')}>
            <img src={iphone} alt="logo" className={cx('logo-img')}/>
            <div className={cx('brand-name')}>
              Device Hub
            </div>
            

          </div>
          </Link>
          
        <div className={cx('nav-menu')}>
          <IndexLink className={cx('item')} activeClassName={cx('active')} to="/">Dashboard</IndexLink>
          <Link className={cx('item')} activeClassName={cx('active')} to="/bookings">Booking Logs</Link>
          <Link className={cx('item')} activeClassName={cx('active')} to="/add-device">Add Device</Link>
          <Link className={cx('item')} activeClassName={cx('active')} to="/about">About</Link>

          { user.authenticated ? (
            <Link
              onClick={logOut}
              className={cx('item')} to="/">Logout</Link>
          ) : (
            <Link className={cx('item')} activeClassName={cx('active')} to="/login">Log in</Link>
          )}
        </div>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
