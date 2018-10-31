import axios from 'axios'
import {redditURL} from './config/constants';
import cache, {getAsync} from './config/cache';
import {differenceOfArrs} from './config/utils';

export default (router) => {
    router.get('/', async (req, res) => {
        const redis_log = await getAsync('recent')
        const {data: {data: {children}}} = await axios.get(redditURL);
        let imgData = children.filter(({data: {url}}) => url.includes('.jpg') || url.includes('.png'))

        if(redis_log !== null) {
            imgData = differenceOfArrs(imgData, redis_log)
        }

        cache.set('recent', JSON.stringify(imgData), 'EX', 1800);
        return res.send(imgData)
    })
}