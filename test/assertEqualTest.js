const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Testing

// Comparing identical strings
assertEqual('abc','abc');
// Comparing non-identical strings
assertEqual('ab','abc');
// Comparing identical numbers
assertEqual(2,2);
// Comparing non-identical numbers
assertEqual(2,'2');