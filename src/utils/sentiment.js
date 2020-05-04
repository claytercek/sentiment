import Sentiment from "sentiment";

const sentiment = new Sentiment();

export const analyzeStatus = (status) => {
  return sentiment.analyze(status.text);
}


export const analyzeStatuses = (statuses) => {
  let sentiments = {};
  let max = 0;
  let min = 0;
  for (let status of statuses) {
    let analyzed = analyzeStatus(status);

    // check if no words could be found
    if (analyzed.words.length == 0) {
      continue;
    }

    if (analyzed.score < min) {
      min = analyzed.score;
    }
    if (analyzed.score > max) {
      max = analyzed.score;
    }

    if (!sentiments[analyzed.score]) {
      sentiments[analyzed.score] = {
        tweets: [status],
        val: analyzed.score
      }
    } else {
      sentiments[analyzed.score].tweets.push(status)
    }
  }
  return {
    groups: Object.values(sentiments),
    range: {
      max,
      min
    }
  }
}