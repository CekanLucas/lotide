// AssertEqual (Modified)
const assertEqual = function(actual, expected,value) {

  if(actual === expected) {
    console.log(`${value}:\t${actual}\t\t ✔️ \t\t ${expected}`);
  }
  else{
    console.log(`${value}:\t${actual}\t\t ✖️ \t\t ${expected}`);
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let answer = true; //ans is true until proven otherwise. 
  console.log('\n\t--Objects being Compared--\n',object1,object2)
  
  for(let value in object1){
    assertEqual(object1[value],object2[value],value)===undefined?'':answer=false;
  }

  answer ? 
  console.log(`Are Objects Equal? (Result):  📦  =✔️= 📦`) :
  console.log(`Are Objects Equal? (Result):  📦  =❗= 📦`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const cab = { y: "1", x: "2" };
const cba = { x: "1", y: "1" };
eqObjects(cab, cba); // => false

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const empty1 = {}; const empty2 = {};
eqObjects(empty1, empty2); // => true