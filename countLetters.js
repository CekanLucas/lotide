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