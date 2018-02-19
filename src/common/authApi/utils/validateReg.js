// const EMAIL_REGEXP = require('./emailRegexp');
const validateUsername = require('./validateUsername');
const PASSWORD_REGEXP = require('./passwordRegexp');

module.exports = function validateReg(values) {
  const errors = {};

  const { username } = validateUsername(values);

  if (username) { errors.username = username; }

  if (!values.password) {
    errors.password = 'Required';
  } else if (PASSWORD_REGEXP.test(values.password)) {
    errors.password = 'No tabs or spaces allowed';
  }

  return errors;
};
