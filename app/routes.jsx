import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchVoteData, fetchDashboardData} from './fetch-data';
import { App, Vote, Dashboard, About, BookSlot, DeviceForm, LoginOrRegister } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} fetchData={fetchDashboardData} />
      <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
      <Route path="book-slot" component={BookSlot} onEnter={requireAuth} />
      <Route path="edit-device" component={DeviceForm} onEnter={requireAuth} />
      <Route path="add-device" component={DeviceForm} onEnter={requireAuth} />
      <Route path="about" component={About} />
    </Route>
  );
};
