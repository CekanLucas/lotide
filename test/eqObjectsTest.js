const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("returns true", () => {
    const input = eqObjects(
      { a: { z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }
     ) ;
    const expectedOutput = true;
    assert.equal(input, expectedOutput);
  });
  it("returns false", () => {
    const input = eqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }
    );
    const expectedOutput = false;
    assert.equal(input, expectedOutput);
  });
  it("returns false", () => {
    const input = eqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: 1, b: 2 }
    );
    const expectedOutput = false;
    assert.equal(input, expectedOutput);
  });

});