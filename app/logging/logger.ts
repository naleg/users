import * as express from 'express';
import {loglevel} from '../env/envload'
 
function requestLogger(request: express.Request, response: express.Response, next: express.NextFunction) {
  console.log(loglevel)
  switch (loglevel) {
    case "INFO":
      console.log(`${request.method} ${request.path}`);
      break;

    default:
      console.log(`${request}`);
      break;
  }
  next();
}

function appLogger(level, message) {
  console.log(`${level} ${message}`);
}

export const requestLoggerMiddleware = requestLogger;
export const logger = appLogger;
