import cron from 'cron';
import { resetBooking } from './controllers/devices';

const CronJob = cron.CronJob;

export const resetScheduler = new CronJob({
	cronTime: '00 59 23 * * 1-5',
	onTick: resetBooking,
	timeZone: 'Asia/Kolkata'
});

export const hourScheduler = new CronJob({
    cronTime: '* */25 * * * *',
    onTick: ()=> {console.log("tick")},
    timeZone: 'Asia/Kolkata'
});