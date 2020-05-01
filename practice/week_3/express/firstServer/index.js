// Including the Express package for our script.
const express = require("express");
// We need body-parser so we can read data from the front-end.
const bodyParser = require("body-parser");
// We use FS so we can read/write files.
const fs = require("fs");
const _ = require("lodash");
const filename = "history.json";
let tempAgeObject = {
    "historyOfSubmissions": []
};

if (fs.existsSync(filename)) {
    let historyString = fs.readFileSync(filename, "utf8");
    tempAgeObject = JSON.parse(historyString);
} else {
    dataToSave = JSON.stringify(tempAgeObject);
    fs.writeFileSync(filename, dataToSave, "utf8");
}



// Run the Express server.
const app = express();

// Load HTTP and attach our Express server to it.
const http = require("http").Server(app);

// The port we are going to listen on.
const port = 3000;

// Tells HTTP what port to listen to.
http.listen(port);

// Express Routes
// express.static("./public_html") -> used to tell Express that it is a directory/folder.

// Uses body-parser so we can read the JSON from the front-end (webpage).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", express.static("./public_html"));

app.post("/submitAge", (request, response) => {
    console.log(request.body);
    let canDrink = (request.body.age >= 21);

    // Adds the data we just got to the temporary Object, converts the object to JSON, and saves the new JSON to file that is described in filename variable..
    tempAgeObject.historyOfSubmissions.push(request.body);
    let stringToWrite = JSON.stringify(tempAgeObject);
    fs.writeFileSync(filename, stringToWrite, "utf8");


    let dataToSendBackObject = {
        "canDrink": canDrink
    }

    response.send(dataToSendBackObject);
    // Respond that everything is okay but send no data back.
});

// Signify Express Server is running.
console.log(`Express is now running on port ${port}`);