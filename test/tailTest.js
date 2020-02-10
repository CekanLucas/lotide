const tail = require('../tail');
const assertEqual = require('../assertEqual');
// const chai = require('../chai')
const assert = require('chai').assert;

describe("#tail", () => { 

  it("returns 'Yo Yo' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

});