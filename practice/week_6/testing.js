// You need the full path of the file you are trying to "import" when you are using modules.
const myLibrary = require("./myLibrary.js");

myLibrary.mathify(40, 10);

myLibrary.cool();

console.log("length: " + myLibrary.countString("This is a string"));

let myArray = [10, 100, 14, 15, 679];
let myNumber = 101;

let indexNumber = myLibrary.find(myArray, myNumber, true);

console.log(myArray);
console.log(indexNumber);

console.log(myLibrary.realPI);

myLibrary.cool();

console.log(myLibrary.password);