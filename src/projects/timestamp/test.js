const http = require('http');
const timestamp = require('./index');
const qs = require('querystring');
const server = http.createServer((req, res) => {
  const obj = timestamp(req);
  const str = JSON.stringify(obj);
  res.setHeader('content-type', 'application/json');
  res.end(str);
});

server.listen(8080, () => {
  // const date = new Date();
  const localDate = qs.escape('January 1, 2016');
  http.get('http://localhost:8080/' + localDate, (res) => {
    res.setEncoding('utf8');
    let str = '';
    res.on('data', (d) => { str += d; });
    res.on('end', () => console.log(str));
  }).on('error', (e) => console.error(e));

});
