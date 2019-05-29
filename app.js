
const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('Hello Wolrd!');
})

app.get('/demo', (req, res) => {
  res.send('Hello Demo!');
})

app.get('/abc', (req, res) => {
  res.send('Hello ABC');
})