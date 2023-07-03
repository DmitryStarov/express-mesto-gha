const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');
const { NOT_FOUND } = require('./utils/constants');

const app = express();
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '64a056b6fe73546c3bbab178', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});
app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use('*', (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Страница не найдена' });
});
app.listen(PORT);
