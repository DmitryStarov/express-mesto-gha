const router = require('express').Router();
const {
  getUsers,
  getUserInfo,
  patchUser,
  patchAvatar,
  getCurrentUser,
} = require('../controllers/users');

const {
  validateGetUser,
  validatePathUser,
  validatePathAvatar,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/:userId', validateGetUser, getUserInfo);
router.get('/me', getCurrentUser);
router.patch('/me', validatePathUser, patchUser);
router.patch('/me/avatar', validatePathAvatar, patchAvatar);

module.exports = router;
