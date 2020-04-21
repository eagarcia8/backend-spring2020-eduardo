const fs = require("fs");

// JSON: JavaScript Object Notation. before JSON, we had XML.

let myObject = {
    myName: "Eduardo",
    myJob: "sleep",
    favFood: {
        food1: "burrito",
        food2: "pizza",
        food3: "sushi"
    },
};

//myObject.myFunction();

//let converted = myObject.toString();
//console.log(converted);

// Converts a JavaScript object to a string in the format of JSON.
JSON.stringify();

let converted = JSON.stringify(myObject);

//console.log(typeof converted);

// We write our JSON string to a file.
console.log("Saving object to file!");
fs.writeFileSync("savedData.json", converted, "utf8");
console.log("Finished.");


// We read our JSON from a file.
let contents = fs.readFileSync("savedData.json", "utf8");
// console.log(typeof contents);

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);