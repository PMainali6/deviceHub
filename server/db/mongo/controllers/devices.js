import _ from 'lodash';
import Device from '../models/devices';
import User from '../models/user';

/**
 * Generate username from email
 */
 function generateUserName(email) {
  let username, fname, lname, owner;

  username = email.split("@");
  username = username[0].split(".");

  fname = username[0];
  lname = username[1];

  fname = fname.charAt(0).toUpperCase() + fname.slice(1);
  lname = lname.charAt(0).toUpperCase() + lname.slice(1);

  owner = fname + " " + lname;

  return owner;
}


/**
 * List
 */
export function all(req, res) {
    if(_.isUndefined(req.user)) {
      Device.find({}).exec((err, devices) => {
        if (err) {
          console.log('Error in first query');
          return res.status(500).send('Something went wrong getting the data');
        }
        return res.json(devices);
      });
    }
    else {
      const deviceList = req.user.deviceList;
      let deviceQuery = new Array();

      deviceList.forEach((deviceId) => {
        deviceQuery.push({id: deviceId})
      });

      if(deviceQuery.length) {
        Device.find().or(deviceQuery).exec((err, devices) => {
          if(err){
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
          }
          return res.json(devices);
        });
      }
      else
        return res.json([]);
    }
}

/**
 * Get a Device
 */
 export function get(req, res) {
   const userId = req.params.id;
   let deviceQuery = new Array();

   User.findOne({_id: userId}).exec((err, user) => {
      if (err) {
        console.log('Error in first query');
        return res.status(500).send('Something went wrong getting the data');
      }
      user.deviceList.forEach((deviceId) => {
        deviceQuery.push({id: deviceId})
      });
      Device.find().or(deviceQuery).exec((err, devices) => {
        if(err){
          console.log('Error in first query');
          return res.status(500).send('Something went wrong getting the data');
        }
        return res.json(devices);
      });
   });  
 }

/**
 * Add a Device
 */
export function add(req, res) {
    const query = { _id: req.user._id};
    let deviceList = req.user.deviceList, 
    owner;
    
    deviceList.push(req.body.id);

    owner = generateUserName(req.user.email);
    Device.create({...req.body, owner}, (err) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }

        User.findOneAndUpdate(query, { deviceList }, (err) => {
            if(err)
                console.log('error on save');
        });

        return res.status(200).send('OK');
    });
}

/**
 * Update a Device
 */
export function update(req, res) {
  const query = { id: req.params.id };

  const omitKey = 'id';
  const data = _.omit(req.body, omitKey);

  Device.findOneAndUpdate(query, data, (err) => {
    if (err) {
      console.log('Error on save!');
      return res.status(500).send('We failed to save for some reason');
    }

    return res.status(200).send('Updated successfully');
  });
}


/**
 * Reset DeviceList
 */
export function resetBooking () {
  const newBooking = {
      slot1: {available: true, limitTime: 11, userInfo: { name:'', mobile:'' } },
      slot2: {available: true, limitTime: 13, userInfo: { name:'', mobile:'' } },
      slot3: {available: true, limitTime: 16, userInfo: { name:'', mobile:'' } },
      slot4: {available: true, limitTime: 18, userInfo: { name:'', mobile:'' } }
    };

  Device.find({}).exec((err, devices) => {
    devices.forEach( device => {
      device.bookedBy.shift();
      device.bookedBy.push(newBooking);

      Device.findOneAndUpdate({id: device.id}, device, (err) => {
        if (err) {
          console.log('Error on save!');
        }
      });
    });
  });  
}

/**
 * Remove a Device
 */ 
export function remove(req, res) {
  const query = { id: req.params.id };

  Device.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}


// Only for Development. Delete!!
export function removeAll (req, res) {
  Device.remove({}, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed all Successfully');
  });
}

export default {
  all,
  get,
  add,
  update,
  remove,
  removeAll,
  resetBooking
};
