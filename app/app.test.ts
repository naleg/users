import {app} from './app';  
import * as request from 'supertest';
import {expect} from 'chai';

describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

describe('env variables', function() {
it('sends "hello world" on the response body', (done) => {
  request(app)
      .get('/')
      .expect(200, 'Hello World', done);
  });

});