const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  // AssertEqual (Modified)
  const assertEqual = function(actual, expected) {
  
    if (actual !== expected) {
      return false;
    }
  };

  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  const eqObjects = function(object1, object2) {
    // make object with most keys object1
    if (Object.keys(object2).length > Object.keys(object1).length) {
      const objArray = [object1,object2];
      object1 = objArray[1];
      object2 = objArray[0];
    }
    
    let answer = true; //ans is true until proven otherwise.
    
    for (let value in object1) {
      assertEqual(object1[value],object2[value],value) === undefined ? '' : answer = false;
    }
    
    answer ?
      console.log(`Assertion Passed:  ${inspect(actual)}\t=✔️ =\t ${inspect(expected)}`) :
      console.log(`Assertion Failed:  ${inspect(actual)}\t=❗ =\t ${inspect(expected)}`);
  };
  eqObjects(actual,expected); //objects equal?
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cab = { y: "1", x: "2" };
const cba = { x: "1", y: "1" };
assertObjectsEqual(cab, cba); // => false

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const empty1 = {}; const empty2 = {};
assertObjectsEqual(empty1, empty2); // => true