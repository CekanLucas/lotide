const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("returns true", () => {
    const input = eqArrays([2, [3, 4]], [2, [3, 4]]);
    const expectedOutput = true;
    assert.equal(input, expectedOutput);
  });
  it("returns false", () => {
    const input = eqArrays([2, [3, 4]], [[2, 3], 4]);
    const expectedOutput = false;
    assert.equal(input, expectedOutput);
  });
  it("returns true", () => {
    const input = eqArrays([2, 3, 4], [2, 3, 4]);
    const expectedOutput = true;
    assert.equal(input, expectedOutput);
  });
  it("returns true", () => {
    const input = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    const expectedOutput = true;
    assert.equal(input, expectedOutput);
  });
  it("returns false", () => {
    const input = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    const expectedOutput = false;
    assert.equal(input, expectedOutput);
  });
  it("returns false", () => {
    const input = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    const expectedOutput = false;
    assert.equal(input, expectedOutput);
  });
});