const router = require('express').Router();
const userControllers = require('../controllers/users');

router.post('/follow', userControllers.followUser);
router.delete('/unfollow', userControllers.unfollowUser);
router.get('/discover', userControllers.discoverUsers);
router.get('/followers', userControllers.getFollowers);
router.get('/followees', userControllers.getFollowees);

module.exports = router;
