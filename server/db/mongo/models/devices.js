/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema({
  id: String,
  name: String,
  deviceType: String,
  os: String,
  version: String,
  bookedBy: String,
  available: Boolean,
  date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Device' collection in the MongoDB database
export default mongoose.model('Device', DeviceSchema);

