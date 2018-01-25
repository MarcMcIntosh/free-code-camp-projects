const http = require('http');
const whoami = require('./index');
const server = http.createServer((req, res) => {
  const obj = whoami(req);
  res.end(JSON.stringify(obj));
});

server.listen(8080);
