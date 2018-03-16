import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { dismissMessage } from '../actions/messages';
import styles from '../css/components/message';
import Close from 'material-ui-icons/Close';

const cx = classNames.bind(styles);

class Message extends Component {
    constructor() {
      super();
    }

    render() {
      const {message, type, dismissMessage} = this.props;

      return (
        <div className={cx('message', { show: message && message.length > 0, success: type === 'SUCCESS' })}
              onClick={dismissMessage}>{message}
              <Close className={cx('close-icon')} />
        </div>
      )
    }

    componentDidUpdate() {
      setTimeout(this.props.dismissMessage, 3000);
    }
 }
 
Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps, { dismissMessage })(Message);
