const validate = (values) => {
  const errors = {};
  if (!values.title) { errors.title = 'Give the recipe a name'; }
  if (!values.desc) { errors.desc = 'A description is required'; }
  return errors;
};

export default validate;
