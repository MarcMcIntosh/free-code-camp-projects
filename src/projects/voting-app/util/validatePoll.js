
module.exports = function validate(values) {
  const errors = {};
  if (!values.question) { errors.question = 'Required'; }
  if (!values.answers) { errors.answers = 'Required'; }
  if (!Array.isArray(values.answers) || !values.answers.length) {
    errors.answers = { _error: 'Required' };
  } else {
    const arr = [];
    values.answers.forEach((answer, i) => {
      if (!answer) { arr[i] = 'Required'; }
    });
    if (arr.length) { errors.answers = arr; }
  }
  return errors;
};
