/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */
const assert = require('assert');
const flatten = require('./flatten');

describe('Utils.flatten', function () {
  it('should return a flattened array', function () {
    const input = [[1], [1], [1]];
    const expected = [1, 1, 1];
    assert.deepEqual(flatten(input), expected);
  });
  it('should return a copy of the input', function () {
    const input = [[1], [1], [1]];
    const expected = [1, 1, 1];
    assert.notEqual(flatten(input), expected);
  });
});
