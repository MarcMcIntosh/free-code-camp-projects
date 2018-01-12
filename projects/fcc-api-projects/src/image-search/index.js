const url = require('url');
const db = require('./db');
const request = require('request');
require('dotenv').config();

function addr(term, offset) {
  return url.format({
    protocol: 'https:',
    slashes: true,
    host: 'www.googleapis.com',
    query: {
      q: (term) ? term : 'lolcats',
      start: (offset > 0 ) ? offset : 1,
      cx: process.env.CSE_ID,
      key: process.env.API_KEY
    },
    pathname: '/customsearch/v1',
  });
}

function searchFor(req, res, next) {;

  db.save(req.params.term, () => {
    request.get({
      url: addr(req.params.term, req.query.offset),
      json: true,
    }, (err, res, json) => {
      if (err || res.statusCode !== 200) {
        const { message, type } = err;
        Object.assign(req, {
          'image-search' : {
            error: true,
            message,
            type,
          },
        });
      } else {
        Object.assign(req, { 'image-search': json });
      }
      return next();
    });
  });
}

function recent(req, res, next) {
  return db.latest((err, json) => {
    if(err) {return next(err);}
    Object.assign(req, {'image-search' : json});
    return next();
  });
}
module.exports = {
  searchFor,
  recent,
}
