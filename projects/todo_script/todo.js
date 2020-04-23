const fs = require('fs');
const filename = "notes.json";
let data = {
    "notes": []
};

/*

{
    "notes": [
        {name: "Notes 1",
         note: "Get Milk",
         create_date: 128934709234,
         completed_status: true
        },
        {name: "Note 2",
         note: "Get Pizza",
         create_date: 985430439584
        }
    ]
}

*/

if (fs.existsSync(filename)) {
    let read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}

// Detect the third argument, possible options: new, edit, delete, list
if (process.argv[2] === "list") {

    listNotes();

} else if (process.argv[2] === "new") {
    
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }

    data.notes.push(newNote);
    // Convert following line to a function.
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note successfully added!");
    listNotes();

} else if (process.argv[2] === "edit") {

    data.notes[process.argv[3] - 1].note = process.argv[4];
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Updated Note!");
    listNotes();

} else if (process.argv[2] === "delete") {
    data.notes.splice(process.argv[3] - 1, 1);
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note Deleted successfully. =.(");
    listNotes();

} else if (process.argv[2] === "done") {
    data.notes[process.argv[3] - 1].completed_status = true;
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note marked as completed! =)");
    listNotes();
} else {
    console.log(`
Welcome to my ToDo Script! The followings commands can be typed after "node todo.js":

1) new: Creates a new note, the argument after should be the note text.
2) edit: edits an existing note, the argument after edit should be the note number, and after that the note text.
3) delete: deletes an existing note, the argument after delete should be the note number.
4) done: marks an existing note as done, the argument after done should be the note number.`);
}























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