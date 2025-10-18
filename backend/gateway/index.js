require('dotenv-flow').config();
const express = require('express');
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { errorHandler } = require('../shared/utils/errorHandler');
const { scheduleLogClear } = require('../shared/utils/logCleaner');


const app = express();
const PORT = process.env.GATEWAY_PORT || 4000;
const AUTHENTICATE_PORT = process.env.AUTHENTICATE_PORT || 5000;
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use('/authenticate', createProxyMiddleware({
  target: `${process.env.BASE_URL}:${AUTHENTICATE_PORT}`,
  changeOrigin: true,
}));




app.get('/health', (req, res) => {
  res.send('API Gateway running');
});
app.get('/gateway-error-test', (req, res, next) => {
  const err = new Error('gateway-error-test');
  err.status = 400;
  next(err);
});



app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});


scheduleLogClear();
