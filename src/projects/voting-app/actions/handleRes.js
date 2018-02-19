module.exports = function handleRes(res) {
  if (res.ok) { return res.json(); }
  const error = new Error(res.statusText);
  error.stack = res;
  throw error;
};
