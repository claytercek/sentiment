import Sentiment from "sentiment";

const sentiment = new Sentiment();

export const analyzeStatus = (status) => {
  return sentiment.analyze(status.text);
}


export const analyzeStatuses = (statuses) => {
  let sentiments = [];
  for (let status of statuses) {
    sentiments.push(analyzeStatus(status))
  }
  return sentiments;
}