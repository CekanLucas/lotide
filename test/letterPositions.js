const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => { 

    const sentence = 'lighthouse in the house'
    const letterPositionsObj = letterPositions(sentence)

  it("l return 0", () => {
    const input = letterPositionsObj.l;
    const expectedOutput = [0];
    assert.deepEqual(input, expectedOutput);
  });

  it("i return 1 and 11", () => {
    const input = letterPositionsObj.i;
    const expectedOutput = [1, 11];
    assert.deepEqual(input, expectedOutput);
  });

  it("e return 9, 16 and 22", () => {
    const input = letterPositionsObj.e;
    const expectedOutput = [9, 16, 22];
    assert.deepEqual(input, expectedOutput);
  });

});