const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => { 

  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(middle(arr), ["Lighthouse"]);
  });

});
