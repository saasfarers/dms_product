const express = require('express');
const superadminauth = express.Router();
const { register, login, loggeduser, logout } = require('../controllers/superadminauth.controller')
const { protect } = require('../../../shared/middleware/superadminjwt.middleware')


superadminauth.post('/register', register);
superadminauth.post('/login', login);
superadminauth.post('/loggeduser', protect, loggeduser);
superadminauth.post('/logout', logout);

superadminauth.get('/token', protect, (req, res) => {
  res.send('Token Test');
});

module.exports = {superadminauth};