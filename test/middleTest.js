const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const tail = require('../tail');
const assertEqual = require('../assertEqual');
// const chai = require('../chai')
const assert = require('chai').assert;

describe("#middle", () => { 

  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(middle(arr), ["Lighthouse"]);
  });

});
