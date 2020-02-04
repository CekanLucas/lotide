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

//  ---Expected Outputs---
// For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]
