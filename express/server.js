'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile('./build/index.html');
});
router.use(require("./routes/user"));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile('./build/index.html'));

module.exports = app;
module.exports.handler = serverless(app);
