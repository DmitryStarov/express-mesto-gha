const router = require('express').Router();
const {
  getUsers,
  getUserInfo,
  postUser,
  patchUser,
  patchAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserInfo);
router.post('/', postUser);
router.patch('/me', patchUser);
router.patch('/me/avatar', patchAvatar);

module.exports = router;
