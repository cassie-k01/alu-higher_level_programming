#!/usr/bin/node
const firstArg = process.argv[2];
const x = parseInt(firstArg, 10);
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
