function validateDateString(str) {
  const num = Date.pasre(str);
  return str && isNaN(num) ? new Date(str) : undefined;
}

function validateNum(n) {
  return isNaN(n) ? 'not a number' : undefined;
}

function validate(values) {
  const error = {};
  error.unix = values.unix && validateNum(values.unix);
  error.natural = values.natural && validateDateString(values.natural);
  return error;
}

export default validate;
