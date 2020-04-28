const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => { 

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
  });

  it("Jason", () => {
    const input = result1["Jason"];
    const output = 1;
    assert.equal(input, output);
  });

  it("Karima", () => {
    const input = result1["Karima"];
    const output = undefined;
    assert.equal(input, output);
  });

  it("Fang", () => {
    const input = result1["Fang"];
    const output = 2;
    assert.equal(input, output);
  });

});