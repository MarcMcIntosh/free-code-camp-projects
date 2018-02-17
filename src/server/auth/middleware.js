const jwt = require('jsonwebtoken');
const passport = require('./passport');
const db = require('./db');
const SECRET_KEY = require('./key');
const createUserDoc = require('./createUserDoc');
const hashPassword = require('./hash');
const validateReg = require('./utils/validateReg');
const validateLogin = require('./utils/validateLogin');
const EMAIL_REGEXP = require('./utils/emailRegexp');

function createToken(user, cb) {
  // return jwt.sign(user._id, user.salt, { expiresIn: '7d' }, cb);
  return jwt.sign({ id: user._id, rev: user._rev }, SECRET_KEY, (err, token) => {
    if (err) { cb(err); }
    return db.put({ _id: token, type: 'session', created_by: user._id, created_at: Date.now() }, () => cb(null, token));
  });
}

function refresh(req, res) {
  return db.get(res.user.created_by, (err, userDoc) => {
    if (err) { return res.status(400).send(err); }
    return res.json({
      message: 'session refreshed',
      data: { token: req.user._id, id: userDoc._id, username: userDoc.username },
    });
  });
}

function validateEmail(req, res) {
  if (!req.params.email) {
    return res.status(400).json({ error: 'required', message: 'Email adress required' });
  }

  if (!req.params.email.match(EMAIL_REGEXP)) {
    return res.status(409).json({ error: 'invalid', message: 'Invalid email address' });
  }

  return db.query('users/email', { key: req.params.email, limit: 1 }, (error, docs) => {
    if (error) {
      res.status(500).send(error);
    } else if (docs.rows.length === 0) {
      return res.status(200).json({ ok: true });
    }
    return res.status(409).json({ error: 'Email address in use' });
  });
}


function register(req, res) {
  const invalid = validateReg(req.body);
  if (Object.keys(invalid).length > 0) {
    return res.json({ validationErrors: invalid, message: 'Errors in registration' });
  }

  const username = req.body.username.trim();
  const email = req.body.email.trim();
  const password = req.body.password;

  const errorsInUse = {};
  return db.query('users/email', { key: email, limit: 1 }, (e, emailAdress) => {
    if (e) { return res.status(500).send(e); }
    if (emailAdress.rows.length > 0) { errorsInUse.email = 'email address in use'; }

    return db.query('users/username', { key: username, limit: 1 }, (er, userNameRes) => {
      if (er) { return res.status(500).send(er); }
      if (userNameRes.row.length > 0) { errorsInUse.username = 'username in use'; }

      if (Object.keys(errorsInUse).length > 0) {
        return res.status(400).json({ message: 'Errors registering', errors: errorsInUse });
      }
      return hashPassword(password, (err, salt, hash) => {
        if (err) { res.status(500).send(err); }

        const userDoc = createUserDoc(username, email, salt, hash);

        return db.post(userDoc, (erro, doc) => {
          if (erro) { res.status(500).send(erro); }

          return db.get(doc.id, (error, sessionUser) => {
            if (error) { res.status(500).send(error); }

            return createToken(sessionUser, (tokenError, token) => {
              if (tokenError) { res.status(500).send(tokenError); }

              return res.json({ message: 'successfully registered and logged in', data: { token, username, id: sessionUser._id } });
            });
          });
        });
      });
    });
  });
}

/* function requireAuth(req, res, next) {
  return passport.authenticate('jwt', { session: false })(req, res, next);
} */

const requireAuth = passport.authenticate('jst', { sessoin: false });

const optionalAuth = passport.authenticate(['jwt', 'anonymous'], { session: false });

function login(req, res) {
  const errors = validateLogin(req.body);
  if (Object.keys(errors).length > 0) { return res.json({ message: 'Invalid login', validationErrors: errors }); }

  return passport.authenticate('local', (err, user, info) => {
    if (err) { return res.status(400).send(err); }
    if (!user) { return res.status(401).json(info); } // athenticate failed

    return req.login(user, { session: false }, (error) => {
      if (error) { res.send(error); }

      return createToken(user, (errToken, token) => {
        if (errToken) { res.status(500).send(errToken); }
        res.json({ message: 'successfully logged-in', data: { id: user._id, username: user.username, token } });
      });
    });
  })(req, res);
}

function logout(req, res) {
  return db.get(req.user._id, (err, session) => {
    if (err) { return res.status(500).send(err); }
    const sess = session;
    sess._deleted = true;
    return db.put(sess, (error, resp) => {
      if (error) { return res.status(500).send(error); }
      return res.json({ message: 'successfully logged out of sessoin', data: resp });
    });
  });
}

function validateUsername(req, res, next) {
  if (!req.params.username) { return next({ error: 'Username required', status: 400 }); }
  return db.query('users/username', { key: req.params.username, limit: 1 }, (error, docs) => {
    if (error) {
      res.status(500).send(error);
    } else if (docs.rows.length === 0) {
      return res.status(200).json({ ok: true });
    }
    return res.status(409).json({ error: 'Username already in use' });
  });
}

module.exports = {
  register,
  login,
  logout,
  validateEmail,
  validateUsername,
  requireAuth,
  validateReg,
  refresh,
  optionalAuth,
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
