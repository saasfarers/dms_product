const express = require('express');
const tenentauth = express.Router();
const { login, loggeduser, loggeduseredit, logout } = require('../controllers/tenent.controller');
const { protect } = require('../../../shared/middleware/tenentjwt.middleware');


tenentauth.post('/login', login);
tenentauth.get('/loggeduser', protect, loggeduser);
tenentauth.post('/loggeduseredit', protect, loggeduseredit);
tenentauth.get('/logout', protect, logout);

tenentauth.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {tenentauth};