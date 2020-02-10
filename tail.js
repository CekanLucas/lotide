/* The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.
 */

const tail = arr => {
  return arr.slice(1);
};

module.exports = tail;