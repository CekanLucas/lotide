const words = ["ground", "control", "to", "major", "tom"];

// const callback = () => {
// }

const map = (array, callback) => {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// map(words,callback);

// Assertion Code
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
};

assertArraysEqual(map(words,el=>el[0]),['g','c','t','m','t']);
assertArraysEqual(map(words,el=>el[1]),['r','o','o','a','o']);
assertArraysEqual(map(words,el=>el),["ground", "control", "to", "major", "tom"]);