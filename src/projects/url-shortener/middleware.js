const { Router } = require('express');
const { saveUrl, getUrl } = require('./db');
const { isWebUri } = require('valid-url');


function parseBody(req, res, next) {
  let json = '';
  req.on('data', (d) => { json += d; });
  req.on('end', () => {
    try {
      req.body = JSON.parse(json);
    } catch (e) {
      res.json({ message: e.toString() });
    }
    next();
  });
}

function shortenUrl(req, res) {
  const { url } = req.body;
  const valid = isWebUri(url);
  if (!valid) { return res.json({ message: `Invalid url: check ${url}` }); }
  return saveUrl(url, (err, doc) => {
    if (err) { return res.json({ message: err.toString() }); }
    const shortened = `/${doc.id}`;
    return res.json({ url: req.url.replace(/\/?$/, shortened) });
  });
}

function retreiveUrl(req, res) {
  return getUrl(req.params.address, (err, doc) => {
    if (err) { return res.json(err); }
    res.writeHead(302, { Location: doc.address });
    return res.end();
  });
}

const router = Router();

router.post('/url-shortener', parseBody, shortenUrl);
router.get('/url-shortener/:address', retreiveUrl);

module.exports = router;
