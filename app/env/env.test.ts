import { expect } from 'chai';
import {port} from "./envload";

describe('env variables', function() {
  it('port', function() {
    expect(port).equal('3000');
  });
});