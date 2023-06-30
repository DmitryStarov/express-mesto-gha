const router = require('express').Router();
const { getUsers, getUserInfo, postUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserInfo);
router.post('/', postUser);

module.exports = router;
