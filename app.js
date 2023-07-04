const express = require('express');
const mongoose = require('mongoose');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');
const { NOT_FOUND_STATUS } = require('./utils/constants');

const app = express();
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '64a056b6fe73546c3bbab178', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});
app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use('*', (req, res) => {
  res.status(NOT_FOUND_STATUS).send({ message: 'Страница не найдена' });
});
app.listen(PORT);
