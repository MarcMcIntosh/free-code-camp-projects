module.exports = function validate(values) {
  const errors = {};
  if (Object.prototype.hasOwnProperty.call(values, 'question') === false) {
    errors.question = 'required';
  }
  if (Object.prototype.hasOwnProperty.call(values, 'answer') === false) {
    errors.answer = 'require';
  }
  return errors;
};
