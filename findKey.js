// Assert Equal function
// const assertEqual = function(actual, expected) {
//   console.log(actual === expected ?
//     `${actual}\t\t ✔️ \t\t ${expected}` :
//     `${actual}\t\t ✖️ \t\t ${expected}`
//   );
// };

// help us search for a key on an object where its value matches a given value.
// should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj,value) {
  for (let key in obj) {
    if (obj[key] === value)
      return `${key}`;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;