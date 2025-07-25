require('dotenv-flow').config();
const express = require('express');
const cookieParser = require('cookie-parser');


const connectDB = require('../../shared/config/db');
const { errorHandler } = require('../../shared/middleware/errorHandler');
const { superadminauth } = require('./routes/superadminauth.route');


const app = express();
const PORT = process.env.AUTHENTICATION_PORT || 5000;
app.use(express.json());
app.use(cookieParser());


connectDB(process.env.AUTHENTICATION_PORT_NAME , process.env.SUPER_ADMIN_MONGO_URI);

app.use('/superadmin', superadminauth);

app.get('/health', (req, res) => {
  res.send('Authentication service running');
});
app.get('/authentication-error-test', (req, res, next) => {
  const err = new Error('authentication-error-test');
  err.status = 400;
  next(err);
});



app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Authentication listening on port ${PORT}`);
});
