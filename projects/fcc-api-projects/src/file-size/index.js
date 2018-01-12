const http = require('http');
const Busboy = require('busboy');

module.exports = function (req, res, next) {
  if(req.method === 'POST') {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const o = { name: filename, size: 0, mimetype };
      file.on('data', (d) => { o.size += d.length; });
      file.on('end', () => {
       if(req.hasOwnProperty('fileSize')) {
         req.fileSize.push(o);
       } else {
         req.fileSize = [].concat(o);
       }
     });
   });
   busboy.on('finish', () => next());
   req.pipe(busboy);
  } else {
    return next();
  }
};
