const { Router } = require('express');
const fileSize = require('../projects/file-size/middleware');

const router = Router();

router.post('/file-size', fileSize);

module.exports = router;
