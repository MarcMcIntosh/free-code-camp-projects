const { Router } = require('express');

function parseHeaders(req, res) {
  const ip = req.ip || 'not found';
  const language = req.acceptsLanguages() || 'not found';
  const software = req.get('user-agent') || 'not found';
  return res.json({ ip, language, software });
}

const router = Router();

router.get('/header-parser', parseHeaders);

module.exports = router;
