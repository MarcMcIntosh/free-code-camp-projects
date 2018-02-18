const { Router } = require('express');
const passport = require('./passport');
const bodyParser = require('body-parser');

const {
  login,
  // validateEmail,
  validateUsername,
  register,
  requireAuth,
  logout,
  notAuthOnly,
  sessions,
} = require('./middleware');


const router = Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(sessions);

router.use(passport.initialize());
router.use(passport.session());

router.post('/register', notAuthOnly, register);
router.post('/login', notAuthOnly, login);
router.get('/logout', requireAuth, logout);
router.get('/validate-username/:username', validateUsername);
router.get('/test', (req, res) => {
  console.log(req);
  res.end();
});
// router.get('/validate-email/:email', validateEmail);
// router.get('/refresh', requireAuth, refresh);


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
