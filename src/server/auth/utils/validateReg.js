const EMAIL_REGEXP = require('./emailRegexp');
const PASSWORD_REGEXP = require('./passwordRegexp');

module.exports = function validateReg(body) {
  const { username, email, password } = body;
  const errors = {};
  if (!username) { errors.username = 'Required'; }
  if (!password) {
    errors.password = 'Required';
  } else if (PASSWORD_REGEXP.test(password)) {
    errors.password = 'No Spaces or tabs allowed';
  }
  if (!email) {
    errors.email = 'Required';
  } else if (!email.match(EMAIL_REGEXP)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
