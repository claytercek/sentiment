import { writable, derived } from 'svelte/store';
import chroma from "chroma-js";

export const query = writable("");

const initialData = {
  groups: [],
  range: {
    min: 0,
    max: 0
  },
  totalCount: 0
}

export const data = writable(initialData);

export const colors = derived(
	data,
	$data => {
    let maxVal = Math.max($data.range.min * -1, $data.range.max);
    let colors = chroma.scale(['#d73027', "#ffffbf", '#4575b4'])
    .mode('lch').colors(1 + 2 * maxVal);

    let colorsObj = {};

    for (let i in colors) {
      colorsObj[i - maxVal] = colors[i];
    }
    return colorsObj;
  }
);

export const percentNegative = derived(
	data,
	$data => {
    let count = 0;
    
    for (let group of $data.groups) {
      if (group.val < 0) {
        count += group.tweets.length
      }

      if (group.val == 0) {
        count += group.tweets.length / 2
        break;
      }
    }
    return (count / $data.totalCount) * 100;
  }
);


export const hideData = writable(true);


export const fetchData = (q) => {
  data.set(initialData);
  hideData.set(true);
  return fetch('/api/query', {
    method: 'POST',
    body: JSON.stringify({
      q
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(json => {
    data.set(json)
    hideData.set(false);
  });
}