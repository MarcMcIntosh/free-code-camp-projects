const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const hashPassword = require('./hash');
const db = require('./db');
const validateReg = require('./utils/validateReg');
const validateLogin = require('./utils/validateLogin');
const createUserDoc = require('./createUserDoc');

const MAX_FAILED_LOGINS = 5;
const LOCKOUT_TIME = 5 * 60 * 1000;

// passport.use(new AnonymousStrategy());

passport.serializeUser((user, cb) => cb(null, user._id));

passport.deserializeUser((id, cb) => db.get(id, cb));

function onLogin(userDoc, cb) {
  if (!userDoc.local.failedLoginAttempts) { return cb(null, userDoc); }
  /* reset failedLoginsCounter */
  const doc = userDoc;
  doc.local.failedLoginAttempts = 0;
  doc.updated_at = Date.now();
  return db.put(doc, (err, res) => {
    if (err) { return cb(null, userDoc, { message: err }); }
    return db.get(res.id, cb);
  });
}

function onLockOut(userDoc, cb) {
  const doc = userDoc;
  doc.local.failedLoginAttempts = 0;
  const timestamp = Date.now();
  doc.local.lockedUntil = timestamp + LOCKOUT_TIME;
  doc.updated_at = timestamp;
  const minutes = Math.round(LOCKOUT_TIME / 60);

  return db.put(doc, err => cb(err, false, { error: 'Unauthorized', message: `Maximum failed login attempts exceeded. Your account has been locked for ${minutes} minutes` }));
}

function onFail(userDoc, cb) {
  const doc = userDoc;
  doc.local.failedLoginAttempts += 1;
  doc.updated_at = Date.now();
  return db.put(doc, err => cb(err, false, { error: 'Unauthorized', message: 'Invalid username or password' }));
}

function localLogin(id, password, cb) {
  return db.get(id, (e, d) => {
    if (e) { cb(e); }
    if (d.local && d.local.lockedUntil && d.local.lockedUntil > Date.now()) {
    /* Brute force timeout */
      return cb(null, false, { error: 'Unauthorized', message: 'Your account is currently locked. Please wait a few minutes and try again.' });
    } else if (!d.local || !d.local.hash) {
      /* No hash to check password against  */
      return cb(null, false, { error: 'Unauthorized', message: 'This account use a social login' });
    }

    /* create a hash from user provided password and the stored salt */
    return hashPassword(password, d.local.salt, (er, hash) => {
      /* password verified */
      if (d.local.hash === hash) { return onLogin(d, cb); }

      /* failed one too many times */
      if (d.local.failedLoginAttempts >= MAX_FAILED_LOGINS) { return onLockOut(d, cb); }

      /* Increment failed attempts acount */

      return onFail(d, cb);
    });
  });
}

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  // session: false,
  // passReqToCallback: true,
}, (username, password, done) => {
  const validationErrors = validateLogin({ username, password });

  if (Object.keys(validationErrors).length > 0) {
    return done(null, false, { message: 'Invalid', validationErrors });
  }

  return db.query('users/username', { key: username, limit: 1 }, (err, res) => {
    if (err) { return done(err); }
    if (res.rows.length > 0) { return localLogin(res.rows[0].id, password, done); }

    return done(null, false, { error: 'Unauthorized', message: 'Incorrect username or password' });
  });
}));

passport.use('local-register', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, done) => {
  const validationErrors = validateReg({ username, password });

  if (Object.keys(validationErrors).length > 0) {
    return done(null, false, { message: 'Invalid', validationErrors });
  }

  return db.query('users/username', { key: username, limit: 1 }, (er, res) => {
    if (er) { return done(er); }

    if (res.rows.length > 0) { return done(null, false, { message: 'Username in-use', validationErrors: { username: 'Unavailable' } }); }

    return hashPassword(password, (err, salt, hash) => {
      if (err) { return done(err); }

      const userDoc = createUserDoc(username, salt, hash);

      return db.post(userDoc, (erro, resp) => {
        if (erro) { return done(erro); }

        /* same doc returned after login or register */
        return db.get(resp.id, done);
      });
    });
  });
}));

module.exports = passport;
