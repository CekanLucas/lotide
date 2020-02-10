// ---- DEPRECIATED ----

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `${actual}\t\t ✔️ \t\t ${expected}` :
    `${actual}\t\t ✖️ \t\t ${expected}`
    );
  };
  
  
  
  /* // WIP: implement console.table()
  const assertEqual = function(actual, expected) {
    let ansObj = {};
    
    const recurse = (actual, expected) => {    
      return (actual === expected ?
        {actual:actual, 'pass?':`✔️`,expected:expected} :
        {actual:actual, 'pass?':`✖️`,expected:expected}
        );
      }
      
    }; */
    
    module.exports = assertEqual;