/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */
const assert = require('assert');
const has = require('./has');

describe('Utils.has', function () {
  it('should return true', function () {
    const input = { roues: 4, volant: 1 };
    assert.equal(has(input, 'roues'), true);
  });
  it('should return false', function () {
    const input = { roues: 4, volant: 1 };
    assert.equal(has(input, 'guidon'), false);
  });
});
