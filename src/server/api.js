const { Router } = require('express');
const fileSize = require('../projects/file-size/middleware');
const imageSearch = require('../projects/image-search/middleware');
const urlShortener = require('../projects/url-shortener/middleware');
const headerParser = require('../projects/header-parser/middleware');
const timestamp = require('../projects/timestamp/middleware');

const router = Router();

router.use(fileSize);
router.use(imageSearch);
router.use(urlShortener);
router.use(headerParser);
router.use(timestamp);

module.exports = router;
