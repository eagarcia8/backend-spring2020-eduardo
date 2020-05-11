// Setting up Express server.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express is running on port: " + port);
// Finished Express server setup.

// Setting up body-parser with Express.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Finished connecting body-parser with Express.

// Setting up our save file.
const filename = "./users/default_user.json";
let data = {
    "notes": []
};

if (fs.existsSync(filename)) {
    const read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}
// Finished setting up save file.

// Class definition for notes
class Note {
    constructor(note, author) {
        this.note = note;
        this.author = author;
        this.completed_status = false;
        this.create_date = Date.now();
    }
}
// End Class definition for notes

// Todo Routes
// http://localhost:3000/coolFilesWebpage
// app.use("/coolFilesWebpage", express.static("file_library/") );
app.use("/", express.static("public_html/") );


// Route for new notes.
app.post("/newNote", (request, response) => {
    let recievedData = request.body;
    let newNoteObject = new Note(recievedData.note, recievedData.author);

    data.notes.push(newNoteObject);
    // data.notes.push(new Note(request.body.note, request.body.author));

    // Save data object to json file.
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");

    // Building object to send back.
    let dataToSend = {
        saveStatus: 0
    }

    response.send(dataToSend);
});

// Route for updating a specific note.

// Route for deleting a specific note.
app.post("/deleteNote", (req, res) => {
    let noteToDelete = req.body;

    // Combine the create date number and author to create a unique "id".
    let noteID = noteToDelete.create_date + noteToDelete.author;

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNoteID) {
            data.notes.splice(i, 1);

            // Save data object to json file.
            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                deleteStatus: 0
            }

            res.send(dataToSend);

            return; // stops the whole function, including the loop.
            //break; // stops the whole loop.
        } else {
            continue; // goes to the next loop.
        }
    }

    let dataToSend = {
        deleteStatus: 1
    }

    res.send(dataToSend);
});

app.post("/updateNote", (req, res) => {
    let noteToUpdate = req.body;

    const noteToUpdateID = req.body.create_date + req.body.author;
    console.log(noteToUpdate);

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        console.log(i + ": " + currentNote, data.notes[i]);
        const currentNoteID = currentNote.create_date + currentNote.author;

        if (noteToUpdateID === currentNoteID) {
            currentNote.note = noteToUpdate.updated_note;

            // Save data object to json file.
            const converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            const dataToSend = {
                updatedStatus: 0
            };
            
            res.send(dataToSend);

            return;
        } else {
            continue;
        }
    }

    const dataToSend = {
        updateStatus: 1
    }

    res.send(dataToSend);
});

// Route for marking a note complete.

// Route for reading all notes.
// http://localhost:3000/readNotes
app.post("/readNotes", (req, res) => {
    res.send(data);
});















app.post("/markComplete", (req, res) => {
    let noteToComplete = req.body;

    // Combine the create date number and author to create a unique "id".
    let noteID = noteToComplete.create_date + noteToComplete.author;

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNoteID) {
            data.notes[i].completed_status = true;

            // Save data object to json file.
            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                markedComplete: 0
            }

            res.send(dataToSend);

            return; // stops the whole function, including the loop.
            //break; // stops the whole loop.
        } else {
            continue; // goes to the next loop.
        }
    }

    let dataToSend = {
        markedComplete: 1
    }

    res.send(dataToSend);
});