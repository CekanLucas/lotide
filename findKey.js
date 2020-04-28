// help us search for a key on an object where its value matches a given value.
// should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj,value) {
  for (let key in obj) {
    if (obj[key] === value)
      return `${key}`;
  }
  return undefined;
};

module.exports = findKeyByValue;