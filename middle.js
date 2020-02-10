const assertArraysEqual = (arr1,arr2) => {
  // if arrays equivalent return true
  const eqArrays = (arr1,arr2) => {
    let i = 0;
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) return false;
      i++;
    }
    return true;
  };
  
  // AssertEqual
  console.log(eqArrays(arr1,arr2) ?
    `${arr1}\t\t ✔️ \t\t ${arr2}` :
    `${arr1}\t\t ✖️ \t\t ${arr2}`
  );
};

// take in an array and return the middle-most element(s) of the given array.
const middle = arr => {
  // console.log('test', arr, Math.floor(arr.length / 2))
  if (arr.length <= 2) return [];
  return arr.length % 2 !== 0 ?
    [ arr[ Math.floor(arr.length / 2) ] ] :
    [ arr[ Math.floor(arr.length / 2 - 1)],arr[ Math.ceil(arr.length / 2) ] ];
};

module.exports = middle;