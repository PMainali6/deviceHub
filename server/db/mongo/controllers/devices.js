import _ from 'lodash';
import Device from '../models/devices';

/**
 * List
 */
export function all(req, res) {
    Device.find({}).exec((err, devices) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(devices);
  });
}

/**
 * Get a Device
 */
 export function get(req, res) {
    const query = { id: req.params.id };
    Device.findOne(query).exec((err, device) => {
      if (err) {
        console.log('Error in first query');
        return res.status(500).send('Something went wrong getting the data');
      }
   
      return res.json(device);
    });
 
 }

/**
 * Add a Device
 */
export function add(req, res) {
    Device.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

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
