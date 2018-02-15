const { Router } = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');
require('dotenv').config();

const { requireAuth, optionalAuth } = require('../../../server/auth/middleware');
const { createPoll, appendAnswer, getPoll, getResults, getQuestions } = require('./db');

const router = Router();

const COOKIE_KEY = process.env.VOTING_APP_SESSION_KEY || 'super secure passphrase';

router.use(bodyParser);
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieSession({ name: 'voting-app', keys: [COOKIE_KEY] }));

function trackerCookie(req, res, next) {
  if (req.user || req.session.id) { return next(); }
  req.session.id = uuidv1();
  return next();
}

// list of polls
router.get('/', getQuestions);
// view a poll
router.get('/view/:question', getPoll);
// vote
router.post('/vote', optionalAuth, trackerCookie, (req, res) => {
  console.log('user', req.user);
  console.log('session', req.session);
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
