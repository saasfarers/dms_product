const express = require('express');
const superadminauth = express.Router();
const { register, login, logout } = require('../controllers/superadmin.controller');
const { protect } = require('../../../shared/middleware/superadminjwt.middleware');

superadminauth.post('/register', register);
superadminauth.post('/login', login);
superadminauth.post('/logout', protect, logout);

superadminauth.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {superadminauth};