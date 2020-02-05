// Assert Equal function
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
  );
};

// take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = sentence => {
  let arr = sentence.split('');
  let ans = {};
  for (let letter of arr) {
    ans[letter] === undefined ?
      ans[letter] = 1 : ans[letter]++;
  }
  console.log(ans);
  return ans;
};

assertEqual(countLetters('abcaab').a,3);
assertEqual(countLetters('abcaab').b,2);
assertEqual(countLetters('abcaab').c,1);
