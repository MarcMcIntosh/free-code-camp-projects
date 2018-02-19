module.exports = function hasValidationErrors(json) {
  if (Object.prototype.hasOwnProperty.call(json, 'validationErrors')) {
    throw json;
  } else if (json.error) {
    return Object.assign({}, json, { validationErrors: { _error: json.nmessage } });
  }
  return json;
};
