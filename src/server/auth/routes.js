const { Router } = require('express');
const passport = require('./passport');
const bodyParser = require('body-parser');
const { login, validateEmail, validateUsername, register } = require('./middleware');


const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(passport.initialize());

router.post('/register', register);
router.post('/login', login);
router.get('/validate-username/:username', validateUsername);
router.get('/validate-email/:email', validateEmail);

module.exports = router;
// router.post('/refresh', passport.authenticate('jwt', { session: false })) ;
// router.post('/logout'); just delete the token and redirect;

/* Not implimented see superlogin for detialss
GET /confirm-email/{token}
POST /logout-others
POST /logout-all
POST /forgot-password
GET /session
POST /password-reset
POST /password-change
POST /change-email
GET /{provider}
GET /link/{provider}?bearer_token={token:password}
POST /unlink/{provider}
POST /{provider}/token
POST /link/{provider}/token
*/
