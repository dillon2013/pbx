const express = require('express');
const path = require('path');
const compression = require('compression');
const zLib = require('zlib');
const app = express();
const APP_PORT_NUM = process.env.PORT || 9000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(compression({
  threshold: 0,
  level: zLib.Z_BEST_COMPRESSION
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(APP_PORT_NUM, () => console.log(`Server running at http://localhost:${APP_PORT_NUM}`));