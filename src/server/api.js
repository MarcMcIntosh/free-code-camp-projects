const { Router } = require('express');
const fileSize = require('../projects/file-size/middleware');
const imageSearch = require('../projects/image-search/middleware');
const urlShortener = require('../projects/url-shortener/middleware');
const headerParser = require('../projects/header-parser/middleware');
const timestamp = require('../projects/timestamp/middleware');
const votingApp = require('../projects/voting-app/api');
const nightlifeCoordination = require('../projects/nightlife-coordination/api');

const router = Router();

router.use(fileSize);
router.use(imageSearch);
router.use(urlShortener);
router.use(headerParser);
router.use(timestamp);

router.use('/voting-app', votingApp);
router.use('/nightlife-coordination', nightlifeCoordination);

module.exports = router;
