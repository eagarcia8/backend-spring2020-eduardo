const fs = require("fs");

// Convert the following object into JSON and save that JSON file inside of the homework folder of YOUR repository.


let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function () {console.log("hello");},
    totalAmount: 100900
};



// Convert to JSON and Save to File.
let converted = JSON.stringify(objectToSave);
fs.writeFileSync("savedChallenge.json", converted, "utf8");
objectToSave = null;




// Read JSON and convert to JS Object.
let data = fs.readFileSync("savedChallenge.json", "utf8");
let readObject = JSON.parse(data);
console.log(readObject.totalAmount, typeof readObject.totalAmount);
console.log(readObject);