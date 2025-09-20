require('dotenv-flow').config();
const express = require('express');
const cookieParser = require('cookie-parser');


const { errorHandler } = require('../../shared/utils/errorHandler');
const { tenentauth } = require('./routes/tenentauth.route')


const app = express();
const PORT = process.env.TENENT_PORT || 5001;
app.use(express.json());
app.use(cookieParser());


app.use('/tenentauth', tenentauth);


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
  console.log(`Tenent listening on port ${PORT}`);
});