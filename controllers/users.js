const mongoose = require('mongoose');
const User = require('../models/users');
const {
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  SERVER_ERROR_MESSAGE,
  INVALID_ADD_USER_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  INVALID_UPDATE_USER_MESSAGE,
  INVALID_UPDATE_AVATAR_MESSAGE,
} = require('../utils/constants');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch(() => res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE }));
};
module.exports.getUserInfo = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND_STATUS).send({ message: USER_NOT_FOUND_MESSAGE });
        return;
      }
      res.send({ user });
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        res.status(BAD_REQUEST_STATUS).send({ message: USER_NOT_FOUND_MESSAGE });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      const { _id } = user;
      res.send({
        name,
        about,
        avatar,
        _id,
      });
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(BAD_REQUEST_STATUS).send({ message: INVALID_ADD_USER_MESSAGE });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
const updateUserData = (req, res, data, badRequestMessage) => {
  User
    .findByIdAndUpdate(req.user._id, data, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        res.status(BAD_REQUEST_STATUS).send({ message: USER_NOT_FOUND_MESSAGE });
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(BAD_REQUEST_STATUS).send({ message: badRequestMessage });
        return;
      }
      res.status(INTERNAL_SERVER_STATUS).send({ message: SERVER_ERROR_MESSAGE });
    });
};
module.exports.patchUser = (req, res) => {
  const { name, about } = req.body;
  return updateUserData(req, res, { name, about }, INVALID_UPDATE_USER_MESSAGE);
};
module.exports.patchAvatar = (req, res) => {
  const { avatar } = req.body;
  return updateUserData(req, res, { avatar }, INVALID_UPDATE_AVATAR_MESSAGE);
};
