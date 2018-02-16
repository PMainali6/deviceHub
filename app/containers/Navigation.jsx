import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link
          to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>Device Manager</Link>
          
        <div className={cx('nav-menu')}>
          <Link className={cx('item')} to="/dashboard">Dashboard</Link>
          <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
          <Link className={cx('item')} to="/add-device">Add Device</Link>

          { user.authenticated ? (
            <Link
              onClick={logOut}
              className={cx('item')} to="/">Logout</Link>
          ) : (
            <Link className={cx('item')} to="/login">Log in</Link>
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
