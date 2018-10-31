import redis from "redis"
const client = redis.createClient();
const {promisify} = require('util');
export const getAsync = promisify(client.get).bind(client);

process.on("exit", () => {
  client.quit();
});

client.on("error", (err) => {
  console.log("Error " + err);
})

client.on('connect', () => {
  console.log(`connected to redis`);
});

export default client
