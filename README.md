# redigram
> bot that reposts r/fortnite content to instagram.

## what is this??
This is an experimental project. Given the current craze of fortnite I want to see if I can make a popular instagram account simply by reposting popular r/fortnite posts.

## to do
- [x] cpu forking
- [x] get images from r/fortnite
- [x] cache post data with redis
- [x] set up cron job to call api every hour
- [ ] compare cached images with new data, get new posts
- [ ] post images on instagram

## resources
> where i save stuff i will need later.
[cron job](https://github.com/kelektiv/node-cron)
[instagram api](https://developers.facebook.com/docs/instagram-api/content-publishing)
[api](https://www.reddit.com/r/fortnite/hot/.json)