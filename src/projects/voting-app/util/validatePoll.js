
module.exports = function validate(values) {
  const errors = {};
  if (!values.question) { errors.question = 'required'; }
  if (!values.answers) { errors.answers = 'required'; }
  if (!Array.isArray(values.answers)) {
    errors.answers = 'required';
  } else if (values.answers.length === 0) {
    errors.answers = 'required';
  }
  return errors;
};
