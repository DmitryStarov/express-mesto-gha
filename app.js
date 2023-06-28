const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const routeUsers = require('./routes/users');

const app = express();
//  кинуть в utils
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);
app.use(bodyParser.json());
app.use('/users', routeUsers);
app.listen(PORT, () => {
  console.log('start serv');
});
