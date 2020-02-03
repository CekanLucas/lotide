const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
  );
};

/* The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.
 */

const tail = arr => {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!