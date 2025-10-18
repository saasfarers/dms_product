const express = require('express');
const tenentauth = express.Router();
const { login, tenentcheck, logout } = require('../controllers/tenent.controller');
const { protect } = require('../../../shared/middleware/tenentjwt.middleware');

tenentauth.post('/tenentcheck', tenentcheck);
tenentauth.post('/login', login);
tenentauth.post('/logout', protect, logout);

tenentauth.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {tenentauth};