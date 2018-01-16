const { format } = require('url');
const { Router } = require('express');
const fetch = require('isomorphic-fetch');
const db = require('./db');
require('dotenv').config();

const cx = process.env.CSE_ID;
const key = process.env.API_KEY;
const protocol = 'https';
const host = 'www.googleapis.com';
const slashes = true;
const pathname = '/customsearch/v1';
const formatUrl = (q = 'lolcats', start = 0) => format({ protocol, slashes, host, pathname, query: { q, start, cx, key } });

const errorToJson = (error) => {
  if (error instanceof Error) {
    const { message, stack } = error;
    return { message, stack };
  } return error;
};

function searchFor(req, res) {
  const { term, offset } = req.params;
  const addr = formatUrl(term, offset);
  const headers = { Accept: 'application/json' };
  return db.save(term, () => fetch(addr, { headers })
    .then((response) => {
      if (!response.ok) { throw response; }
      return response.json();
    })
    .then(res.json)
    .catch((error) => { const obj = errorToJson(error); return res.json(obj); }))
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
router.get('/search/:term', searchFor);
router.get('/latest', recent);

module.exports = router;
