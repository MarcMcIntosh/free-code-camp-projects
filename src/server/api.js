const { Router } = require('express');
const fileSize = require('../projects/file-size/middleware');
const imageSearch = require('../projects/image-search/middleware');
const urlShortener = require('../projects/url-shortener/middleware');
const headerParser = require('../projects/header-parser/middleware');
const timestamp = require('../projects/timestamp/middleware');
const auth = require('./auth/routes');
const votingApp = require('../projects/voting-app/api');

const router = Router();

router.use(fileSize);
router.use(imageSearch);
router.use(urlShortener);
router.use(headerParser);
router.use(timestamp);

router.use('/voting-app', votingApp);

router.use('/auth', auth);

module.exports = router;
