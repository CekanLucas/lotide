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

module.exports = letterPositions;