import fetch from '../../../actions/fetchWithSession';

const asyncValidate = (values) => {
  const str = 'validate-username/' + values.username;
  return fetch(str).then((res) => {
    if (!res.ok) { const err = { username: 'Unavailable' }; throw err; }
    return res.json();
  }).then((json) => { if (json.validationErrors) { throw json.validationErrors; } });
};

export default asyncValidate;
