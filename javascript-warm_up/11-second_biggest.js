#!/usr/bin/node

const args = process.argv.slice(2).map(arg => parseInt(arg, 10));

if (args.length < 2) {
    console.log(0);
} else {
    // Use a Set to store unique integers
    const uniqueArgs = new Set(args);

    // Convert the Set back to an array and sort it in descending order
    const sortedUniqueArgs = Array.from(uniqueArgs).sort((a, b) => b - a);

    // Print the second biggest integer or 0 if it doesn't exist
    console.log(sortedUniqueArgs.length > 1 ? sortedUniqueArgs[1] : 0);
}
