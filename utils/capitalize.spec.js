/* eslint
  func-names: 0
  prefer-arrow-callback: 0 */
const assert = require('assert');
const capitalize = require('./capitalize');

describe('Utils.capitalize', function () {
  it('Should return capitalize sentence', function () {
    const input = 'lorem ipsum dolor sit amet';
    const expected = 'Lorem ipsum dolor sit amet';
    assert.equal(capitalize(input), expected);
  });
  it('Should return capitalize word', function () {
    const input = 'lorem';
    const expected = 'Lorem';
    assert.equal(capitalize(input), expected);
  });
  it('Should return same word', function () {
    const input = 'Lorem';
    const expected = 'Lorem';
    assert.equal(capitalize(input), expected);
  });
});
