
module.exports = function validate(values) {
  const errors = {};
  if (!values.question) { errors.question = 'required'; }
  if (!values.answers) { errors.answers = 'required'; }
  if (!Array.isArray(values.answers) || !values.answers.length) {
    errors.answers = { _error: 'At least one answer must be entered' };
  } else {
    const arr = [];
    values.answers.forEach((answer, i) => {
      if (!String(answer)) { arr[i] = 'required'; }
    });
    if (arr.length) { errors.answers = arr; }
  }
  return errors;
};
