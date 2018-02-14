const { Router } = require('express');
const bodyParser = require('body-parser');
const { requireAuth } = require('../../../server/auth/middleware');
const { createPoll, appendAnswer, getPoll, getResults } = require('./db');

const router = Router();


router.use(bodyParser);
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/view/:poll', getPoll);
/* only show results after voting */
router.get('/results/:poll', getResults);
router.post('/create', requireAuth, createPoll);
router.post('/update', requireAuth, appendAnswer);

// router.delete('/:poll', requireAuth /* , do a verification of ownership */);
// router.get('/account', requireAuth /* , get user account */);
// router.get('/user/:user' /* , see users polls */);

module.exports = router;
