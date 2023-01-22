require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
  },(err) => {
  if (err) {
  console.log("error in connection "+err);
  } else {
  console.log("mongodb is connected");}
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);