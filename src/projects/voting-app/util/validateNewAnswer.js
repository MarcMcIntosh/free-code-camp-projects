module.exports = function validate(values) {
  const errors = {};
  if (!values.answer) { errors.answer = 'Required'; }
  return errors;
};
