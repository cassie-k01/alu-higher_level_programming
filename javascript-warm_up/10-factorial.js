#!/usr/bin/node
function factorial(n) {
    // Factorial of NaN is 1
    if (isNaN(n)) {
        return 1;
    }
	    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
const firstArg = parseInt(process.argv[2], 10);

console.log(factorial(firstArg));
