const { Router } = require('express');

function formatTime(str, lang) {
  const d = new Date(str);
  const unix = d.getTime();
  if (isNaN(unix)) {
    return { unix: null, natural: null, error: true, message: `Accepted date fromats are, 'Month date, year' ie: January 1, 1890. or the number of milliseconds from 1 January 1970 00:00:00 UTC. check: ${str}` };
  }
  return {
    error: false,
    message: `Success: ${str} has been parse in to unix time and localie ${lang}`,
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
