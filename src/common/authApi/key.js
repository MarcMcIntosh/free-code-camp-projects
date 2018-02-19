require('dotenv').config();

const SECRET_KEY = process.env.secret_key || 'Super secret key';

module.exports = SECRET_KEY;
