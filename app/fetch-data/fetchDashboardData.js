import _ from 'lodash';
import { deviceService } from '../services';

const fetchData = (user) => {
  if(_.isUndefined(user)) {
    return deviceService().getAllDeviceData()
    .then(res => res.data)
    // Returning [] as a placeholder now so it does not error out when this service
    // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
    .catch(() => []);
  }
  else {
    return deviceService().getDeviceData({userId: user._id})
    .then(res => res.data)
    // Returning [] as a placeholder now so it does not error out when this service
    // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
    .catch(() => []);
  }
};

export default fetchData;

