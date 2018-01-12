const url = require('url');
const path = require('path');
const { isWebUri } = require('valid-url');
const {save_url, load_url } = require('./db.js');

function andIdToPath(req, id) {
  /* Use if behnd a trusted proxy */
  // let protocol = req.headers['x-forwarded-proto'] || (req.connection.encrypted) ? 'https' : 'http';
  // protocol =  protocol.split(/\s*,\s*/)[0];
  const protocol = (req.connection.encrypted) ? 'https' : 'http';
  const host = req.headers.host;
  const pathname = (req.url.endsWith('/')) req.url.concat(id) : req.url.concat('/', id);
  return url.format({protocol, host, pathname});
}

function parseIdFromPath(str) {
  const arr = path.posix.resolve(str,'').split('/');
  return arr.pop();
}

function handle_post(str, cb) {
  const addr = isWebUri(str);
  if(!addr) { return cb('Invalid Address Format'); }
  return save_url(addr, (err, res) => {
    if(err) { return cb(err.message); }
    return cb(null, res.id);
  });
}

function handle_get(id, cb) {
  return load_url(id, (err, doc) => {
    if(err) { return cb(err.message); }
    return cb(null, doc.long_url);
}); }

function url_shortener(req, res) {

  if(req.method === 'POST') {
    let str = '';
    req.on('data', (d) => { str += d; });
    req.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      handle_post(str, (err, id) => {
        if(err) {
          const obj = { ok: false, error: true, data: null, message: err, url: str };
          res.end(JSON.stringify(obj));
        } else {
          const obj = { ok: true, error: false, data: { url: addIdToPath(req, id), id } };
          res.end(JSON.stringify(url));
        }
      });
    });
  } else if (req.method === 'GET') {
    const id = parseIdFromPath(req.url);
    handle_get(id, (err, addr) => {
      if(err) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ok: false, error: true, message: err})));
      } else {
        res.writeHead(302, { 'Location': addr });
        res.end();
      }
    });
  }
}

module.exports = url_shortener;
// export { handle_post, handle_get };
