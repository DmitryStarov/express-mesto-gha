const express = require('express');
const mongoose = require('mongoose');
const { routeUsers, routeCards } = require('./routes/index');
const { postUser, login } = require('./controllers/users');
const { NOT_FOUND_STATUS } = require('./utils/constants');
const auth = require('./middlewares/auth');

const app = express();
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/singin', login);
app.use('/singup', postUser);
app.use(auth);
app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use('*', (req, res) => {
  res.status(NOT_FOUND_STATUS).send({ message: 'Страница не найдена' });
});
app.listen(PORT);
