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
}

// Just a Comment

if (fs.existsSync(filename)) {
    const read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}
// Finished setting up save file.

// Todo Routes
app.use("/", express.static("public_html/") );

app.post("/newNote", (request, response) => {
    let recievedData = request.body;

    let newNoteObject = {
        note: recievedData.note,
        author: recievedData.author,
        completed_status: false,
        create_date: Date.now()
    };

    data.notes.push(newNoteObject);



});
