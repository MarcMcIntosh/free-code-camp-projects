const { format } = require('url');
const { resolve } = require('path');
const { Router } = require('express');
const fetch = require('isomorphic-fetch');
const db = require('./db');

const ENV_PATH = resolve(__dirname, '.env');
require('dotenv').config({ path: ENV_PATH });

const cx = process.env.CSE_ID;
const key = process.env.API_KEY;
const protocol = 'https';
const host = 'www.googleapis.com';
const slashes = true;
const pathname = '/customsearch/v1';
const formatUrl = (q = 'lolcats', start = 1) => format({ protocol, slashes, host, pathname, query: { q, start, cx, key } });

const errorToJson = (error) => {
  if (error instanceof Error) {
    const { message, stack } = error;
    return { message, stack };
  } return error;
};

function searchFor(req, res) {
  // const { term, offset } = req.params;
  const term = req.params.term;
  const offset = Object.prototype.hasOwnProperty.call(req.query, 'offset') && req.query.offset ? req.query.offset : 1;
  const addr = formatUrl(term, offset);
  const headers = { Accept: 'application/json' };
  return db.save(term, () => fetch(addr, { headers })
    .then((response) => {
      if (!response.ok) { throw response.statusText; }
      return response.json();
    })
    .then(json => res.json(json))
    .catch((error) => {
      const obj = errorToJson(error); return res.json(obj);
    }))
  ;
}

function recent(req, res) {
  return db.latest((err, json) => {
    if (err) { const obj = errorToJson(err); res.json(obj); }
    const docs = Object.prototype.hasOwnProperty.call(json, 'docs') ? json.docs : json;
    return res.json(docs);
  });
}

const router = Router();
router.get('/image-search/search/:term', searchFor);
router.get('/image-search/latest', recent);

module.exports = router;
