const express = require('express');
const mongoose = require('mongoose');

const app = express();
//  кинуть в utils
const URL = 'mongodb://localhost:27017/mestodb';
const { PORT = 3000 } = process.env;
mongoose.connect(URL);

app.listen(PORT, () => {
  console.log('start serv');
});
