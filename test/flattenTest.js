const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => { 

  it("flattens array", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const output = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), output);
  });

});