const { Router } = require('express');
const fileSize = require('../projects/file-size/middleware');
const imageSearch = require('../projects/image-search/middleware');

const router = Router();

router.post('/file-size', fileSize);
router.use('/image-search', imageSearch);

module.exports = router;
