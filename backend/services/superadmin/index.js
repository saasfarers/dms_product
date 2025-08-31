require('dotenv-flow').config();
const express = require('express');
const cookieParser = require('cookie-parser');


const connectDB = require('../../shared/config/db');
const { errorHandler } = require('../../shared/utils/errorHandler');
const { organization } = require('./routes/organization.route');
const { superadminauth } = require('./routes/superadminauth.route');


const app = express();
const PORT = process.env.SUPER_ADMIN_PORT || 5000;
app.use(express.json());
app.use(cookieParser());


connectDB(process.env.SUPER_ADMIN_PORT_NAME , process.env.SUPER_ADMIN_MONGO_URI);

app.use('/superadminauth', superadminauth);
app.use('/organization', organization);



app.get('/health', (req, res) => {
  res.send('Superadmin service running');
});
app.get('/superadmin-error-test', (req, res, next) => {
  const err = new Error('superadmin-error-test');
  err.status = 400;
  next(err);
});



app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Superadmin listening on port ${PORT}`);
});
