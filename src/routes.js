const axios = require('axios')
const redditURL = require('./config/constants');

module.exports = (router) => {
    router.get('/', async (req, res) => {
        const {data: {data: {children}}} = await axios.get('https://www.reddit.com/r/fortnite/hot/.json');
        let formatedData = children.filter(({data: {url}}) => {
            return url.includes('.jpg') || url.includes('.png')
        })

        return res.send(formatedData)
    })
}