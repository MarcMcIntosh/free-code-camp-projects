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
  setVote,
  deleteQuestion,
} = require('./db');

const router = Router();
router.use(authApi);

function missingParam(req, res) {
  return res.status(400).send({ error: true, status: 400, message: 'parameter missing from url' });
}

// list of polls
router.get('/', getQuestions);
// view a poll
router.get('/view', missingParam);

router.get('/view/:id', getPoll);


router.post('/vote', setVote, (req, res) => res.json({ question: req.body.question, answer: req.body.answer || '' }));

/* Show results, redirect after voting ? */
router.get('/results', missingParam);
router.get('/results/:id', getResults);
/* create a poll */
router.post('/create', requireAuth, createPoll);

router.get('/account', requireAuth, updateVotes, getUserAccount);
/* update when adding an answer */
// could be a patch request

router.post('/add-answer', requireAuth, appendAnswer);
// router.get('/user/:user' /* , see users polls */);
router.delete('/:id', requireAuth, deleteQuestion, getUserAccount);
// router.get('/account', requireAuth);

module.exports = router;
