import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getAllDeviceData: () => client.request({
      method: 'GET',
      url: '/devices'
    }),
    getDeviceData: ({userId}) => client.request({
      method: 'GET',
      url: `/device/${userId}`,
    }),
    deleteDeviceData: ({ id }) => client.request({
      method: 'DELETE',
      url: `/device/${id}`
    }),
    updateDeviceData: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/device/${id}`,
      data
    }),
    addDeviceData: ({ id, data }) => client.request({
      method: 'POST',
      url: `/device/${id}`,
      data
    })
  };
};

