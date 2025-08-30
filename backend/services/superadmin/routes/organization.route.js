const express = require('express');
const organization = express.Router();
const { addorganization, vieworganization, viewOneOrganization, editorganization, deleteorganization } = require('../controllers/organization.controller')
const { protect } = require('../../../shared/middleware/superadminjwt.middleware')


organization.post('/addorganization', protect, addorganization);
organization.get('/vieworganization', protect, vieworganization);
organization.get('/vieworganization/:organizationId', protect, viewOneOrganization);
organization.post('/editorganization/:organizationId', protect, editorganization);
organization.post('/deleteorganization/:organizationId', protect, deleteorganization);

organization.get('/token', protect, (req, res) => {
  res.send('Token Test');
});

module.exports = {organization};