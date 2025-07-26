const express = require('express');
const superadminauth = express.Router();
const { registerUser, loginUser, getloggeduser, logoutUser } = require('../controllers/superadminauth.controller')
const { protect } = require('../../../shared/middleware/jwt.middleware')


superadminauth.post('/register', registerUser);
superadminauth.post('/login', loginUser);
superadminauth.post('/getloggeduser', protect, getloggeduser);
superadminauth.post('/logout', logoutUser);

superadminauth.get('/token', protect, (req, res) => {
  res.send('Token Test');
});

module.exports = {superadminauth};