/*
Homework: Update this script so that when reading process.argv, the Note number is actually a number and shows an error message if it's not (kill program as well). Bonus: Description why "node todo.js delete fifty" actually deletes the first Note. Bonus 2: Handle 0 or negative number.



EXAMPLE OF "TRANSLATION", NOT REQUIRED
if (process.argv(4) === "ten") {
    index = 10;
} else if (process.argv(4) === "eleven") {
    index = 11;
}

if (process.argv(2) === "delet" || process.argv(2) === "delete") {
    actionDelete();
}
*/



// Adds FS package to use, decides on json filename, and creates a default emtpy object.
const fs = require('fs');
const filename = "notes.json";
let data = {
    "notes": []
};

/*
 EXAMPLE OBJECT STRUCTURE.
{
    "notes": [
        {
         note: "Get Milk"
         completed_status: true
        },
        {
         note: "Get Pizza",
         completed_status: false
        }
    ]
}

*/

// Check if filename exists, if it does then load the JSON from it and replace the existing value of our data object variable. If it does not exist, create the filename and save a JSON version of the default data object variable.
if (fs.existsSync(filename)) {
    let read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}

// Detect the third argument, possible options: new, edit, delete, list, and done. If it does not match any of these options, then provide list and instructions for the script.
if (process.argv[2] === "list") {
    listNotes();
} else if (process.argv[2] === "new") {

    // Check if user provided text in the 4th argument.
    if (process.argv[3] === undefined) {
        console.log("Error: no text for note!");
        return;
    }
    
    // Create a new note object to be stored in the notes Array (of data).
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }

    // Add new note object to notes Array.
    data.notes.push(newNote);
    
    // Run action function, refer to action function definition for further details.
    action("Note successfully added!");

} else if (process.argv[2] === "edit") {

    // pass the 4th argument into the checkIndex function, refer to checkIndex function for further details.
    let noteIndex = checkIndex(process.argv[3]);

    // Check if user provided text in the 5th argument.
    if (process.argv[4] === undefined) {
        console.log("Error: no text for note!");
        return;
    }
    
    // Modify object in data Array with new information.
    data.notes[noteIndex].note = process.argv[4];
    // Run action function, refer to action function definition for further details.
    action("Updated Note!");

} else if (process.argv[2] === "delete") {

    // See 59.
    let noteIndex = checkIndex(process.argv[3]);

    // Delete object in data Array.
    data.notes.splice(noteIndex, 1);
    // See 70.
    action("Note Deleted successfully. =.(");

} else if (process.argv[2] === "done") {

    // Update 
    data.notes[checkIndex(process.argv[3])].completed_status = true;
    // See 80.
    action("Note marked as completed! =)");

} else {
    // The instructions to provide if 3rd argument is not a valid option, or undefined.
    console.log(`
Welcome to my ToDo Script! The followings commands can be typed after "node todo.js":

1) new: Creates a new note, the argument after should be the note text.
2) edit: edits an existing note, the argument after edit should be the note number, and after that the note text.
3) delete: deletes an existing note, the argument after delete should be the note number.
4) done: marks an existing note as done, the argument after done should be the note number.`);
}



// Takes in a number, generally provided by the user, converts to a Number datatype and subtracts 1 from it. Then compared that to the length of the data Array and return the number if its equal or smaller than the length. Otherwise return function to terminate script.
function checkIndex(noteNumber) {
    let index = parseInt(noteNumber) - 1;

    if (index > data.notes.length) {
        console.log(`Note ${index + 1} does not exist!`);
        return process.exit(1);
    } else {
        return index;
    }
}

// Write to the filename with a JSON version of the current data object. Send a message to console and finally list all Notes.
function action(message) {
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log(message);
    listNotes();
}

// Go through each item of the data Array and check each item if they are completed, if they are, add COMPLETED to the note text. Finally send to console the note text.

function listNotes() {
    for (let i = 0; i < data.notes.length; i++) {

        let currentNote = data.notes[i];
        // Ternary operator is like a 1 line if-statement. the first part is the condition, the second part is the value returned if true, the third part is the value returned if false. SYNTAX: condition ? true value : false value;
        let status = data.notes[i].completed_status ? " COMPLETED": "";

        /*
        if (data.notes[i].completed_status) {
            status = "COMPLETED";
        } else {
            status = "";
        }
        */

        console.log(`Note ${i + 1}: ${data.notes[i].note}` + status);
    }
}