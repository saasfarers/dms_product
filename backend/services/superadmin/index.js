require('dotenv-flow').config();
const express = require('express');
const connectDB = require('../../shared/config/db');
const { errorHandler } = require('../../shared/middleware/errorHandler');


const app = express();
const PORT = process.env.SUPER_ADMIN_PORT || 5001;
app.use(express.json());


connectDB(process.env.SUPER_ADMIN_PORT_NAME , process.env.SUPER_ADMIN_MONGO_URI);


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
