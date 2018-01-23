const { Router } = require('express');

function formatTime(str, lang) {
  const d = new Date(str);
  const unix = d.getTime();
  if (isNaN(unix)) {
    return { data: { unix: null, natural: null }, error: true, message: `Accepted date fromats are, 'Month date, year' ie: January 1, 1890. or the number of milliseconds from 1 January 1970 00:00:00 UTC. check: ${str}` };
  }
  return { error: false, message: `Success: ${str} has been parse in to unix time and one of the provided localies in ${lang}`, data: { unix, natural: d.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' }) } };
}

function timestamp(req, res) {
  const time = formatTime(req.params.time, req.acceptsLanguages());
  res.json(time);
}

const router = Router();

router.get('/timestamp/:time', timestamp);

export default timestamp;
