const defaultFetchData = () => Promise.resolve();

export function fetchDashboardDataForRoute({ routes, params }, user) {
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchDashboardData || defaultFetchData;
  return fetchDataHandler(user, params);
}

export function fetchHistoryDataForRoute({ routes, params }) {
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchHistoryData || defaultFetchData;
  return fetchDataHandler(params);
}