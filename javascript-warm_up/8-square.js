#!/usr/bin/node

const firstArg = process.argv[2];

const size = parseInt(firstArg, 10);

if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Loop to print each row of the square
    for (let i = 0; i < size; i++) {
        let row = '';
        // Create each row of the square
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}

