module.exports = function validateLogin(values) {
  const errors = {};
  if (!values.username) { errors.username = 'required'; }
  if (!values.password) { errors.password = 'required'; }
  return errors;
};
