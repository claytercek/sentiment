import { writable, derived } from 'svelte/store';
import chroma from "chroma-js";

export const query = writable("");

export const data = writable({
  groups: [],
  range: {
    min: 0,
    max: 0
  }
});

export const colors = derived(
	data,
	$data => {
    console.log("doin the thing now")
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


export const fetchData = (q) => {
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
  .then(json => data.set(json));
}