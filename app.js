const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const app = express();
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '649c68295d937c40a2e7c258', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };
  next();
});
app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.listen(PORT, () => {
  console.log('start serv');
});
