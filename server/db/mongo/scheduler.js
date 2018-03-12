import cron from 'cron';
import { resetBooking } from './controllers/devices';

const CronJob = cron.CronJob;

export default new CronJob({
	cronTime: '00 59 23 * * 1-5',
	onTick: resetBooking,
	timeZone: 'Asia/Kolkata'
});
