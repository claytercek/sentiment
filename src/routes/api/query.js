import { getTweets } from "../../utils/twitter";
import { analyzeStatuses } from "../../utils/sentiment";

export async function post(req, res, next) {
  const { q } = req.body;

  // fetch tweets based on query
  const tweets = await getTweets(q);

  // analyze tweets
  const sentiments = analyzeStatuses(tweets.statuses);

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end(JSON.stringify(sentiments));
}