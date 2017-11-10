/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */
const assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      const input = -1;
      const expected = [1, 2, 3].indexOf(4);
      assert.equal(input, expected);
    });
  });
});
