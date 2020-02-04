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

// Implement without which will return a subset of a given array, removing unwanted elements.

const without = (include,exclude) => {
  return include.filter(el => {
    return exclude.indexOf(el) === -1;
  });
};

assertArraysEqual(
  without(
    [1, 2, 3],
    [1]
  ),
  [2, 3]
);
assertArraysEqual(
  without(
    ["1", "2", "3"],
    [1, 2, "3"]
  ),
  ["1", "2"]
);

assertArraysEqual(
  without(
    [1,"a", "b", "3"],
    [ "a", "3"]
  ),
  [1, "b"]
);

// test to make sure function does not modify array 

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

