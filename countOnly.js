// Assert Equal function
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
  );
};

// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// --- Count specific Items in array ---
const countOnly = (allItems, itemsToCount) => {
  let ansObj = {};
  for(let item of allItems){
    if (itemsToCount[item] == true)
      ansObj[item] === undefined ?  
      ansObj[item] = 1 : ansObj[item]++ ;
  };
  console.log(ansObj);
  return ansObj;
}

//  --- Count all Items in array ---
/* const countOnly = allItems => {
  let ansObj = {};
  for(let item of allItems){
    ansObj[item] === undefined ?
      ansObj[item] = 1 : ansObj[item]++;
  };
  console.log(ansObj);
  return ansObj;
} */

// -- INITIAL TEST --
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

