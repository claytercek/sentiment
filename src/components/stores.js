import { writable } from 'svelte/store';

export const query = writable("");

export const data = writable({
  groups: [],
  range: {
    min: 0,
    max: 0
  }
});

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