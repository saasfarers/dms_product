require('dotenv-flow').config();
const express = require('express');
const cookieParser = require('cookie-parser');


const connectDB = require('../../shared/config/db');
const { errorHandler } = require('../../shared/utils/errorHandler');
const { superadminauth } = require('./routes/superadmin.route');
const { tenentauth } = require('./routes/tenent.route');
const { tenentcheckauth } = require('./routes/tenentcheck.route');


const app = express();
const PORT = process.env.AUTHENTICATE_PORT || 5000;
app.use(express.json());
app.use(cookieParser());


connectDB(process.env.AUTHENTICATE_PORT_NAME , process.env.SUPER_ADMIN_MONGO_URI);

app.use('/superadminauthenticate', superadminauth);
app.use('/tenentauthenticate', tenentauth);
app.use('/tenentcheck', tenentcheckauth);


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
