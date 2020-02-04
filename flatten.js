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

// Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.

const flatten = input => {
 let ans = [];
 const extract = (arr) => {
  console.log('extraction here')
 }
 input.forEach(el => {
   Array.isArray(el) ? extract(el) : ans.push(el);
 });
}
console.log(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])