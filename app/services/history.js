import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getHistoryData: () => client.request({
      method: 'GET',
      url: '/history'
    }),
    addHistoryData: (data) => client.request({
      method: 'POST',
      url: `/history`,
      data
    })
  };
};

