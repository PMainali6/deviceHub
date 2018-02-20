import _ from 'lodash';
import { Models, sequelize } from '../models';

const Device = Models.Device;

/**
 * List
 */
export function all(req, res) {
    Device.findAll().then((devices) => {
    res.json(devices);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
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
    Device.create(req.body).then(() => {
    res.status(200).send('OK');
  }).catch((err) => {
    console.log(err);
    res.status(400).send(err);
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
    Device.update(data, { where: query }).then(() => {
      res.status(200).send('Updated successfully');
    }).catch((err) => {
      console.log(err);
      res.status(500).send('We failed to save for some reason');
    });
  } else {
    const sign = isIncrement ? '+' : '-';
    Device.update({
      count: sequelize.literal(`count${sign}1`)
    }, { where: query }).then(() => {
      res.status(200).send('Updated successfully');
    }).catch((err) => {
      console.log(err);
      // Not sure if server status is the correct status to return
      res.status(500).send('We failed to save for some reason');
    });
  }
}

/**
 * Remove a Device
 */
export function remove(req, res) {
    Device.destroy({ where: { id: req.params.id } }).then(() => {
    res.status(200).send('Removed Successfully');
  }).catch((err) => {
    console.log(err);
    res.status(500).send('We failed to delete for some reason');
  });
}

export default {
  all,
  get,
  add,
  update,
  remove
};
