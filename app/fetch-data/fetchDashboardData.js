import { deviceService } from '../services';

const fetchData = () => {
  return deviceService().getDeviceData()
  .then(res => {console.log(res.data); return res.data})
  // Returning [] as a placeholder now so it does not error out when this service
  // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
  .catch(() => []);
};

export default fetchData;

