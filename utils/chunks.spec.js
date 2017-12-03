/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */
const assert = require('assert');
const chunks = require('./chunks');

describe('Utils.chunks', function () {
  it('Should return array stacked by 3', function () {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    assert.deepEqual(chunks(input), expected);
  });
  it('Should return empty array', function () {
    const input = [];
    const expected = [];
    assert.deepEqual(chunks(input), expected);
  });
  it('Should return single nested array', function () {
    const input = [null];
    const expected = [[null]];
    assert.deepEqual(chunks(input), expected);
  });
  it('Should return single nested array', function () {
    const input = [1];
    const expected = [[1]];
    assert.deepEqual(chunks(input), expected);
  });
  it('Should throw not an array', function () {
    assert.throws(chunks, Error, 'Not an array');
  });
});
