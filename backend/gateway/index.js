require('dotenv-flow').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { errorHandler } = require('../shared/middleware/errorHandler');
const { scheduleLogClear } = require('../shared/utils/logCleaner');


const app = express();
const PORT = process.env.GATEWAY_PORT || 3000;
const SUPER_ADMIN_PORT = process.env.SUPER_ADMIN_PORT || 5000;
app.use(express.json());


app.use('/superadmin', createProxyMiddleware({
  target: `${process.env.BASE_URL}:${SUPER_ADMIN_PORT}`,
  changeOrigin: true,
}));


// app.use('/api/users', createProxyMiddleware({
//   target: 'http://localhost:5001', // user-service
//   changeOrigin: true,
// }));



app.get('/health', (req, res) => {
  res.send('API Gateway running');
});
app.get('/error-test', (req, res, next) => {
  const err = new Error('Forced test error');
  err.status = 400;
  next(err);
});



app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});


scheduleLogClear();
