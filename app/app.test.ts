import {app} from './app';
import * as request from 'supertest';
import {expect} from 'chai';

describe('Application', function() {
it('sends "hello world" on the response body', (done) => {
  request(app)
      .get('/')
      .expect(200, 'Hello World', done);
  });
it('sends "hello world" on authenticated endpoint with header', (done) => {
  request(app)
      .get('/abc')
      .set('auth', 'hello')
      .expect(200, 'Hello World', done);
  });
it('sends "unauthenticated" on authenticated endpoint without header', (done) => {
  request(app)
      .get('/abc')
      .expect(200, 'unauthenticated', done);
  });
});