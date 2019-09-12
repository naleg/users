import * as express from 'express';

const unAuthenticatedRequests = ["/"]
function auth(request: express.Request, response: express.Response, next: express.NextFunction) {
  if(unAuthenticatedRequests.includes(request.path)){
  	next()
  } else{
  	if(request.headers.auth =="hello"){
  		next()
  	}else{
  		response.send("unauthenticated")
  	}
  }
  next();
}

export const authMiddleware = auth;