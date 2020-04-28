// Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.

const flatten = input => {
  let ans = [];
  const extract = arr => {
    arr.forEach(el => {
      Array.isArray(el) ? extract(el) : ans.push(el);
    }); // recursively flatten array
  };
  extract(input);
  return ans;
};

module.exports = flatten;