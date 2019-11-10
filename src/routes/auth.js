const router = require('express').Router();
const Controllers = require('../controllers/auth');

router.post('/signup', Controllers.signup);
router.post('/login', Controllers.login);

module.exports = router;
