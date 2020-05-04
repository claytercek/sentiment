var Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

export const getTweets = (query) => (
  client.get('search/tweets', {
    q: query,
    result_type: "both",
    count: 100
  })
)

export default client;