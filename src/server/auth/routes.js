const { Router } = require('express');
const passport = require('./passport');
const bodyParser = require('body-parser');
const {
  login,
  validateEmail,
  validateUsername,
  register,
  requireAuth,
  logout,
  refresh,
} = require('./middleware');


const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(passport.initialize());

router.post('/register', register);
router.post('/login', login);
router.get('/logout', requireAuth, logout);
router.get('/refresh', requireAuth, refresh);
router.get('/validate-username/:username', validateUsername);
router.get('/validate-email/:email', validateEmail);


module.exports = router;

/* Not implimented see superlogin for detialss
GET /confirm-email/{token}
POST /logout-others
POST /logout-all
POST /forgot-password
POST /password-reset
POST /password-change
POST /change-email
GET /{provider}
GET /link/{provider}?bearer_token={token:password}
POST /unlink/{provider}
POST /{provider}/token
POST /link/{provider}/token
*/
