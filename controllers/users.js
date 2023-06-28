const User = require('../models/users');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports.getUserInfo = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(() => res.send({ name, about, avatar }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
