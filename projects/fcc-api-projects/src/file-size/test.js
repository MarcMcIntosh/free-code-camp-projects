const fs = require('fs');
const express = require('express');
const fileSize = require('./index');
const request = require('request');

const app = express();
app.use('/', fileSize, (req, res) => {
  if (req.method === 'POST') {
    res.json({ data: req.fileSize });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="file-size"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
  }
  return res.end();
});
app.listen('8080', () => {
  console.log(`Testing with package.json`);
  request.post({
    url: 'http://localhost:8080',
    formData: {
      'file-size': fs.createReadStream(`${__dirname}/package.json`),
      attachments: [
        fs.createReadStream(`${__dirname}/task.js`),
        fs.createReadStream(`${__dirname}/index.js`),
      ]
    }
  }, (err, res, body) => {
    if(err) {
      console.error(`Test Failed: ${err}`);
      return process.exit(1);
    } else {
      console.log(`Test successful: ${body}`);
      return process.exit(0);
    }
  })
});
