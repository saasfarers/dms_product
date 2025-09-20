const express = require('express');
const tenentauth = express.Router();

const { login } = require('../controllers/tenentauth.controller')


tenentauth.post('/login', login);


tenentauth.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {tenentauth};