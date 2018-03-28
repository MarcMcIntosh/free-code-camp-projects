const passport = require('./passport');
const db = require('./db');
const sessions = require('./sessions');
const usernameRules = require('./utils/validateUsername');


function register(req, res, next) {
  return passport.authenticate('local-register', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.json(info); }
    return req.login(user, (erro) => {
      if (erro) { return res.json({ message: 'Error logging-in', stack: erro }); }
      return res.json({
        message: 'successfully logged-in',
        data: { username: user.username, id: user._id, session: req.sessionID },
      });
    });
  })(req, res, next);
}


function requireAuth(req, res, next) { return req.isAuthenticated() ? next() : res.status(401); }

function notAuthOnly(req, res, next) { return !req.user ? next() : res.json({ error: true, message: 'Currently logged in' }); }

function login(req, res, next) {
  return passport.authenticate('local-login', (err, user, info) => {
    if (err) { return next(err); }

    if (!user) { return res.json(info); }

    return req.login(user, (erro) => {
      if (erro) { return res.json({ message: 'Error logging-in', stack: erro }); }
      return res.json({
        message: 'successfully logged-in',
        data: { username: user.username, id: req.user._id, session: req.sessionId },
      });
    });
  })(req, res, next);
}

function logout(req, res, next) {
  req.logout();
  return req.session.destroy((err) => {
    if (err) { return next(err); }
    return res.json({ authenticated: req.isAuthenticated() });
  });
}

function remove(req, res, next) {
  return db.get(req.user._id, (err, userDoc) => {
    if (err) { return res.status(500).send(err); }
    const timestamp = new Date().toJSON();
    const user = Object.assign({}, userDoc, {
      updated_at: timestamp,
      _deleted: true,
    });
    return db.put(user, erro => next(erro));
  });
}

function validateUsername(req, res) {
  const validationErrors = usernameRules(req.params);
  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).send({ message: 'Invalid', validationErrors });
  }
  return db.query('users/username', { key: req.params.username, limit: 1 }, (error, docs) => {
    if (error) {
      res.status(500).send(error);
    } else if (docs.rows.length > 0) {
      return res.status(400).send({ message: 'Username already in use', validationErrors: { username: 'Unavailable' } });
    }
    return res.json({ message: 'Username available', username: req.params.username });
  });
}

module.exports = {
  register,
  login,
  logout,
  remove,
  validateUsername,
  requireAuth,
  notAuthOnly,
  sessions,
};

/* Not implimented see superlogin for detialss
GET /confirm-email/{token}
POST /logout-others
POST /logout-all
POST /forgot-password
GET /sessions
POST /password-reset
POST /password-change
POST /change-email
GET /{provider}
GET /link/{provider}?bearer_token={token:password}
POST /unlink/{provider}
POST /{provider}/token
POST /link/{provider}/token
*/
