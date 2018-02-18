const { Router } = require('express');
const bodyParser = require('body-parser');

const {
  requireAuth,
  // optionalAuth,
  sessions,
} = require('../../../server/auth/middleware');
const { createPoll, appendAnswer, getPoll, getResults, getQuestions } = require('./db');

const router = Router();


router.use(bodyParser);
router.use(bodyParser.urlencoded({ extended: true }));

// list of polls
router.get('/', getQuestions);
// view a poll
router.get('/view/:question', getPoll);
// vote
router.post('/vote', sessions, (req, res) => {
  console.log('user', req.user);
  console.log('session', req.sessionId);
  res.json(res.user || req.session);
});

/* Show results, redirect after voting ? */
router.get('/results/:poll', getResults);
/* create a poll */
router.post('/create', requireAuth, createPoll);

/* update when adding an answer */
router.post('/update', requireAuth, appendAnswer);
// router.get('/user/:user' /* , see users polls */);
// router.get('/account', requireAuth);

module.exports = router;
