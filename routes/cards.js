const router = require('express').Router();
const {
  getCards,
  postCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards');
const { validatePostCard, validateUpdateLike } = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', validatePostCard, postCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', validateUpdateLike, putLike);
router.delete('/:cardId/likes', validateUpdateLike, deleteLike);
module.exports = router;
