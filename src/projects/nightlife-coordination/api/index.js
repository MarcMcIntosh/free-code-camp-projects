const { Router } = require('express');
const authApi = require('../../../common/authApi/routes');
const { requireAuth } = require('../../../common/authApi/middleware');
const {
  searchByLocation,
  searchById,
} = require('./yelp');
const { getUserAccount, saveEvent, deleteEvent } = require('./db');

const router = Router();
router.use(authApi);
/* save a users intrest in an event rather than the event it's self */

/* unauthenticated */
router.get('/events', searchByLocation);
router.get('/event/:id', searchById);

/* authenticated */
router.get('/account', requireAuth, getUserAccount);
router.delete('/event/:id', requireAuth, deleteEvent, getUserAccount);
router.put('/event/:id', requireAuth, saveEvent, getUserAccount);
/* save a users intrest in an event rather than the event it's self */

module.exports = router;
