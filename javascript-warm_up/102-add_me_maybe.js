#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
  number++; // Increment the number
  theFunction(number); // Call the provided function with the new value
};
