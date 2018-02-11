const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const hashPassword = require('./hash');
const db = require('./db');
const SECRET_KEY = require('./key');

const MAX_FAILED_LOGINS = 5;
const LOCKOUT_TIME = 5 * 60 * 1000;

passport.use(LocalStrategy);
passport.use(new passportJWT.Strategy({
  jwtFromRequest: passportJWT.ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
  ignoreExpiration: true,
}, (payload, done) => db.get(payload.id, (err, user) => done(err, user))));


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  // passReqToCallback: true,
}, (username, password, done) => db.query('auth/username', { key: username, limit: 1 }, (err, res) => {
  if (err) { return done(err); }

  if (res.rows.length === 0) { return done(null, false, { error: 'Unauthorized', message: 'Incorrect username or password' }); }

  /* Get the user doc */
  return db.get(res.rows[0].id, (error, userDoc) => {
    if (error) { done(error); }

    if (userDoc.local && userDoc.local.lockedUntil && userDoc.local.lockedUntil > Date.now()) {
    /* Brute force timeout */
      return done(null, false, { error: 'Unauthorized', message: 'Your account is currently locked. Please wait a few minutes and try again.' });
    } else if (!userDoc.local || !userDoc.local.hash) {
      /* No hash to check password against  */
      return done(null, false, { error: 'Unauthorized', message: 'Incorrect username or password' });
    }

    /* verify password */
    const hash = hashPassword(password, userDoc.local.salt);

    if (userDoc.local.hash !== hash) {
      /* Check number of fails, lock if to many */
      if (userDoc.local.failedLoginAttempts >= MAX_FAILED_LOGINS) {
        const doc = Object.assign({}, userDoc);
        doc.local.failedLoginAttempts = 0;
        const timestamp = Date.now();
        doc.local.lockedUntil = timestamp + LOCKOUT_TIME;
        doc.updated_at = timestamp;

        return db.put(doc, (e) => {
          if (err) { return done(e); }

          const minutes = Math.round(LOCKOUT_TIME / 60);

          return done(null, false, { error: 'Unauthorized', message: `Maximum failed login attempts exceeded. Your account has been locked for ${minutes} minutes` });
        });
      }

      /* Update failed attempts acount */
      const userFail = Object.assign({}, userDoc);
      const failedLoginAttempts = (userFail.local.failedLoginAttempts || 0) + 1;
      userFail.local.failedLoginAttempts = failedLoginAttempts;
      userFail.updated_at = Date.now();

      return db.put(userFail, (e) => {
        if (e) { return done(e); }

        return done(null, false, { error: 'Unauthorized', message: 'Invalid username or password' });
      });
    } else if (userDoc.local.failedLoginAttempts !== 0) {
      // reset login attempts if need be

      const userDocUpdate = Object.assign({}, userDoc);
      userDocUpdate.local.failedLoginAttempts = 0;
      userDocUpdate.updated_at = Date.now();

      return db.put(userDocUpdate, (e, resp) => {
        if (e) { done(e); }
        return db.get(resp.id, done);
      });
    }
    // Verified passwaord and no failed login attempts
    return done(null, userDoc);
  });
})));


module.exports = passport;
