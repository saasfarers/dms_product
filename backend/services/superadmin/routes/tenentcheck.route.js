const express = require('express');
const tenentcheck = express.Router();
const { tenent, tenentlogin } = require('../controllers/tenentcheck.controller')

tenentcheck.get('/', tenent);
tenentcheck.post('/tenentlogin', tenentlogin);


tenentcheck.get('/token', (req, res) => {
  res.send('Token Test');
});

module.exports = {tenentcheck};