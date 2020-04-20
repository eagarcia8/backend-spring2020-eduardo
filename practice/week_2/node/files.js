const fs = require("fs");
const file = "practice.txt";
const text = " This is added every time files.js runs!";

// Check if the file exists...
if (fs.existsSync(file)) {
    console.log(`File ${file} was found!`);

    // ... and read it. Store the contents into variable data.
    let data = fs.readFileSync(file, "utf8");

    console.log(`The contents of the file are: '${data}'`);

    // Showing what we are adding and to what file through the terminal.
    console.log(`Added '${text}' to the file ${file}.`);

    // Adding what text is holding, to the end of the file.
    fs.appendFileSync(file, text, "utf8");
} else {
    console.log(`File '${file}' was not found!`);

    console.log(`Creating file with the name '${file}'`);

    // ... otherwise create the "missing" file.
    fs.writeFileSync(file, "", "utf8");

    console.log("Finished creating file");

}