"use strict";
const express = require('express');
const multer  = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
  res.render('index',{ title: "File Size Checker"});
});

app.post('/get-file-size', upload.single('file'), (req, res)=>{
  if( !req.body ) {
    res.status(500).end();
  } else {
    res.json({ size: req.file.size });
  }
});

app.listen(8080);
