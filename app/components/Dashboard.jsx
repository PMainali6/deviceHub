import React from 'react';

import DeviceType from './DeviceType';
import style from '../css/components/device-type';
import classNames from 'classnames/bind';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */


 const stateValue =
{
   "devices": [
      {
        'id':'1234',
        "name":"Samsung Galaxy S8",
        "deviceType":"Mobile",
        "os":"Android",
        "version":"7.1"
      },
      {
        "name":"Samsung Galaxy S8 Plus",
        "deviceType":"Mobile",
        "os":"Android",
        "version":"7.1",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Apple Iphone 8",
        "deviceType":"Mobile",
        "os":"IOS",
        "version":"11.3",
       "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": true
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Apple Iphone 8 Plus",
        "deviceType":"Mobile",
        "os":"IOS",
        "version":"11.3",
        "slot":[
          {
           "value": "9-11",
            "booked": true
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Apple Iphone X",
        "deviceType":"Mobile",
        "os":"IOS",
        "version":"11.3",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Apple Ipad Pro",
        "deviceType":"Tablet",
        "os":"IOS",
        "version":"11.3",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Apple Ipad Mini",
        "deviceType":"Tablet",
        "os":"IOS",
        "version":"10",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Google Nexus 7",
        "deviceType":"Tablet",
        "os":"Android",
        "version":"6.0",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Samsung Galaxy Tab",
        "deviceType":"Tablet",
        "os":"Android",
        "version":"8.0",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Acer Tablet",
        "deviceType":"Tablet",
        "os":"Windows",
        "version":"5.0",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"HP Tablet",
        "deviceType":"Tablet",
        "os":"Windows",
        "version":"6.1",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Nokia PureView",
        "deviceType":"Mobile",
        "os":"Windows",
        "version":"8.0",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      },
      {
        "name":"Nokia 1020",
        "deviceType":"Mobile",
        "os":"Windows",
        "version":"8.1",
        "slot":[
          {
            "value": "9-11",
            "booked": false
          },
          {
            "value": "11-1",
            "booked": false
          },
          {
            "value": "2-4",
            "booked": false
          },
          {
            "value": "4-6",
            "booked": false
          }
        ]
      }
    ]
  };

const cx = classNames.bind(style);

const Dashboard = () => {
    return(
        <div className={cx('dashboard')}>
           <DeviceType devices={stateValue.devices.filter(device => device.deviceType === "Mobile")} deviceType ="Mobile" />
               
           <DeviceType devices={stateValue.devices.filter(device => device.deviceType === "Tablet")} deviceType ="Tablet" />
        </div>
    );

}

export default Dashboard;
