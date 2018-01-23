const qs = require('querystring');
const path = require('path');
function formatTime(str, lan) {
  const d = new Date(str);
  if(isNaN(d.getTime())) {
    return { data: null, error: true, message: `error: ${d.toString()}, Accepted date fromats are, 'Month date, year' ie: January 1, 1890. and a the number of milliseconds from 1 January 1970 00:00:00 UTC`};
  }
  return {
    error: false,
    message: `Success: ${str} has been parse in to unix time and one of the provided localies in ${lan}`,
    data: {
      unix: d.getTime(),
      natural: d.toLocaleDateString(lan, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
  };
};

module.exports = function timestamp(req) {
  const lang = req.headers['accept-language'] || 'en-US';
  const arr = path.posix.resolve(req.url, '').split('/').filter((d) => d);
  const str = qs.unescape(arr.pop());
  return formatTime(str, lang);
}
