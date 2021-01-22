const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('home', { num });
});

app.listen('3000', () => {
  console.log('Listening port 3000');
});
