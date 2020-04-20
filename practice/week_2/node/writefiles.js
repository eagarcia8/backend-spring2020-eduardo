// Brings in the node FS package into our program.
const fs = require("fs");

// Four Methods of FS.
//Checks to see if the file exists: fs.existsSync();
//Read the file: fs.readFileSync();
//Write a new or existing file: fs.writeFileSync(); 

// Arguments: File to save to as a string, data to save, character set
fs.writeFileSync("writtenbyjs.txt", "This was created in JS.", "utf8");




// Use appendFileSync to update file instead.
fs.appendFileSync("writtenbyjs.txt", " This was added to the end!", "utf8");



// Deletes file, do not use.
// fs.unlinkSync("Document.rtf");