// Including the Express package for our script.
const express = require("express");
const bodyParser = require("body-parser");

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

    let dataToSendBackObject = {
        "canDrink": canDrink
    }

    response.send(dataToSendBackObject);
});

// Signify Express Server is running.
console.log(`Express is now running on port ${port}`);