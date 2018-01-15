const Busboy = require('busboy');

/* use with a post request */
/* app.post('file-size', fileSize, (req, res) => { res.json({ data: req.fileSize }); }) */

module.exports = function fileSize(req, res) {
  const busboy = new Busboy({ headers: req.headers });
  const data = [];

  busboy.on('file', (fieldname, file, name, encoding, mimetype) => {
    let size = 0;
    file.on('data', (d) => { size += d.length; });
    file.on('end', () => data.push({ size, name, mimetype }));
  });

  busboy.on('finish', () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const json = JSON.stringify(data);
    res.end(json);
  });

  req.pipe(busboy);
};
