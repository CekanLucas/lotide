// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// Assert Array Function 
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
}

assertArraysEqual( [1, 2, 3], [1, 2, 3] ); // => should PASS
assertArraysEqual( [1, 2, 3], [3, 2, 1] ); // => should FAIL
assertArraysEqual( ["1", "2", "3"], ["1", "2", "3"] ); // => should PASS
assertArraysEqual( ["1", "2", "3"], ["1", "2", 3] ); // => should FAIL