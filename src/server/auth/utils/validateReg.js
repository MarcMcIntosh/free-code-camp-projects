const EMAIL_REGEXP = require('./emailRegexp');
const PASSWORD_REGEXP = require('./passwordRegexp');

module.exports = function validateReg(values) {
  const errors = {};
  if (!values.username) { errors.username = 'Required'; }
  if (!values.password) {
    errors.password = 'Required';
  } else if (PASSWORD_REGEXP.test(values.password)) {
    errors.password = 'No Spaces or tabs allowed';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.email.match(EMAIL_REGEXP)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
