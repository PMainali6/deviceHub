/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
  id: String,
  deviceName: String,
  version: String,
  userInfo: Object,
  slotId: String,
  date: String,
  bookingDate: { type: Date, default: Date.now },
  owner: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'History' collection in the MongoDB database
export default mongoose.model('History', HistorySchema);

