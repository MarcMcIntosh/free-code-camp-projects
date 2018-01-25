const express = require('express');
const request = require('request');
const app = express();
const { searchFor, recent } = require('./index');
app.get('/search/:term', searchFor, (req, res) => {
  res.json(req['image-search']);
});
app.get('/latest', recent, (req, res) => {
  res.json(req['image-search']);
})

app.listen(8080, () => {
  request.get({
    url: 'http://localhost:8080/search/lolcats?offset=10',
    json: true,
  }, (err, res, json) => {
    if(err) { return console.error(err); }
    console.log(json);
  });
  /*
  request.get({
    url: 'http://localhost:8080/latest',
    json: true,
  }, (err, res, json) => {
    if(err) { return console.error(err); }
    console.log(json)
  });
  */
});
