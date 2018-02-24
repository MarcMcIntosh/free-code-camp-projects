const { Router } = require('express');
const authApi = require('../../../common/authApi/routes');
const { requireAuth } = require('../../../common/authApi/middleware');
const {
  createPoll,
  appendAnswer,
  getPoll,
  getResults,
  getQuestions,
  updateVotes,
  // getUserQuestions,
  getUserAccount,
} = require('./db');

const router = Router();

router.use(authApi);

// list of polls
router.get('/', getQuestions);
// view a poll
router.get('/view', (req, res) => res.status(404));

router.get('/view/:question', getPoll);
// vote
router.post('/vote', (req, res) => {
  console.log('user', req.user);
  console.log('session', req.sessionID);
  res.json(res.user || req.session);
});

/* Show results, redirect after voting ? */
router.get('/results/:poll', getResults);
/* create a poll */
router.post('/create', requireAuth, createPoll);

router.get('/account', (req, res, next) => {
  console.log(req.sessionID);
  console.log(req.user);
  next();
}, requireAuth, updateVotes, getUserAccount);
/* update when adding an answer */
// could be a patch request
router.post('/answer', requireAuth, appendAnswer);
// router.get('/user/:user' /* , see users polls */);

// router.get('/account', requireAuth);

module.exports = router;
