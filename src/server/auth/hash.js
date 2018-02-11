/* hash function simial to https://github.com/zemirco/couch-pwd */
const { randomBytes, pbkdf2 } = require('crypto');

const ITERATIONS = 10;
const KEY_LENGTH = 20;
const SIZE = 16;
const ENCODING = 'hex';
const DIGEST = 'SHA1';

function encode(buf) { return buf.toString(ENCODING); }

/* generate a random salt */
function createSalt(cb) {
  return randomBytes(SIZE, (err, buf) => {
    if (err) { return cb(err); }
    const salt = encode(buf);
    return cb(null, salt);
  });
}

/* Create A hash from a password and salt */
function createHash(pwd, salt, cb) {
  return pbkdf2(pwd, salt, ITERATIONS, KEY_LENGTH, DIGEST, (err, buf) => {
    if (err) { return cb(err); }
    const hash = encode(buf);
    return cb(null, hash);
  });
}

/* Usage
* with two arguments, the first should be a password and the second should be a callback function which will recieve three arguments (err, salt, hash). The salt and hash can be stored in the database to verify passwords.
*
* with three arguments, the first should be a password, the second a salt to hash the password with and third a callback function which will recieve two arguments (error, hash). Use this to compair hashes and verigy passwords.
*/

function hashPassword(pwd, salt, cb) {
  if (!pwd) { return cb(new Error('password missing')); }

  /* Generate a hash from a password and salt */
  if (arguments.length === 3) { return createHash(pwd, salt, cb); }

  /* Generate a new salt and hash from a password */
  return createSalt((err, newSalt) => {
    if (err) { return salt(err); }
    return createHash(pwd, newSalt, (error, hash) => {
      if (error) { return salt(error); }
      return salt(null, newSalt, hash);
    });
  });
}

module.exports = hashPassword;
