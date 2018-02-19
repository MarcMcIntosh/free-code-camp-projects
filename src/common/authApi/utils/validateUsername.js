const USERNAME_REGEXP = require('github-username-regex');

const CHAR_REGEXP = /[^a-z/d-]/i;
const CONSECUTIVE_HYPHENS_REGEXP = /--/i;
const BEGIN_OR_ENDING_HYPHENS_REGEXP = /^-|-$/i;

module.exports = function validateUsername(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (CHAR_REGEXP.test(values.username)) {
    errors.username = 'Username may only contain alphanumeric characters or hyphens';
  } else if (CONSECUTIVE_HYPHENS_REGEXP.test(values.username)) {
    errors.username = 'Username cannot have multiple consecutive hyphens';
  } else if (BEGIN_OR_ENDING_HYPHENS_REGEXP.test(values.username)) {
    errors.username = 'Username cannot begin or end with a hyphen';
  } else if (values.username.length > 39) {
    errors.username = 'Maximum 39 characters';
  } else if (!USERNAME_REGEXP.test(values.username)) {
    errors.username = 'Invalid username';
  }
  return errors;
};
