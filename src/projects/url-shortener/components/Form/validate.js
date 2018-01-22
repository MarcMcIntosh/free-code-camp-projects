import { isUri } from 'valid-url';

const validateUrl = (value) => {
  const re = /^(ht|f)tps?:\/\//;
  const valid = isUri(value);
  if (!value || valid) { return undefined; }
  if (!re.test(value)) { return `Protocol required, change to http://${value}`; }
  return 'Invalid url';
};

export default validateUrl;
