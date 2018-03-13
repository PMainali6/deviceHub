import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchDashboardData, fetchHistoryData } from './fetch-data';
import { App, Dashboard, About, BookSlot, DeviceForm, LoginOrRegister, BookingLogs } from './pages';

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
      <IndexRoute component={Dashboard} fetchDashboardData={fetchDashboardData} fetchHistoryData = {fetchHistoryData} />
      <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
      <Route path="book-slot" fetchDashboardData={fetchDashboardData} fetchHistoryData = {fetchHistoryData} component={BookSlot} onEnter={requireAuth} />
      <Route path="edit-device" component={DeviceForm} onEnter={requireAuth} />
      <Route path="add-device" component={DeviceForm} onEnter={requireAuth} />
      <Route path="about" component={About} />
      <Route path="bookings" component={BookingLogs} fetchDashboardData={fetchDashboardData} fetchHistoryData = {fetchHistoryData} />
    </Route>
  );
};
