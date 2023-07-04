const Card = require('../models/cards');

const {
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  SERVER_ERROR_MESSAGE,
  INVALID_ADD_CARD_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  INVALID_LIKE_CARD_MESSAGE,
  INVALID_ID_CARD_MESSAGE,
} = require('../utils/constants');

module.exports.getCards = (req, res) => {
  Card
    .find({})
    .then((cards) => res.send({ cards }))
    .catch(() => res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE }));
};
module.exports.postCard = (req, res) => {
  const { name, link } = req.body;
  Card
    .create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(CREATED_STATUS).send({ card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(BAD_REQUEST_STATUS).send({ message: INVALID_ADD_CARD_MESSAGE });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card
    .findByIdAndRemove(cardId)
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_STATUS).send({ message: CARD_NOT_FOUND_MESSAGE });
        return;
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST_STATUS).send({ message: CARD_NOT_FOUND_MESSAGE });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
const updateLike = (req, res, data) => {
  const { cardId } = req.params;
  Card
    .findByIdAndUpdate(
      cardId,
      data,
      { new: true },
    )
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_STATUS).send({ message: INVALID_ID_CARD_MESSAGE });
        return;
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST_STATUS).send({ message: INVALID_LIKE_CARD_MESSAGE });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
module.exports.putLike = (req, res) => {
  const newLike = { $addToSet: { likes: req.user._id } };
  return updateLike(req, res, newLike);
};
module.exports.deleteLike = (req, res) => {
  const removedLike = { $pull: { likes: req.user._id } };
  return updateLike(req, res, removedLike);
};
