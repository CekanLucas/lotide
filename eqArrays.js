// AssertEqual
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
  );
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = (arr1,arr2) => {
 i = 0;
  while(i<arr1.length){
  if(arr1[i] !== arr2[i] ) return false;
  i++;
 }
 return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL