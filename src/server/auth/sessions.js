const session = require('express-session');
const SECRET_KEY = require('./key');

module.exports = session({ secret: SECRET_KEY, resave: false, saveUninitialized: false });
