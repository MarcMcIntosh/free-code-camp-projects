const { resolve } = require('path');
const fetch = require('isomorphic-fetch');
const { stringify } = require('querystring');

const ENV_PATH = resolve(__dirname, '..', '.env');
require('dotenv').config({ path: ENV_PATH });


function hasCoords(obj) {
  return Object.prototype.hasOwnProperty.call(obj, 'latitude') && Object.prototype.hasOwnProperty.call(obj, 'longitude');
}

function yelpEndPoint(obj) {
  const str = stringify(obj);
  return 'https://api.yelp.com/v3/events?' + str;
}

function searchByLocation(req, res) {
  if (!req.query.location || !hasCoords(req.query)) {
    return res.json({ error: 'missing location', status: 400, message: 'missing location in request address' });
  }

  const str = yelpEndPoint(req.query);
  return fetch(str, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      Accept: 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      return res.json({ status: response.status, error: response.statusText });
    }
    return response.json();
  }).then(json => res.json(json)).catch(() => res.status(500));
}

function searchById(req, res) {
  if (!req.params.id) { return res.json({ status: 404, error: 'missing event id', message: 'porly formated request' }); }
  const str = `https://api.yelp.com/v3/events/${req.params.id}`;
  return fetch(str, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      Accept: 'application/json',
    },
  }).then((resp) => {
    if (!resp.ok) { res.json({ status: resp.status, error: resp.statusText }); }
    return resp.json();
  }).then(json => res.json(json)).catch(() => res.status(500));
}

module.exports = {
  searchByLocation,
  searchById,
};
