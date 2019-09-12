// imports from packages
import express = require('express');
import * as bodyParser from 'body-parser';

//package.json
var pjson = require('./../package.json');

// imports from application
import * as env from "./env/envload";
import {requestLoggerMiddleware, logger} from "./logging/logger";
import {authMiddleware} from "./authentication/auth";

export const app: express.Application = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(authMiddleware);
app.use(requestLoggerMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/abc', function (req, res) {
  res.send('Hello World');
});

app.listen(env.port, function () {
  console.log('App listening on port '+env.port+'!');
});