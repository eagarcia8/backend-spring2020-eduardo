// Brings in the node FS package into our program.
const fs = require("fs");

// Four Methods of FS.
//Checks to see if the file exists: fs.existsSync();
//Read the file: fs.readFileSync();
//Write a new or existing file: fs.writeFileSync(); Use appendFileSync to update file instead.



// Looking at the existsSync method and how we can use it to run code based on whether the file exists or not.
let doesFileExist = fs.existsSync("aFileThatDoesNotExist.txt");

console.log(doesFileExist);

if (doesFileExist) {
    fs.readFileSync("aFileThatDoesNotExist.txt", "utf8");
} else {
    console.log("File aFileThatDoesNotExist.txt does not exist!");
}

// Reading files and accessing the contents throught JavaScript.
let content = fs.readFileSync("example.txt", "utf8");

console.log(content);
