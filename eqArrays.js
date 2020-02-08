// AssertEqual
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t ✔️ \t ${expected}` :
    `${actual}\t ✖️ \t ${expected}`
  );
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = (array1,array2) => {
  let ans = true; // ans is true until proven false
  array1.forEach(
    (el, i) => {
      // console.log(`${i}: [${el}]\t\t[${array2[i]}]`, );
      if (Array.isArray(el) === true && Array.isArray(array2[i])) {
        // console.log('we are handling arrays')
        if (el.length !== array2[i].length) {
          ans = false;
        } else {
          eqArrays(el,array2[i]);
        }
      } // array handling
      else if (el !== array2[i]) {
        // console.log('we NOT handling arrays')
        ans = false;
      } else {
        return;
      }
    }
  );
  return ans;
};
assertEqual(
  eqArrays([2, [3, 4]], [2, [3, 4]]), true);

assertEqual(
  eqArrays([2, [3, 4]], [[2, 3], 4]), false);

assertEqual(
  eqArrays([2, 3, 4], [2, 3, 4]), true);

assertEqual(
  eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(
  eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

assertEqual(
  eqArrays([[2, 3], [4]], [[2, 3], 4]), false);