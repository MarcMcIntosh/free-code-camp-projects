const { Router } = require('express');

function dateToUtc(val) {
  const nan = isNaN(val);
  if (nan) return Date.parse(val);
  const d = new Date(0);
  return d.valueOf() + Number(val);
}

function formatTime(str, lang) {
  const unix = dateToUtc(str);
  const d = new Date(unix);
  if (isNaN(unix)) {
    return { unix: null, natural: null, error: true, message: `Accepted date fromats are, 'Month date, year' ie: January 1, 1890. or the number of milliseconds from 1 January 1970 00:00:00 UTC. check: ${str}` };
  }
  return {
    error: false,
    message: `Date has been parsed to UTC and ${lang[0]}`,
    unix,
    natural: d.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

function timestamp(req, res) {
  const str = decodeURIComponent(req.params.time);
  const lang = req.acceptsLanguages();
  const time = formatTime(str, lang);
  res.json(time);
}

const router = Router();

router.get('/timestamp/:time', timestamp);

module.exports = router;
