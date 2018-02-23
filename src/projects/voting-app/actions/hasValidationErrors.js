module.exports = function hasValidationErrors(json) {
  if (Object.prototype.hasOwnProperty.call(json, 'validationErrors')) {
    throw json;
  } else if (json.error) {
    const err = Object.assign({}, json, { validationErrors: { _error: json.message } });
    throw err;
  }
  return json;
};
