// AssertEqual (Modified)
const assertEqual = function(actual, expected,value) {

  if (actual === expected) {
    console.log(`${value}:\t${actual}\t\t ✔️ \t\t ${expected}`);
  } else {
    console.log(`${value}:\t${actual}\t\t ✖️ \t\t ${expected}`);
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
    // values could be objects 
    if ( // both values are objects & one is not undefined
      typeof object1[value] === 'object' &&
      typeof object2[value] === 'object'
    )
    {
      return eqObjects(object1[value], object2[value]);
    }

    assertEqual(object1[value],object2[value],value) === undefined ? '' : answer = false;
  }

  return answer ? true : false;
};

module.exports = eqObjects;