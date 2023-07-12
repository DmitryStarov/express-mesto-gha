const router = require('express').Router();
const {
  getUsers,
  getUserInfo,
  postUser,
  patchUser,
  patchAvatar,
  getCurrentUser,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserInfo);
router.get('/me', getCurrentUser);
router.post('/', postUser);
router.patch('/me', patchUser);
router.patch('/me/avatar', patchAvatar);

module.exports = router;
