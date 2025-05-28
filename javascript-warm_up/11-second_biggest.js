#!/usr/bin/node
const args = process.argv.slice(2).map(arg => parseInt(arg, 10)).filter(num => !isNaN(num));

if (args.length < 2) {
  console.log(0);
} else {
  const uniqueArgs = new Set(args);
  const sortedUniqueArgs = Array.from(uniqueArgs).sort((a, b) => b - a);

  console.log(sortedUniqueArgs.length > 1 ? sortedUniqueArgs[1] : 0);
}
