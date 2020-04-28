// Assert Equal function
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
  );
};

// return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  let arr = sentence.split('');
  const results = {};
  let i = 0;
  for (let letter of arr) {
    results[letter] === undefined ?
      results[letter] = [i] : results[letter].push(i);
    i++;
  }
  // console.log(results);
  return results;
};

assertEqual(letterPositions('lighthouse in the house').l[0],0);
assertEqual(letterPositions('lighthouse in the house').g[0],2);
assertEqual(letterPositions('lighthouse in the house').t[1],14);
assertEqual(letterPositions('lighthouse in the house').e[2],22);

// expected output 
/* 
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
module.exports = letterPositions;