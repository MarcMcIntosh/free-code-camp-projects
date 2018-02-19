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

const createAnswerDoc = ({ user, question, answer, timestamp = Date.now() }) => ({
  question, answer, created_at: timestamp, updated_at: timestamp, created_by: user, type: 'answer',
});

function createPoll(req, res) {
  const errors = validatePoll(req.body);
  if (Object.key(errors).length > 0) { return res.status(400).json(errors); }

  if (!req.user || !req.user.created_by) {
    return res.status(401).json({ message: 'Unauthorised user', data: req.user });
  }

  const timestamp = Date.now();

  const QUESTION_DOC = { created_by: req.user.created_by, created_at: timestamp, updated_at: timestamp, question: req.body.question, type: 'question' };

  return db.put(QUESTION_DOC, (err, qdoc) => {
    if (err) { return res.status(err.status || 500).send(err); }

    const answers = req.body.answers.map(answer => createAnswerDoc({ question: qdoc.id, answer, user: req.user.created_by, timestamp }));

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
      timestamp: Date.now(),
      user: req.user.created_by,
    });
    return db.put(doc, (erro, respo) => {
      if (erro) { return res.status(erro.status || 400).send(erro); }
      return res.json(respo);
    });
  });
}

function getPoll(req, res) {
  if (Object.prototype.hasOwnProperty.call(req.params, 'question') === false) {
    return res.status(400).json({ message: 'parameter missing form url' });
  }
  return db.get(req.params.question, (err, resp) => {
    if (err) { return res.status(err.status || 500).send(err); }

    return db.query('questions/answers', { key: resp.id }, (erro, answers) => {
      if (erro) { return res.status(err.status || 500).send(erro); }
      const obj = Object.assign({}, resp, { answers });
      return res.json(obj);
    });
  });
}

function getResults(req, res) {
  /* use this after sucessfuly voting */
  if (Object.prototype.hasOwnProperty.call(req.params, 'question') === false) {
    return res.status(400).json({ message: 'parameter missing form url' });
  }

  return db.get(req.params.question, (err, doc) => {
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
  return db.get('questions/created_at', { descending: true }, (err, resp) => {
    if (err) { return res.status(err.status || 500).send(err); }
    return res.json(resp.rows);
  });
}

function updateVotes(req, res, next) {
  return db.get('votes/created_by', { key: req.sessionId, include_docs: true }, (err, resp) => {
    if (err) { return next(err); }
    if (resp.rows === 0) { return next(); }
    const timestamp = Date.now();
    const docs = resp.rows.map(d => Object.assign({}, d.doc, {
      updated_at: timestamp,
      created_by: req.user.id,
    }));
    return db.bulkDocs(docs, erro => next(erro));
  });
}

function getUserQuestions(req, res) {
  return db.get('questions/created_by', { key: req.user._id, include_docs: true }, (err, resp) => {
    if (err) { return res.json(err); }
    const user = Object.assign({}, req.user, { questions: resp.rows });
    return res.json(user);
  });
}

module.exports = { createPoll, appendAnswer, getPoll, getResults, getQuestions, updateVotes, getUserQuestions };
