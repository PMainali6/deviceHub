import _ from 'lodash';
import History from '../models/history';

/**
 * List
 */
export function all(req, res) {
    History.find({}).sort({bookingDate: -1}).exec((err, history) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(history);
  });
}

/**
 * Add a History
 */
export function add(req, res) {
    History.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

// Only for Development. Delete!!
export function removeAll (req, res) {
  History.remove({}, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed all Successfully');
  });
}

export default {
  all,
  add,
  removeAll
};
