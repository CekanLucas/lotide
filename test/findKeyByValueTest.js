const findKeyByValue = require('../findKey');
const assert = require('chai').assert;

describe("#findKeyByValue", () => { 
  const bestTVShowsByGenre = {
    scifi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns drama for The Wire", () => {
    const input = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedOutput = "drama";
    assert.equal(input, expectedOutput);
  });
  it("returns undefined for That '70s Show", () => {
    const input = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expectedOutput = undefined;
    assert.equal(input, expectedOutput);
  });
  it("returns comedy for Brooklyn Nine-Nine", () => {
    const input = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    const expectedOutput = "comedy";
    assert.equal(input, expectedOutput);
  });

});