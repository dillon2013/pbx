// server/index.js
// 'use strict';
import express from 'express';
import api from './api';
const app = express();
const PORT = process.env.PORT || 9000;

api(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
