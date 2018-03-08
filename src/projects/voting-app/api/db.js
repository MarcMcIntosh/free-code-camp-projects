/* eslint camelcase: off */
const { resolve } = require('path');
const PouchDB = require('pouchdb-node').plugin(require('pouchdb-upsert'));
const ddocs = require('./ddocs');
const validatePoll = require('../util/validatePoll');
const validateNewAnswer = require('../util/validateNewAnswer');

const DATA_DIR = resolve(__dirname, '..', '..', '..', '..', 'data', 'voting-app');

const db = new PouchDB(DATA_DIR, { auto_compaction: true });

ddocs.forEach((d, i, a) => {
  const name = d._id.replace(/^_design\//, '');
  db.upsert(d._id, (diff) => {
    const str1 = JSON.stringify(d.views);
    const str2 = JSON.stringify(diff.views);
    return str1 !== str2 ? d : false;
  }, (err, res) => {
    if (!err && res.updated) {
      Object.keys(d.views).forEach((dd, ii, aa) => {
        const qs = name + '/' + dd;
        return db.query(qs, {
          limit: 0,
        }, () => {
          if (i === a.length - 1 && ii === aa.length - 1) { db.viewCleanup(() => void 0); }
        });
      });
    }
  });
});

const createAnswerDoc = ({
  created_by, // eslint-disable-line
  question,
  answer,
  timestamp = new Date().toJSON(),
}) => ({
  type: 'answer',
  created_by,
  created_at: timestamp,
  updated_at: timestamp,
  question,
  answer,
});

function createPoll(req, res) {
  const validationErrors = validatePoll(req.body);
  if (Object.keys(validationErrors).length > 0) { return res.json({ validationErrors }); }

  const timestamp = new Date().toJSON();

  const QUESTION_DOC = { created_by: req.user._id, created_at: timestamp, updated_at: timestamp, question: req.body.question, type: 'question' };

  return db.post(QUESTION_DOC, (err, qdoc) => {
    if (err) { return res.status(err.status || 500).send(err); }

    const answers = req.body.answers.map(answer => createAnswerDoc({
      created_by: req.user._id,
      question: qdoc.id,
      answer,
      timestamp,
    }));

    return db.bulkDocs(answers, (erro) => {
      if (erro) { return res.status(erro.status || 500).send(erro); }
      return res.json(qdoc);
    });
  });
}

function appendAnswer(req, res) {
  const errors = validateNewAnswer(req.body);
  if (Object.keys(errors) > 0) { return res.status(400).json({ errors }); }

  if (!req.user || !req.user.created_by) {
    return res.status(401).json({ message: 'Unauthorised user', data: req.user });
  }

  return db.get(req.body.question, (err, resp) => {
    if (err) { return res.status(err.status || 500).send(err); }
    const doc = createAnswerDoc({
      question: resp.id,
      answer: req.body.answer,
      timestamp: new Date().toJSON(),
      user: req.user._id,
    });
    return db.put(doc, (erro, respo) => {
      if (erro) { return res.status(erro.status || 400).send(erro); }
      return res.json(respo);
    });
  });
}

function getPoll(req, res) {
  return db.get(req.params.id, (err, resp) => {
    if (err) { return res.status(err.status || 500).send(err); }
    return db.query('questions/answers', { key: resp._id }, (erro, answers) => {
      if (erro) { return res.status(err.status || 500).send(erro); }
      const obj = Object.assign({}, resp, { answers: answers.rows });
      return res.json(obj);
    });
  });
}

function getResults(req, res) {
  return db.get(req.params.id, (err, doc) => {
    if (err) { res.status(err.status || 500).send(err); }

    return db.query('questions/answers', {
      key: doc.id,
      include_docs: true,
    }, (erro, resp) => {
      if (erro) { return res.status(erro.status || 500).send(erro); }

      const answers = resp.rows.reduce((a, b) => Object.assign({}, a, { [b.id]: b.doc }), {});

      return db.query('answers/votes', {
        keys: Object.keys(answers),
        reduce: true,
        group: true,
      }, (error, respo) => {
        if (error) { return res.status(error.status || 500).send(error); }

        const obj = respo.rows.reduce((a, b) => Object.assign({}, a, {
          [b.key]: b.value,
        }), {});

        const ans = Object.entries(answers).map(([k, v]) => Object.assign({}, v, { votes: obj[k] || 0 }));

        const result = Object.assign({}, doc, { answers: ans });

        return res.json(result);
      });
    });
  });
}

function getQuestions(req, res) {
  return db.query('questions/created_at', { descending: true }, (err, resp) => {
    if (err) { return res.status(err.status || 500).send(err); }
    return res.json(resp.rows);
  });
}

function updateVotes(req, res, next) {
  if (Object.prototype.hasOwnProperty.call(req.session, 'votesUpdated') && req.session.votesUpdated) {
    return next();
  }
  return db.query('votes/created_by', { key: req.sessionID, include_docs: true }, (err, resp) => {
    if (err) {
      req.session.votesUpdated = false;
      return next(err);
    } else if (resp.rows.length === 0) {
      req.session.votesUpdated = true;
      return next();
    }
    const timestamp = new Date().toJSON();
    const docs = resp.rows.map(d => Object.assign({}, d.doc, {
      updated_at: timestamp,
      created_by: req.user._id,
    }));
    return db.bulkDocs(docs, (erro) => {
      req.session.votesUpdated = true;
      return next(erro);
    });
  });
}

function getUserQuestions(req, res) {
  return db.query('questions/created_by', { key: req.user._id, include_docs: true }, (err, resp) => {
    if (err) { return res.json(err); }
    const user = Object.assign({}, req.user, { questions: resp.rows });
    return res.json(user);
  });
}

function getUserAccount(req, res) {
  const user = {
    id: req.user._id,
    // this may need changed for social auth
    username: req.user.username,
  };

  return db.query('questions/created_by', { key: user.id }, (e, questions) => {
    if (e) { res.status(500); }

    user.questionsAsked = questions.rows;
    return db.query('votes/created_by', { key: user.id }, (er, votes) => {
      if (er) { res.status(500); }

      user.votes = votes.rows.map(d => d.value).reduce((a, b) => {
        const { question, answer } = b;
        return Object.assign({}, a, { [question]: answer });
      }, {});

      return res.json(user);
    });
  });
}

function createVote({ question = '', answer = '', created_by = '', created_at = 0 } = {}) {
  const timestamp = created_at || new Date().toJSON();
  return {
    type: 'vote',
    created_by,
    created_at: timestamp,
    updated_at: timestamp,
    question,
    answer,
  };
}

function setVote(req, res, next) {
  const id = req.user && req.user._id ? req.user._id : req.sessionID;
  const hasQuestion = Object.prototype.hasOwnProperty.call(req.body, 'question');

  if (!id || !hasQuestion) { return res.status(400); }

  const question = req.body.question;
  const answer = req.body.answer === undefined ? '' : req.body.answer;

  return db.query('votes/created_by_on_question', {
    key: [id, question],
    include_docs: true,
  }, (err, docs) => {
    if (err) { return next(err); }

    const timestamp = new Date().toJSON();

    if (docs.rows.length === 0) {
      /* create a new doc */
      const doc = createVote({ question, answer, created_by: id, created_at: timestamp });

      return db.post(doc, erro => next(erro));
    } else if (docs.rows.length === 1) {
      /* update a single doc */
      const doc = docs.rows[0].doc;
      doc.answer = answer;
      doc.updated_at = timestamp;

      return db.put(doc, erro => next(erro));
    }
    /* Multiple docs on same question for user */
    const moreDocs = docs.rows.map(d => d.doc).sort((a, b) => a.updated_at < b.updated_at).map((d, i) => {
      const doc = d;
      doc.updated_at = timestamp;
      if (i === 0) { doc.answer = answer; } else { doc._deleted = true; }
      return doc;
    });

    return db.bulkDocs(moreDocs, erro => next(erro));
  });
}

module.exports = { createPoll, appendAnswer, getPoll, getResults, getQuestions, updateVotes, getUserQuestions, getUserAccount, setVote };
