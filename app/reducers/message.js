import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function message(state = {
  message: '',
  type: 'SUCCESS'
}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
    case types.LOGOUT_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
    case types.ADD_DEVICE_SUCCESS:
    case types.BOOK_DEVICE_SUCCESS:
    case types.EDIT_DEVICE_SUCCESS:
    case types.ADD_DEVICE_FAILURE:
    case types.BOOK_DEVICE_FAILURE:
    case types.EDIT_DEVICE_FAILURE:
    case types.DELETE_DEVICE_SUCCESS:
    case types.DELETE_DEVICE_FAILURE:
    case types.RELEASE_DEVICE_SUCCESS:
    case types.RELEASE_DEVICE_FAILURE:
      return {...state, message: action.message, type: 'SUCCESS'};
    case types.DISMISS_MESSAGE:
      return {...state, message: '', type: 'SUCCESS'};
    default:
      return state;
  }
}
