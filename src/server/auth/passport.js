const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const AnonymousStrategy = require('passport-anonymous').Strategy;
const hashPassword = require('./hash');
const db = require('./db');
const SECRET_KEY = require('./key');

const MAX_FAILED_LOGINS = 5;
const LOCKOUT_TIME = 5 * 60 * 1000;

passport.use(new AnonymousStrategy());

passport.use(new passportJWT.Strategy({
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
  ignoreExpiration: true,
}, (payload, done) => db.get(payload._id, (err, user) => {
  if (err) { return done(err); }
  if (payload.local && user.local && payload.local.hash === user.local.hash) {
    return done(null, user);
  }
  return done(null, false);
})));

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

    const hash = hashPassword(password, d.local.salt);

    /* password verified */
    if (d.local.hash === hash) { return onLogin(d, cb); }

    /* failed one too many times */
    if (d.local.failedLoginAttempts >= MAX_FAILED_LOGINS) { return onLockOut(d, cb); }

    /* Increment failed attempts acount */
    return onFail(d, cb);
  });
}

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  // passReqToCallback: true,
}, (username, password, done) => db.query('users/username', { key: username, limit: 1 }, (err, res) => {
  if (err) { return done(err); }

  if (res.rows.length === 1) { return localLogin(res.rows[0].id, password, done); }

  // try email login
  return db.query('users/email', { key: username, limit: 1 }, (emailErr, docs) => {
    if (emailErr) { return done(emailErr); }
    if (docs.row.length === 1) { return localLogin(docs.rows[0].id, password, done); }
    return done(null, false, { error: 'Unauthorized', message: 'Incorrect username or password' });
  });
})));

module.exports = passport;
