const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => { 

    const sentence = 'lighthouse in the house'
    const letterPositionsObj = letterPositions(sentence)

  it("l", () => {
    const input = letterPositionsObj.l;
    const expectedOutput = [0];
    assert.deepEqual(input, expectedOutput);
  });

  it("i", () => {
    const input = letterPositionsObj.i;
    const expectedOutput = [1, 11];
    assert.deepEqual(input, expectedOutput);
  });

  it("e", () => {
    const input = letterPositionsObj.e;
    const expectedOutput = [9, 16, 22];
    assert.deepEqual(input, expectedOutput);
  });

});