import cluster from 'cluster';
import express from 'express';
import routes from './routes';
import job from './config/cron'

if (cluster.isMaster){
    let cpuCount = require('os').cpus().length
    for(let i=0; i < cpuCount; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.id} died`);
        cluster.fork();
    })
} else {
    const app = express();
    const port = process.env.PORT || 8080
    const router = express.Router();

    app.use('/api', router);
	app.listen(port, () => console.log(`Worker ${cluster.worker.id} running!`));

    routes(router)
    job.start()
}