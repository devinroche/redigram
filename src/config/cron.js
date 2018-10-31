import {CronJob} from 'cron';
import axios from 'axios'

// figure out a better way to run cron job... im sorry.
const job = new CronJob('*/10 * * * * *', () => {
    axios.get('http://localhost:8080/api/')
    console.log('runs every 10 seconds');
}, null, true, 'America/Los_Angeles');

export default job