// const qs = require('querystring');
const express = require('express');
const middleware = require('./middleware');
const fetch = require('isomorphic-fetch');

const app = express();

const handleResponse = (res) => {
  // console.log(res);
  if (!res.ok) {
    const e = new Error(res.statusText);
    e.stack = res;
    throw e;
  }
  return res.json();
};

app.use(middleware);

app.listen('8080', () => {
  const base = 'http://localhost:8080';
  const address = 'http://git.marcmcintosh.ninja';
  fetch(`${base}/url-shortener`, {
    method: 'POST',
    body: JSON.stringify({ url: address }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleResponse)
    .then((json) => {
      console.log(json);
      return fetch(`${base}${json.url}`);
    })
    .then((res) => {
      if (!res.ok) {
        const e = new Error(res.statusText);
        e.stack = res;
        throw e;
      }
      return res.text();
    })
    .then(console.log)
    .catch(error => console.error(error));
});
