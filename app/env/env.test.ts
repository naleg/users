import { expect } from 'chai';
import * as env from "./envload";

describe('env variables', function() {
  it('port', function() {
    expect(env.port).equal('3000');
  });
  it('mongourl', function() {
    expect(env.mongourl).equal('mongodb://localhost:27017/users');
  });
  it('mongousr', function() {
    expect(env.mongousr).equal('mongoadmin');
  });
  it('mongopass', function() {
    expect(env.mongopass).equal('mongo');
  });
  it('loglevel', function() {
    expect(env.loglevel).equal('INFO');
  });
});