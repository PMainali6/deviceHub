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
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Device.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    Device.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
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

export default {
  all,
  get,
  add,
  update,
  remove
};
