const qs = require('querystring');
const express = require('express');
const request = require('request');
// const shorten = require('./index')


const app = express();


// app.post('/', shorten);
app.post('/', (req, res) => {
  // console.log(Object.keys(req));
  console.log('Socket %j', req.socket);
  console.log('Connection %j', req.connection);
  console.log('Domain %j', req.domain);
  res.json({headers: req.headers, url: req.url });
});
app.listen('8080', () => {
  request.post({
    url: 'http://localhost:8080/',
    form: 'https://git.marcmcintosh.ninja',
    json: true,
  }, (err, res, json) => {
    if(err) console.error(err);
    console.log(json);
  });
})
