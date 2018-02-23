/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
  id: String,
  deviceName: String,
  userInfo: Object,
  slotInfo: String,
  date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'History' collection in the MongoDB database
export default mongoose.model('History', HistorySchema);

