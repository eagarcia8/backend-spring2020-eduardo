// Topics used in this file are: FS Package, JSON, JavaScript Objects.
const fs = require("fs");

// Placeholder for our object.
let persistentObject = null;

// The file we are working with so we don't accidentally use another string.
let filename = "persistentObject.json";

// Check if file exists or not.
let doesFileExist = fs.existsSync(filename);

// If exists...
if (doesFileExist) {

    // ... read it ...
    let existingJSON = fs.readFileSync(filename);
    console.log(`Read file: "${existingJSON}"`);

    // ... and convert it to an Object ...
    persistentObject = JSON.parse(existingJSON);
    console.log(`Object converted from JSON:`);

} else {

    // .. create a new file if it doesn't exist ...
    console.log("File does not exist, creating new file");
    fs.writeFileSync(filename, `{"numbersList": []}`, "utf8");

    // ... load new object for our persistentObject
    persistentObject = {numbersList: []};

}

persistentObject.numbersList.push( process.argv[2] );

let data = JSON.stringify(persistentObject);

fs.writeFileSync(filename, data, "utf8");

console.log(persistentObject);