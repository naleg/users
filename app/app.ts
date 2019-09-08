// imports from packages
import express = require('express');
import * as bodyParser from 'body-parser';

//package.json
var pjson = require('./../package.json');

// imports from application
import {port} from "./env/envload";
import {logger} from "./logging/logger";

export const app: express.Application = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(logger);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, function () {
  console.log('App listening on port '+port+'!');
});