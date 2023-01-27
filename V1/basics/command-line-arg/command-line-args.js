const fs = require('fs');

// console.log(process); // gives the thread of node.js
console.log(process.argv); // prints the command line arguments passed during run-time

// create a file using the command lien argument, take input for file name and its content
const input = process.argv;
fs.writeFileSync(input[2], input[3]);

if(input.length > 4 && input[4] === 'remove') {
    fs.unlinkSync(input[2]); // deletes a file from given path
}