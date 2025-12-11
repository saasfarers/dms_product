const express = require('express');
const tenentcheckauth = express.Router();
const { tenentcheck } = require('../controllers/tenentcheck.controller');

tenentcheckauth.post('/tenentcheck', tenentcheck);

tenentcheckauth.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {tenentcheckauth};