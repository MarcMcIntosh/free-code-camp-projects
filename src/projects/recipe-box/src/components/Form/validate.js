export const validate = (values) => {
  const errors = {};
  if (!values.name) { errors.name = 'Required'; }
  return errors;
};

export const warn = (values) => {
  const warnings = {};
  if (!values.ingredients || !values.ingredients.length) {
    warnings.ingredients = { _error: 'making somthing for nothing?' };
  }
  if (!values.instructions || !values.instructions.length) {
    warnings.instructions = 'Instructions would be nice';
  }
  if (!values.picture) {
    warnings.picture = 'Use the default picture or select a file';
  }
  return warnings;
};
