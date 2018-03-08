/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema({
	id: String,
	name: String,
	type: String,
	os: String,
	version: String,
	owner: String,
	bookedBy: {
	  	type: Array,
	  	default: [
		  	{
		  		slot1: {available: true, limitTime: 11, userInfo: { name:'', mobile:'' } },
				slot2: {available: true, limitTime: 13, userInfo: { name:'', mobile:'' } },
				slot3: {available: true, limitTime: 16, userInfo: { name:'', mobile:'' } },
				slot4: {available: true, limitTime: 18, userInfo: { name:'', mobile:'' } }
		  	},
		  	{
		  		slot1: {available: true, limitTime: 11, userInfo: { name:'', mobile:'' } },
				slot2: {available: true, limitTime: 13, userInfo: { name:'', mobile:'' } },
				slot3: {available: true, limitTime: 16, userInfo: { name:'', mobile:'' } },
				slot4: {available: true, limitTime: 18, userInfo: { name:'', mobile:'' } }
		  	}
		]
	},
	deviceAvailability: Boolean,
	date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Device' collection in the MongoDB database
export default mongoose.model('Device', DeviceSchema);
